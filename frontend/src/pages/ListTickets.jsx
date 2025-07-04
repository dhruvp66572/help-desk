import { useState } from "react";
import ViewTicketModal from "../components/ViewTicketModal";

const dummyTickets = [
  {
    id: 1234,
    subject: "Login issue",
    status: "In Progress",
    support: "Tech Support",
    date: "13/08/21",
    rating: 0,
  },
  {
    id: 1124,
    subject: "New ticket issue",
    status: "On hold",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1224,
    subject: "New request",
    status: "Closed",
    support: "Tech Support",
    date: "13/08/21",
    rating: 4,
  },
  {
    id: 1244,
    subject: "Ticket submission",
    status: "In Progress",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1114,
    subject: "Login issue",
    status: "In Progress",
    support: "Tech Support",
    date: "03/08/21",
    rating: 0,
  },
];

const statusColor = {
  "In Progress": "bg-turquoise text-white",
  "On hold": "bg-trueBlue text-white",
  Closed: "bg-gray-600 text-white",
};

export default function MyTickets() {
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = dummyTickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
      ticket.id.toString().includes(search) ||
      ticket.status.toLowerCase().includes(search.toLowerCase()) ||
      ticket.support.toLowerCase().includes(search.toLowerCase()) ||
      ticket.date.includes(search)
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">List of Tickets</h2>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Find ticket"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span>
          Showing {filteredTickets.length} of {dummyTickets.length} entries
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300">
          <thead className="bg-cleanWhite">
            <tr>
              <th className="p-2 border">Ticket No.</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Support by</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-100">
                <td
                  className="p-2 border text-blue-600 cursor-pointer underline"
                  onClick={() => setSelectedTicket(ticket)}
                >
                  {ticket.id}
                </td>
                <td className="p-2 border">{ticket.subject}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      statusColor[ticket.status] || "bg-gray-400 text-white"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="p-2 border">{ticket.support}</td>
                <td className="p-2 border">{ticket.date}</td>
                <td className="p-2 border">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < ticket.rating ? "⭐" : "☆"}</span>
                  ))}
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
