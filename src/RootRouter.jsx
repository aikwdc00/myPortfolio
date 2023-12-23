import React,{Suspense,lazy} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "@components/layout";
// import LoadingSpinner from "@components/LoadingSpinner";

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Home = lazy(() => import('./pages/Home'));

function RootRouter() {
  const router = createBrowserRouter([
    {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              path: "/",
              element: <Home />,
            },
          ]
    },
  ])
  
  return (
    <Suspense >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default RootRouter
