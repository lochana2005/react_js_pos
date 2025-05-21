const TransactionsOne = () => {
  return (
    <div className='col-xxl-3'>
      <div className='card h-100'>
        <div className='card-body'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg'>Transactions</h6>
            <div className=''>
              <select
                className='form-select form-select-sm w-auto bg-base border text-secondary-light'
                defaultValue='This Month'
              >
                <option value='This Month'>This Month</option>
                <option value='Last Month'>Last Month</option>
              </select>
            </div>
          </div>
          <div className='mt-32'>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/payment/payment1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Paytm</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Starbucks
                  </span>
                </div>
              </div>
              <span className='text-danger text-md fw-medium'>-$20</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/payment/payment2.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>PayPal</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Client Payment
                  </span>
                </div>
              </div>
              <span className='text-success-main text-md fw-medium'>+$800</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/payment/payment3.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Stripe</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Ordered iPhone 14
                  </span>
                </div>
              </div>
              <span className='text-danger-main text-md fw-medium'>-$300</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/payment/payment4.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Razorpay</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Refund
                  </span>
                </div>
              </div>
              <span className='text-success-main text-md fw-medium'>+$500</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/payment/payment1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Paytm</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Starbucks
                  </span>
                </div>
              </div>
              <span className='text-danger-main text-md fw-medium'>-$1500</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/payment/payment3.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Stripe</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Ordered iPhone 14
                  </span>
                </div>
              </div>
              <span className='text-success-main text-md fw-medium'>+$800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOne;
