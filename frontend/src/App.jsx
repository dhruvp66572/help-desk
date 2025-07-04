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
import { jwtDecode } from 'jwt-decode';


export default function App() {
  // Decode token to get role and other details
  const decoded = jwtDecode(localStorage.getItem("token"));
  const userRole = decoded.role; // Assuming the token contains a 'role' field
  const userId = decoded.userId; // Assuming the token contains a 'userId'
  const username = decoded.username; // Assuming the token contains a 'username' field
  console.log(decoded); // { userId, role, username, iat, exp }

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
