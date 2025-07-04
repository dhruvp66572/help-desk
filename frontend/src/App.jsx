import { Routes, Route } from "react-router-dom";
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


export default function App() {
  // Simulate role (later get from auth/localStorage)
  const userRole = "user"; // Change to operator, support, user for testing

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Main Layout with role-based routes */}

      <Route element={<MainLayout role={userRole} />}>
        <Route path="/dashboard" element={<Dashboard role={userRole} />} />       
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<ListTickets />} />
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
  );
}
