import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
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