import Slider from "react-slick";
const MultipleSlides = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='col-sm-12'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Multiple slides</h6>
        </div>
        <div className='card-body py-24 px-16 multiple-carousel dots-style-circle'>
          <Slider {...settings}>
            <div className=' mb-24'>
              <img
                src='assets/images/carousel/mutiple-carousel-img1.png'
                className='w-100 h-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className=' mb-24'>
              <img
                src='assets/images/carousel/mutiple-carousel-img2.png'
                className='w-100 h-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className=' mb-24'>
              <img
                src='assets/images/carousel/mutiple-carousel-img3.png'
                className='w-100 h-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className=' mb-24'>
              <img
                src='assets/images/carousel/mutiple-carousel-img4.png'
                className='w-100 h-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className=' mb-24'>
              <img
                src='assets/images/carousel/mutiple-carousel-img2.png'
                className='w-100 h-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MultipleSlides;
