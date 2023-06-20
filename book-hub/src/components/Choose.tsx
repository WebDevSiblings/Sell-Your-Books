import React from "react";
import { Button, useTheme } from "@mui/material";
import AnimatedText from "./AnimatedText";
import WavyLine from "./WavyLine";

const Choose = () => {
  const theme = useTheme();
  return (
    <>
      <WavyLine />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          className="ms-3 header"
          style={{
            fontSize: "10rem",
            backgroundColor: "#b6b4b0",
            color: "#d3d8db",
          }}
        >
          <AnimatedText text="Where to next?" />
        </h1>
        <div className="choose" style={{ marginTop: "1rem" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.warning.main,
              "&:hover": {
                backgroundColor: "#ffb74d",
              },
              marginRight: "10rem",
              padding: "2.5rem 5rem",
            }}
          >
            Create
          </Button>
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
        </div>
      </div>
    </>
  );
};

export default Choose;
