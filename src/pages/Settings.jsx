import { useState } from "react";

export default function Settings() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      {/* Tab Menu */}
      <div className="flex gap-4 mb-4">
        {["profile", "password", "notifications"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`px-4 py-2 rounded ${
              tab === item ? "bg-turquoise text-white" : "border"
            }`}
          >
            {item === "profile" && "Profile Settings"}
            {item === "password" && "Change Password"}
            {item === "notifications" && "Notifications"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "profile" && (
        <div className="space-y-4 bg-cleanWhite p-4 rounded-xl shadow">
          <input className="w-full p-2 border rounded" placeholder="Full Name" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <button className="bg-turquoise text-white px-4 py-2 rounded">Save</button>
        </div>
      )}

      {tab === "password" && (
        <div className="space-y-4 bg-cleanWhite p-4 rounded-xl shadow">
          <input type="password" className="w-full p-2 border rounded" placeholder="Current Password" />
          <input type="password" className="w-full p-2 border rounded" placeholder="New Password" />
          <input type="password" className="w-full p-2 border rounded" placeholder="Confirm New Password" />
          <button className="bg-turquoise text-white px-4 py-2 rounded">Change Password</button>
        </div>
      )}

      {tab === "notifications" && (
        <div className="space-y-4 bg-cleanWhite p-4 rounded-xl shadow">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-turquoise" />
            Email Notifications
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-turquoise" />
            SMS Notifications
          </label>
          <button className="bg-turquoise text-white px-4 py-2 rounded">Save</button>
        </div>
      )}
    </div>
  );
}
