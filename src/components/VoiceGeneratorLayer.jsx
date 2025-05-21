import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const VoiceGeneratorLayer = () => {
  return (
    <div className='row gy-4'>
      <div className='col-xxl-3 col-lg-4'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <div className='mb-20'>
              <label
                htmlFor='language'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Language
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='language'
                defaultValue='Select Language'
              >
                <option value='Select Language' disabled>
                  Select Language
                </option>
                <option value='English'>English</option>
                <option value='Bangla'>Bangla</option>
                <option value='Hindi'>Hindi</option>
                <option value='Urdhu'>Urdhu</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='audioEffect'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Audio Effect
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='audioEffect'
                defaultValue='Select Audio Effect'
              >
                <option value='Select Audio Effect' disabled>
                  Select Audio Effect
                </option>
                <option value='Smart Voice'>Smart Voice</option>
                <option value='Old Voice'>Old Voice</option>
                <option value='Similar Voice'>Similar Voice</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='voice'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Voice
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='voice'
                defaultValue='Select Voice'
              >
                <option value='Select Voice' disabled>
                  Select Voice
                </option>
                <option value='Amber Heath'>Amber Heath</option>
                <option value='Amber Heath 2'>Amber Heath</option>
                <option value='Amber Heath 3'>Amber Heath</option>
                <option value='Amber Heath 4'>Amber Heath</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='format'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Format
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='format'
                defaultValue='Select Format'
              >
                <option value='Select Format' disabled>
                  Select Format
                </option>
                <option value='mp3'>Mp3</option>
                <option value='mp4'>Mp4</option>
              </select>
            </div>
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
              <h6 className='text-lg mb-0 text-line-1'>
                Alright guys, so I've just seen this website...
              </h6>
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
          <div className='chat-message-list max-h-612-px min-h-612-px'>
            {/* User generated Text Start */}
            <div className='d-flex align-items-start justify-content-between gap-16 border-bottom border-neutral-200 pb-16 mb-16'>
              <div className='d-flex align-items-start gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='Wowdash'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Alright guys, so I've just seen this website, Fortunanest
                    website, it's an investment website and you invest there. So
                    I actually tried it some months, I tried it just for 3
                    months and I realized everything was working correct. I was
                    thinking it was this fake website, I never met this website.
                  </p>
                </div>
              </div>
              <button
                type='button'
                className='d-flex align-items-center gap-6 px-8 py-4 bg-primary-50 radius-4 bg-hover-primary-100 flex-shrink-0'
              >
                <i className='ri-edit-2-fill' /> Edit
              </button>
            </div>
            {/* User generated Text End */}
            {/* WowDash generated Text Start */}
            <div className='d-flex align-items-start gap-16 border-bottom border-neutral-200 pb-16 mb-16'>
              <div className='img overflow-hidden flex-shrink-0'>
                <img
                  src='assets/images/wow-dash-favicon.png'
                  alt='Wowdash'
                  className='w-44-px h-44-px rounded-circle object-fit-cover'
                />
              </div>
              <div className='info flex-grow-1'>
                <h6 className='text-lg mb-16 mt-8'>WowDash</h6>
                <div className='audioplayer'>
                  <audio preload='auto' controls={true} className='w-100'>
                    <source src='https://www.w3schools.com/html/horse.mp3' />
                  </audio>
                </div>

                <div className='mt-24 d-flex align-items-center gap-16'>
                  <button
                    type='button'
                    className='btn btn-primary d-flex align-items-center gap-8 px-20 flex-shrink-0'
                  >
                    Download
                    <i className='ri-download-2-line' />
                  </button>
                  <select
                    className='form-select form-control min-w-132-px px-16 py-14 h-48-px w-auto'
                    defaultValue='Select Format'
                  >
                    <option value='Select Format' disabled>
                      Select Format
                    </option>
                    <option value='mp3'>Mp3</option>
                    <option value='mp4'>Mp4</option>
                  </select>
                </div>
              </div>
            </div>
            {/* WowDash generated Text End */}
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

export default VoiceGeneratorLayer;
