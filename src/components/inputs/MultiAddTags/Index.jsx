import React from "react";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

const MultiKeyTextField = ({ name, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (event) => {
        const { value } = event.target;
        const keys = value.split(",").map((key) => key.trim());
        setFieldValue(name, keys);
    };

    const handleBlur = () => {
        // Do something onBlur if needed
    };

    return (
        <TextField
            {...field}
            {...props}
            name={name}
            value={field.value ? field.value.join(", ") : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={meta.touched && meta.error ? meta.error : ""}
            error={meta.touched && meta.error ? true : false}
            variant="outlined"
        />
    );
};

export default MultiKeyTextField;
