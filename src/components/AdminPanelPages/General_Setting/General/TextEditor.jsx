import { ErrorMessage, useField, useFormikContext } from "formik";
import React from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ defaultValue, onChange, name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextfield = {
    ...field,
    ...otherProps,
    name: name,
  };

  const { setFieldValue, setTouched } = useFormikContext();
  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <>
      <ReactQuill
        name={name}
        theme="snow"
        {...configTextfield}
        onChange={(e) => setFieldValue(name, e)}
        onBlur={() => setTouched(name, true)}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", fontSize: "0.7rem" }}>{msg}</div>
        )}
      />
    </>
  );
};

export default RichTextEditor;
