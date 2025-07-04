import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useState } from "react";

const dummyData = {
  user: [{ id: 1, name: "John Doe", email: "john@example.com" }],
  operator: [{ id: 2, name: "Jane Smith", email: "jane@example.com" }],
  support: [{ id: 3, name: "Alex Ray", email: "alex@example.com" }],
};

export default function Database() {
  const [section, setSection] = useState("user");
  const [data, setData] = useState(dummyData);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [modalForm, setModalForm] = useState({ id: null, name: "", email: "" });

  const sectionMap = {
    user: "Users",
    operator: "Operators",
    support: "Technical Support",
  };

  // Open modal for add
  const handleAdd = () => {
    setModalMode("add");
    setModalForm({ id: null, name: "", email: "" });
    setModalOpen(true);
  };

  // Open modal for edit
  const handleEdit = (item) => {
    setModalMode("edit");
    setModalForm({ id: item.id, name: item.name, email: item.email });
    setModalOpen(true);
  };

  // Save (add or edit)
  const handleModalSave = () => {
    if (!modalForm.name.trim() || !modalForm.email.trim()) return;
    if (modalMode === "add") {
      // Generate new id
      const maxId = data[section].reduce((max, item) => Math.max(max, item.id), 0);
      setData((prev) => ({
        ...prev,
        [section]: [
          ...prev[section],
          { id: maxId + 1, name: modalForm.name, email: modalForm.email },
        ],
      }));
    } else if (modalMode === "edit") {
      setData((prev) => ({
        ...prev,
        [section]: prev[section].map((item) =>
          item.id === modalForm.id ? { ...item, ...modalForm } : item
        ),
      }));
    }
    setModalOpen(false);
    setModalForm({ id: null, name: "", email: "" });
  };

  // Cancel modal
  const handleModalCancel = () => {
    setModalOpen(false);
    setModalForm({ id: null, name: "", email: "" });
  };

  // Delete
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    setData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Database Management</h2>

      {/* Section Tabs */}
      <div className="flex gap-4 mb-4">
        {Object.keys(sectionMap).map((key) => (
          <button
            key={key}
            onClick={() => {
              setSection(key);
              setModalOpen(false);
            }}
            className={`px-4 py-2 rounded ${
              section === key ? "bg-turquoise text-white" : "border"
            }`}
          >
            {sectionMap[key]}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300">
          <thead className="bg-cleanWhite">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data[section].map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="p-2 border">{item.id}</td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border flex items-center gap-3">
                  <FaEdit
                    className="text-blue-600 cursor-pointer hover:scale-110"
                    title="Edit"
                    onClick={() => handleEdit(item)}
                  />
                  <FaTrash
                    className="text-red-600 cursor-pointer hover:scale-110"
                    title="Delete"
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Button */}
      <button
        className="mt-4 bg-turquoise text-white px-4 py-2 rounded flex items-center gap-2"
        onClick={handleAdd}
      >
        <FaPlus /> Add {sectionMap[section]}
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded shadow-lg p-6 min-w-[320px]">
            <h3 className="text-lg font-bold mb-4">
              {modalMode === "add" ? `Add ${sectionMap[section]}` : `Edit ${sectionMap[section]}`}
            </h3>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Name</label>
              <input
                className="border px-2 py-1 w-full"
                value={modalForm.name}
                onChange={(e) =>
                  setModalForm((f) => ({ ...f, name: e.target.value }))
                }
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Email</label>
              <input
                className="border px-2 py-1 w-full"
                value={modalForm.email}
                onChange={(e) =>
                  setModalForm((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                className="bg-turquoise text-white px-4 py-1 rounded"
                onClick={handleModalSave}
              >
                Save
              </button>
              <button
                className="bg-gray-200 px-4 py-1 rounded"
                onClick={handleModalCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
