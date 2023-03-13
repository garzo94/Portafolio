import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SkillCard from "../components/SkillCard";
import { sectionName } from "../components/Variants";
import { motion } from "framer-motion";
import { data } from "../utils/dataskills";
export default function TechStack() {
  return (
    <Box
      sx={{
        backgroundColor: "#131313",
        paddingTop: { lg: 30, md: 10, sm: 10, xs: 5 },
        paddingBottom: { lg: 10, md: 20, sm: 15, xs: 10 },
        display: "flex",
        position: "relative",
      }}
    >
      <motion.div variants={sectionName}>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.1)",
            position: "absolute",
            top: { lg: 100, md: 0, sm: -15, xs: -35 },
            left: { lg: 75, md: 40, sm: 20, xs: 35 },
            fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
            fontWeight: 600,
            zIndex: 500,
          }}
        >
          Tech Stack
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {data.skills.map((skill) => {
          return (
            <Grid item>
              <SkillCard name={skill.name} image={skill.image} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
