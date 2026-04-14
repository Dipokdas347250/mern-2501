import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/auth/Login";
import AllBanner from "./components/pages/AllBanner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "banner", Component: AllBanner },
    ],
  },
  {
    path: "/login",
    Component: Login,
    
  },
]);


const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App