import { useEffect } from "react";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";
const TooltipPopoverPositions = () => {
  useEffect(() => {
    // Select all elements with the class 'tooltip-buttonOne'
    const tooltipButtons = document.querySelectorAll(".tooltip-buttonOne");

    // Initialize a tooltip for each button
    const tooltipInstances = Array.from(tooltipButtons).map((tooltipButton) => {
      const tooltipContent = tooltipButton.nextElementSibling.innerHTML;

      return new Tooltip(tooltipButton, {
        title: tooltipContent,
        trigger: "hover",
        html: true,
        customClass: tooltipButton.getAttribute("data-bs-custom-class") || "",
      });
    });

    // Cleanup tooltips when the component unmounts
    return () => {
      tooltipInstances.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>
            Tooltip Popover Positions
          </h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <div className=''>
              <button
                type='button'
                className='tooltip-buttonOne btn bg-primary-600 text-white border border-primary-600 radius-8 px-32 py-11'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-html='true'
                data-bs-custom-class='tooltip-primary'
                title=''
              >
                Primary
              </button>
              <div className='my-tooltip tip-content hidden text-start shadow'>
                <h6 className='text-white'>Primary</h6>
                <p className='text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className=''>
              <button
                type='button'
                className='tooltip-buttonOne btn bg-success-600 text-white border border-success-600 radius-8 px-32 py-11'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-html='true'
                data-bs-custom-class='tooltip-success'
                title=''
              >
                Success
              </button>
              <div className='my-tooltip tip-content hidden text-start shadow'>
                <h6 className='text-white'>Success</h6>
                <p className='text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className=''>
              <button
                type='button'
                className='tooltip-buttonOne btn bg-info-600 text-white border border-info-600 radius-8 px-32 py-11'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-html='true'
                data-bs-custom-class='tooltip-info'
                title=''
              >
                Info
              </button>
              <div className='my-tooltip tip-content hidden text-start shadow'>
                <h6 className='text-white'>Info</h6>
                <p className='text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className=''>
              <button
                type='button'
                className='tooltip-buttonOne btn bg-warning-600 text-white border border-warning-600 radius-8 px-32 py-11'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-html='true'
                data-bs-custom-class='tooltip-warning'
                title=''
              >
                warning
              </button>
              <div className='my-tooltip tip-content hidden text-start shadow'>
                <h6 className='text-white'>Warning</h6>
                <p className='text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className=''>
              <button
                type='button'
                className='tooltip-buttonOne btn bg-danger-600 text-white border border-danger-600 radius-8 px-32 py-11'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-html='true'
                data-bs-custom-class='tooltip-danger'
                title=''
              >
                Danger
              </button>
              <div className='my-tooltip tip-content hidden text-start shadow'>
                <h6 className='text-white'>Danger</h6>
                <p className='text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className=''>
              <button
                type='button'
                className='tooltip-buttonOne btn bg-neutral-900 text-base border border-neutral-900 radius-8 px-32 py-11'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-html='true'
                data-bs-custom-class='tooltip-dark'
                title=''
              >
                Dark
              </button>
              <div className='my-tooltip tip-content hidden text-start shadow'>
                <h6 className='text-white'>Dark</h6>
                <p className='text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipPopoverPositions;
