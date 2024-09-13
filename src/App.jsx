import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Developer from "./pages/dev";
import BusinessAnalyst from "./pages/ba";
import Tester from "./pages/tester";
import Manager from "./pages/manager";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // children: [
      //   {
      //     path: "/dashboard",
      //     element: "dasboard",
      //   },
      //   {
      //     path: "/about",
      //     element: "about",
      //   },
      // ],
    },
    { path: "/dev", element: <Developer /> },
    { path: "/ba", element: <BusinessAnalyst /> },
    { path: "/tester", element: <Tester /> },
    { path: "/manager", element: <Manager /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
