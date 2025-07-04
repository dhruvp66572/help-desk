import { useEffect, useState } from "react";
import axiosinstance from "../utils/axiosInstance";


export default function UserLogHistory() {
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosinstance.get("/logs"); 
      if (response.data.success) {
        console.log("Fetched logs:", response.data.logs);
        setLogs(response.data.logs);
      } else {
        console.log(response)
        console.error("No logs found in the response");
      }
    } catch (error) {
      console.error("Error fetching log data:", error);
    }
  };

  const filteredLogs = logs.filter(
    (log) =>
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Log History</h2>

      <input
        type="text"
        placeholder="Search by user or action"
        className="border border-gray-300 rounded px-3 py-2 mb-4 w-full max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300">
          <thead className="bg-cleanWhite">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Action</th>
              <th className="p-2 border">Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-100">
                <td className="p-2 border">{log.id}</td>
                <td className="p-2 border">{log.user}</td>
                <td className="p-2 border">{log.action}</td>
                <td className="p-2 border">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
