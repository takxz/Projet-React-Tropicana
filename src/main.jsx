import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Inventory from "./pages/Inventory.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx"

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/inventory",
        element: <Inventory />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path:"*",
        element: <NotFound />
    }
    ],
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);