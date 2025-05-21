const GradientProgress = () => {
  return (
    <div className='col-sm-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'> Gradient Progress </h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-column gap-4'>
            <div
              className='progress h-8-px w-100 bg-primary-50'
              role='progressbar'
              aria-label='Basic example'
              aria-valuenow={20}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className='progress-bar animated-bar rounded-pill bg-primary-gradient'
                style={{ width: "20%" }}
              />
            </div>
            <div
              className='progress h-8-px w-100 bg-success-100'
              role='progressbar'
              aria-label='Basic example'
              aria-valuenow={35}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className='progress-bar animated-bar rounded-pill bg-success-gradient'
                style={{ width: "35%" }}
              />
            </div>
            <div
              className='progress h-8-px w-100 bg-info-100'
              role='progressbar'
              aria-label='Basic example'
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className='progress-bar animated-bar rounded-pill bg-info-gradient'
                style={{ width: "50%" }}
              />
            </div>
            <div
              className='progress h-8-px w-100 bg-warning-100'
              role='progressbar'
              aria-label='Basic example'
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className='progress-bar animated-bar rounded-pill bg-warning-gradient'
                style={{ width: "75%" }}
              />
            </div>
            <div
              className='progress h-8-px w-100 bg-danger-100'
              role='progressbar'
              aria-label='Basic example'
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className='progress-bar animated-bar rounded-pill bg-danger-gradient'
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientProgress;
