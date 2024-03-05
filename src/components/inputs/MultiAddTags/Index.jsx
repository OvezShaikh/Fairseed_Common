import React, { useState } from "react";
import { Chips } from "primereact/chips";
import { useField } from "formik";
import "./CustomChips.css"; // Import your custom CSS file
import { FormLabel } from "@mui/material";

const CustomChips = ({
    name,
    label,
    variant,
    sx,
    placeholder,
    ...otherProps
}) => {
    const [field, meta, helpers] = useField(name);
    const [value, setValue] = useState([]);

    const handleChange = (e) => {
        setValue(e.value);
        helpers.setValue(e.value); // Update Formik field value
    };

    return (
        <>
            {label && <FormLabel sx={{ ...sx }}>{label}</FormLabel>}

            <div className="card p-fluid">
                <Chips
                    {...field}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    className="custom-chips"
                    {...otherProps}
                    placeholder={placeholder}
                />
                {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                )}
            </div>
        </>
    );
};

export default CustomChips;

