import { Link, useLocation } from "react-router-dom";

const menuItems = {
  admin: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Database", path: "/database" },
    { name: "Settings", path: "/settings" },
    { name: "User Log History", path: "/user-log-history" },
  ],
  operator: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Ticket Approval", path: "/ticket-approval" },
    { name: "My Tickets", path: "/mytickets" },
    { name: "Performance", path: "/performance" },
  ],
  support: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Tickets", path: "/mytickets" },
    { name: "Performance", path: "/performance" },
  ],
  user: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "New Ticket", path: "/newticket" },
    { name: "My Tickets", path: "/tickets" },
  ],
};

export default function Sidebar({ role }) {
  const items = menuItems[role] || [];
  const location = useLocation();

  return (
    <div className="w-64 bg-turquoise min-h-screen text-white p-4">
      <h2 className="text-xl font-bold mb-6">Helpdesk System</h2>
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded ${
              location.pathname === item.path
                ? "bg-[#4984e2] text-black font-semibold"
                : "hover:bg-clean hover:text-trueBlue"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
