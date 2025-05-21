import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const UserActivatesTwo = () => {
  let { statisticsDonutChartSeriesThree, statisticsDonutChartOptionsThree } =
    useReactApexChart();
  return (
    <div className='col-xxl-3'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <h6 className='mb-2 fw-bold text-lg'>My Portfolio</h6>
          <div className='position-relative'>
            <span className='w-80-px h-80-px bg-base shadow text-primary-light fw-bold text-xxl d-flex justify-content-center align-items-center rounded-circle position-absolute end-0 top-0 z-1'>
              20k
            </span>
            <ReactApexChart
              options={statisticsDonutChartOptionsThree}
              series={statisticsDonutChartSeriesThree}
              type='donut'
              height={230}
              id='statisticsDonutChart'
              className='mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none'
            />
            <span className='w-80-px h-80-px bg-base shadow text-primary-light fw-bold text-xxl d-flex justify-content-center align-items-center rounded-circle position-absolute start-0 bottom-0 z-1'>
              50k
            </span>
          </div>
          <ul className='d-flex flex-wrap flex-column mt-64 gap-3'>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-16-px h-16-px radius-2 bg-primary-600' />
              <span className='text-secondary-light text-lg fw-normal'>
                Total Gain:
                <span className='text-primary-light fw-bold text-lg'>
                  $50,000
                </span>
              </span>
            </li>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-16-px h-16-px radius-2 bg-yellow' />
              <span className='text-secondary-light text-lg fw-normal'>
                Total Investment:
                <span className='text-primary-light fw-bold text-lg'>
                  $20,000
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserActivatesTwo;
