import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Start } from "./components/Start";
import { ProjectsCard } from "./components/ProjectsCard";
import { Counter } from "./projects/counter/Counter";

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
            <ProjectsCard />
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
      {
        path: "/counter",
        element: (
          <div>
            <Counter />
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
