import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const PatientVisitByGender = () => {
  let { paymentStatusChartOptionsFour, paymentStatusChartSeriesFour } =
    useReactApexChart();
  return (
    <div className='col-xxl-6'>
      <div className='card h-100'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>
              Patient Visit By Gender
            </h6>
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
              <span className='w-12-px h-8-px rounded-pill bg-warning-600' />
              <span className='text-secondary-light text-sm fw-semibold'>
                Male:
                <span className='text-primary-light fw-bold'>200</span>
              </span>
            </li>
            <li className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px rounded-pill bg-success-600' />
              <span className='text-secondary-light text-sm fw-semibold'>
                Female:
                <span className='text-primary-light fw-bold'> 450</span>
              </span>
            </li>
          </ul>
          <div id='paymentStatusChart' className='margin-16-minus y-value-left'>
            <ReactApexChart
              options={paymentStatusChartOptionsFour}
              series={paymentStatusChartSeriesFour}
              type='bar'
              height={260}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientVisitByGender;
