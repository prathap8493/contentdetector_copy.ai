import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { BiCopy } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import ProgressBar from "../common/ProgressBar";
import { aiDetectionService } from "@/services/home";

function Playground({ styles }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };
  const theme = "snow";
  const placeholder = "Paste Text or Write Here";
  const { quill, quillRef } = useQuill({
    theme,

    modules,
    placeholder,
  });
  const [content, setContent] = useState("");
  const [percenage, setPercenage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quill) {
      quill.focus();
      quill.on("text-change", (delta, oldDelta, source) => {
        setContent(quill.getText());
      });
    }
  }, [quill]);

  //   handling copy
  const handleCopy = () => {
    if (content.length > 1) {
      navigator.clipboard.writeText(content);
      toast.success("Copied to clipboard", { duration: 1500 });
    } else {
      toast.error("No content to copy", { duration: 1300 });
    }
  };

  //   handle clear
  const handleClear = () => {
    if (quill) {
      setContent("");
      quill.deleteText(0, quill.getLength());
    }
  };

  // word count
  const getWordCount = () => {
    console.log(content.trim());
    return content.replace(/\n/g, " ").trim().split(" ").length - 1;
  };

  // analising the content
  const analiseContent = async () => {
    setLoading(true);
    try {
      const data = await aiDetectionService({ content });
      const fakePercentage = data?.fake_probability * 100 || 0;
      setPercenage(fakePercentage.toFixed(1));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong! Try again", { duration: 1300 });
    }
  };
  return (
    <div className={`${styles.playground_container} ${styles.layout_spacing}`}>
      <div className={styles.editor_container}>
        <div className={styles.text_editor_container}>
          <div>
            <div ref={quillRef} className={styles.text_editor} />
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
        </div>
      </div>

      {/* response container */}
      <div className={styles.response_container}>
        <div className={styles.ai_response}>
          <p className={styles.ai_percentage}>{percenage}%</p>
          <p className={styles.ai_sub_text}>Match with AI</p>
          <ProgressBar percenage={percenage} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Playground;
