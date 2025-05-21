import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const StepLineChart = () => {
  let { stepLineChartSeries, stepLineChartOptions } = useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Stepline Charts</h6>
        </div>
        <div className='card-body p-24'>
          <ReactApexChart
            id='stepLineChart'
            options={stepLineChartOptions}
            series={stepLineChartSeries}
            type='line'
            height={270}
          />
        </div>
      </div>
    </div>
  );
};

export default StepLineChart;
