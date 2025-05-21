import { useEffect } from "react";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";

const DefaultTooltipThree = () => {
  useEffect(() => {
    // Select all elements with data-bs-toggle="DefaultTooltipThree"
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="DefaultTooltipThree"]'
    );
    // Initialize tooltips
    const tooltipList = Array.from(tooltipTriggerList).map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
    // Cleanup on unmount
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
              className='btn bg-transparent bg-hover-primary-50 text-primary-600 text-hover-primary-600 border border-primary-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-primary'
              data-bs-title='primary Tooltip'
            >
              Primary
            </button>
            <button
              type='button'
              className='btn bg-transparent bg-hover-lilac-100 text-lilac-600 text-hover-lilac-600 border border-lilac-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-purple'
              data-bs-title='Secondary Tooltip'
            >
              Secondary
            </button>
            <button
              type='button'
              className='btn bg-transparent bg-hover-success-100 text-success-600 text-hover-success-600 border border-success-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-success'
              data-bs-title='Success Tooltip'
            >
              Success
            </button>
            <button
              type='button'
              className='btn bg-transparent bg-hover-info-100 text-info-600 text-hover-info-600 border border-info-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-info'
              data-bs-title='Info Tooltip'
            >
              Info
            </button>
            <button
              type='button'
              className='btn bg-transparent bg-hover-warning-100 text-warning-600 text-hover-warning-600 border border-warning-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-warning'
              data-bs-title='Warning Tooltip'
            >
              Warning
            </button>
            <button
              type='button'
              className='btn bg-transparent bg-hover-danger-100 text-danger-600 text-hover-danger-600 border border-danger-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-danger'
              data-bs-title='Danger Tooltip'
            >
              Danger
            </button>
            <button
              type='button'
              className='btn bg-transparent bg-hover-neutral-100 text-neutral-600 text-hover-neutral-600 border border-neutral-600 radius-8 px-32 py-11'
              data-bs-toggle='DefaultTooltipThree'
              data-bs-placement='top'
              data-bs-custom-class='tooltip-dark'
              data-bs-title='Dark Tooltip'
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTooltipThree;
