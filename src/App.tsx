import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
        {
            path: "/home",
            element: (
                <div>
                    <h1>This is the Home Page</h1>
                </div>
            )
        },
        {
            path: "/projects",
            element: (
                <div>
                    <h1>This is the Projects Page</h1>
                </div>
            )
        },
        {
            path: "/about",
            element: (
                <div>
                    <h1>This is the About Page</h1>
                </div>
            )
        }
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
