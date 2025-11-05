import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

// 🔹 Create Context
export const ToggleContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggleMode = ()=>{
    setToggle((prev) => !prev)

}
  // ✅ Route configuration
  const routeConfig = [
    { path: "/", element: <HomePage /> },
    { path: "/create", element: <CreatePage /> },
  ];

  return (
    // ✅ Wrap everything that needs toggle state inside Provider
    <ToggleContext.Provider value={{ toggle, setToggle ,handleToggleMode }}>
      <div
        className={`min-h-screen w-full transition-colors duration-300 ${
          toggle ? "bg-white text-black" : "bg-gray-950 text-white"
        }`}
      >
        {/* Navbar (can use toggle context) */}
        <Navbar />

        {/* Routes (also can access toggle context if needed) */}
        <Routes>
          {routeConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
