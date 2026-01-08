import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

// Certificate & Admin Pages
import HomeR from "./components/Certificate/HomeR";
import StLogin from "./components/Certificate/Login";
import AdLogin from "./components/Certificate/AdLogin";
import AddResult from "./components/Certificate/AddResult";

// Loading Screen Component
function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      </div>
    </div>
  );
}

// Main App with Loader
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  // Routes
  const router = createBrowserRouter([
    // Public Pages
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/course", element: <Course /> },
    { path: "/about", element: <About /> },
    { path: "/events", element: <Events /> },
    { path: "/contact", element: <Contact /> },

    // Student Certificate Flow
    { path: "/student-login", element: <StLogin /> },
    { path: "/homeR", element: <HomeR /> }, // Student result page

    // Admin Flow
    { path: "/admin-login", element: <AdLogin /> },
    { path: "/add", element: <AddResult /> }, // Admin panel
  ]);

  return <RouterProvider router={router} />;
}

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
