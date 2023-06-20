import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
