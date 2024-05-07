import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Error,
  Landing,
  Cocktail,
  Newsletter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
