import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Start } from "./components/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Start />
          </div>
        ),
      },
      {
        path: "/home",
        element: (
          <div>
            <h1>This is the Home Page</h1>
          </div>
        ),
      },
      {
        path: "/projects",
        element: (
          <div>
            <h1>This is the Projects Page</h1>
          </div>
        ),
      },
      {
        path: "/blog",
        element: (
          <div>
            <h1>This is the Blog Page</h1>
          </div>
        ),
      },
      {
        path: "/contact",
        element: (
          <div>
            <h1>This is the Contact Page</h1>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
