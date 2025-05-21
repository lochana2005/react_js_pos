import { useEffect } from "react";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";
const DefaultTooltip = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
      return new Tooltip(tooltipTriggerEl);
    });
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Default Tooltip</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='btn btn-primary-50 text-primary-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Primary Tooltip'
            >
              Primary
            </button>
            <button
              type='button'
              className='btn btn-lilac-100 text-lilac-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Secondary Tooltip'
            >
              Secondary
            </button>
            <button
              type='button'
              className='btn btn-success-100 text-success-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Success Tooltip'
            >
              Success
            </button>
            <button
              type='button'
              className='btn btn-info-100 text-info-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Info Tooltip'
            >
              Info
            </button>
            <button
              type='button'
              className='btn btn-warning-100 text-warning-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Warning Tooltip'
            >
              Warning
            </button>
            <button
              type='button'
              className='btn btn-danger-100 text-danger-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Danger Tooltip'
            >
              Danger
            </button>
            <button
              type='button'
              className='btn btn-neutral-100 text-neutral-600 radius-8 px-32 py-11'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Dark Tooltip'
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTooltip;
