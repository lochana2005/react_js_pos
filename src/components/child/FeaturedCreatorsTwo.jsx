import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const FeaturedCreatorsTwo = () => {
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
        <div className='card-body pt-24'>
          <div className='d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/nft/creator-img1.png'
                alt='WowDash React Vite'
                className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-semibold'>Theresa Webb</h6>
                <span className='text-sm text-secondary-light fw-normal'>
                  @wishon
                </span>
              </div>
            </div>
            <button
              type='button'
              className='btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2'
            >
              Follow
            </button>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/nft/creator-img2.png'
                alt='WowDash React Vite'
                className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-semibold'>Arlene McCoy</h6>
                <span className='text-sm text-secondary-light fw-normal'>
                  @nemccoy
                </span>
              </div>
            </div>
            <button
              type='button'
              className='btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2'
            >
              Follow
            </button>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/nft/creator-img3.png'
                alt='WowDash React Vite'
                className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-semibold'>Kathryn Murphy</h6>
                <span className='text-sm text-secondary-light fw-normal'>
                  @kathrynmur
                </span>
              </div>
            </div>
            <button
              type='button'
              className='btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2'
            >
              Follow
            </button>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-8 flex-wrap mb-32'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/nft/creator-img4.png'
                alt='WowDash React Vite'
                className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-semibold'>Marvin McKinney</h6>
                <span className='text-sm text-secondary-light fw-normal'>
                  @marvinckin
                </span>
              </div>
            </div>
            <button
              type='button'
              className='btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2'
            >
              Follow
            </button>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-8 flex-wrap mb-0'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/nft/creator-img5.png'
                alt='WowDash React Vite'
                className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-semibold'>Dianne Russell</h6>
                <span className='text-sm text-secondary-light fw-normal'>
                  @dinne_r
                </span>
              </div>
            </div>
            <button
              type='button'
              className='btn bg-primary-600 border-primary-600 text-white px-24 rounded-pill follow-btn transition-2'
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCreatorsTwo;
