import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const EarningStatistic = () => {
  let { enrollmentChartOptions, enrollmentChartSeries } = useReactApexChart();
  return (
    <>
      <div className='col-xxl-12'>
        <div className='card h-100'>
          <div className='card-header'>
            <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
              <h6 className='mb-2 fw-bold text-lg mb-0'>Earning Statistic</h6>
              <select className='form-select form-select-sm w-auto bg-base border-0 text-secondary-light'>
                <option>This Month</option>
                <option>This Week</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
          <div className='card-body p-24'>
            <ul className='d-flex flex-wrap align-items-center justify-content-center my-3 gap-3'>
              <li className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-8-px rounded-pill bg-primary-600' />
                <span className='text-secondary-light text-sm fw-semibold'>
                  New Patient:
                  <span className='text-primary-light fw-bold'>50</span>
                </span>
              </li>
              <li className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-8-px rounded-pill bg-warning-600' />
                <span className='text-secondary-light text-sm fw-semibold'>
                  Old Patient:
                  <span className='text-primary-light fw-bold'> 500</span>
                </span>
              </li>
            </ul>
            <div id='enrollmentChart' className='apexcharts-tooltip-style-1'>
              <ReactApexChart
                options={enrollmentChartOptions}
                series={enrollmentChartSeries}
                type='area'
                height={260}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarningStatistic;
