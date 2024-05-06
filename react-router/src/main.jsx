import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./routes/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { createPostAction } from "./components/CreatePost";
import PostList, { postLoader } from "../src/components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> , loader: postLoader},
      {
        path: "/create-post",
        element: <CreatePost />,
        action : createPostAction
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
