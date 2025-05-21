import ReactApexChart from "react-apexcharts";
import useReactApexChart from "../../hook/useReactApexChart";

const ZoomAbleLineChart = () => {
  let { zoomAbleLineChartSeries, zoomAbleLineChartOptions } =
    useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Zoomable Chart</h6>
        </div>
        <div className='card-body p-24'>
          <ReactApexChart
            id='zoomAbleLineChart'
            options={zoomAbleLineChartOptions}
            series={zoomAbleLineChartSeries}
            type='area'
            height={264}
          />
        </div>
      </div>
    </div>
  );
};

export default ZoomAbleLineChart;
