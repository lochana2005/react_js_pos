import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const DoubleLineChart = () => {
  let { doubleLineChartSeries, doubleLineChartOptions } = useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Line Chart Animation</h6>
        </div>
        <div className='card-body p-24'>
          <ReactApexChart
            id='doubleLineChart'
            options={doubleLineChartOptions}
            series={doubleLineChartSeries}
            type='line'
            height={264}
          />
        </div>
      </div>
    </div>
  );
};

export default DoubleLineChart;
