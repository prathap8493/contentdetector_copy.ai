import React, { useEffect, useRef, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { Button, LinearProgress } from "@mui/material";
import ProgressBar from "../common/ProgressBar";
import loader from "../../assests/json/loading.json";
import { aiDetectionService } from "@/services/home";
function Playground({ styles }) {
  const [content, setContent] = useState("");
  const [percenage, setPercenage] = useState(0);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  //   handling copy
  const handleCopy = () => {
    if (content.length > 0) {
      navigator.clipboard.writeText(content);
      toast.success("Copied to clipboard", { duration: 1500 });
    } else {
      toast.error("No content to copy", { duration: 1300 });
    }
  };

  //   handle clear
  const handleClear = () => {
    setContent("");
    editorRef.current.innerText = "";
    editorRef.current.focus();
  };

  // word count
  const getWordCount = () => {
    return content.split(" ").length - 1;
  };

  // analising the content
  const analiseContent = async () => {
    setLoading(true);
    try {
      const data = await aiDetectionService({ content });
      const fakePercentage = data?.fake_probability * 100 || 0;
      setPercenage(fakePercentage.toFixed(1));
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      toast.error("Something went wrong! Try again", { duration: 1300 });
    }
  };
  return (
    <div className={`${styles.playground_container} ${styles.layout_spacing}`}>
      <div className={styles.editor_container}>
        <div className={styles.text_editor_container}>
          <div>
            {/* content place holder */}
            {content.length === 0 ? (
              <p className={styles.text_editor_placeholder}>
                Paste Text or Write Here
              </p>
            ) : null}
            {/* content editor */}
            <div
              ref={editorRef}
              className={styles.text_editor}
              contentEditable="true"
              onInput={(e) => setContent(e.target.innerText)}
            />
          </div>

          <div className={styles.editor_menu}>
            {/* word count */}
            <div className={styles.word_count_lg}>
              Word Count: {getWordCount()}
            </div>
            {/* copy clear */}
            <div className={styles.editor_cmd}>
              <span onClick={handleCopy}>
                <BiCopy className={styles.editor_cmd_icon} /> Copy
              </span>
              <span onClick={handleClear}>
                <MdDeleteOutline className={styles.editor_cmd_icon} /> Clear
              </span>
            </div>
          </div>
        </div>
        <div className={styles.action_container}>
          <Button
            className={
              loading
                ? `${styles.analyse_btn} ${styles.analyse_btn_disabled}`
                : content?.length > 0
                ? styles.analyse_btn
                : `${styles.analyse_btn} ${styles.analyse_btn_disabled}`
            }
            onClick={analiseContent}
            disabled={loading ? true : content?.length > 0 ? false : true}
          >
            {loading ? "Loading..." : "Analyse"}
          </Button>
          <div className={styles.word_count_sm}>
            Word Count: {getWordCount()}
          </div>
          {/* <div className={styles.response_container_sm}>
            {loading ? (
              // <Lottie className={styles.loader} animationData={loader} />
              <div className={styles.loader}>
                <ProgressBar loading={loading} percenage={percenage} />
              </div>
            ) : (
              <p className={styles.ai_percentage}>{percenage}%</p>
            )}
            <p className={styles.ai_sub_text}>Match with Ai</p>
          </div> */}
        </div>
      </div>

      {/* response container */}
      <div className={styles.response_container}>
        <div className={styles.ai_response}>
          <p className={styles.ai_percentage}>{percenage}%</p>
          <p className={styles.ai_sub_text}>Match with Ai</p>
          <ProgressBar percenage={percenage} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Playground;
