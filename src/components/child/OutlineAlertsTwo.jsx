import { Icon } from "@iconify/react/dist/iconify.js";

const OutlineAlertsTwo = () => {
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Outline Alerts</h6>
        </div>
        <div className='card-body p-24 d-flex flex-column gap-4'>
          <div
            className='alert alert-primary bg-primary-50 text-primary-600 border-primary-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between'
            role='alert'
          >
            <div className='d-flex align-items-center gap-2'>
              <Icon icon='mingcute:emoji-line' className='icon text-xl' />
              This is a Primary alert
            </div>
            <button className='remove-button text-primary-600 text-xxl line-height-1'>
              {" "}
              <Icon icon='iconamoon:sign-times-light' className='icon' />
            </button>
          </div>
          <div
            className='alert alert-lilac bg-lilac-50 text-lilac-600 border-lilac-50 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between'
            role='alert'
          >
            <div className='d-flex align-items-center gap-2'>
              <Icon icon='mingcute:emoji-line' className='icon text-xl' />
              This is a Secondary alert
            </div>
            <button className='remove-button text-lilac-600 text-xxl line-height-1'>
              {" "}
              <Icon icon='iconamoon:sign-times-light' className='icon' />
            </button>
          </div>
          <div
            className='alert alert-success bg-success-100 text-success-600 border-success-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between'
            role='alert'
          >
            <div className='d-flex align-items-center gap-2'>
              <Icon icon='akar-icons:double-check' className='icon text-xl' />
              This is a Success alert
            </div>
            <button className='remove-button text-success-600 text-xxl line-height-1'>
              {" "}
              <Icon icon='iconamoon:sign-times-light' className='icon' />
            </button>
          </div>
          <div
            className='alert alert-warning bg-warning-100 text-warning-600 border-warning-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between'
            role='alert'
          >
            <div className='d-flex align-items-center gap-2'>
              <Icon icon='mdi:alert-circle-outline' className='icon text-xl' />
              This is a Warning alert
            </div>
            <button className='remove-button text-warning-600 text-xxl line-height-1'>
              {" "}
              <Icon icon='iconamoon:sign-times-light' className='icon' />
            </button>
          </div>
          <div
            className='alert alert-info bg-info-100 text-info-600 border-info-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between'
            role='alert'
          >
            <div className='d-flex align-items-center gap-2'>
              <Icon icon='ci:link' className='icon text-xl' />
              This is a Info alert
            </div>
            <button className='remove-button text-info-600 text-xxl line-height-1'>
              {" "}
              <Icon icon='iconamoon:sign-times-light' className='icon' />
            </button>
          </div>
          <div
            className='alert alert-danger bg-danger-100 text-danger-600 border-danger-100 px-24 py-11 mb-0 fw-semibold text-lg radius-8 d-flex align-items-center justify-content-between'
            role='alert'
          >
            <div className='d-flex align-items-center gap-2'>
              <Icon icon='mingcute:delete-2-line' className='icon text-xl' />
              This is a Danger alert
            </div>
            <button className='remove-button text-danger-600 text-xxl line-height-1'>
              {" "}
              <Icon icon='iconamoon:sign-times-light' className='icon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutlineAlertsTwo;
