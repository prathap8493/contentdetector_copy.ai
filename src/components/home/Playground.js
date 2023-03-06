import React, { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import { BiCopy } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import ProgressBar from "../common/ProgressBar";
import { aiDetectionService } from "@/services/home";
import ResponseContainer from "./ResponseContainer";

function Playground({ styles }) {
  // const formats = ["header", "size", "bold", "italic", "underline", "strike"];
  const modules = {
    // toolbar: [
    //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //   ["bold", "italic", "underline", "strike"],
    // ],
    toolbar: false,
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
  const [percentage, setpercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialEditorHeight, setInitialEditorHeight] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    if (quillRef?.current?.offsetHeight > window.innerHeight * 0.5) {
      console.log("enter");
      divRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else if (content.length < 2) {
      // quillRef.current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "end",
      //   inline: "nearest",
      // });
      window.scrollTo(0, 0);
    }
    console.log(content.length);
  }, [quillRef?.current?.offsetHeight]);

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
    return content.replace(/\n/g, " ").trim().split(" ").length - 1;
  };

  // analising the content
  const analiseContent = async () => {
    setLoading(true);
    try {
      const { data } = await aiDetectionService({ content });
      console.log(data);
      const fakePercentage = data?.fake_probability * 100 || 0;
      setpercentage(fakePercentage.toFixed(1));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Something went wrong! Try again", { duration: 1300 });
    }
  };

  return (
    <div className={`${styles.playground_container} ${styles.layout_spacing}`}>
      <div className={styles.editor_container}>
        <div className={styles.text_editor_container}>
          {/* <div> */}
          <div ref={quillRef} className={styles.text_editor} />
          {/* </div> */}

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
        <div className={styles.action_container} ref={divRef}>
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
      <ResponseContainer
        styles={styles}
        percentage={percentage}
        loading={loading}
      />
    </div>
  );
}

export default Playground;
