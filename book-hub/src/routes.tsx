import { createBrowserRouter } from "react-router-dom";
import { default as SignupPage } from "./components/SignupPage";
import { default as LoginPage } from "./components/LoginPage";
import Welcome from "./components/Welcome";
import Layout from "./components/Layout";
import Choose from "./components/Choose";
import Create from "./components/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Welcome /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "choose", element: <Choose /> },
      { path: "create", element: <Create /> },
    ],
  },
]);

export default router;
