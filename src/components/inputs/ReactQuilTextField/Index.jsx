import { useState } from "react";

import ReactQuill from "react-quill";
// import { SketchPicker } from 'react-color';
import "react-quill/dist/quill.snow.css";
import { ErrorMessage } from "formik";

const QuillEditor = ({ value, onChange, placeholder, name }) => {

    const [showColorSelect, setShowColorSelect] = useState(false);
    const [currentColor, setCurrentColor] = useState('#000000'); // Default color
  
    const handleColorChange = (color) => {
      setCurrentColor(color);
      setShowColorSelect(false);

    };

    const colorOptions = ['#000000', '#ff0000', '#00ff00', '#0000ff']; // Add your desired color options


    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': colorOptions }], 
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean'],
            // [{ 'colorSelect': colorOptions }],
        ],
    };



    return (
        <>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                modules={modules}
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