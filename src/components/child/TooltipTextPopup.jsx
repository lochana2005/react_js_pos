import { useEffect } from "react";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TooltipTextPopup = () => {
  useEffect(() => {
    // Select all elements with the class 'tooltip-buttonTwo'
    const tooltipButtons = document.querySelectorAll(".tooltip-buttonTwo");

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
          <h6 className='text-lg fw-semibold mb-0'>Tooltip Text popup</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <ul className='list-decimal ps-20'>
              <li className='text-secondary-light mb-8'>
                This is tooltip text {"  "}
                <button
                  type='button'
                  className='tooltip-buttonTwo text-primary-600'
                  data-bs-toggle='tooltip'
                  data-bs-custom-class='tooltip-primary'
                  data-bs-placement='right'
                >
                  popup
                </button>
                <div className='my-tooltip tip-content hidden text-start shadow'>
                  <h6 className='text-white'>This is title</h6>
                  <p className='text-white'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </li>
              <li className='text-secondary-light mb-8'>
                This is tooltip text {"  "}
                <button
                  type='button'
                  className='tooltip-buttonTwo text-primary-600'
                  data-bs-toggle='tooltip'
                  data-bs-custom-class='tooltip-primary'
                  data-bs-placement='right'
                >
                  popup
                </button>
                <div className='my-tooltip tip-content hidden text-start shadow'>
                  <h6 className='text-white'>This is title</h6>
                  <p className='text-white'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </li>
              <li className='text-secondary-light mb-8'>
                This is tooltip text {"  "}
                <button
                  type='button'
                  className='tooltip-buttonTwo text-primary-600'
                  data-bs-toggle='tooltip'
                  data-bs-custom-class='tooltip-primary'
                  data-bs-placement='right'
                >
                  popup
                </button>
                <div className='my-tooltip tip-content hidden text-start shadow'>
                  <h6 className='text-white'>This is title</h6>
                  <p className='text-white'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </li>
              <li className='text-secondary-light mb-8'>
                This is tooltip text {"  "}
                <button
                  type='button'
                  className='tooltip-buttonTwo text-primary-600'
                  data-bs-toggle='tooltip'
                  data-bs-custom-class='tooltip-primary'
                  data-bs-placement='right'
                >
                  popup
                </button>
                <div className='my-tooltip tip-content hidden text-start shadow'>
                  <h6 className='text-white'>This is title</h6>
                  <p className='text-white'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </li>
              <li className='text-secondary-light'>
                This is tooltip text {"  "}
                <button
                  type='button'
                  className='tooltip-buttonTwo text-primary-600'
                  data-bs-toggle='tooltip'
                  data-bs-custom-class='tooltip-primary'
                  data-bs-placement='right'
                >
                  popup
                </button>
                <div className='my-tooltip tip-content hidden text-start shadow'>
                  <h6 className='text-white'>This is title</h6>
                  <p className='text-white'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipTextPopup;
