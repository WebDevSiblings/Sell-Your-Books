import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Like", "Dislike"],
  datasets: [
    {
      label: "# of Votes",
      data: [950000, 50000],
      backgroundColor: ["rgba(237,108,3, 0.8)", "rgba(242, 153, 29, 0.8)"],
      borderColor: ["rgba(255, 128, 25, 0.8)", "rgba(252, 150, 8, 1)"],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return (
    <div
      style={{
        height: "60vh",
        position: "relative",
        marginBottom: "1%",
        padding: "1%",
      }}
    >
      <Pie data={data} />
    </div>
  );
}
