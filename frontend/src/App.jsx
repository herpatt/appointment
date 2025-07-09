// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./components/404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Appointment />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
