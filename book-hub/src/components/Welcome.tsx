import { Chart } from "./Chart";
import NavBar from "./NavBar";

const Welcome = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="ms-3" style={{ fontSize: "10rem" }}>
          Welcome!
        </h1>
        <Chart />
      </div>
    </>
  );
};

export default Welcome;
