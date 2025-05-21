import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const CardWithImageOverlays = () => {
  return (
    <div className='mb-40'>
      <h6 className='mb-24'>Card With image &amp; Overlays </h6>
      <div className='row gy-4'>
        <div className='col-xxl-4 col-sm-6'>
          <div className='card h-100 radius-12 p-0 overflow-hidden position-relative'>
            <div className='card-body p-0 gradient-overlay bottom-0 start-0'>
              <img
                src='assets/images/card-component/card-overlay-img1.png'
                alt='WowDash React Vite'
                className='w-100 h-100'
              />
              <div className='position-absolute start-0 bottom-0 p-24 z-1'>
                <h5
                  className='card-title text-white text-primary-light
                 text-lg mb-6'
                >
                  This is Card title
                </h5>
                <p className='card-text text-white'>
                  We quickly learn to fear and thus automatically avo id
                  potentially stressful situations of all kinds, including the
                  most common of all
                </p>
                <Link
                  to='#'
                  className='btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2'
                >
                  Read More{" "}
                  <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-sm-6'>
          <div className='card h-100 radius-12 p-0 overflow-hidden position-relative'>
            <div className='card-body p-0 gradient-overlay top-0 start-0'>
              <img
                src='assets/images/card-component/card-overlay-img1.png'
                alt='WowDash React Vite'
                className='w-100 h-100'
              />
              <div className='position-absolute start-0 top-0 p-24 z-1 text-center'>
                <h5
                  className='card-title text-white text-primary-light
                 text-lg mb-6'
                >
                  This is Card title
                </h5>
                <p className='card-text text-white'>
                  We quickly learn to fear and thus automatically avo id
                  potentially stressful situations of all kinds, including the
                  most common of all
                </p>
                <Link
                  to='#'
                  className='btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2'
                >
                  Read More{" "}
                  <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-sm-6'>
          <div className='card h-100 radius-12 p-0 overflow-hidden position-relative'>
            <div className='card-body p-0 gradient-overlay bottom-0 start-0'>
              <img
                src='assets/images/card-component/card-overlay-img1.png'
                alt='WowDash React Vite'
                className='w-100 h-100'
              />
              <div className='position-absolute start-0 bottom-0 p-24 z-1 text-end'>
                <h5
                  className='card-title text-white text-primary-light
                 text-lg mb-6'
                >
                  This is Card title
                </h5>
                <p className='card-text text-white'>
                  We quickly learn to fear and thus automatically avo id
                  potentially stressful situations of all kinds, including the
                  most common of all
                </p>
                <Link
                  to='#'
                  className='btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2'
                >
                  Read More{" "}
                  <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImageOverlays;
