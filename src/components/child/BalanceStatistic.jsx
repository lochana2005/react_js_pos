import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const BalanceStatistic = () => {
  let { balanceStatisticsOptions, balanceStatisticsSeries } =
    useReactApexChart();
  return (
    <div className='col-12'>
      <div className='card h-100'>
        <div className='card-body'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Balance Statistic</h6>
            <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
              <option>Today</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <ul className='d-flex flex-wrap align-items-center justify-content-center mt-3 gap-3'>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px rounded-circle bg-primary-600' />
              <span className='text-secondary-light text-sm fw-semibold'>
                Word:
                <span className='text-primary-light fw-bold'>500</span>
              </span>
            </li>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px rounded-circle bg-yellow' />
              <span className='text-secondary-light text-sm fw-semibold'>
                Image:
                <span className='text-primary-light fw-bold'>300</span>
              </span>
            </li>
          </ul>
          <div className='mt-40'>
            <div id='balanceStatistics' className=''>
              <ReactApexChart
                options={balanceStatisticsOptions}
                series={balanceStatisticsSeries}
                type='bar'
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceStatistic;
