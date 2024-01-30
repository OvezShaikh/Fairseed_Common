import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ErrorMessage } from "formik";

const QuillEditor = ({ value, onChange, placeholder, name }) => {
    return (
        <>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <ErrorMessage
                name={name}
                render={(msg) => (
                    <div style={{ color: "red", fontSize: "1rem", paddingLeft: '5px', fontFamily: 'satoshi' }}>
                        {typeof msg === "object" ? Object?.values(msg)[0] : msg}
                    </div>
                )}
            />
        </>
    );
};

export default QuillEditor;