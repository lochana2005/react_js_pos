import { Link } from "react-router-dom";

const TrendingNFTsOne = () => {
  return (
    <div className='col-12'>
      <div className='mb-16 mt-8 d-flex flex-wrap justify-content-between gap-16'>
        <h6 className='mb-0'>Trending NFTs</h6>
        <ul
          className='nav button-tab nav-pills mb-16 gap-12'
          id='pills-tab-three'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300 active'
              id='pills-button-all-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-button-all'
              type='button'
              role='tab'
              aria-controls='pills-button-all'
              aria-selected='false'
              tabIndex={-1}
            >
              All
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300'
              id='pills-button-art-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-button-art'
              type='button'
              role='tab'
              aria-controls='pills-button-art'
              aria-selected='false'
              tabIndex={-1}
            >
              Art
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300'
              id='pills-button-music-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-button-music'
              type='button'
              role='tab'
              aria-controls='pills-button-music'
              aria-selected='false'
              tabIndex={-1}
            >
              Music
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300'
              id='pills-button-utility-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-button-utility'
              type='button'
              role='tab'
              aria-controls='pills-button-utility'
              aria-selected='true'
            >
              Utility
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link fw-semibold text-secondary-light rounded-pill px-20 py-6 border border-neutral-300'
              id='pills-button-fashion-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-button-fashion'
              type='button'
              role='tab'
              aria-controls='pills-button-fashion'
              aria-selected='true'
            >
              Fashion
            </button>
          </li>
        </ul>
      </div>
      <div className='tab-content' id='pills-tab-threeContent'>
        <div
          className='tab-pane fade show active'
          id='pills-button-all'
          role='tabpanel'
          aria-labelledby='pills-button-all-tab'
          tabIndex={0}
        >
          <div className='row g-3'>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img1.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    Fantastic Alien
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img1.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img2.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img3.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img3.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img4.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img4.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-button-art'
          role='tabpanel'
          aria-labelledby='pills-button-art-tab'
          tabIndex={0}
        >
          <div className='row g-3'>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img1.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    Fantastic Alien
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img1.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img2.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img3.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img3.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img4.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img4.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-button-music'
          role='tabpanel'
          aria-labelledby='pills-button-music-tab'
          tabIndex={0}
        >
          <div className='row g-3'>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img1.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    Fantastic Alien
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img1.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img2.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img3.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img3.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img4.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img4.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-button-utility'
          role='tabpanel'
          aria-labelledby='pills-button-utility-tab'
          tabIndex={0}
        >
          <div className='row g-3'>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img1.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    Fantastic Alien
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img1.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img2.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img3.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img3.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img4.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img4.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-button-fashion'
          role='tabpanel'
          aria-labelledby='pills-button-fashion-tab'
          tabIndex={0}
        >
          <div className='row g-3'>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img1.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    Fantastic Alien
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img1.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img2.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img3.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img3.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6 col-xs-6'>
              <div className='nft-card bg-base radius-16 overflow-hidden'>
                <div className='radius-16 overflow-hidden'>
                  <img
                    src='assets/images/nft/nft-img4.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='p-10'>
                  <h6 className='text-md fw-bold text-primary-light'>
                    New Figures
                  </h6>
                  <div className='d-flex align-items-center gap-8'>
                    <img
                      src='assets/images/nft/nft-user-img4.png'
                      className='w-28-px h-28-px rounded-circle object-fit-cover'
                      alt='WowDash React Vite'
                    />
                    <span className='text-sm text-secondary-light fw-medium'>
                      Watson Kristin
                    </span>
                  </div>
                  <div className='mt-10 d-flex align-items-center justify-content-between gap-8 flex-wrap'>
                    <span className='text-sm text-secondary-light fw-medium'>
                      Price:
                      <span className='text-sm text-primary-light fw-semibold'>
                        1.44 ETH
                      </span>
                    </span>
                    <span className='text-sm fw-semibold text-primary-600'>
                      $4,224.96
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap mt-12 gap-8'>
                    <Link
                      to='#'
                      className='btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1'
                    >
                      History
                    </Link>
                    <Link
                      to='#'
                      className='btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1'
                    >
                      Buy Now
                    </Link>
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

export default TrendingNFTsOne;
