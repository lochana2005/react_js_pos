import useReactApexChart from "../../hook/useReactApexChart";

const CoinAnalyticsTwo = () => {
  let { createChartFour } = useReactApexChart();
  return (
    <div className='col-xxl-6'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg'>Coin Analytics</h6>
            <div className='border radius-4 px-3 py-2 pe-0 d-flex align-items-center gap-1 text-sm text-secondary-light'>
              Currency:
              <select
                className='form-select form-select-sm w-auto bg-base border-0 text-primary-light fw-semibold text-sm'
                defaultValue='Select Currency'
              >
                <option value='Select Currency' disabled>
                  Select Currency
                </option>
                <option value='USD'>USD</option>
                <option value='BDT'>BDT</option>
                <option value='RUP'>RUP</option>
              </select>
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 bg-neutral-200 px-8 py-8 radius-4 mb-16'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2'>
              <img
                src='assets/images/currency/crypto-img1.png'
                alt='WowDash React Vite'
                className='w-36-px h-36-px rounded-circle flex-shrink-0'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0'>Bitcoin</h6>
              </div>
            </div>
            <h6 className='text-md fw-medium mb-0'>$55,000.00</h6>
            <span className='text-success-main text-md fw-medium'>+3.85%</span>
            <div
              id='markerBitcoinChart'
              className='remove-tooltip-title rounded-tooltip-value'
            >
              {/* Pass the color value, height, width  here */}
              {createChartFour("#45B369", 42, 100)}
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 bg-neutral-200 px-8 py-8 radius-4 mb-16'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2'>
              <img
                src='assets/images/currency/crypto-img2.png'
                alt='WowDash React Vite'
                className='w-36-px h-36-px rounded-circle flex-shrink-0'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0'>Ethereum</h6>
              </div>
            </div>
            <h6 className='text-md fw-medium mb-0'>$55,000.00</h6>
            <span className='text-danger-main text-md fw-medium'>-2.85%</span>
            <div
              id='markerEthereumChart'
              className='remove-tooltip-title rounded-tooltip-value'
            >
              {/* Pass the color value, height, width  here */}
              {createChartFour("#EF4A00", 42, 100)}
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 bg-neutral-200 px-8 py-8 radius-4 mb-16'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2'>
              <img
                src='assets/images/currency/crypto-img3.png'
                alt='WowDash React Vite'
                className='w-36-px h-36-px rounded-circle flex-shrink-0'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0'>Solana</h6>
              </div>
            </div>
            <h6 className='text-md fw-medium mb-0'>$55,000.00</h6>
            <span className='text-success-main text-md fw-medium'>+3.85%</span>
            <div
              id='markerSolanaChart'
              className='remove-tooltip-title rounded-tooltip-value'
            >
              {/* Pass the color value, height, width  here */}
              {createChartFour("#45B369", 42, 100)}
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 bg-neutral-200 px-8 py-8 radius-4 mb-16'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2'>
              <img
                src='assets/images/currency/crypto-img4.png'
                alt='WowDash React Vite'
                className='w-36-px h-36-px rounded-circle flex-shrink-0'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0'>Litecoin</h6>
              </div>
            </div>
            <h6 className='text-md fw-medium mb-0'>$55,000.00</h6>
            <span className='text-success-main text-md fw-medium'>+3.85%</span>
            <div
              id='markerLitecoinChart'
              className='remove-tooltip-title rounded-tooltip-value'
            >
              {/* Pass the color value, height, width  here */}
              {createChartFour("#45B369", 42, 100)}
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 bg-neutral-200 px-8 py-8 radius-4 mb-16'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2'>
              <img
                src='assets/images/currency/crypto-img5.png'
                alt='WowDash React Vite'
                className='w-36-px h-36-px rounded-circle flex-shrink-0'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0'>Dogecoin</h6>
              </div>
            </div>
            <h6 className='text-md fw-medium mb-0'>$15,000.00</h6>
            <span className='text-danger-main text-md fw-medium'>-2.85%</span>
            <div
              id='markerDogecoinChart'
              className='remove-tooltip-title rounded-tooltip-value'
            >
              {/* Pass the color value, height, width  here */}
              {createChartFour("#EF4A00", 42, 100)}
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 bg-neutral-200 px-8 py-4 radius-4'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2'>
              <img
                src='assets/images/currency/crypto-img1.png'
                alt='WowDash React Vite'
                className='w-36-px h-36-px rounded-circle flex-shrink-0'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0'>Crypto</h6>
              </div>
            </div>
            <h6 className='text-md fw-medium mb-0'>$15,000.00</h6>
            <span className='text-danger-main text-md fw-medium'>-2.85%</span>
            <div
              id='markerCryptoChart'
              className='remove-tooltip-title rounded-tooltip-value'
            >
              {/* Pass the color value, height, width  here */}
              {createChartFour("#EF4A00", 42, 100)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinAnalyticsTwo;
