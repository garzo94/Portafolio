import React from "react";
import { Stack, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const buttonsStyle = {
  fontSize: "12px",
  color: "#181818",
  textTransform: "capitalize",
  border: "1px solid #181818",
  alignText: "center",
  "&:hover": {
    border: "1px solid #181818",
    bgcolor: "#fff",
  },
};

const tootlipStyle = {
  bgcolor: "#181818",
};

const propperStyle = {
  sx: {
    "& .MuiTooltip-tooltip": {
      bgcolor: "#181818",
    },
  },
};

export default function Card() {
  return (
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
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </h3>
          </div>
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          className="stack"
        >
          <Tooltip title="Go to repository" PopperProps={propperStyle}>
            <IconButton sx={buttonsStyle} size="small">
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="View video demo" PopperProps={propperStyle}>
            <IconButton sx={buttonsStyle} size="small">
              <SmartDisplayIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="View website" PopperProps={propperStyle}>
            <IconButton
              sx={{
                color: "#fff",
                bgcolor: "#181818",
                border: "1px solid #181818",
                "&:hover": {
                  border: "1px solid #181818",
                  bgcolor: "#fff",
                  color: "#181818",
                },
              }}
              size="small"
            >
              <RocketLaunchIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </div>
    </div>
  );
}
