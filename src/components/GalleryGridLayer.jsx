import { useEffect, useRef } from "react";
import lightGallery from "lightgallery";

const GalleryGridLayer = () => {
  const galleryRef = useRef(null);
  useEffect(() => {
    if (galleryRef.current) {
      lightGallery(galleryRef.current, {
        thumbnail: true,
        zoom: true,
        selector: ".popup-img",
      });
    }
  }, []);

  const images = [
    "gallery-img1.png",
    "gallery-img2.png",
    "gallery-img3.png",
    "gallery-img4.png",
    "gallery-img5.png",
    "gallery-img6.png",
    "gallery-img7.png",
    "gallery-img8.png",
    "gallery-img9.png",
    "gallery-img10.png",
    "gallery-img11.png",
    "gallery-img12.png",
  ];
  return (
    <div className='card h-100 p-0 radius-12 overflow-hidden gallery-scale'>
      <div className='card-body p-24'>
        <div className='row gy-4' ref={galleryRef}>
          {images.map((img, index) => (
            <div key={index} className='col-xxl-3 col-md-4 col-sm-6'>
              <div className='hover-scale-img border radius-16 overflow-hidden p-8'>
                <a
                  href={`assets/images/gallery/${img}`}
                  className='popup-img w-100 h-100 d-flex radius-12 overflow-hidden'
                >
                  <img
                    src={`assets/images/gallery/${img}`}
                    alt='WowDash React Vite'
                    className='hover-scale-img__img w-100 h-100 object-fit-cover'
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryGridLayer;
