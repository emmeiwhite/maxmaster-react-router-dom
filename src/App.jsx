import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

// Let's set up our routers

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World!</h1>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>This is the about page</h1>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
