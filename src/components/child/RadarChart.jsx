import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const RadarChart = () => {
  let { radarChartSeries, radarChartOptions } = useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Radar Chart</h6>
        </div>
        <div className='card-body p-24 text-center'>
          <ReactApexChart
            id='radarChart'
            className='square-marker check-marker series-gap-24 d-flex justify-content-center'
            options={radarChartOptions}
            series={radarChartSeries}
            type='radar'
            height={264}
          />
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
