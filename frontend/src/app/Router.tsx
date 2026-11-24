import { createBrowserRouter } from "react-router";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { OTPPage } from "../pages/OTPPage";

export const router = createBrowserRouter([
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "confirm-email",
        element: <OTPPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);
