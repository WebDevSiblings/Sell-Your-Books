import AnimatedText from "./AnimatedText";
import { Chart } from "./Chart";
import NavBar from "./NavBar";
import VideoBackground from "./VideoBackground";
import Vote from "./Vote";

const Welcome = () => {
  return (
    <>
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
          {/* <Vote /> */}
        </div>
      </div>
    </>
  );
};

export default Welcome;
