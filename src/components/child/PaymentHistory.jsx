import { Link } from "react-router-dom";

const PaymentHistory = () => {
  return (
    <div className='col-md-6'>
      <div className='card radius-16'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Payment History</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <iconify-icon
                icon='solar:alt-arrow-right-linear'
                className='icon'
              />
            </Link>
          </div>
        </div>
        <div className='card-body'>
          <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
            <div className=''>
              <h6 className='text-md mb-0'>Digital Assets</h6>
              <span className='text-xs text-secondary-light fw-medium'>
                18 Nov 2024
              </span>
            </div>
            <div className=''>
              <h6 className='text-sm mb-1'>$450.00</h6>
              <span className='text-xs fw-medium text-success-600 bg-success-100 rounded-pill px-3'>
                Paid
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
            <div className=''>
              <h6 className='text-md mb-0'>Electricity</h6>
              <span className='text-xs text-secondary-light fw-medium'>
                18 Nov 2024
              </span>
            </div>
            <div className=''>
              <h6 className='text-sm mb-1'>$150.00</h6>
              <span className='text-xs fw-medium text-warning-600 bg-warning-100 rounded-pill px-3'>
                Due
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
            <div className=''>
              <h6 className='text-md mb-0'>Internet Bill</h6>
              <span className='text-xs text-secondary-light fw-medium'>
                18 Nov 2024
              </span>
            </div>
            <div className=''>
              <h6 className='text-sm mb-1'>$450.00</h6>
              <span className='text-xs fw-medium text-danger-600 bg-danger-100 rounded-pill px-3'>
                Cancel
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
            <div className=''>
              <h6 className='text-md mb-0'>House rent </h6>
              <span className='text-xs text-secondary-light fw-medium'>
                18 Nov 2024
              </span>
            </div>
            <div className=''>
              <h6 className='text-sm mb-1'>$450.00</h6>
              <span className='text-xs fw-medium text-success-600 bg-success-100 rounded-pill px-3'>
                Paid
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <div className=''>
              <h6 className='text-md mb-0'>Office rent</h6>
              <span className='text-xs text-secondary-light fw-medium'>
                18 Nov 2024
              </span>
            </div>
            <div className=''>
              <h6 className='text-sm mb-1'>$450.00</h6>
              <span className='text-xs fw-medium text-success-600 bg-success-100 rounded-pill px-3'>
                Paid
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
