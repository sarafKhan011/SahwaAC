// src/index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages & Components
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";


// ✅ Create router with all routes
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },      // Optional duplicate route
  { path: "/course", element: <Course /> },
  { path: "/about", element: <About /> },
  { path: "/events", element: <Events/> },
  { path: "/contact", element: <Contact /> },
]);

// ✅ Render app with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
