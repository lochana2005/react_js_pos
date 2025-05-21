import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const FeaturedCreatorsOne = () => {
  return (
    <div className='col-xxl-12 col-md-6'>
      <div className='card h-100'>
        <div className='card-header border-bottom d-flex align-items-center flex-wrap gap-2 justify-content-between'>
          <h6 className='fw-bold text-lg mb-0'>Featured Creators</h6>
          <Link
            to='#'
            className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
          >
            View All
            <Icon icon='solar:alt-arrow-right-linear' className='icon' />
          </Link>
        </div>
        <div className='card-body'>
          <div className='d-flex align-items-center justify-content-between gap-8 flex-wrap'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/nft/nft-items-img1.png'
                alt='WowDash React Vite'
                className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-semibold'>Theresa Webb</h6>
                <span className='text-sm text-secondary-light fw-normal'>
                  Owned by ABC
                </span>
              </div>
            </div>
            <button
              type='button'
              className='btn btn-outline-primary-600 px-24 rounded-pill'
            >
              Follow
            </button>
          </div>
          <div className='mt-24'>
            <div className='row gy-3'>
              <div className='col-sm-6 col-xs-6'>
                <div className='nft-card bg-base radius-16 overflow-hidden shadow-4'>
                  <div className='radius-16 overflow-hidden'>
                    <img
                      src='assets/images/nft/featured-creator1.png'
                      alt='WowDash React Vite'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='p-12'>
                    <h6 className='text-md fw-bold text-primary-light mb-12'>
                      New Figures
                    </h6>
                    <div className='d-flex align-items-center gap-8'>
                      <img
                        src='assets/images/nft/bitcoin.png'
                        className='w-28-px h-28-px rounded-circle object-fit-cover'
                        alt='WowDash React Vite'
                      />
                      <span className='text-sm text-secondary-light fw-medium'>
                        0.10 BTC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-xs-6'>
                <div className='nft-card bg-base radius-16 overflow-hidden shadow-4'>
                  <div className='radius-16 overflow-hidden'>
                    <img
                      src='assets/images/nft/featured-creator2.png'
                      alt='WowDash React Vite'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='p-12'>
                    <h6 className='text-md fw-bold text-primary-light mb-12'>
                      Abstrac Girl
                    </h6>
                    <div className='d-flex align-items-center gap-8'>
                      <img
                        src='assets/images/nft/bitcoin.png'
                        className='w-28-px h-28-px rounded-circle object-fit-cover'
                        alt='WowDash React Vite'
                      />
                      <span className='text-sm text-secondary-light fw-medium'>
                        0.10 BTC
                      </span>
                    </div>
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

export default FeaturedCreatorsOne;
