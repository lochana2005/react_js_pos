import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const SupportTracker = () => {
  let { userOverviewDonutChartOptionsOne, userOverviewDonutChartSeriesOne } =
    useReactApexChart();
  return (
    <div className='col-xxl-4 col-xl-6'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg'>Support Tracker</h6>
            <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
          <div className='mt-32 d-flex  gap-24 align-items-center justify-content-between'>
            <div className='d-flex flex-column gap-24'>
              <div className='d-flex align-items-center gap-3'>
                <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-primary-100 flex-shrink-0'>
                  <img
                    src='assets/images/home-nine/ticket1.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-bold'>172</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    New Tickets{" "}
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3'>
                <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-warning-100 flex-shrink-0'>
                  <img
                    src='assets/images/home-nine/ticket2.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-bold'>172</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Open Tickets
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3'>
                <div className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-lilac-100 flex-shrink-0'>
                  <img
                    src='assets/images/home-nine/ticket3.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-bold'>172</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Response Time
                  </span>
                </div>
              </div>
            </div>
            <div className='position-relative'>
              <div
                id='userOverviewDonutChart'
                className='apexcharts-tooltip-z-none'
              >
                <ReactApexChart
                  options={userOverviewDonutChartOptionsOne}
                  series={userOverviewDonutChartSeriesOne}
                  type='donut'
                  height={270}
                />
              </div>
              <div className='text-center max-w-135-px max-h-135-px bg-warning-focus rounded-circle p-16 aspect-ratio-1 d-flex flex-column justify-content-center align-items-center position-absolute start-50 top-50 translate-middle'>
                <h6 className='fw-bold'>120</h6>
                <span className='text-secondary-light'>Total Tickets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTracker;
