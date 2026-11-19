import { createBrowserRouter } from "react-router";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);
