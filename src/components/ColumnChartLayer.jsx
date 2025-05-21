import useReactApexChart from "../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const ColumnChartLayer = () => {
  let {
    columnChartSeriesOne,
    columnChartOptionsOne,
    columnChartSeriesTwo,
    columnChartOptionsTwo,
    columnChartSeriesThree,
    columnChartOptionsThree,
    columnChartSeriesFour,
    columnChartOptionsFour,
  } = useReactApexChart();
  return (
    <div className='row gy-4'>
      <div className='col-md-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Column Charts</h6>
          </div>
          <div className='card-body p-24'>
            <ReactApexChart
              id='columnChart'
              options={columnChartOptionsOne}
              series={columnChartSeriesOne}
              type='bar'
              height={264}
            />
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Column Charts</h6>
          </div>
          <div className='card-body p-24'>
            <ReactApexChart
              id='columnGroupBarChart'
              options={columnChartOptionsTwo}
              series={columnChartSeriesTwo}
              type='bar'
              height={264}
            />
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Group Column</h6>
          </div>
          <div className='card-body p-24'>
            <ReactApexChart
              id='groupColumnBarChart'
              options={columnChartOptionsThree}
              series={columnChartSeriesThree}
              type='bar'
              height={264}
            />
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Simple Column</h6>
          </div>
          <div className='card-body p-24'>
            <ReactApexChart
              id='upDownBarchart'
              options={columnChartOptionsFour}
              series={columnChartSeriesFour}
              type='bar'
              height={264}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnChartLayer;
