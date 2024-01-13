import React from "react";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

function Searchbar() {
  return (
    <TextField
      sx={{
        width: "34ch",
        backgroundColor: "rgba(247, 248, 248, 1)",
        "& .MuiInputBase-root input": {
          padding: 0,
        },
      }}
      InputProps={{
        startAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
      placeholder="Search"
    ></TextField>
  );
}

export default Searchbar;
