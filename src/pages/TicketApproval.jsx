import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import ViewTicketModal from "../components/ViewTicketModal";

const dummyTickets = [
  { id: 1234, subject: "Login issue", category: "Access issue", priority: "High", date: "13/08/21" },
  { id: 1124, subject: "New ticket issue", category: "Access issue", priority: "Medium", date: "14/08/21" },
  { id: 1224, subject: "New request", category: "Feedback", priority: "Low", date: "13/08/21" },
  { id: 1244, subject: "Ticket submission", category: "Ticketing", priority: "High", date: "14/08/21" },
  { id: 1114, subject: "Login issue", category: "Access issue", priority: "High", date: "03/08/21" },
];

export default function TicketApproval() {
  const [search, setSearch] = useState("");
   const [selectedTicket, setSelectedTicket] = useState(null);
  const filteredTickets = dummyTickets.filter(
    (t) =>
      t.subject.toLowerCase().includes(search.toLowerCase()) ||
      String(t.id).includes(search)
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Ticket Approval</h2>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Find ticket"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span>Showing {filteredTickets.length} of {dummyTickets.length} entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300">
          <thead className="bg-cleanWhite">
            <tr>
              <th className="p-2 border">Ticket No.</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
              <th className="p-2 border">Assign to</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-100">
                <td className="p-2 border text-blue-600 underline cursor-pointer" onClick={() => setSelectedTicket(ticket)}>{ticket.id}</td>
                <td className="p-2 border">{ticket.subject}</td>
                <td className="p-2 border">{ticket.category}</td>
                <td className="p-2 border">{ticket.priority}</td>
                <td className="p-2 border">{ticket.date}</td>
                <td className="p-2 border flex items-center gap-2">
                  <button className="text-green-600 hover:text-green-800">
                    <FaCheck />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTimes />
                  </button>
                </td>
                <td className="p-2 border">
                  <select className="border border-gray-300 rounded px-2 py-1">
                    <option>Select</option>
                    <option>Tech Support</option>
                    <option>Operation Team</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {/* Modal */}
            {selectedTicket && (
              <ViewTicketModal
                ticket={selectedTicket}
                onClose={() => setSelectedTicket(null)}
              />
            )}
    </div>
  );
}
