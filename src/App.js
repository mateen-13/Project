import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Form from "./Components/Form/Form";
import Confirmation from "./Components/confirmation/Confirmation";
import EditUser from "./Components/Edit/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/edit",
    element: <EditUser />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
