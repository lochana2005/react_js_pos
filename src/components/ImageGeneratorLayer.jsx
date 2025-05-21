import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const ImageGeneratorLayer = () => {
  return (
    <div className='row gy-4'>
      <div className='col-xxl-3 col-lg-4'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <div className='mb-20'>
              <label
                htmlFor='resulation'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Image Resolution
              </label>
              <input
                type='text'
                className='form-control px-16 py-14 h-48-px'
                id='resulation'
                defaultValue='1024 x 1024px'
              />
            </div>
            <div className='mb-20'>
              <label
                htmlFor='style'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Image Resolution
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='style'
                defaultValue='carton'
              >
                <option value='Select a style' disabled>
                  Select a style
                </option>
                <option value='carton'>Carton</option>
                <option value='oil_painting'>Oil painting</option>
                <option value='pencil_sketch'>Pencil sketch</option>
                <option value='paper_collage'>Paper collage</option>
                <option value='street_art'>Street art</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='LightingStyle'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Lighting Style
              </label>
              <select
                className='form-control radius-8 form-select'
                id='LightingStyle'
                defaultValue='Select Lighting Style'
              >
                <option value='Select Lighting Style' disabled>
                  Select Lighting Style
                </option>
                <option value='back_lighting'>Back lighting</option>
                <option value='none'>None</option>
                <option value='chiaroscuro'>Chiaroscuro</option>
                <option value='god_rays'>God rays</option>
                <option value='studio_lighting'>Studio lighting</option>
                <option value='candlelight'>Candlelight</option>
                <option value='street_lighting'>Street lighting</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='Mood'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Mood
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='Mood'
                defaultValue='Select Mood'
              >
                <option value='Select Mood' disabled>
                  Select Mood
                </option>
                <option value='none'>None</option>
                <option value='chiaroscuro'>Chiaroscuro</option>
                <option value='god_rays'>God rays</option>
                <option value='studio_lighting'>Studio lighting</option>
                <option value='candlelight'>Candlelight</option>
                <option value='street_lighting'>Street lighting</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='imageNumber'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Number Of Image
              </label>
              <input
                type='number'
                className='form-control px-16 py-14 h-48-px'
                id='imageNumber'
                defaultValue={4}
              />
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
                Please, Make 4 variant of this image Quickly As Soon As possible
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
              <div className='d-flex align-items-center gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='image_icon'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Please, Make 4 variant of this image Quickly As Soon As
                    possible{" "}
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
                  alt='image_icon'
                  className='w-44-px h-44-px rounded-circle object-fit-cover'
                />
              </div>
              <div className='info flex-grow-1'>
                <h6 className='text-lg mb-16 mt-8'>WowDash</h6>
                <div className='row g-3'>
                  <div className='col-xl-3 col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator1.png'
                        alt='WowDash React Vite'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <div className='form-check style-check d-flex align-items-center position-absolute top-0 start-0 ms-8 mt-8'>
                        <input
                          className='form-check-input radius-4 border border-neutral-400'
                          id='image1'
                          type='checkbox'
                          name='checkbox'
                        />
                      </div>
                      <label
                        htmlFor='image1'
                        className='position-absolute start-0 top-0 w-100 h-100'
                      />
                    </div>
                  </div>
                  <div className='col-xl-3 col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator2.png'
                        alt='WowDash React Vite'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <div className='form-check style-check d-flex align-items-center position-absolute top-0 start-0 ms-8 mt-8'>
                        <input
                          className='form-check-input radius-4 border border-neutral-400'
                          id='image2'
                          type='checkbox'
                          name='checkbox'
                        />
                      </div>
                      <label
                        htmlFor='image2'
                        className='position-absolute start-0 top-0 w-100 h-100'
                      />
                    </div>
                  </div>
                  <div className='col-xl-3 col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator3.png'
                        alt='WowDash React Vite'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <div className='form-check style-check d-flex align-items-center position-absolute top-0 start-0 ms-8 mt-8'>
                        <input
                          className='form-check-input radius-4 border border-neutral-400'
                          id='image3'
                          type='checkbox'
                          name='checkbox'
                        />
                      </div>
                      <label
                        htmlFor='image3'
                        className='position-absolute start-0 top-0 w-100 h-100'
                      />
                    </div>
                  </div>
                  <div className='col-xl-3 col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator4.png'
                        alt='WowDash React Vite'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <div className='form-check style-check d-flex align-items-center position-absolute top-0 start-0 ms-8 mt-8'>
                        <input
                          className='form-check-input radius-4 border border-neutral-400'
                          id='image4'
                          type='checkbox'
                          name='checkbox'
                        />
                      </div>
                      <label
                        htmlFor='image4'
                        className='position-absolute start-0 top-0 w-100 h-100'
                      />
                    </div>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-16 mt-24 flex-wrap'>
                  <button type='button' className='btn btn-outline-primary-600'>
                    🚀 Upscale (2x)
                  </button>
                  <button type='button' className='btn btn-outline-primary-600'>
                    🎲 Make Square
                  </button>
                  <button type='button' className='btn btn-outline-primary-600'>
                    ⭐ Zoom Out 2x
                  </button>
                  <button type='button' className='btn btn-outline-primary-600'>
                    🎉️ Upscale (4x){" "}
                  </button>
                  <button type='button' className='btn btn-outline-primary-600'>
                    🎁 Upscale (6x)
                  </button>
                </div>
                <div className='mt-24 d-flex align-items-center justify-content-between gap-16'>
                  <div className='d-flex align-items-center gap-20 bg-neutral-50 radius-8 px-16 py-10 line-height-1'>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-thumb-up-line line-height-1' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-thumb-down-line' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-share-forward-line' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-download-2-fill' />
                    </button>
                  </div>
                  <button
                    type='button'
                    className='btn btn-outline-primary d-flex align-items-center gap-8'
                  >
                    {" "}
                    <i className='ri-repeat-2-line' /> Regenerate
                  </button>
                </div>
              </div>
            </div>
            {/* WowDash generated Text End */}
            {/* User generated Text Start */}
            <div className='d-flex align-items-start justify-content-between gap-16 border-bottom border-neutral-200 pb-16 mb-16'>
              <div className='d-flex align-items-center gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='image_icon'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Please, Make 4 variant of this image Quickly As Soon As
                    possible{" "}
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
                  alt='image_icon'
                  className='w-44-px h-44-px rounded-circle object-fit-cover'
                />
              </div>
              <div className='info flex-grow-1'>
                <h6 className='text-lg mb-16 mt-8'>WowDash</h6>
                <div className='row g-3'>
                  <div className='col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator5.png'
                        alt='WowDash React Vite'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <button
                        type='button'
                        className='download-btn position-absolute top-0 end-0 me-8 mt-8 w-50-px h-50-px bg-primary-600 text-white d-flex justify-content-center align-items-center radius-6 text-2xl bg-hover-primary-700'
                      >
                        <i className='ri-download-2-fill' />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='mt-24 d-flex align-items-center justify-content-between gap-16'>
                  <div className='d-flex align-items-center gap-20 bg-neutral-50 radius-8 px-16 py-10 line-height-1'>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-thumb-up-line line-height-1' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-thumb-down-line' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-share-forward-line' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-download-2-fill' />
                    </button>
                  </div>
                  <button
                    type='button'
                    className='btn btn-outline-primary d-flex align-items-center gap-8'
                  >
                    {" "}
                    <i className='ri-repeat-2-line' /> Regenerate
                  </button>
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

export default ImageGeneratorLayer;
