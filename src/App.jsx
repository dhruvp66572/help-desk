import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyTickets from "./pages/MyTickets";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";

export default function App() {
  // Simulate role (later get from auth/localStorage)
  const userRole = "user"; // Change to operator, support, user for testing

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main Layout with role-based routes */}

      <Route element={<MainLayout role={userRole} />}>
        <Route path="/dashboard" element={<Dashboard role={userRole} />} />       
        <Route path="/profile" element={<Profile />} />


        {/* User specific routes */}
        <Route path="/newticket" element={<NewTicket />} />
        <Route path="/tickets" element={<MyTickets />} />
        
        {/* Operator specific routes */}
        <Route path="/tickets" element={<MyTickets />} />

        {/* Admin specific routes */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
