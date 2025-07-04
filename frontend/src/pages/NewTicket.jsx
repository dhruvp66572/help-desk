import { useState } from "react";

export default function NewTicket() {
  const [form, setForm] = useState({
    ticketNo: "", // Auto-generated or manual
    date: new Date().toISOString().split("T")[0], // Default to today
    name: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket submitted successfully!");
    console.log("Form submitted:", form);
    // Reset form after submission
    setForm({
      ticketNo: "",
      date: new Date().toISOString().split("T")[0],
      name: "",
      department: "",
      subject: "",
      category: "",
      type: "",
      priority: "",
      description: "",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Create New Ticket</h2>

      <div className="bg-white shadow p-6 rounded-xl space-y-4 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ticket No.</label>
            <input
              name="ticketNo"
              value={form.ticketNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              placeholder="Auto-generated or manual"
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

            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <input
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
                required
                placeholder="Enter type"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <input
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
                required
                placeholder="Enter priority"
              />
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
            <input type="checkbox" id="robot" />
            <label htmlFor="robot" className="text-sm">
              I'm not a robot
            </label>
          </div>

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
