import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const ChatProfileLayer = () => {
  return (
    <div className='chat-wrapper'>
      <div className='chat-sidebar profile-setting card'>
        <div className='text-end'>
          <Link to='/chat-message'>
            <Icon icon='akar-icons:cross' />
          </Link>
        </div>
        <div className='chat-main-profile'>
          <div className='img'>
            <img src='assets/images/chat/chat-main.png' alt='image_icon' />
          </div>
          <div className='text-center'>
            <h6 className='text-md mb-0'>Kathryn Murphy</h6>
            <p className='mb-0 text-sm'>Admin</p>
          </div>
        </div>
        <div className='mt-24'>
          <label className='form-label'>About Me</label>
          <textarea
            name='about'
            className='form-control'
            placeholder='Write some description'
            defaultValue={""}
          />
        </div>
        <div className='mt-24'>
          <ul className='d-flex flex-column gap-1'>
            <li className='d-flex flex-wrap align-items-center justify-content-between'>
              <span className='d-inline-flex gap-2 align-items-center'>
                <Icon icon='mingcute:location-line' className='text-lg' />
                Location
              </span>
              <span className='text-primary-light'>United State</span>
            </li>
            <li className='d-flex flex-wrap align-items-center justify-content-between'>
              <span className='d-inline-flex gap-2 align-items-center'>
                <Icon icon='fluent:person-24-regular' className='text-lg' />
                Member since
              </span>
              <span className='text-primary-light'>25 Jan 2025</span>
            </li>
            <li className='d-flex flex-wrap align-items-center justify-content-between'>
              <span className='d-inline-flex gap-2 align-items-center'>
                <Icon icon='cil:language' className='text-lg' />
                Language
              </span>
              <span className='text-primary-light'>English</span>
            </li>
          </ul>
        </div>
        <div className='mt-24'>
          <h6 className='text-lg'>Status</h6>
          <div className='d-flex flex-column gap-1'>
            <div className='form-check d-flex align-items-center'>
              <input
                className='form-check-input'
                type='radio'
                name='status'
                id='status1'
                defaultChecked=''
              />
              <label className='form-check-label' htmlFor='status1'>
                Active
              </label>
            </div>
            <div className='form-check d-flex align-items-center'>
              <input
                className='form-check-input'
                type='radio'
                name='status'
                id='status2'
              />
              <label className='form-check-label' htmlFor='status2'>
                Do Not Disturb
              </label>
            </div>
            <div className='form-check d-flex align-items-center'>
              <input
                className='form-check-input'
                type='radio'
                name='status'
                id='status3'
              />
              <label className='form-check-label' htmlFor='status3'>
                Away
              </label>
            </div>
            <div className='form-check d-flex align-items-center'>
              <input
                className='form-check-input'
                type='radio'
                name='status'
                id='status4'
              />
              <label className='form-check-label' htmlFor='status4'>
                Offline
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='chat-main card'>
        <div className='chat-sidebar-single active'>
          <div className='img'>
            <img src='assets/images/chat/11.png' alt='image_icon' />
          </div>
          <div className='info'>
            <h6 className='text-md mb-0'>Kathryn Murphy</h6>
            <p className='mb-0'>Available</p>
          </div>
          <div className='action d-inline-flex align-items-center gap-3'>
            <button type='button' className='text-xl text-primary-light'>
              <Icon icon='mi:call' />
            </button>
            <button type='button' className='text-xl text-primary-light'>
              <Icon icon='fluent:video-32-regular' />
            </button>
            <div className='btn-group'>
              <button
                type='button'
                className='text-primary-light text-xl'
                data-bs-toggle='dropdown'
                data-bs-display='static'
                aria-expanded='false'
              >
                <Icon icon='tabler:dots-vertical' />
              </button>
              <ul className='dropdown-menu dropdown-menu-lg-end border'>
                <li>
                  <button
                    className='dropdown-item center-gap rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                    type='button'
                  >
                    <Icon icon='mdi:clear-circle-outline' />
                    Clear All
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item center-gap rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                    type='button'
                  >
                    <Icon icon='ic:baseline-block' />
                    Block
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* chat-sidebar-single end */}
        <div className='chat-message-list'>
          <div className='chat-single-message left'>
            <img
              src='assets/images/chat/11.png'
              alt='image_icon'
              className='avatar-lg object-fit-cover rounded-circle'
            />
            <div className='chat-message-content'>
              <p className='mb-3'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <p className='chat-time mb-0'>
                <span>6.30 pm</span>
              </p>
            </div>
          </div>
          {/* chat-single-message end */}
          <div className='chat-single-message right'>
            <div className='chat-message-content'>
              <p className='mb-3'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <p className='chat-time mb-0'>
                <span>6.30 pm</span>
              </p>
            </div>
          </div>
          {/* chat-single-message end */}
          <div className='chat-single-message left'>
            <img
              src='assets/images/chat/11.png'
              alt='image_icon'
              className='avatar-lg object-fit-cover rounded-circle'
            />
            <div className='chat-message-content'>
              <p className='mb-3'>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using &apos;Content
                here, content here&apos;, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default.Contrary to popular belief, Lorem Ipsum
                is not simply random text is the model text for your company.
              </p>
              <p className='chat-time mb-0'>
                <span>6.30 pm</span>
              </p>
            </div>
          </div>
          {/* chat-single-message end */}
        </div>
        <form className='chat-message-box'>
          <input type='text' name='chatMessage' placeholder='Write message' />
          <div className='chat-message-box-action'>
            <button type='button' className='text-xl'>
              <Icon icon='ph:link' />
            </button>
            <button type='button' className='text-xl'>
              <Icon icon='solar:gallery-linear' />
            </button>
            <button
              type='submit'
              className='btn btn-sm btn-primary-600 radius-8 d-inline-flex align-items-center gap-1'
            >
              Send
              <Icon icon='f7:paperplane' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatProfileLayer;
