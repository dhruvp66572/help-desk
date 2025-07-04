export default function ViewTicketModal({ ticket, onClose }) {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-lg font-bold mb-4 text-trueBlue">Ticket Details</h3>

        <div className="space-y-2 text-sm">
          <p><strong>Ticket No:</strong> {ticket.id}</p>
          <p><strong>Subject:</strong> {ticket.subject}</p>
          <p><strong>Category:</strong> {ticket.category || "N/A"}</p>
          <p><strong>Type:</strong> {ticket.type || "N/A"}</p>
          <p><strong>Priority:</strong> {ticket.priority || "N/A"}</p>
          <p><strong>Status:</strong> {ticket.status || "N/A"}</p>
          <p><strong>Support by:</strong> {ticket.support || "N/A"}</p>
          <p><strong>Date:</strong> {ticket.date}</p>
          <p><strong>Description:</strong> {ticket.description || "N/A"}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-turquoise hover:bg-trueBlue text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
