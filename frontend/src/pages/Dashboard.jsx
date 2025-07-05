import {
  FaCheckCircle,
  FaHourglassHalf,
  FaUser,
  FaUsers,
  FaUserTie,
  FaUserShield,
} from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import axiosinstance from "../utils/axiosInstance";

ChartJS.register(ArcElement, Tooltip, Legend);

import { useState, useMemo } from "react";

export default function Dashboard({ role }) {
  const [ticketData, setTicketData] = useState([5, 2, 3, 2]);

  const ticketStats = useMemo(
    () => ({
      labels: ["Total","Open", "In Progress", "Closed"],
      datasets: [
        {
          data: ticketData,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          hoverOffset: 4,
        },
      ],
    }),
    [ticketData]
  );

  useEffect(() => {
    // fetch dashboard data from api
    const fetchData = async () => {
      try {
        const response = await axiosinstance.get("/stats");
        console.log("Dashboard data fetched successfully:", response.data);
        setTicketData(
          Array.isArray(response.data.ticketStats) && response.data.ticketStats.length === 4
            ? response.data.ticketStats
            : [0, 0, 0, 0]
        );
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 flex flex-col items-center">
          <h3 className="font-semibold mb-2">Ticket Status Overview</h3>
          <Doughnut data={ticketStats} className="w-48 h-48" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 flex-1">
          <Card
            icon={<FaCheckCircle size={32} />}
            label="Total Solved"
            value={Array.isArray(ticketData) ? ticketData[1] : 0}
            color="from-green-400 to-green-600"
          />
          <Card
            icon={<FaHourglassHalf size={32} />}
            label="Awaiting Approval"
            value={Array.isArray(ticketData) ? ticketData[2] : 0}
            color="from-red-400 to-red-600"
          />
          <Card
            icon={<FaHourglassHalf size={32} />}
            label="In Progress"
            value={Array.isArray(ticketData) ? ticketData[3] : 0}
            color="from-cyan-400 to-cyan-600"
          />
          <Card
            icon={<FaCheckCircle size={32} />}
            label="Total Tickets"
            value={Array.isArray(ticketData) ? ticketData[0] : 0}
            color="from-blue-400 to-blue-600"
          />

          {/* Admin only cards */}
          {role === "admin" && (
            <>
              <Card
                icon={<FaUsers size={32} />}
                label="Total Users"
                value={5}
                color="from-yellow-400 to-yellow-600"
              />
              <Card
                icon={<FaUserTie size={32} />}
                label="Total Operators"
                value={3}
                color="from-purple-400 to-purple-600"
              />
              <Card
                icon={<FaUserShield size={32} />}
                label="Total Pending"
                value={1}
                color="from-gray-400 to-gray-600"
              />
              <Card
                icon={<FaUser size={32} />}
                label="Total Support"
                value={2}
                color="from-orange-400 to-orange-600"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ icon, label, value, color }) {
  return (
    <div
      className={`bg-gradient-to-br ${color} text-white rounded-lg p-4 shadow-lg flex items-center gap-4 hover:scale-105 transition-transform`}
    >
      <div className="bg-white bg-opacity-20 rounded-full p-2">{icon}</div>
      <div>
        <p className="text-sm">{label}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
