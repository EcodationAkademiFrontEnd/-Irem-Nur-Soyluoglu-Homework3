import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Users } from "./pages/Users";
import Userform from "./pages/Userform";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App" style={{ background: "purple", color: "white" }}>
      <header>
        <Navbar />
      </header>
      <div>
        <h1>Welcome!</h1>
        <button onClick={toggleForm}>
          {showForm ? "Hide Form" : "Add User"}
        </button>
        {showForm && <Userform />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>2024</footer>
    </div>
  );
}

export default App;
