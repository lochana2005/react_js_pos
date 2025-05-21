import { Icon } from "@iconify/react/dist/iconify.js";

import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const SalesStatisticTwo = () => {
  let {
    createChartFive,
    semiCircleGaugeSeriesOne,
    semiCircleGaugeOptionsOne,
    dailyIconBarChartSeriesOne,
    dailyIconBarChartOptionsOne,
  } = useReactApexChart();
  return (
    <div className='col-xxl-4'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <h6 className='mb-2 fw-bold text-lg'>Statistic</h6>
          <div className='mt-24'>
            <div className='d-flex align-items-center gap-1 justify-content-between mb-44'>
              <div>
                <span className='text-secondary-light fw-normal mb-12 text-xl'>
                  Daily Conversions
                </span>
                <h5 className='fw-semibold mb-0'>%60</h5>
              </div>
              <div className='position-relative'>
                <ReactApexChart
                  id='semiCircleGauge'
                  options={semiCircleGaugeOptionsOne}
                  series={semiCircleGaugeSeriesOne}
                  type='radialBar'
                  width={200}
                />
                <span className='w-36-px h-36-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center position-absolute start-50 translate-middle top-100'>
                  <Icon
                    icon='mdi:emoji'
                    className='text-primary-600 text-md mb-0'
                  />
                </span>
              </div>
            </div>
            <div className='d-flex align-items-center gap-1 justify-content-between mb-44'>
              <div>
                <span className='text-secondary-light fw-normal mb-12 text-xl'>
                  Visits By Day
                </span>
                <h5 className='fw-semibold mb-0'>20k</h5>
              </div>
              <div id='areaChart'>
                {/* Pass the color value */}
                {createChartFive("#FF9F29")}
              </div>
            </div>
            <div className='d-flex align-items-center gap-1 justify-content-between'>
              <div>
                <span className='text-secondary-light fw-normal mb-12 text-xl'>
                  Today Income
                </span>
                <h5 className='fw-semibold mb-0'>$5.5k</h5>
              </div>
              <ReactApexChart
                id='dailyIconBarChart'
                options={dailyIconBarChartOptionsOne}
                series={dailyIconBarChartSeriesOne}
                type='bar'
                width={164}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesStatisticTwo;
