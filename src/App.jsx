import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}