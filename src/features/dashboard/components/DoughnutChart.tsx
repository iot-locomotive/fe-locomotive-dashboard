import { Chart as ChartJS, Filler, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import TitleCard from "../../../components/cards/TitleCard"
import { LocomotiveSummary } from "../../../services/locomotiveSummary"
import { useEffect, useState } from "react"

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend)

interface DoughnutChartPropsType {
  summary: LocomotiveSummary | undefined
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
}

const labels = ["Under Maintenance", "Transit at Station", "Departure"]

function DoughnutChart({ summary }: DoughnutChartPropsType) {
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "# of Locomotive",
        data: [0, 0, 0],
        backgroundColor: [
          "rgba(255, 206, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  })

  useEffect(() => {
    setData((prev) => {
      const newDataSets = [...prev.datasets]

      newDataSets[0].data[0] = summary?.totalLocMaintenance || 0
      newDataSets[0].data[1] = summary?.totalLocTransit || 0
      newDataSets[0].data[2] = summary?.totalLocDeparture || 0

      return {
        ...prev,
        datasets: [...newDataSets],
      }
    })
  }, [summary])

  return (
    <TitleCard title={"Locomotive by Status"}>
      <div className="flex flex-row justify-center">
        <div className="basis-2/5">
          <Doughnut options={options} data={data} />
        </div>
      </div>
    </TitleCard>
  )
}

export default DoughnutChart
