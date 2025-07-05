import { useNavigate } from "react-router-dom";
import { FiBell, FiUser, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import axiosinstance from "../utils/axiosInstance";

export default function Header({username}) {
  const navigate = useNavigate();
  // State to manage notification drawer and count
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Example count

  const handleNotificationClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlelogout = async () => {
    const verify = window.confirm("Are you sure you want to logout?");
    if (!verify) return;
    try {
      await axiosinstance.post('/auth/logout').then((response) => {
        if (response.data.success) {
          console.log("Logout successful");
          localStorage.removeItem('token');
          window.location.href = "/login";
        } else {
          console.error("Logout failed:", response.data.message); 
        }
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
    
  };



  return (
    <>
      <header className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">           
        </h1>
        <div className="flex items-center gap-6">
          <span className="text-base font-medium bg-white/20 px-3 py-1 rounded-full shadow-inner">
            {username ? `Welcome, ${username}` : "Welcome, Usser"}
          </span>
          <button
            type="button"
            className="relative p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="Notifications"
            onClick={handleNotificationClick}
          >
            <FiBell size={22} />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 border-2 border-white shadow">
                {notificationCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="Profile"
            onClick={() => {
              navigate('/profile')
            }}
          >
            <FiUser size={22} />
          </button>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="Logout"
            onClick={handlelogout}
          >
            <FiLogOut size={22} />
          </button>
        </div>
      </header>
      {/* Notification Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl z-50 p-6 flex flex-col animate-slide-in">
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
            <button
              className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          {/* Example notifications */}
          <ul className="flex-1 overflow-y-auto space-y-3">
            <li className="bg-gray-100 rounded-lg px-4 py-3 text-gray-700 shadow-sm hover:bg-gray-200 transition">
              <span className="font-medium">New ticket assigned</span>
              <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
            </li>
            <li className="bg-gray-100 rounded-lg px-4 py-3 text-gray-700 shadow-sm hover:bg-gray-200 transition">
              <span className="font-medium">Ticket #123 updated</span>
              <div className="text-xs text-gray-500 mt-1">10 minutes ago</div>
            </li>
            <li className="bg-gray-100 rounded-lg px-4 py-3 text-gray-700 shadow-sm hover:bg-gray-200 transition">
              <span className="font-medium">System maintenance scheduled</span>
              <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
            </li>
          </ul>
          <button
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition"
            onClick={() => setIsDrawerOpen(false)}
          >
            Mark all as read
          </button>
        </div>
      )}
      <style>
        {`
          @keyframes slide-in {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
          }
        `}
      </style>
    </>
  );
}
