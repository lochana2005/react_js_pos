import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const GradientLineChart = () => {
  let { gradientLineChartSeries, gradientLineChartOptions } =
    useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Gradient Charts</h6>
        </div>
        <div className='card-body p-24'>
          <ReactApexChart
            id='gradientLineChart'
            options={gradientLineChartOptions}
            series={gradientLineChartSeries}
            type='line'
            height={264}
          />
        </div>
      </div>
    </div>
  );
};

export default GradientLineChart;
