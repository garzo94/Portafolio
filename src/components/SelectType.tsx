import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function SelectType() {
  const [age, setAge] = React.useState("Filter by");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      color="primary"
      label=""
      onChange={handleChange}
      size="small"
      sx={{
        position: "absolute",
        top: { lg: -45, md: -45, sm: -10, xs: -20 },
        right: { lg: 50, md: 50, sm: 25, xs: 25 },
        zIndex: 1,
        color: "rgba(255,255,255,0.5)",
        width: "150px",
        fontSize: { lg: "16px", md: "15px", sm: "12px", xs: "11px" },
        "&:hover": {
          "&& fieldset": {
            border: "1px solid #fff",
          },
        },
        "& .css-14lo706>span, .css-14lo706, .css-yjsfm1>span": {
          opacity: "0",
        },
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline, .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon, .css-bpeome-MuiSvgIcon-root-MuiSelect-icon":
          {
            borderColor: "rgba(255,255,255,0.5)",
            color: "rgba(255,255,255,0.5)",
          },
      }}
    >
      <MenuItem disabled value="Filter by">
        Filter by
      </MenuItem>
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="web">Web Development</MenuItem>
      <MenuItem value="mobile">Mobile Development</MenuItem>
      <MenuItem value="ml">Machine Learning</MenuItem>
    </Select>
  );
}
