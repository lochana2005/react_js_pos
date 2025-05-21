import { Link } from "react-router-dom";
import Slider from "react-slick";

const QuickTransfer = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 800,
    centerPadding: "20px",
    infinite: true,
    autoplaySpeed: 2000,
    centerMode: true,
    autoplay: false,
  };
  return (
    <div className='card radius-16'>
      <div className='card-header'>
        <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
          <h6 className='mb-2 fw-bold text-lg mb-0'>Quick Transfer</h6>
        </div>
      </div>
      <div className='card-body p-0'>
        <div className='p-20'>
          <div className='position-relative z-1 py-32 text-center px-3'>
            <img
              src='assets/images/home-eleven/bg/bg-orange-gradient.png'
              alt='WowDash React Vite'
              className='position-absolute top-0 start-0 w-100 h-100 z-n1'
            />
            <h3 className='text-white'>$500.00</h3>
            <span className='text-white'>Your Balance</span>
          </div>
        </div>
        <div className='px-24 bg-neutral-100 border-bottom-0 py-20 dark-bg-neutral-200'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Contacts</h6>
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
        <div className='py-16 px-24'>
          <div className='officer-slider'>
            <Slider {...settings}>
              <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                  <img
                    src='assets/images/home-eleven/officer-img1.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='officer-slider__content mt-24 min-w-max-content'>
                  <h6 className='mb-0 text-xl'>Mr. Bin</h6>
                  <span className='text-sm text-secondary-light'>
                    Insurance officer
                  </span>
                </div>
              </div>
              <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                  <img
                    src='assets/images/home-eleven/officer-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='officer-slider__content mt-24 min-w-max-content'>
                  <h6 className='mb-0 text-xl'>Mr. Robiul</h6>
                  <span className='text-sm text-secondary-light'>
                    Insurance officer
                  </span>
                </div>
              </div>
              <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                  <img
                    src='assets/images/home-eleven/officer-img3.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='officer-slider__content mt-24 min-w-max-content'>
                  <h6 className='mb-0 text-xl'>Mr. Deo</h6>
                  <span className='text-sm text-secondary-light'>
                    Insurance officer
                  </span>
                </div>
              </div>
              <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                  <img
                    src='assets/images/home-eleven/officer-img4.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='officer-slider__content mt-24 min-w-max-content'>
                  <h6 className='mb-0 text-xl'>Mr. Riad</h6>
                  <span className='text-sm text-secondary-light'>
                    Insurance officer
                  </span>
                </div>
              </div>
              <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                  <img
                    src='assets/images/home-eleven/officer-img5.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='officer-slider__content mt-24 min-w-max-content'>
                  <h6 className='mb-0 text-xl'>Mr. Alex</h6>
                  <span className='text-sm text-secondary-light'>
                    Insurance officer
                  </span>
                </div>
              </div>
              <div className='officer-slider__item d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='officer-slider__thumb w-56-px h-56-px rounded-circle overflow-hidden flex-shrink-0 mx-8'>
                  <img
                    src='assets/images/home-eleven/officer-img2.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='officer-slider__content mt-24 min-w-max-content'>
                  <h6 className='mb-0 text-xl'>Mr. John</h6>
                  <span className='text-sm text-secondary-light'>
                    Insurance officer
                  </span>
                </div>
              </div>
            </Slider>
          </div>
          <form action='#'>
            <div className=''>
              <label
                htmlFor='message'
                className='d-block fw-semibold text-primary-light mb-8'
              >
                Write Short Description
              </label>
              <textarea
                className='form-control'
                id='message'
                rows={4}
                cols={50}
                placeholder='Enter a description...'
                defaultValue={""}
              />
            </div>
            <div className='mt-16'>
              <label
                htmlFor='Amount'
                className='d-block fw-semibold text-primary-light mb-8'
              >
                Amount
              </label>
              <div className='d-flex gap-16'>
                <input
                  type='text'
                  id='Amount'
                  className='form-control form-control-lg'
                  placeholder='Ex: $200'
                />
                <button
                  className='btn btn-primary-600 flex-shrink-0 d-flex align-items-center gap-2 px-32'
                  type='submit'
                >
                  Send <i className='ri-send-plane-fill' />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
