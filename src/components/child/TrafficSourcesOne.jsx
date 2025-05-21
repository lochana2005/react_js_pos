import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const TrafficSourcesOne = () => {
  let { userOverviewDonutChartSeries, userOverviewDonutChartOptions } =
    useReactApexChart();
  return (
    <div className='col-xxl-4 col-md-6'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24 d-flex flex-column justify-content-between gap-8'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Traffic Sources</h6>
            <select
              className='form-select form-select-sm w-auto bg-base border text-secondary-light'
              defaultValue='Yearly'
            >
              <option value='Yearly'>Yearly</option>
              <option value='Monthly'>Monthly</option>
              <option value='Weekly'>Weekly</option>
              <option value='Today'>Today</option>
            </select>
          </div>
          <div
            id='userOverviewDonutChart'
            className='margin-16-minus y-value-left'
          />
          <ReactApexChart
            options={userOverviewDonutChartOptions}
            series={userOverviewDonutChartSeries}
            type='donut'
            height={270}
          />
          <ul className='d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3'>
            <li className='d-flex flex-column gap-8'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-12-px rounded-circle bg-warning-600' />
                <span className='text-secondary-light text-sm fw-semibold'>
                  Organic Search
                </span>
              </div>
              <span className='text-primary-light fw-bold'>875</span>
            </li>
            <li className='d-flex flex-column gap-8'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-12-px rounded-circle bg-success-600' />
                <span className='text-secondary-light text-sm fw-semibold'>
                  Referrals
                </span>
              </div>
              <span className='text-primary-light fw-bold'>450</span>
            </li>
            <li className='d-flex flex-column gap-8'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-12-px rounded-circle bg-primary-600' />
                <span className='text-secondary-light text-sm fw-semibold'>
                  Social Media
                </span>
              </div>
              <span className='text-primary-light fw-bold'>4,305</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrafficSourcesOne;
