import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const AverageDailySales = () => {
  let { barChartOptionsOne, barChartSeriesOne } = useReactApexChart();
  return (
    <div className='col-xxl-4 col-xl-6'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Average Daily Sales</h6>
            <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
          <h6 className='text-center my-20'>$27,500.00</h6>
          <div id='barChart' className='barChart'>
            <ReactApexChart
              options={barChartOptionsOne}
              series={barChartSeriesOne}
              type='bar'
              height={220}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageDailySales;
