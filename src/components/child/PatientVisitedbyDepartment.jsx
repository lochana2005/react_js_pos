import useReactApexChart from "../../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const PatientVisitedDepartment = () => {
  let { radialMultipleBarOptions, radialMultipleBarSeries } =
    useReactApexChart();
  return (
    <div className='col-xxl-6'>
      <div className='card h-100'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>
              Patient Visited by Department
            </h6>
          </div>
        </div>
        <div className='card-body p-24 d-flex align-items-center gap-16'>
          <div id='radialMultipleBar'>
            <ReactApexChart
              options={radialMultipleBarOptions}
              series={radialMultipleBarSeries}
              type='radialBar'
              height={300}
              width={"100%"}
            />
          </div>
          <ul className='d-flex flex-column gap-12'>
            <li>
              <span className='text-lg'>
                Cardiology:{" "}
                <span className='text-primary-600 fw-semibold'>80%</span>{" "}
              </span>
            </li>
            <li>
              <span className='text-lg'>
                Psychiatry:{" "}
                <span className='text-warning-600 fw-semibold'>40%</span>{" "}
              </span>
            </li>
            <li>
              <span className='text-lg'>
                Pediatrics:{" "}
                <span className='text-success-600 fw-semibold'>10%</span>{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientVisitedDepartment;
