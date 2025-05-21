import { Icon } from "@iconify/react/dist/iconify.js";
import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const RevenueReportOne = () => {
  let { paymentStatusChartSeriesThree, paymentStatusChartOptionsThree } =
    useReactApexChart();
  return (
    <div className='col-xxl-9'>
      <div className='card radius-8 border-0'>
        <div className='row'>
          <div className='col-xxl-6 pe-xxl-0'>
            <div className='card-body p-24'>
              <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                <h6 className='mb-2 fw-bold text-lg'>Revenue Report</h6>
                <div className=''>
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
              </div>
              <ul className='d-flex flex-wrap align-items-center mt-3 gap-3'>
                <li className='d-flex align-items-center gap-2'>
                  <span className='w-12-px h-12-px radius-2 bg-primary-600' />
                  <span className='text-secondary-light text-sm fw-semibold'>
                    Earning:
                    <span className='text-primary-light fw-bold'>
                      $500,00,000.00
                    </span>
                  </span>
                </li>
                <li className='d-flex align-items-center gap-2'>
                  <span className='w-12-px h-12-px radius-2 bg-yellow' />
                  <span className='text-secondary-light text-sm fw-semibold'>
                    Expense:
                    <span className='text-primary-light fw-bold'>
                      $20,000.00
                    </span>
                  </span>
                </li>
              </ul>
              <div className='mt-40'>
                <ReactApexChart
                  options={paymentStatusChartOptionsThree}
                  series={paymentStatusChartSeriesThree}
                  type='bar'
                  height={250}
                  id='paymentStatusChart'
                  className='margin-16-minus'
                />
              </div>
            </div>
          </div>
          <div className='col-xxl-6'>
            <div className='row h-100 g-0'>
              <div className='col-6 p-0 m-0'>
                <div className='card-body p-24 h-100 d-flex flex-column justify-content-center border border-top-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div>
                      <span className='mb-12 w-44-px h-44-px text-primary-600 bg-primary-light border border-primary-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                        <Icon icon='fa-solid:box-open' className='icon' />
                      </span>
                      <span className='mb-1 fw-medium text-secondary-light text-md'>
                        Total Products
                      </span>
                      <h6 className='fw-semibold text-primary-light mb-1'>
                        300
                      </h6>
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
              <div className='col-6 p-0 m-0'>
                <div className='card-body p-24 h-100 d-flex flex-column justify-content-center border border-top-0 border-start-0 border-end-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div>
                      <span className='mb-12 w-44-px h-44-px text-yellow bg-yellow-light border border-yellow-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                        <Icon
                          icon='flowbite:users-group-solid'
                          className='icon'
                        />
                      </span>
                      <span className='mb-1 fw-medium text-secondary-light text-md'>
                        Total Customer
                      </span>
                      <h6 className='fw-semibold text-primary-light mb-1'>
                        50,000
                      </h6>
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm'>
                      -5k
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
              <div className='col-6 p-0 m-0'>
                <div className='card-body p-24 h-100 d-flex flex-column justify-content-center border border-top-0 border-bottom-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div>
                      <span className='mb-12 w-44-px h-44-px text-lilac bg-lilac-light border border-lilac-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                        <Icon
                          icon='majesticons:shopping-cart'
                          className='icon'
                        />
                      </span>
                      <span className='mb-1 fw-medium text-secondary-light text-md'>
                        Total Orders
                      </span>
                      <h6 className='fw-semibold text-primary-light mb-1'>
                        1500
                      </h6>
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                      +1k
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
              <div className='col-6 p-0 m-0'>
                <div className='card-body p-24 h-100 d-flex flex-column justify-content-center border border-top-0 border-start-0 border-end-0 border-bottom-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div>
                      <span className='mb-12 w-44-px h-44-px text-pink bg-pink-light border border-pink-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                        <Icon
                          icon='ri:discount-percent-fill'
                          className='icon'
                        />
                      </span>
                      <span className='mb-1 fw-medium text-secondary-light text-md'>
                        Total Sales
                      </span>
                      <h6 className='fw-semibold text-primary-light mb-1'>
                        $25,00,000.00
                      </h6>
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                      +$10k
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueReportOne;
