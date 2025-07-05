import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ListTickets from "./pages/ListTickets";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";
import UserLogHistory from "./pages/UserLogHistory";
import Settings from "./pages/Settings";
import Database from "./pages/Database";
import Performance from "./pages/Performance";
import TicketApproval from "./pages/TicketApproval";
import MyTickets from "./pages/MyTickets";
import ForgotPassword from "./pages/ForgotPassword";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';  

export default function App() {
  const [decodedtoken, setDecodedToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
        
        navigate("/login");
      }
    } 
  }, [navigate]);


  return (
    <>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
       <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Main Layout with role-based routes */}

      <Route element={<MainLayout role={decodedtoken?.role} username={decodedtoken?.username} />}>
      {/* Redirect unauthorized users to login */}    

        {/* Common routes for all roles */}
        <Route path="/dashboard" element={<Dashboard role={decodedtoken?.role} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<ListTickets id={decodedtoken?.id} />} />
        <Route path="/mytickets" element={<MyTickets />} />

        {/* User specific routes */}
        <Route path="/newticket" element={<NewTicket />} />

        {/* Operator specific routes */}
        <Route path="/ticket-approval" element={<TicketApproval />} />
        <Route path="/performance" element={<Performance />} />

        {/* Admin specific routes */}
        <Route path="/database" element={<Database />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user-log-history" element={<UserLogHistory />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Analytics />
    </>
  );
}
