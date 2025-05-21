import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";
import Slider from "react-slick";
const MyCardsOne = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className='col-xxl-12 col-lg-6'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg'>My Cards</h6>
            <Link
              href=''
              className='btn btn-outline-primary d-inline-flex align-items-center gap-2 text-sm btn-sm px-8 py-6'
            >
              <Icon icon='ph:plus-circle' className='icon text-xl' /> Button
            </Link>
          </div>
          <div>
            <div className='card-slider'>
              <Slider {...settings}>
                <div className='p-20 h-240-px radius-8 overflow-hidden position-relative z-1'>
                  <img
                    src='assets/images/card/card-bg.png'
                    alt='WowDash React Vite'
                    className='position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1'
                  />
                  <div className='d-flex flex-column justify-content-between h-100'>
                    <div className='d-flex align-items-center justify-content-between flex-wrap'>
                      <h6 className='text-white mb-0'>Master Card</h6>
                      <img
                        src='assets/images/card/card-logo.png'
                        alt='WowDash React Vite'
                      />
                    </div>
                    <div>
                      <span className='text-white text-xs fw-normal text-opacity-75'>
                        Credit Card Number
                      </span>
                      <h6 className='text-white text-xl fw-semibold mt-1 mb-0'>
                        2356 9854 3652 5612
                      </h6>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <span className='text-white text-xs fw-normal text-opacity-75'>
                          Name
                        </span>
                        <h6 className='text-white text-xl fw-semibold mb-0'>
                          Arlene McCoy
                        </h6>
                      </div>
                      <div>
                        <span className='text-white text-xs fw-normal text-opacity-75'>
                          Exp. Date
                        </span>
                        <h6 className='text-white text-xl fw-semibold mb-0'>
                          05/26
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-20 h-240-px radius-8 overflow-hidden position-relative z-1'>
                  <img
                    src='assets/images/card/card-bg.png'
                    alt='WowDash React Vite'
                    className='position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1'
                  />
                  <div className='d-flex flex-column justify-content-between h-100'>
                    <div className='d-flex align-items-center justify-content-between flex-wrap'>
                      <h6 className='text-white mb-0'>Master Card</h6>
                      <img
                        src='assets/images/card/card-logo.png'
                        alt='WowDash React Vite'
                      />
                    </div>
                    <div>
                      <span className='text-white text-xs fw-normal text-opacity-75'>
                        Credit Card Number
                      </span>
                      <h6 className='text-white text-xl fw-semibold mt-1 mb-0'>
                        2356 9854 3652 5612
                      </h6>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <span className='text-white text-xs fw-normal text-opacity-75'>
                          Name
                        </span>
                        <h6 className='text-white text-xl fw-semibold mb-0'>
                          Arlene McCoy
                        </h6>
                      </div>
                      <div>
                        <span className='text-white text-xs fw-normal text-opacity-75'>
                          Exp. Date
                        </span>
                        <h6 className='text-white text-xl fw-semibold mb-0'>
                          05/26
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-20 h-240-px radius-8 overflow-hidden position-relative z-1'>
                  <img
                    src='assets/images/card/card-bg.png'
                    alt='WowDash React Vite'
                    className='position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1'
                  />
                  <div className='d-flex flex-column justify-content-between h-100'>
                    <div className='d-flex align-items-center justify-content-between flex-wrap'>
                      <h6 className='text-white mb-0'>Master Card</h6>
                      <img
                        src='assets/images/card/card-logo.png'
                        alt='WowDash React Vite'
                      />
                    </div>
                    <div>
                      <span className='text-white text-xs fw-normal text-opacity-75'>
                        Credit Card Number
                      </span>
                      <h6 className='text-white text-xl fw-semibold mt-1 mb-0'>
                        2356 9854 3652 5612
                      </h6>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <span className='text-white text-xs fw-normal text-opacity-75'>
                          Name
                        </span>
                        <h6 className='text-white text-xl fw-semibold mb-0'>
                          Arlene McCoy
                        </h6>
                      </div>
                      <div>
                        <span className='text-white text-xs fw-normal text-opacity-75'>
                          Exp. Date
                        </span>
                        <h6 className='text-white text-xl fw-semibold mb-0'>
                          05/26
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardsOne;
