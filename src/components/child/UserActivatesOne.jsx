import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const UserActivatesOne = () => {
  let { statisticsDonutChartSeriesThree, statisticsDonutChartOptionsThree } =
    useReactApexChart();
  return (
    <div className='col-xxl-12 col-lg-6'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg'>User Activates</h6>
            <div className=''>
              <select
                className='form-select form-select-sm w-auto bg-base border text-secondary-light'
                defaultValue='This Week'
              >
                <option value='This Week'>This Week</option>
                <option value='This Month'>This Month</option>
                <option value='This Year'>This Year</option>
              </select>
            </div>
          </div>
          <div className='position-relative'>
            <span className='w-80-px h-80-px bg-base shadow text-primary-light fw-semibold text-xl d-flex justify-content-center align-items-center rounded-circle position-absolute end-0 top-0 z-1'>
              +30%
            </span>
            <ReactApexChart
              options={statisticsDonutChartOptionsThree}
              series={statisticsDonutChartSeriesThree}
              type='donut'
              height={260}
              id='statisticsDonutChart'
              className='mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none'
            />
            <span className='w-80-px h-80-px bg-base shadow text-primary-light fw-semibold text-xl d-flex justify-content-center align-items-center rounded-circle position-absolute start-0 bottom-0 z-1'>
              +25%
            </span>
          </div>
          <ul className='d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3'>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px radius-2 bg-primary-600' />
              <span className='text-secondary-light text-sm fw-normal'>
                Visits By Day:
                <span className='text-primary-light fw-bold'>20,000</span>
              </span>
            </li>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px radius-2 bg-yellow' />
              <span className='text-secondary-light text-sm fw-normal'>
                Referral Join:
                <span className='text-primary-light fw-bold'>25,000</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserActivatesOne;
