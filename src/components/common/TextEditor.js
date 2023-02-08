import React, { forwardRef, useEffect, useState } from "react";

const TextEditor = forwardRef(
  ({ value, onChange, className, placeholder }, ref) => {
    const [rows, setRows] = useState("");
    const [minRows, setMinRows] = useState("");
    const LINE_HEIGHT = 24;
    useEffect(() => {
      const rows = ~~(ref.current.scrollHeight / LINE_HEIGHT);
      setMinRows(rows);
    }, []);

    const handleChange = (e) => {
      e.target.rows = minRows;
      const currentRows = ~~(e.target.scrollHeight / LINE_HEIGHT);
      e.target.rows = currentRows;
      onChange(e);
    };
    return (
      <textarea
        ref={ref}
        rows={rows}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    );
  }
);

export default TextEditor;
