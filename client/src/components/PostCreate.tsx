import React from "react";
import { Button, useTheme } from "@mui/material";
import AnimatedText from "./AnimatedText";
import WavyLine from "./WavyLine";
import { NavLink } from "react-router-dom";

const PostCreate = () => {
  const theme = useTheme();
  return (
    <div style={{ textAlign: "center" }}>
      <WavyLine />
      <h1
        className="ms-3 header"
        style={{
          fontSize: "10rem",
          backgroundColor: "#b6b4b0",
          color: "#d3d8db",
        }}
      >
        <AnimatedText text="Done!" />
      </h1>
      <h1
        className="ms-3 header"
        style={{
          fontSize: "10rem",
          backgroundColor: "#b6b4b0",
          color: "#d3d8db",
        }}
      >
        <AnimatedText text="Find it here!" />
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavLink to="/explore">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.warning.main,
              "&:hover": {
                backgroundColor: "#ffb74d",
              },
              padding: "2.5rem 5rem",
            }}
          >
            Explore
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default PostCreate;
