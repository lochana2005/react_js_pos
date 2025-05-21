import { useState } from "react";

const ThemeLayer = () => {
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewImage2, setPreviewImage2] = useState("");

  const readURL = (input, setPreviewImage) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };
  return (
    <div className='card h-100 p-0 radius-12'>
      <div className='card-body p-24'>
        <form action='#'>
          <div className='row gy-4'>
            <div className='col-md-6'>
              <label
                htmlFor='imageUpload'
                className='form-label fw-semibold text-secondary-light text-md mb-8'
              >
                Logo{" "}
                <span className='text-secondary-light fw-normal'>
                  (140px X 140px)
                </span>
              </label>
              <input
                type='file'
                className='form-control radius-8'
                id='imageUpload'
                onChange={(e) => readURL(e, setPreviewImage1)}
              />
              <div className='avatar-upload mt-16'>
                <div className='avatar-preview style-two'>
                  <div
                    id='previewImage1'
                    style={{
                      backgroundImage: `url(${previewImage1})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <label
                htmlFor='imageUploadTwo'
                className='form-label fw-semibold text-secondary-light text-md mb-8'
              >
                Logo{" "}
                <span className='text-secondary-light fw-normal'>
                  (140px X 140px)
                </span>
              </label>
              <input
                type='file'
                className='form-control radius-8'
                id='imageUploadTwo'
                onChange={(e) => readURL(e, setPreviewImage2)}
              />
              <div className='avatar-upload mt-16'>
                <div className='avatar-preview style-two'>
                  <div
                    id='previewImage2'
                    style={{
                      backgroundImage: `url(${previewImage2})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-32'>
            <h6 className='text-xl mb-16'>Theme Colors</h6>
            <div className='row gy-4'>
              <div className='col-xxl-2 col-md-4 col-sm-6'>
                <input
                  className='form-check-input payment-gateway-input'
                  name='payment-gateway'
                  type='radio'
                  id='blue'
                  hidden={true}
                />
                <label
                  htmlFor='blue'
                  className='payment-gateway-label border radius-8 p-8 w-100'
                >
                  <span className='d-flex align-items-center gap-2'>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-primary-600 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Blue
                      </span>
                    </span>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-primary-100 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Focus
                      </span>
                    </span>
                  </span>
                </label>
              </div>
              <div className='col-xxl-2 col-md-4 col-sm-6'>
                <input
                  className='form-check-input payment-gateway-input'
                  name='payment-gateway'
                  type='radio'
                  id='magenta'
                  hidden={true}
                />
                <label
                  htmlFor='magenta'
                  className='payment-gateway-label border radius-8 p-8 w-100'
                >
                  <span className='d-flex align-items-center gap-2'>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-lilac-600 radius-4' />
                      <span className='text-lilac-light text-md fw-semibold mt-8'>
                        Magenta
                      </span>
                    </span>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-lilac-100 radius-4' />
                      <span className='text-lilac-light text-md fw-semibold mt-8'>
                        Focus
                      </span>
                    </span>
                  </span>
                </label>
              </div>
              <div className='col-xxl-2 col-md-4 col-sm-6'>
                <input
                  className='form-check-input payment-gateway-input'
                  name='payment-gateway'
                  type='radio'
                  id='orange'
                  hidden={true}
                />
                <label
                  htmlFor='orange'
                  className='payment-gateway-label border radius-8 p-8 w-100'
                >
                  <span className='d-flex align-items-center gap-2'>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-warning-600 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Orange
                      </span>
                    </span>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-warning-100 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Focus
                      </span>
                    </span>
                  </span>
                </label>
              </div>
              <div className='col-xxl-2 col-md-4 col-sm-6'>
                <input
                  className='form-check-input payment-gateway-input'
                  name='payment-gateway'
                  type='radio'
                  id='green'
                  hidden={true}
                />
                <label
                  htmlFor='green'
                  className='payment-gateway-label border radius-8 p-8 w-100'
                >
                  <span className='d-flex align-items-center gap-2'>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-success-600 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Green
                      </span>
                    </span>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-success-100 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Focus
                      </span>
                    </span>
                  </span>
                </label>
              </div>
              <div className='col-xxl-2 col-md-4 col-sm-6'>
                <input
                  className='form-check-input payment-gateway-input'
                  name='payment-gateway'
                  type='radio'
                  id='red'
                  hidden={true}
                />
                <label
                  htmlFor='red'
                  className='payment-gateway-label border radius-8 p-8 w-100'
                >
                  <span className='d-flex align-items-center gap-2'>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-danger-600 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Red
                      </span>
                    </span>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-danger-100 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Focus
                      </span>
                    </span>
                  </span>
                </label>
              </div>
              <div className='col-xxl-2 col-md-4 col-sm-6'>
                <input
                  className='form-check-input payment-gateway-input'
                  name='payment-gateway'
                  type='radio'
                  id='blueDark'
                  hidden={true}
                />
                <label
                  htmlFor='blueDark'
                  className='payment-gateway-label border radius-8 p-8 w-100'
                >
                  <span className='d-flex align-items-center gap-2'>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-info-600 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Blue Dark
                      </span>
                    </span>
                    <span className='w-50 text-center'>
                      <span className='h-72-px w-100 bg-info-100 radius-4' />
                      <span className='text-secondary-light text-md fw-semibold mt-8'>
                        Focus
                      </span>
                    </span>
                  </span>
                </label>
              </div>
              <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                <button
                  type='reset'
                  className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                >
                  Reset
                </button>
                <button
                  type='submit'
                  className='btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
                >
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThemeLayer;
