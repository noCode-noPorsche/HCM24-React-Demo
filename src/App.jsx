import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Developer from "./pages/dev";
import BusinessAnalyst from "./pages/ba";
import Tester from "./pages/tester";
import Manager from "./pages/manager";
import LayOut from "./components/layout";
import Multiple from "./pages/multiple-user";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { path: "/", element: <Multiple /> },
        { path: "/dev", element: <Developer /> },
        { path: "/ba", element: <BusinessAnalyst /> },
        { path: "/tester", element: <Tester /> },
        { path: "/manager", element: <Manager /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
