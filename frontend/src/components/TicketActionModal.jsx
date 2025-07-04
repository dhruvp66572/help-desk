import { useState } from "react";
import { FaUserPlus, FaSyncAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; // Import close icon

export default function TicketActionModal({
  ticketId,
  onClose,
  onSubmit,
  actionType,
}) {
  const [teamName, setTeamName] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = () => {
    onSubmit({
      ticketId,
      teamName,
      teamMember,
      remark,
      action: actionType,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-turquoise p-6 rounded-xl w-full max-w-md shadow-lg space-y-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200"
          title="Close"
        >
          <IoMdClose size={24} />
        </button>
        <h3 className="text-lg font-bold text-center text-white mb-2">
          {actionType === "createTeam"
            ? "My Ticket - Team Creation"
            : "Close Ticket"}
        </h3>
        <div className="space-y-3">
          <input
            value={ticketId}
            disabled
            className="w-full px-3 py-2 rounded border focus:outline-none italic"
            placeholder="Ticket No."
          />

          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none"
            placeholder="Team name"
          />

          <div className="flex items-center gap-2">
            <input
              value={teamMember}
              onChange={(e) => setTeamMember(e.target.value)}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              placeholder="Team Member"
            />
            <FaUserPlus className="text-black" />
          </div>

          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none"
            placeholder="Remark"
            rows="3"
          />

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setTeamName("");
                setTeamMember("");
                setRemark("");
              }}
              className="text-black"
              title="Reset"
            >
              <FaSyncAlt size={20} />
            </button>

            <button
              onClick={handleSubmit}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded font-semibold"
            >
              {actionType === "createTeam" ? "Create Team" : "Close Ticket"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
