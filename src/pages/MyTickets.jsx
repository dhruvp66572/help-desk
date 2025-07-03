import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaFileDownload } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import TicketActionModal from "../components/TicketActionModal";

const dummyTickets = [
  {
    id: 1234,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "13/08/21",
    status: "In Progress",
    person: "John Doe",
  },
  {
    id: 1124,
    subject: "New ticket issue",
    category: "Access issue",
    priority: "Medium",
    date: "14/08/21",
    status: "On hold",
    person: "Jane Smith",
  },
  {
    id: 1224,
    subject: "New request",
    category: "Feedback",
    priority: "Low",
    date: "13/08/21",
    status: "Closed",
    person: "Mark Lee",
  },
  {
    id: 1244,
    subject: "Ticket submission",
    category: "Ticketing",
    priority: "High",
    date: "14/08/21",
    status: "In Progress",
    person: "Sara Kim",
  },
  {
    id: 1114,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "3/08/21",
    status: "In Progress",
    person: "Alex Ray",
  },
];

const statusColor = {
  "In Progress": "bg-turquoise text-white",
  "On hold": "bg-trueBlue text-white",
  Closed: "bg-black text-white",
};

export default function MyTickets() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [actionType, setActionType] = useState("createTeam"); // or "closeTicket"

  const filteredTickets = dummyTickets.filter(
    (t) =>
      t.subject.toLowerCase().includes(search.toLowerCase()) ||
      String(t.id).includes(search) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.person.toLowerCase().includes(search.toLowerCase()) ||
      t.priority.toLowerCase().includes(search.toLowerCase()) ||
      t.status.toLowerCase().includes(search.toLowerCase()) ||
      t.date.includes(search)
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Ticket</h2>

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
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Person in charge</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-100">
                <td className="p-2 border text-blue-600 underline cursor-pointer">
                  {ticket.id}
                </td>
                <td className="p-2 border">{ticket.subject}</td>
                <td className="p-2 border">{ticket.category}</td>
                <td className="p-2 border">{ticket.priority}</td>
                <td className="p-2 border">{ticket.date}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      statusColor[ticket.status] || "bg-gray-400 text-white"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="p-2 border">{ticket.person}</td>
                <td className="p-2 border flex items-center gap-3">
                  <BiEdit
                    className="text-blue-600 cursor-pointer hover:scale-110"
                    title="View Ticket"
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setShowModal(true);       
                      setActionType("closeTeam"); // or "closeTicket"               
                    }}
                  />
                  <MdGroupAdd
                    className="text-black cursor-pointer hover:scale-110"
                    title="Team Creation"
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setShowModal(true);
                        setActionType("createTeam"); // or "closeTicket"
                    }}
                  />
                  <FaFileDownload
                    className="text-black cursor-pointer hover:scale-110"
                    title="Download"
                    onClick={() => {
                      alert("Download functionality is not implemented yet.");
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedTicket && (
        <TicketActionModal
          ticketId={selectedTicket.id}
          actionType={actionType}
          onClose={() => setShowModal(false)}
          onSubmit={(data) => console.log("Submitted Data:", data)}
        />
      )}
    </div>
  );
}
