import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import css from "./ChartBar.module.css";
import { Heading } from "../Heading/Heading";

Chart.register(...registerables);

const ChartBar = ({ users }) => {
  const data = {
    labels: ["Users"],
    datasets: [
      {
        label: "Users",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [users.length, 100, 10],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className={css.wrapper}>
      <Heading
        title="Number of registered participants for this event"
        bottom
        info
      />
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartBar;
