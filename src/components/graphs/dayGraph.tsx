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
const WeekdayData: BubbleData[] = [
    { name: "Weekday", x: 20, y: 60, size: 10 },
  ];
  
  const WeekendData: BubbleData[] = [
    { name: "Weekend", x: 40, y: 30, size: 20 },
  ];
  
  const NationalHolidayData: BubbleData[] = [
    { name: "National Holiday", x: 15, y: 35, size: 40 },
  ];
  
  const FestivalHolidayData: BubbleData[] = [
    { name: "Festival", x: 30, y: 20, size: 15 },
  ];  

const PostDay: React.FC = () => {
  // Prepare chart data with multiple datasets for categories
  const chartData = {
    datasets: [
      {
        label: "Weekday",
        data: WeekdayData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(255, 99, 132, 1)", // Deep Red
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Weekend",
        data: WeekendData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(54, 162, 235, 1)", // Deep blue
        borderColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "National Holiday",
        data: NationalHolidayData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
        backgroundColor: "rgba(255, 206, 86, 1)", // Deep yellow
        borderColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Festival",
        data: FestivalHolidayData.map((d) => ({ x: d.x, y: d.y, r: d.size })),
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
            text: "Post Effectiveness by Days", // Set the chart title text
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

export default PostDay;
