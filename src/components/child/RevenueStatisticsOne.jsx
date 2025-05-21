import { Icon } from "@iconify/react/dist/iconify.js";
import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const RevenueStatisticsOne = () => {
  let { upDownBarChartSeries, upDownBarChartOptions } = useReactApexChart();
  return (
    <div className='col-xxl-8'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <div>
              <h6 className='mb-2 fw-bold text-lg'>Revenue Statistics</h6>
              <span className='text-sm fw-medium text-secondary-light'>
                Yearly earning overview
              </span>
            </div>
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
          <div className='mt-24 mb-24 d-flex flex-wrap'>
            <div className='me-40'>
              <span className='text-secondary-light text-sm mb-1'>Income</span>
              <div className=''>
                <h6 className='fw-semibold d-inline-block mb-0'>$26,201</h6>
                <span className='text-success-main fw-bold d-inline-flex align-items-center gap-1'>
                  10% <Icon icon='iconamoon:arrow-up-2-fill' className='icon' />{" "}
                </span>
              </div>
            </div>
            <div>
              <span className='text-secondary-light text-sm mb-1'>
                Expenses
              </span>
              <div className=''>
                <h6 className='fw-semibold d-inline-block mb-0'>$18,120</h6>
                <span className='text-danger-main fw-bold d-inline-flex align-items-center gap-1'>
                  10%{" "}
                  <Icon icon='iconamoon:arrow-down-2-fill' className='icon' />{" "}
                </span>
              </div>
            </div>
          </div>
          <ReactApexChart
            options={upDownBarChartOptions}
            series={upDownBarChartSeries}
            type='bar'
            height={263}
            id='upDownBarchart'
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueStatisticsOne;
