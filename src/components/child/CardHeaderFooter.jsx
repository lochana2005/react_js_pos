import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const CardHeaderFooter = () => {
  return (
    <div className='mb-40'>
      <h6 className='mb-24'>Card Header &amp; Footer</h6>
      <div className='row gy-4'>
        <div className='col-xxl-4 col-sm-6'>
          <div className='card radius-12 h-100'>
            <div className='card-header py-16 px-24 bg-base d-flex align-items-center gap-1 justify-content-between border border-end-0 border-start-0 border-top-0'>
              <h6 className='text-lg mb-0'>Hi, Will Mart</h6>
              <button type='button' className='text-xl line-height-1'>
                <Icon icon='mdi:times' className='text-xl' />
              </button>
            </div>
            <div className='card-body py-16 px-24'>
              <h6 className='card-title text-primary-light mb-8 text-lg'>
                How to learn UI /UX Design
              </h6>
              <p className='card-text text-neutral-600 mb-0'>
                Intrinsically incubate intuitive opportunities and real-time
                potentialities for change for interoperable meta-itself the
                viewer's attention from the layout
              </p>
            </div>
            <div className='card-footer text-center bg-transparent border border-end-0 border-start-0 border-bottom-0 py-16 px-24'>
              <Link to='#' className='text-primary-600'>
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-sm-6'>
          <div className='card radius-12 h-100'>
            <div className='card-body py-16 px-24'>
              <div className='d-flex align-items-center gap-2 mb-12'>
                <Icon icon='typcn:user-add' className='text-xxl' />
                <h6 className='text-lg mb-0'>How to learn UI /UX Design</h6>
              </div>
              <p className='card-text text-neutral-600 mb-16'>
                Intrinsically incubate intuitive opportunities and real-time
                potentialities for change for interoperable meta-itself the
                viewer's attention from the layout
              </p>
              <p className='card-text text-neutral-600 mb-0'>
                Intrinsically incubate intuitive opportunities and real-time
                potentialities for change for interoperable{" "}
              </p>
              <Link
                to='#'
                className='btn text-primary-600 hover-text-primary px-0 py-0 d-inline-flex align-items-center gap-2 mt-16'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-sm-6'>
          <div className='card radius-12 h-100'>
            <div className='card-header py-16 px-24 bg-base d-flex align-items-center gap-1 justify-content-between border border-end-0 border-start-0 border-top-0'>
              <div>
                <h6 className='text-lg mb-0'>How can i help your</h6>
                <span className='text-sm'>Awesome Support</span>
              </div>
              <Link to='#' className='text-primary-600'>
                View All
              </Link>
            </div>
            <div className='card-body py-16 px-24'>
              <p className='card-text text-neutral-600 mb-16'>
                Intrinsically incubate intuitive opportunities and real-time
                potentialities for change for interoperable meta-itself the
                viewer's attention from the layout
              </p>
              <p className='card-text text-neutral-600 mb-0'>
                Intrinsically incubate intuitive opportunities and real-time
                potentialities for change for interoperable{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeaderFooter;
