import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  let { basicDonutChartSeries, basicDonutChartOptions } = useReactApexChart();
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Donut Chart</h6>
        </div>
        <div className='card-body p-24 text-center d-flex flex-wrap align-items-start gap-5 justify-content-center'>
          <div className='position-relative'>
            <ReactApexChart
              id='basicDonutChart'
              className='w-auto d-inline-block'
              options={basicDonutChartOptions}
              series={basicDonutChartSeries}
              type='donut'
              height={264}
            />
            <div className='position-absolute start-50 top-50 translate-middle'>
              <span className='text-lg text-secondary-light fw-medium'>
                Total Value
              </span>
              <h4 className='mb-0'>72</h4>
            </div>
          </div>
          <div className='max-w-290-px w-100'>
            <div className='d-flex align-items-center justify-content-between gap-12 border pb-12 mb-12 border-end-0 border-top-0 border-start-0'>
              <span className='text-primary-light fw-medium text-sm'>
                Label
              </span>
              <span className='text-primary-light fw-medium text-sm'>
                Value
              </span>
              <span className='text-primary-light fw-medium text-sm'>%</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-12 mb-12'>
              <span className='text-primary-light fw-medium text-sm d-flex align-items-center gap-12'>
                <span className='w-12-px h-12-px bg-success-600 rounded-circle' />{" "}
                Label 1
              </span>
              <span className='text-primary-light fw-medium text-sm'>12</span>
              <span className='text-primary-light fw-medium text-sm'>
                {" "}
                30.6%{" "}
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-12 mb-12'>
              <span className='text-primary-light fw-medium text-sm d-flex align-items-center gap-12'>
                <span className='w-12-px h-12-px bg-primary-600 rounded-circle' />{" "}
                Label 2
              </span>
              <span className='text-primary-light fw-medium text-sm'>22</span>
              <span className='text-primary-light fw-medium text-sm'>
                {" "}
                42.9%
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-12 mb-12'>
              <span className='text-primary-light fw-medium text-sm d-flex align-items-center gap-12'>
                <span className='w-12-px h-12-px bg-info-600 rounded-circle' />{" "}
                Label 3
              </span>
              <span className='text-primary-light fw-medium text-sm'>12</span>
              <span className='text-primary-light fw-medium text-sm'>
                {" "}
                24.6%{" "}
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-12 mb-12'>
              <span className='text-primary-light fw-medium text-sm d-flex align-items-center gap-12'>
                <span className='w-12-px h-12-px bg-danger-600 rounded-circle' />{" "}
                Label 4
              </span>
              <span className='text-primary-light fw-medium text-sm'>12</span>
              <span className='text-primary-light fw-medium text-sm'>
                {" "}
                26.6%{" "}
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-12 mb-12'>
              <span className='text-primary-light fw-medium text-sm d-flex align-items-center gap-12'>
                <span className='w-12-px h-12-px bg-orange rounded-circle' />{" "}
                Label 5
              </span>
              <span className='text-primary-light fw-medium text-sm'>7</span>
              <span className='text-primary-light fw-medium text-sm'>
                {" "}
                13.3%{" "}
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-12 mb-12'>
              <span className='text-primary-light fw-medium text-sm d-flex align-items-center gap-12'>
                <span className='w-12-px h-12-px bg-warning rounded-circle' />{" "}
                Label 6
              </span>
              <span className='text-primary-light fw-medium text-sm'>7</span>
              <span className='text-primary-light fw-medium text-sm'>
                {" "}
                15.3%{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
