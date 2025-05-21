import { Icon } from "@iconify/react/dist/iconify.js";

import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

const StatisticsOne = () => {
  let {
    dailyIconBarChartSeriesTwo,
    dailyIconBarChartOptionsTwo,
    createChartEight,
  } = useReactApexChart();
  return (
    <div className='col-xxl-12 col-md-6'>
      <div className='card h-100'>
        <div className='card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between'>
          <h6 className='fw-bold text-lg mb-0'>Statistics</h6>
          <Link
            to='#'
            className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
          >
            View All
            <Icon icon='solar:alt-arrow-right-linear' className='icon' />
          </Link>
        </div>
        <div className='card-body'>
          <div className='d-flex align-items-center gap-1 justify-content-between mb-44'>
            <div>
              <h5 className='fw-semibold mb-12'>145</h5>
              <span className='text-secondary-light fw-normal text-xl'>
                Total Art Sold
              </span>
            </div>

            <ReactApexChart
              id='dailyIconBarChart'
              options={dailyIconBarChartOptionsTwo}
              series={dailyIconBarChartSeriesTwo}
              type='bar'
              height={80}
              width={164}
            />
          </div>
          <div className='d-flex align-items-center gap-1 justify-content-between'>
            <div>
              <h5 className='fw-semibold mb-12'>750 ETH</h5>
              <span className='text-secondary-light fw-normal text-xl'>
                Total Earnings
              </span>
            </div>

            <div id='areaChart'>
              {/* pass the color value */}
              {createChartEight("#FF9F29")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsOne;
