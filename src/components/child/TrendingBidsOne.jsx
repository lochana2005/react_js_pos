import { Icon } from "@iconify/react/dist/iconify.js";

const TrendingBidsOne = () => {
  return (
    <div className='col-12'>
      <h6 className='mb-16'>Trending Bids</h6>
      <div className='row gy-4'>
        {/* Dashboard Widget Start */}
        <div className='col-lg-4 col-sm-6'>
          <div className='card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3'>
            <div className='card-body p-0'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1'>
                <div className='d-flex align-items-center flex-wrap gap-16'>
                  <span className='mb-0 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0'>
                    <Icon icon='flowbite:users-group-solid' className='icon' />
                  </span>
                  <div className='flex-grow-1'>
                    <h6 className='fw-semibold mb-0'>24,000</h6>
                    <span className='fw-medium text-secondary-light text-md'>
                      Artworks
                    </span>
                    <p className='text-sm mb-0 d-flex align-items-center flex-wrap gap-12 mt-12'>
                      <span className='bg-success-focus px-6 py-2 rounded-2 fw-medium text-success-main text-sm d-flex align-items-center gap-8'>
                        +168.001%
                        <i className='ri-arrow-up-line' />
                      </span>{" "}
                      This week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard Widget End */}
        {/* Dashboard Widget Start */}
        <div className='col-lg-4 col-sm-6'>
          <div className='card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-5'>
            <div className='card-body p-0'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1'>
                <div className='d-flex align-items-center flex-wrap gap-16'>
                  <span className='mb-0 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0'>
                    <Icon icon='flowbite:users-group-solid' className='icon' />
                  </span>
                  <div className='flex-grow-1'>
                    <h6 className='fw-semibold mb-0'>82,000</h6>
                    <span className='fw-medium text-secondary-light text-md'>
                      Auction
                    </span>
                    <p className='text-sm mb-0 d-flex align-items-center flex-wrap gap-12 mt-12'>
                      <span className='bg-danger-focus px-6 py-2 rounded-2 fw-medium text-danger-main text-sm d-flex align-items-center gap-8'>
                        +168.001%
                        <i className='ri-arrow-down-line' />
                      </span>{" "}
                      This week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard Widget End */}
        {/* Dashboard Widget Start */}
        <div className='col-lg-4 col-sm-6'>
          <div className='card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-2'>
            <div className='card-body p-0'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1'>
                <div className='d-flex align-items-center flex-wrap gap-16'>
                  <span className='mb-0 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0'>
                    <Icon icon='flowbite:users-group-solid' className='icon' />
                  </span>
                  <div className='flex-grow-1'>
                    <h6 className='fw-semibold mb-0'>800</h6>
                    <span className='fw-medium text-secondary-light text-md'>
                      Creators
                    </span>
                    <p className='text-sm mb-0 d-flex align-items-center flex-wrap gap-12 mt-12'>
                      <span className='bg-success-focus px-6 py-2 rounded-2 fw-medium text-success-main text-sm d-flex align-items-center gap-8'>
                        +168.001%
                        <i className='ri-arrow-up-line' />
                      </span>{" "}
                      This week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard Widget End */}
      </div>
    </div>
  );
};

export default TrendingBidsOne;
