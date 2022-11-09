import React from "react";
import { Box, Stack } from "@mui/material";
export default function MyWork() {
  return (
    <Box
      className="qepedo"
      sx={{
        bgcolor: "#181818",
        height: "700px",
        width: "100vw",
        position: "relative",
        p: 4,
        display: "flex",
        alignItems: "center",
        jusfityContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          borderLeft: "1400px solid #131315",
          borderBottom: "150px solid transparent",
        }}
      ></Box>

      <div className="card">
        <div className="imgBx">
          <img src="src\assets\myimg.png"></img>
        </div>
        <div className="content">
          <div className="details">
            <h2>
              CoolSnippets
              <br />
              <span>An app for developers</span>
            </h2>
            <div className="description">
              <h3>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </h3>
            </div>
          </div>
          <div className="description">
            {/* <h5>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
            </h5> */}
          </div>
        </div>
      </div>
    </Box>
  );
}
