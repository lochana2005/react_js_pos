import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react/dist/iconify.js";

const EarningStaticOne = () => {
  let { barChartSeriesTwo, barChartOptionsTwo } = useReactApexChart();
  return (
    <div className='col-xxl-8'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <div>
              <h6 className='mb-2 fw-bold text-lg'>Earning Statistic</h6>
              <span className='text-sm fw-medium text-secondary-light'>
                Yearly earning overview
              </span>
            </div>
            <div className=''>
              <select
                className='form-select form-select-sm w-auto bg-base border text-secondary-light'
                defaultValue=''
              >
                <option value='' disabled>
                  Select Frequency
                </option>
                <option value='Yearly'>Yearly</option>
                <option value='Monthly'>Monthly</option>
                <option value='Weekly'>Weekly</option>
                <option value='Today'>Today</option>
              </select>
            </div>
          </div>
          <div className='mt-20 d-flex justify-content-center flex-wrap gap-3'>
            <div className='d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item'>
              <span className='bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white'>
                <Icon icon='fluent:cart-16-filled' className='icon' />
              </span>
              <div>
                <span className='text-secondary-light text-sm fw-medium'>
                  Sales
                </span>
                <h6 className='text-md fw-semibold mb-0'>$200k</h6>
              </div>
            </div>
            <div className='d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item'>
              <span className='bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white'>
                <Icon icon='uis:chart' className='icon' />
              </span>
              <div>
                <span className='text-secondary-light text-sm fw-medium'>
                  Income
                </span>
                <h6 className='text-md fw-semibold mb-0'>$200k</h6>
              </div>
            </div>
            <div className='d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item'>
              <span className='bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white'>
                <Icon icon='ph:arrow-fat-up-fill' className='icon' />
              </span>
              <div>
                <span className='text-secondary-light text-sm fw-medium'>
                  Profit
                </span>
                <h6 className='text-md fw-semibold mb-0'>$200k</h6>
              </div>
            </div>
          </div>
          <div id='barChart'>
            <ReactApexChart
              options={barChartOptionsTwo}
              series={barChartSeriesTwo}
              type='bar'
              height={310}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningStaticOne;
