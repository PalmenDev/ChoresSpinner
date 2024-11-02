import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js"; // Import Chart.js modules
import { Doughnut } from "react-chartjs-2"; // Import Doughnut chart from react-chartjs-2

// Register necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

// Dataset for the spin wheel
const datasetValues = [
  { value: 50, color: "#8f7f8f", label: "ai" },
  { value: 30, color: "#f97066", label: "be" },
  { value: 70, color: "#2e90fa", label: "ci" },
  { value: 40, color: "#fdb022", label: "de" },
  { value: 60, color: "#ee46bc", label: "ei" },
  { value: 20, color: "#854CFF", label: "fe" },
];

export default function Spinner({chores}) {
  // State variables
  const [countdown, setCountdown] = useState<number>(20);
  const [randomRotation, setRandomRotation] = useState<number>(0);
  const chartRef = useRef<ChartJS<
    "doughnut",
    (number | [number, number] | any | any | any),
    unknown
  > | null>(null);

  const data = {
    datasets: [
      {
        data: chores.map((item) => item.value),
        backgroundColor: '#f97066',
        borderColor: '#854CFF',
        cutout: "50%", // Adjusted for a larger gap
        rotation: randomRotation,
      },
    ],
    labels: chores.map((item) => item.name),
    hoverOffset: 3,
  };

  function Rotation() {
    const chart = chartRef.current;
    if (chart) {
      const randomRotation = Math.random() * 3333;
      setRandomRotation(randomRotation);
      chart.update();
    }
  }

  const circleSize = 200; // Size of the countdown circle
  const circleRadius = circleSize / 2;
  const circumference = 2 * Math.PI * circleRadius; // Circumference of the circle
  const progress = ((60 - countdown) / 60) * circumference; // Progress based on countdown (reverse direction)

  return (
    <>
    {chores.length > 1 && 
    <div className="relative w-[340px] h-[340px] md:w-[410px] md:h-[410px] flex items-center justify-center p-4">
     <button onClick={Rotation} className='p-8 bg-red-400 rounded-full'>Spin</button>
      <div className="relative w-[300px] h-[300px] md:w-[368px] md:h-[368px] p-4">
        <Doughnut
          data={data}
          options={{ plugins: { legend: { display: false } }, rotation: -90 }}
          ref={chartRef}
        />
          <circle
            className="fill-none stroke-gray-500"
            cx="50%"
            cy="50%"
            r={100}
            strokeWidth="2"
          />
          <circle
            className="fill-none stroke-white transition-all duration-1000"
            cx="50%"
            cy="50%"
            r={100}
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
          />
        <div
          id="arrow-icon"
          className="absolute top-1.5 md:top-[7px] left-1/2 transform -translate-x-1/2 text-white rotate-180"
        >
          <svg
            className="h-7 w-7 text-white z-20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 22 22 2 22"></polygon>
          </svg>
        </div>
      </div>
    </div>
      }
    </>
  );
}