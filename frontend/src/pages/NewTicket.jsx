import { useState } from "react";
import axiosinstance from "../utils/axiosInstance";

export default function NewTicket() {
  const [form, setForm] = useState({
    ticketNumber: "", // Auto-generated or manual
    date: new Date().toISOString().split("T")[0], // Default to today
    name: "",
    department: "",
    subject: "",
    category: "",   
    priority: "",
    description: "",
  });
  const [ischecked , setIschecked] = useState(false);

  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if all required fields are filled
    if (
      !form.ticketNumber ||
      !form.date ||
      !form.name ||
      !form.department ||
      !form.subject ||
      !form.category ||
      !form.priority ||
      !form.description ||
      !ischecked // Ensure the checkbox is checked

    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      // Simulate an API call to submit the ticket
      const response = await axiosinstance.post("/tickets/", form);

      if (response.data.success) {
        alert("Ticket submitted successfully!");
        setError("");

        setForm({
          ticketNumber: "",
          date: new Date().toISOString().split("T")[0],
          name: "",
          department: "",
          subject: "",
          category: "",
          priority: "",
          description: "",
        });
      } else {
        setError(response.data.message || "Failed to submit ticket.");
      }
    } catch (error) {
      console.error("Error submitting ticket:", error);
      setError("Failed to submit ticket. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Create New Ticket</h2>

      <div className="bg-white shadow p-6 rounded-xl space-y-4 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ticket No.</label>
            <input
              name="ticketNumber"
              value={form.ticketNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              placeholder="Enter ticket number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              defaultValue={new Date().toISOString().split("T")[0]}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              required
              placeholder="e.g., IT, HR, Sales"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
            placeholder="Brief description of the issue"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
                required
                placeholder="Enter category"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <input
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
                required
                placeholder="Enter type"
              />
            </div> */}

            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
                required
              >
                <option value="">Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="6"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              placeholder="Detailed description of the issue"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="robot" checked={ischecked} onChange={(e) => setIschecked(e.target.checked)} />
            <label htmlFor="robot" className="text-sm">
              I am not a robot
            </label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            className="bg-turquoise text-white px-6 py-2 rounded hover:bg-trueBlue transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
