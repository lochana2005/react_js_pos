import useReactApexChart from "../../hook/useReactApexChart";

const ETHPriceOne = () => {
  let { createChartSeven } = useReactApexChart();
  return (
    <div className='col-xxl-12 col-md-6'>
      <div className='card h-100'>
        <div className='card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between'>
          <h6 className='fw-bold text-lg mb-0'>ETH Price</h6>
          <select
            className='form-select form-select-sm w-auto bg-base border text-secondary-light rounded-pill'
            defaultValue=''
          >
            <option value='' disabled>
              Select Month
            </option>
            <option value='November'>November</option>
            <option value='December'>December</option>
            <option value='January'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September'>September</option>
          </select>
        </div>
        <div className='card-body'>
          <div
            id='enrollmentChart'
            className='apexcharts-tooltip-style-1 yaxies-more'
          >
            {/* pass the color value here */}
            {createChartSeven("#487FFF")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETHPriceOne;
