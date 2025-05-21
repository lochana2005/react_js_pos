import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const MultipleSeries = () => {
  let { multipleSeriesChartSeries, multipleSeriesChartOptions } =
    useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Multiple series</h6>
        </div>
        <div className='card-body p-24 text-center'>
          <ReactApexChart
            id='multipleSeriesChart'
            className='square-marker check-marker series-gap-24 d-flex justify-content-center'
            options={multipleSeriesChartOptions}
            series={multipleSeriesChartSeries}
            type='polarArea'
            height={264}
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleSeries;
