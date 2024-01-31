import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Form from "./Components/Form/Form";
import Confirmation from "./Components/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
