import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const AddUserLayer = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='card h-100 p-0 radius-12'>
      <div className='card-body p-24'>
        <div className='row justify-content-center'>
          <div className='col-xxl-6 col-xl-8 col-lg-10'>
            <div className='card border'>
              <div className='card-body'>
                <h6 className='text-md text-primary-light mb-16'>
                  Profile Image
                </h6>
                {/* Upload Image Start */}
                <div className='mb-24 mt-16'>
                  <div className='avatar-upload'>
                    <div className='avatar-edit position-absolute bottom-0 end-0 me-24 mt-16 z-1 cursor-pointer'>
                      <input
                        type='file'
                        id='imageUpload'
                        accept='.png, .jpg, .jpeg'
                        hidden
                        onChange={handleImageChange}
                      />
                      <label
                        htmlFor='imageUpload'
                        className='w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 border border-primary-600 bg-hover-primary-100 text-lg rounded-circle'
                      >
                        <Icon
                          icon='solar:camera-outline'
                          className='icon'
                        ></Icon>
                      </label>
                    </div>
                    <div className='avatar-preview'>
                      <div
                        id='imagePreview'
                        style={{
                          backgroundImage: imagePreviewUrl
                            ? `url(${imagePreviewUrl})`
                            : "",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Upload Image End */}
                <form action='#'>
                  <div className='mb-20'>
                    <label
                      htmlFor='name'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Full Name <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      id='name'
                      placeholder='Enter Full Name'
                    />
                  </div>
                  <div className='mb-20'>
                    <label
                      htmlFor='email'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Email <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='email'
                      className='form-control radius-8'
                      id='email'
                      placeholder='Enter email address'
                    />
                  </div>
                  <div className='mb-20'>
                    <label
                      htmlFor='number'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Phone
                    </label>
                    <input
                      type='email'
                      className='form-control radius-8'
                      id='number'
                      placeholder='Enter phone number'
                    />
                  </div>
                  <div className='mb-20'>
                    <label
                      htmlFor='depart'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Department
                      <span className='text-danger-600'>*</span>{" "}
                    </label>
                    <select
                      className='form-control radius-8 form-select'
                      id='depart'
                      defaultValue='Enter Event Title'
                    >
                      <option value='Enter Event Title' disabled>
                        Enter Event Title
                      </option>
                      <option value='Enter Event Title One'>
                        Enter Event Title One
                      </option>
                      <option value='Enter Event Title Two'>
                        Enter Event Title Two
                      </option>
                    </select>
                  </div>
                  <div className='mb-20'>
                    <label
                      htmlFor='desig'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Designation
                      <span className='text-danger-600'>*</span>{" "}
                    </label>
                    <select
                      className='form-control radius-8 form-select'
                      id='desig'
                      defaultValue='Enter Designation Title'
                    >
                      <option value='Enter Designation Title' disabled>
                        Enter Designation Title
                      </option>
                      <option value='Enter Designation Title One'>
                        Enter Designation Title One
                      </option>
                      <option value='Enter Designation Title Two'>
                        Enter Designation Title Two
                      </option>
                    </select>
                  </div>
                  <div className='mb-20'>
                    <label
                      htmlFor='desc'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Description
                    </label>
                    <textarea
                      name='#0'
                      className='form-control radius-8'
                      id='desc'
                      placeholder='Write description...'
                      defaultValue={""}
                    />
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-3'>
                    <button
                      type='button'
                      className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserLayer;
