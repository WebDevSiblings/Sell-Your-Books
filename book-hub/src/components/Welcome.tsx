import AnimatedText from "./AnimatedText";
import { Chart } from "./Chart";
import NavBar from "./NavBar";
import VideoBackground from "./VideoBackground";

const Welcome = () => {
  return (
    <>
      <NavBar />
      <div style={{ position: "relative" }}>
        <VideoBackground />
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
            <AnimatedText text="Welcome!" />
          </h1>
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Welcome;
