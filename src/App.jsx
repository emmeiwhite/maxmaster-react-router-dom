import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import { About, HomeLayout, Error, Landing, Cocktail, Newsletter } from './pages'

import { loader as landingLoader } from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader
      },
      {
        path: 'cocktail',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
