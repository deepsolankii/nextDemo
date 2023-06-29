import { createBrowserRouter } from "react-router-dom";
// import { Suspense } from "react";
// import { lazy } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import HomePage from "../pages/HomePage/index";
// import Test from "../components/test";

// const Loadable = (Component) => (props) => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks

//   return (
//     <Suspense fallback={<div>Error Occured</div>}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        index: true,
        element: <HomePage />,
      },
      {
        path: "explore",
      },
      {
        path: "notifications",
      },
      {
        path: "messages",
      },
      {
        path: "lists",
      },
      {
        path: "bookmarks",
      },
      {
        path: "verified",
      },
      {
        path: "profile",
      },
      {
        path: "more",
      },
    ],
  },
  // home routes
]);

export default router;
