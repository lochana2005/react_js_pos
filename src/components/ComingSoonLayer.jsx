import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ComingSoonLayer = () => {
  const calculateTimeLeft = (endTime) => {
    const difference = Date.parse(endTime) - Date.parse(new Date());

    const timeLeft = {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft.total > 0
      ? timeLeft
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(
      new Date(Date.parse(new Date()) + 99 * 24 * 60 * 60 * 1000)
    )
  );

  useEffect(() => {
    const deadline = new Date(
      Date.parse(new Date()) + 99 * 24 * 60 * 60 * 1000
    );

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);
  return (
    <div className='custom-bg'>
      <div className='container container--xl'>
        <div className='d-flex align-items-center justify-content-between py-24'>
          <Link to='/index'>
            <img src='assets/images/logo.png' alt='Logo' />
          </Link>
          <Link to='/index' className='btn btn-outline-primary-600 text-sm'>
            Go To Home
          </Link>
        </div>

        <div className='py-res-120'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h3 className='mb-32 max-w-1000-px'>
                Our site is creating. Keep persistence, we are not far off
              </h3>
              <p className='text-neutral-500 max-w-700-px text-lg'>
                We have been spending extended periods to send off our new site.
                Join our mailing list or follow us on Facebook for the latest
                updates.
              </p>

              <div
                className='countdown my-56 d-flex align-items-center flex-wrap gap-md-4 gap-3'
                id='coming-soon'
              >
                {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                  <div
                    key={index}
                    className='d-flex flex-column align-items-center'
                  >
                    <h4
                      className={`countdown-item mb-0 w-110-px fw-medium h-110-px bg-neutral-900 w-100 h-100 rounded-circle text-white aspect-ratio-1 d-flex justify-content-center align-items-center`}
                    >
                      {timeLeft[unit].toString().padStart(2, "0")}
                    </h4>
                    <span className='text-neutral-500 text-md text-uppercase fw-medium mt-8'>
                      {unit}
                    </span>
                  </div>
                ))}
              </div>

              <div className='mt-24 max-w-500-px text-start'>
                <span className='fw-semibold text-neutral-600 text-lg text-hover-neutral-600'>
                  Do you want to get updates? Please subscribe now
                </span>
                <form
                  action='#'
                  className='mt-16 d-flex gap-16 flex-sm-row flex-column'
                >
                  <input
                    type='email'
                    className='form-control text-start py-24 flex-grow-1'
                    placeholder='wowdash@gmail.com'
                    required
                  />
                  <button
                    type='submit'
                    className='btn btn-primary-600 px-24 flex-shrink-0 d-flex align-items-center justify-content-center gap-8'
                  >
                    <i className='ri-notification-2-line'></i> Knock Us
                  </button>
                </form>
              </div>
            </div>

            <div className='col-lg-6 d-lg-block d-none'>
              <img
                src='assets/images/coming-soon/coming-soon.png'
                alt='Coming Soon'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonLayer;
