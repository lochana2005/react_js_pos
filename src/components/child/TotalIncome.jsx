import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const TotalIncome = () => {
  let { statisticsDonutChartOptionsTwo, statisticsDonutChartSeriesTwo } =
    useReactApexChart();
  return (
    <div className='col-xxl-12 col-xl-6'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between'>
          <h6 className='mb-2 fw-bold text-lg'>Total Income</h6>
          <div className=''>
            <select className='form-select form-select-sm w-auto bg-base border-0 text-secondary-light'>
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
        <div className='card-body p-24'>
          <div className='position-relative'>
            <div
              id='statisticsDonutChart'
              className='mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none'
            >
              <ReactApexChart
                options={statisticsDonutChartOptionsTwo}
                series={statisticsDonutChartSeriesTwo}
                type='donut'
                height={260}
              />
            </div>
            <div className='text-center position-absolute top-50 start-50 translate-middle'>
              <span className='text-secondary-light'>Income</span>
              <h6 className=''>$28,500</h6>
            </div>
          </div>
          <ul className='row gy-4 mt-3'>
            <li className='col-6 d-flex flex-column align-items-center'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-8-px rounded-pill bg-warning-600' />
                <span className='text-secondary-light text-sm fw-normal'>
                  Net Income
                </span>
              </div>
              <h6 className='text-primary-light fw-bold mb-0'>$50,000</h6>
            </li>
            <li className='col-6 d-flex flex-column align-items-center'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-8-px rounded-pill bg-success-600' />
                <span className='text-secondary-light text-sm fw-normal'>
                  Commission{" "}
                </span>
              </div>
              <h6 className='text-primary-light fw-bold mb-0'>$20,000</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TotalIncome;
