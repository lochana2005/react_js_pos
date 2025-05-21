import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const HorizontalCard = () => {
  return (
    <div className='mb-40'>
      <h6 className='mb-24'>Horizontal Card</h6>
      <div className='row gy-4'>
        <div className='col-xl-6'>
          <div className='card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row'>
            <div className='d-flex flex-shrink-0 w-170-px h-100'>
              <img
                src='assets/images/card-component/horizontal-card-img1.png'
                className='h-100 w-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className='card-body p-16 flex-grow-1'>
              <h5 className='card-title text-lg text-primary-light mb-6'>
                This is Card title
              </h5>
              <p className='card-text text-neutral-600 mb-16'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to='#'
                className='btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse'>
            <div className='d-flex flex-shrink-0 w-170-px h-100'>
              <img
                src='assets/images/card-component/horizontal-card-img2.png'
                className='h-100 w-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className='card-body p-16 flex-grow-1'>
              <h5 className='card-title text-lg text-primary-light mb-6'>
                This is Card title
              </h5>
              <p className='card-text text-neutral-600 mb-16'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to='#'
                className='btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row'>
            <div className='d-flex flex-shrink-0 w-170-px h-100'>
              <img
                src='assets/images/card-component/horizontal-card-img3.png'
                className='h-100 w-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className='card-body p-16 flex-grow-1'>
              <h5 className='card-title text-lg text-primary-light mb-6'>
                This is Card title
              </h5>
              <p className='card-text text-neutral-600 mb-16'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to='#'
                className='btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse'>
            <div className='d-flex flex-shrink-0 w-170-px h-100'>
              <img
                src='assets/images/card-component/horizontal-card-img4.png'
                className='h-100 w-100 object-fit-cover'
                alt='WowDash React Vite'
              />
            </div>
            <div className='card-body p-16 flex-grow-1'>
              <h5 className='card-title text-lg text-primary-light mb-6'>
                This is Card title
              </h5>
              <p className='card-text text-neutral-600 mb-16'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to='#'
                className='btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
