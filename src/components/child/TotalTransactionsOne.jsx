import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const TotalTransactionsOne = () => {
  let { transactionLineChartSeries, transactionLineChartOptions } =
    useReactApexChart();
  return (
    <div className='col-xxl-4'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg'>Total Transactions </h6>
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
          <ul className='d-flex flex-wrap align-items-center justify-content-between gap-3 mb-28'>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-16-px h-16-px radius-2 bg-primary-600' />
              <span className='text-secondary-light text-lg fw-normal'>
                Total Gain:{" "}
                <span className='text-primary-light fw-bold text-lg'>
                  $50,000
                </span>
              </span>
            </li>
          </ul>
          <div id='transactionLineChart' />
          <ReactApexChart
            options={transactionLineChartOptions}
            series={transactionLineChartSeries}
            type='line'
            height={290}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalTransactionsOne;
