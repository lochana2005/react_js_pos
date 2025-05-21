import DefaultLineChart from "./child/DefaultLineChart";
import ZoomAbleLineChart from "./child/ZoomAbleLineChart";
import LineDataLabel from "./child/LineDataLabel";
import DoubleLineChart from "./child/DoubleLineChart";
import StepLineChart from "./child/StepLineChart";
import GradientLineChart from "./child/GradientLineChart";

const LineChartLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultLineChart */}
      <DefaultLineChart />

      {/* ZoomAbleLineChart */}
      <ZoomAbleLineChart />

      {/* LineDataLabel */}
      <LineDataLabel />

      {/* DoubleLineChart */}
      <DoubleLineChart />

      {/* StepLineChart */}
      <StepLineChart />

      {/* GradientLineChart */}
      <GradientLineChart />
    </div>
  );
};

export default LineChartLayer;
