import { useEffect } from "react";

const Progress = ({ percentage }) => {
  useEffect(() => {
    let floatingLabel = document.querySelector(
      `[data-perc='${percentage}'] .floating-label`
    );

    if (floatingLabel) {
      floatingLabel.style.setProperty("--left-percentage", percentage);
      floatingLabel.style.animationName = "none";
      floatingLabel.style.left = percentage;
      floatingLabel.style.animationName = "animateFloatingLabel";
    }
  }, [percentage]);

  return (
    <div
      className='progress-wrapper d-flex align-items-center flex-column gap-4'
      data-perc={percentage}
    >
      <div className='h-50-px position-relative w-100 d-flex'>
        <span className='floating-label position-absolute text-xs fw-semibold text-secondary-light bg-base border radius-8 w-50-px h-32-px z-1 shadow d-flex justify-content-center align-items-center'>
          {percentage}
        </span>
        <div
          className='progress mt-auto h-8-px w-100 bg-primary-50'
          role='progressbar'
          aria-label='Basic example'
          aria-valuenow={parseInt(percentage, 10)}
          aria-valuemin='0'
          aria-valuemax='100'
        >
          <div
            className='progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible'
            style={{ width: percentage }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const GradientProgressTwo = () => {
  return (
    <div className='col-sm-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'> Gradient Progress </h6>
        </div>
        <div className='card-body p-24'>
          {/* First Progress Bar (10%) */}
          <Progress percentage='10%' />

          {/* Second Progress Bar (30%) */}
          <Progress percentage='30%' />

          {/* Third Progress Bar (50%) */}
          <Progress percentage='50%' />

          {/* Fourth Progress Bar (70%) */}
          <Progress percentage='70%' />

          {/* Fifth Progress Bar (90%) */}
          <Progress percentage='90%' />
        </div>
      </div>
    </div>
  );
};

export default GradientProgressTwo;
