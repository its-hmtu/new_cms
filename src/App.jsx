import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./configs/routes";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer stacked />
    </>
  );
}

export default App;
