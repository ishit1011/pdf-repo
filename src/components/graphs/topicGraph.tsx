import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  Title,
} from "chart.js";
import { BubbleData } from "@/types/chartTypes";

// Register Chart.js components
ChartJS.register(Tooltip, Legend, LinearScale, PointElement, Title);

// Example data for different categories
const skincareData: BubbleData[] = [
    { name: "Skincare", x: 20, y: 70, size: 10 },
  ];
  
  const makeupData: BubbleData[] = [
    { name: "Makeup", x: 50, y: 60, size: 20 },
  ];
  
  const diwaliData: BubbleData[] = [
    { name: "Diwali", x: 25, y: 35, size: 40 },
  ];
  
  const holiData: BubbleData[] = [
    { name: "Holi", x: 45, y: 30, size: 15 },
  ];
  

const PostTopic: React.FC = () => {
  // Prepare chart data with multiple datasets for categories
  const chartData = {
    datasets: [
      {
        label: "Skincare",
        data: skincareData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(255, 99, 132, 1)", // Deep Red
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Makeup",
        data: makeupData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(54, 162, 235, 1)", // Deep blue
        borderColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Diwali",
        data: diwaliData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(255, 206, 86, 1)", // Deep yellow
        borderColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Holi",
        data: holiData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(75, 192, 192, 1)", // Deep green
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow resizing
    plugins: {
        title: {
            display: true,
            text: "Post Effectiveness by Topics", // Set the chart title text
            font: {
              size: 18, // Customize font size
              family: "Arial", // Optional: Set font family
            }
        },
        legend: {
            display: true,
            position: "bottom" as const,
            labels: {
            boxWidth: 15,
            padding: 10, // Add spacing between legend items and graph
            },
        },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Audience Engagement Rate",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Engagement Depth",
        },
      },
    },
  };

  // Adjust the container size for a larger chart
  return (
    <div style={{ width: "800px", height: "600px", margin: "0 auto" }}>
      <Bubble data={chartData} options={options} />
    </div>
  );
};

export default PostTopic;
