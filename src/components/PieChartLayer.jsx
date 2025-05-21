import BasicPieChart from "./child/BasicPieChart";
import DonutChart from "./child/DonutChart";
import RadarChart from "./child/RadarChart";
import MultipleSeries from "./child/MultipleSeries";

const PieChartLayer = () => {
  return (
    <div className='row gy-4'>
      {/* BasicPieChart */}
      <BasicPieChart />

      {/* DonutChart */}
      <DonutChart />

      {/* RadarChart */}
      <RadarChart />

      {/* MultipleSeries */}
      <MultipleSeries />
    </div>
  );
};

export default PieChartLayer;
