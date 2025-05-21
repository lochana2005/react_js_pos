import { useRef, useState } from "react";
import Slider from "react-slick";
const CarouselWithProgress = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current),
  };

  const totalSlides = 4; // Update this based on the number of slides in your slider

  // Calculate progress percentage
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  return (
    <div className='col-sm-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Carousel with progress</h6>
        </div>
        <div className='card-body p-0 position-relative'>
          <div className='p-0 progress-carousel dots-style-circle dots-positioned'>
            <Slider {...settings} ref={sliderRef}>
              <div className='gradient-overlay bottom-0 start-0 h-100 position-relative'>
                <img
                  src='assets/images/carousel/carousel-img4.png'
                  alt='WowDash React Vite'
                  className='w-100 h-100 object-fit-cover'
                />
                <div className='position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px'>
                  <h5 className='card-title text-white text-lg mb-6'>
                    Carousel Slide One
                  </h5>
                  <p className='card-text text-white mx-auto text-sm'>
                    User Interface (UI) and User Experience (UX) Design play key
                    roles in the experience users have when{" "}
                  </p>
                </div>
              </div>
              <div className='gradient-overlay bottom-0 start-0 h-100'>
                <img
                  src='assets/images/carousel/carousel-img2.png'
                  alt='WowDash React Vite'
                  className='w-100 h-100 object-fit-cover'
                />
                <div className='position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px'>
                  <h5 className='card-title text-white text-lg mb-6'>
                    Carousel Slide Two
                  </h5>
                  <p className='card-text text-white mx-auto text-sm'>
                    User Interface (UI) and User Experience (UX) Design play key
                    roles in the experience users have when{" "}
                  </p>
                </div>
              </div>
              <div className='gradient-overlay bottom-0 start-0 h-100'>
                <img
                  src='assets/images/carousel/carousel-img3.png'
                  alt='WowDash React Vite'
                  className='w-100 h-100 object-fit-cover'
                />
                <div className='position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px'>
                  <h5 className='card-title text-white text-lg mb-6'>
                    Carousel Slide Three
                  </h5>
                  <p className='card-text text-white mx-auto text-sm'>
                    User Interface (UI) and User Experience (UX) Design play key
                    roles in the experience users have when{" "}
                  </p>
                </div>
              </div>
              <div className='gradient-overlay bottom-0 start-0 h-100'>
                <img
                  src='assets/images/carousel/carousel-img1.png'
                  alt='WowDash React Vite'
                  className='w-100 h-100 object-fit-cover'
                />
                <div className='position-absolute start-50 translate-middle-x bottom-0 pb-64 z-1 text-center w-100 max-w-440-px'>
                  <h5 className='card-title text-white text-lg mb-6'>
                    Carousel Slide Four
                  </h5>
                  <p className='card-text text-white mx-auto text-sm'>
                    User Interface (UI) and User Experience (UX) Design play key
                    roles in the experience users have when{" "}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div className='slider-progress'>
            <span
              className='active'
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithProgress;
