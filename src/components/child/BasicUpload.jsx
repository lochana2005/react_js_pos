import { Icon } from "@iconify/react/dist/iconify.js";

const BasicUpload = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Basic Upload</h6>
        </div>
        <div className='card-body p-24'>
          <label
            htmlFor='basic-upload'
            className='border border-primary-600 fw-medium text-primary-600 px-16 py-12 radius-12 d-inline-flex align-items-center gap-2 bg-hover-primary-50'
          >
            <Icon icon='solar:upload-linear' className='text-xl' />
            Click to upload
          </label>
          <input
            type='file'
            className='form-control w-auto mt-24 form-control-lg'
            id='basic-upload'
          />
        </div>
      </div>
    </div>
  );
};

export default BasicUpload;
