const MonthlyExpenseBreakdown = () => {
  return (
    <div className='col-md-6'>
      <div className='card radius-16'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>
              Monthly Expense Breakdown
            </h6>
          </div>
        </div>
        <div className='card-body'>
          <div className='mb-3 d-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={464}
              height={12}
              viewBox='0 0 464 12'
              fill='none'
            >
              <g clipPath='url(#clip0_6886_52892)'>
                <rect width={464} height={12} rx={6} fill='#6B7280' />
                <rect width={464} height={12} rx={6} fill='#06B6D4' />
                <rect width={418} height={12} rx={6} fill='#22C55E' />
                <rect width={365} height={12} rx={6} fill='#84CC16' />
                <rect width={295} height={12} rx={6} fill='#EAB308' />
                <rect width={210} height={12} rx={6} fill='#F59E0B' />
                <rect width={111} height={12} rx={6} fill='#F97316' />
              </g>
              <defs>
                <clipPath id='clip0_6886_52892'>
                  <rect width={464} height={12} rx={6} fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='d-flex align-items-center justify-content-between p-12 bg-neutral-100'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px bg-orange rounded-pill' />
              <span className='text-secondary-light'>Healthcare</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-secondary-light'>$1500</span>
              <span className='text-primary-light fw-semibold'>40%</span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between p-12 bg-base'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px bg-warning-600 rounded-pill' />
              <span className='text-secondary-light'>Education</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-secondary-light'>$1500</span>
              <span className='text-primary-light fw-semibold'>40%</span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between p-12 bg-neutral-100'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px bg-warning-600 rounded-pill' />
              <span className='text-secondary-light'>Clothes</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-secondary-light'>$1500</span>
              <span className='text-primary-light fw-semibold'>40%</span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between p-12 bg-base'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px bg-success-600 rounded-pill' />
              <span className='text-secondary-light'>Food</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-secondary-light'>$1500</span>
              <span className='text-primary-light fw-semibold'>30%</span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between p-12 bg-neutral-100'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px bg-success-600 rounded-pill' />
              <span className='text-secondary-light'>Transport</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-secondary-light'>$1500</span>
              <span className='text-primary-light fw-semibold'>20%</span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between p-12 bg-base'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-8-px bg-cyan-600 rounded-pill' />
              <span className='text-secondary-light'>Pets</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-secondary-light'>$1500</span>
              <span className='text-primary-light fw-semibold'>20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpenseBreakdown;
