import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react/dist/iconify.js";

const CampaignStaticOne = () => {
  let { donutChartSeriesTwo, donutChartOptionsTwo } = useReactApexChart();
  return (
    <div className='col-xxl-4'>
      <div className='row gy-4'>
        <div className='col-xxl-12 col-sm-6'>
          <div className='card h-100 radius-8 border-0'>
            <div className='card-body p-24'>
              <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                <h6 className='mb-2 fw-bold text-lg'>Campaigns</h6>
                <div className=''>
                  <select
                    className='form-select form-select-sm w-auto bg-base border text-secondary-light'
                    defaultValue='Select Frequency'
                  >
                    <option value='Select Frequency' disabled>
                      Select Frequency
                    </option>
                    <option value='Yearly'>Yearly</option>
                    <option value='Monthly'>Monthly</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Today'>Today</option>
                  </select>
                </div>
              </div>
              <div className='mt-3'>
                <div className='d-flex align-items-center justify-content-between gap-3 mb-12'>
                  <div className='d-flex align-items-center'>
                    <span className='text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-orange'>
                      <Icon icon='majesticons:mail' className='icon' />
                    </span>
                    <span className='text-primary-light fw-medium text-sm ps-12'>
                      Email
                    </span>
                  </div>
                  <div className='d-flex align-items-center gap-2 w-100'>
                    <div className='w-100 max-w-66 ms-auto'>
                      <div
                        className='progress progress-sm rounded-pill'
                        role='progressbar'
                        aria-label='Success example'
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar bg-orange rounded-pill'
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                    <span className='text-secondary-light font-xs fw-semibold'>
                      80%
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-3 mb-12'>
                  <div className='d-flex align-items-center'>
                    <span className='text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-success-main'>
                      <Icon icon='eva:globe-2-fill' className='icon' />
                    </span>
                    <span className='text-primary-light fw-medium text-sm ps-12'>
                      Website
                    </span>
                  </div>
                  <div className='d-flex align-items-center gap-2 w-100'>
                    <div className='w-100 max-w-66 ms-auto'>
                      <div
                        className='progress progress-sm rounded-pill'
                        role='progressbar'
                        aria-label='Success example'
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar bg-success-main rounded-pill'
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                    <span className='text-secondary-light font-xs fw-semibold'>
                      60%
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-3 mb-12'>
                  <div className='d-flex align-items-center'>
                    <span className='text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-info-main'>
                      <Icon
                        icon='fa6-brands:square-facebook'
                        className='icon'
                      />
                    </span>
                    <span className='text-primary-light fw-medium text-sm ps-12'>
                      Facebook
                    </span>
                  </div>
                  <div className='d-flex align-items-center gap-2 w-100'>
                    <div className='w-100 max-w-66 ms-auto'>
                      <div
                        className='progress progress-sm rounded-pill'
                        role='progressbar'
                        aria-label='Success example'
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar bg-info-main rounded-pill'
                          style={{ width: "49%" }}
                        />
                      </div>
                    </div>
                    <span className='text-secondary-light font-xs fw-semibold'>
                      49%
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-3'>
                  <div className='d-flex align-items-center'>
                    <span className='text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-indigo'>
                      <Icon
                        icon='fluent:location-off-20-filled'
                        className='icon'
                      />
                    </span>
                    <span className='text-primary-light fw-medium text-sm ps-12'>
                      Email
                    </span>
                  </div>
                  <div className='d-flex align-items-center gap-2 w-100'>
                    <div className='w-100 max-w-66 ms-auto'>
                      <div
                        className='progress progress-sm rounded-pill'
                        role='progressbar'
                        aria-label='Success example'
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar bg-indigo rounded-pill'
                          style={{ width: "70%" }}
                        />
                      </div>
                    </div>
                    <span className='text-secondary-light font-xs fw-semibold'>
                      70%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-12 col-sm-6'>
          <div className='card h-100 radius-8 border-0 overflow-hidden'>
            <div className='card-body p-24'>
              <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                <h6 className='mb-2 fw-bold text-lg'>Customer Overview</h6>
                <div className=''>
                  <select
                    className='form-select form-select-sm w-auto bg-base border text-secondary-light'
                    defaultValue='Select Frequency'
                  >
                    <option value='Select Frequency' disabled>
                      Select Frequency
                    </option>
                    <option value='Yearly'>Yearly</option>
                    <option value='Monthly'>Monthly</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Today'>Today</option>
                  </select>
                </div>
              </div>
              <div className='d-flex flex-wrap align-items-center mt-3'>
                <ul className='flex-shrink-0'>
                  <li className='d-flex align-items-center gap-2 mb-28'>
                    <span className='w-12-px h-12-px rounded-circle bg-success-main' />
                    <span className='text-secondary-light text-sm fw-medium'>
                      Total: 500
                    </span>
                  </li>
                  <li className='d-flex align-items-center gap-2 mb-28'>
                    <span className='w-12-px h-12-px rounded-circle bg-warning-main' />
                    <span className='text-secondary-light text-sm fw-medium'>
                      New: 500
                    </span>
                  </li>
                  <li className='d-flex align-items-center gap-2'>
                    <span className='w-12-px h-12-px rounded-circle bg-primary-600' />
                    <span className='text-secondary-light text-sm fw-medium'>
                      Active: 1500
                    </span>
                  </li>
                </ul>
                <div>
                  <ReactApexChart
                    options={donutChartOptionsTwo}
                    series={donutChartSeriesTwo}
                    type='donut'
                    height={300}
                    id='donutChart'
                    className='flex-grow-1 apexcharts-tooltip-z-none title-style circle-none'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignStaticOne;
