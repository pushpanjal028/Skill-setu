import React, { useEffect, useState } from "react";
import { Bar, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WorkforceGraph = () => {

  const [marketData, setMarketData] = useState(null);
  const [error, setError] = useState(null);

 useEffect(() => {

  const fetchData = async () => {

    try {

      const res = await fetch(
        "http://localhost:5001"
      );

      if (!res.ok) {
        throw new Error("Server error: " + res.status);
      }

      const text = await res.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Server returned HTML instead of JSON:", text);
        throw new Error("Invalid JSON returned from backend");
      }

      setMarketData(data);

    } catch (err) {

      console.error("Fetch error:", err);
      setError(err.message);

    }

  };

  fetchData();

}, []);

  const skills = marketData.top_market_skills || [];
  const comparison = marketData.user_comparison || [];

  const barData = {
    labels: skills.map(s => s.skill),
    datasets: [
      {
        label: "Market Demand",
        data: skills.map(s => s.frequency),
        backgroundColor: "#3b82f6"
      }
    ]
  };

  const radarData = {
    labels: comparison.map(s => s.skill),
    datasets: [
      {
        label: "Your Skill Level",
        data: comparison.map(s => s.proficiency_score),
        backgroundColor: "rgba(59,130,246,0.3)",
        borderColor: "#3b82f6"
      }
    ]
  };

  return (

    <div className="space-y-10">

      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">
          📊 Top Market Skills
        </h2>
        <Bar data={barData} />
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">
          🧠 Your Skills vs Market
        </h2>
        <Radar data={radarData} />
      </div>

    </div>
  );
};

export default WorkforceGraph;