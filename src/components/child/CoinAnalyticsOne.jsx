import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react/dist/iconify.js";

const CoinAnalyticsOne = () => {
  let { candleStickChartSeries, candleStickChartOptions } = useReactApexChart();
  return (
    <div className='col-12'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg'>Coin Analytics</h6>
            <div className='d-flex flex-wrap align-items-center gap-4'>
              <div className='form-check d-flex align-items-center'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='crypto'
                  id='BTC'
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='BTC'
                >
                  {" "}
                  BTC
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='crypto'
                  id='ETH'
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='ETH'
                >
                  {" "}
                  ETH
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='crypto'
                  id='SOL'
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='SOL'
                >
                  {" "}
                  SOL
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='crypto'
                  id='LTE'
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='LTE'
                >
                  {" "}
                  LTE
                </label>
              </div>
            </div>
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
          <div className='d-flex align-items-center gap-2 mt-12'>
            <h6 className='fw-semibold mb-0'>$25,000</h6>
            <p className='text-sm mb-0 d-flex align-items-center gap-1'>
              Bitcoin (BTC)
              <span className='bg-success-focus border border-success px-8 py-2 rounded-pill fw-semibold text-success-main text-sm d-inline-flex align-items-center gap-1'>
                10%
                <Icon icon='iconamoon:arrow-up-2-fill' className='icon' />
              </span>
            </p>
          </div>
          <ReactApexChart
            options={candleStickChartOptions}
            series={candleStickChartSeries}
            type='candlestick'
            height={350}
            id='candleStickChart'
          />
        </div>
      </div>
    </div>
  );
};

export default CoinAnalyticsOne;
