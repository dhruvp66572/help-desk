import { useState } from "react";
import { FaStar } from "react-icons/fa";

const dummyPerformance = {
  name: "Operation Name",
  contact: "0123456789",
  department: "ABC",
  totalTickets: 5,
  solved: 2,
  pending: 1,
  inProgress: 2,
  rating: 4,
};

const otherTeamMembers = [
  { name: "Operation Name 1" },
  { name: "Operation Name 2" },
  { name: "Operation Name 3" },
];

export default function Performance() {
  const [selected, setSelected] = useState(dummyPerformance);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-4">Performance</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-4 bg-cleanWhite p-4 rounded-xl shadow">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <h3 className="text-lg font-semibold">{selected.name}</h3>
              <p className="text-sm">Contact No: {selected.contact}</p>
              <p className="text-sm">Department: {selected.department}</p>
            </div>
          </div>

          <div className="bg-cleanWhite p-4 rounded-xl shadow space-y-2">
            <h4 className="font-semibold mb-2">Total Ticket Handle: {selected.totalTickets}</h4>
            <p>Ticket Solved: {selected.solved}</p>
            <p>Ticket Pending: {selected.pending}</p>
            <p>Ticket In Progress: {selected.inProgress}</p>
            <div className="flex items-center gap-1">
              Rating:
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < selected.rating ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-4">
          {otherTeamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-cleanWhite p-3 rounded-xl shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  👤
                </div>
                <span>{member.name}</span>
              </div>
              <button
                onClick={() => setSelected({ ...dummyPerformance, name: member.name })}
                className="bg-turquoise hover:bg-trueBlue text-white px-3 py-1 rounded"
              >
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
