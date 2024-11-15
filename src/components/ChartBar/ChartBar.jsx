// import { Chart, registerables } from "chart.js";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
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
    <div className="w-[555px] flex flex-col mt-[45px] m-auto bg-light border-4 border-primary rounded-2xl shadow-custom-primary ">
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
