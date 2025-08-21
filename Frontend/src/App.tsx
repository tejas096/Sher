import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Boilerplate from "./components/Boilerplate";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Tools = lazy(() => import("./pages/Tools"));
const Experience = lazy(() => import("./pages/Experience"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Education = lazy(() => import("./pages/Education"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Boilerplate />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "/tools",
          element: <Tools />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
