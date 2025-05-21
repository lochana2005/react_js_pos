import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const TextGeneratorNewLayer = () => {
  return (
    <div className='row gy-4 flex-wrap-reverse'>
      <div className='col-xxl-3 col-lg-4'>
        <div className='card h-100 p-0'>
          <div className='card-body p-0'>
            <div className='p-24'>
              <Link
                to='/text-generator-new'
                className='btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center justify-content-center gap-2'
              >
                <i className='ri-messenger-line' />
                New Chat
              </Link>
            </div>
            <ul className='ai-chat-list scroll-sm pe-24 ps-24 pb-24'>
              <li className='mb-16 mt-0'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  Today
                </span>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  UI/UX Design Roadmap write me the roadmap right now{" "}
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16 mt-24'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  Yesterday
                </span>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Online School Education Learning
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16 mt-24'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  17/06/2024
                </span>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Online School Education Learning
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/text-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16 mt-24'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  15/06/2024
                </span>
              </li>
              <li className='mb-0'>
                <Link
                  href=''
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-xxl-9 col-lg-8'>
        <div className='chat-main card overflow-hidden'>
          <div className='chat-sidebar-single gap-8 justify-content-between cursor-default flex-nowrap'>
            <div className='d-flex align-items-center gap-16'>
              <Link
                to='/text-generator-new'
                className='text-primary-light text-2xl line-height-1'
              >
                <i className='ri-arrow-left-line' />
              </Link>
              <h6 className='text-lg mb-0 text-line-1'>New Chat</h6>
            </div>
            <div className='d-flex align-items-center gap-16 flex-shrink-0'>
              <button
                type='button'
                className='text-secondary-light text-xl line-height-1 text-hover-primary-600'
              >
                <i className='ri-edit-2-line' />
              </button>
              <button
                type='button'
                className='text-secondary-light text-xl line-height-1 text-hover-primary-600'
              >
                <i className='ri-delete-bin-6-line' />
              </button>
            </div>
          </div>
          {/* chat-sidebar-single end */}
          <div className='chat-message-list max-h-612-px min-h-612-px position-relative'>
            <div className='d-flex align-items-center justify-content-center flex-column h-100 position-absolute top-50 start-50 translate-middle'>
              <img
                src='assets/images/chatgpt/empty-message-icon1.png'
                alt='WowDash React Vite'
              />
              <span className='text-secondary-light text-md mt-16'>
                Type New Message{" "}
              </span>
            </div>
          </div>
          <form className='chat-message-box'>
            <input
              type='text'
              name='chatMessage'
              placeholder='Message wowdash...'
            />
            <button
              type='submit'
              className='w-44-px h-44-px d-flex justify-content-center align-items-center radius-8 bg-primary-600 text-white bg-hover-primary-700 text-xl'
            >
              <Icon icon='f7:paperplane' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TextGeneratorNewLayer;
