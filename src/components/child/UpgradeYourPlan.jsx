import { Link } from "react-router-dom";

const UpgradeYourPlan = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card'>
        <div className='card-body p-20'>
          <div className='row g-3'>
            <div className='col-md-4'>
              <div className='trail-bg h-100 text-center d-flex flex-column justify-content-between align-items-center p-16 radius-8'>
                <h6 className='text-white text-xl'>Upgrade Your Plan</h6>
                <div className=''>
                  <p className='text-white'>
                    Your free trial expired in 7 days
                  </p>
                  <Link
                    to='#'
                    className='btn py-8 rounded-pill w-100 bg-gradient-blue-warning text-sm'
                  >
                    Upgrade Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='row g-3'>
                <div className='col-sm-6 col-xs-6'>
                  <div className='radius-8 h-100 text-center p-20 bg-purple-light'>
                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-lilac-200 border border-lilac-400 text-lilac-600'>
                      <i className='ri-price-tag-3-fill' />
                    </span>
                    <span className='text-neutral-700 d-block'>
                      Total Sales
                    </span>
                    <h6 className='mb-0 mt-4'>$170,500.09</h6>
                  </div>
                </div>
                <div className='col-sm-6 col-xs-6'>
                  <div className='radius-8 h-100 text-center p-20 bg-success-100'>
                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-success-200 border border-success-400 text-success-600'>
                      <i className='ri-shopping-cart-2-fill' />
                    </span>
                    <span className='text-neutral-700 d-block'>
                      Total Orders
                    </span>
                    <h6 className='mb-0 mt-4'>1,500</h6>
                  </div>
                </div>
                <div className='col-sm-6 col-xs-6'>
                  <div className='radius-8 h-100 text-center p-20 bg-info-focus'>
                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-info-200 border border-info-400 text-info-600'>
                      <i className='ri-group-3-fill' />
                    </span>
                    <span className='text-neutral-700 d-block'>Visitor</span>
                    <h6 className='mb-0 mt-4'>12,300</h6>
                  </div>
                </div>
                <div className='col-sm-6 col-xs-6'>
                  <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-danger-200 border border-danger-400 text-danger-600'>
                      <i className='ri-refund-2-line' />
                    </span>
                    <span className='text-neutral-700 d-block'>Refunded</span>
                    <h6 className='mb-0 mt-4'>2756</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeYourPlan;
