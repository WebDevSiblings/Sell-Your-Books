import { createBrowserRouter } from "react-router-dom";
import { default as SignupPage } from "./components/SignupPage";
import { default as LoginPage } from "./components/LoginPage";
import Welcome from "./components/Welcome";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
]);

export default router;
