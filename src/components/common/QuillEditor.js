import dynamic from "next/dynamic";
import { useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const QuillEditor = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({
      forwardedRef,
      clearAll,
      styles,
      content,
      setContent,
      ...props
    }) => {
      useEffect(() => {
        forwardedRef.current.focus();
      }, []);
      const getWordCount = () => {
        return content.split(" ").length - 1;
      };
      const handleCopy = () => {
        if (content.length > 0) {
          navigator.clipboard.writeText(content);
          toast.success("Copied to clipboard", { duration: 1500 });
        } else {
          toast.error("No content to copy", { duration: 1300 });
        }
      };
      const handleClear = () => {
        forwardedRef.current.editor.deleteText(
          0,
          forwardedRef.current.editor.getLength()
        );
      };
      return (
        <div className={styles.text_editor_container}>
          <div>
            <RQ
              ref={forwardedRef}
              {...props}
              onChange={(e) => console.log(e)}
            />
          </div>
          <div className={styles.editor_menu}>
            {/* word count */}
            <div className={styles.word_count_lg}>
              {/* Word Count: {getWordCount()} */}
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
      );
    };
  },
  {
    ssr: false,
  }
);

export default QuillEditor;
