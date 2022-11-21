import React, { useState } from "react";
import {
  Stack,
  IconButton,
  Tooltip,
  Modal,
  Typography,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { DataInterface } from "../Types/types";
import { YoutubeEmbed } from "./YoutubeEmbed";
import getYouTubeID from "get-youtube-id";

interface dataCard {
  data: DataInterface;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: { lg: 610, md: 590, sm: 510, sx: 350 },
  bgcolor: "#fff",
  borderRadius: "8px",

  p: 4,
};
const buttonsStyle = {
  color: "#181818",
  textTransform: "capitalize",
  border: "1px solid #181818",
  alignText: "center",
  width: "30px",
  height: "30px",
  "&:hover": {
    border: "1px solid #181818",
    bgcolor: "#fff",
  },
};

const sizeIcon = {
  width: "0.5em",
  height: "0.5em",
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

export default function Card({ data }: dataCard) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    image,
    titleApp,
    shortDescription,
    longDescription,
    githubLink,
    youtubeLink,
    launchLink,
  } = data;

  return (
    <>
      {/* <YoutubeEmbed /> */}

      <Modal
        open={open}
        onClose={handleClose}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <Box sx={modalStyle}>
          <YoutubeEmbed youtubeLink={youtubeLink} />
        </Box>
      </Modal>
      <div className="card">
        <div className="imgBx">
          <img src={`${image}`} />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              {titleApp}
              <br />
              <span>{shortDescription}</span>
            </h2>
            <div className="description">
              <h3>{longDescription}</h3>
            </div>
          </div>
        </div>
        <div className="stack-section">
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            className="stack"
          >
            <Tooltip title="Go to repository" PopperProps={propperStyle}>
              <IconButton
                onClick={() => window.open(`${githubLink}`, "_blank")}
                sx={buttonsStyle}
                size="small"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>

            <Tooltip
              onClick={handleOpen}
              title="View video demo"
              PopperProps={propperStyle}
            >
              <IconButton sx={buttonsStyle} size="small">
                <PlayCircleIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="View website" PopperProps={propperStyle}>
              <IconButton
                onClick={() => window.open(`${launchLink}`, "_blank")}
                sx={{
                  color: "#fff",
                  bgcolor: "#181818",
                  border: "1px solid #181818",
                  width: "30px",
                  height: "30px",
                  transition: "0.7s",
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
    </>
  );
}
