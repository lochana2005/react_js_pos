import { useEffect } from "react";

const ProgressCircle = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progressBar");

    progressBars.forEach((progressBar) => {
      const bar = progressBar.querySelector(".circleBar");
      const val = progressBar.querySelector(".barNumber");
      const perc = parseInt(val.textContent, 10);
      const animateProgress = () => {
        const start = Date.now();
        const duration = 3000;
        const animate = () => {
          const now = Date.now();
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const current = perc * progress;

          // Update the progress bar rotation
          bar.style.transform = `rotate(${45 + current * 1.8}deg)`;

          // Update the text value
          val.textContent = Math.floor(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        animate();
      };

      animateProgress();
    });
  }, []);
  return (
    <div className='col-xxl-12'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Progress Circle</h6>
        </div>
        <div className='card-body p-24'>
          <div className=''>
            <div className='progressBar w-90-px h-44-px position-relative text-primary-light fw-semibold'>
              <div className='barOverflow'>
                <div className='circleBar border-width-6-px'></div>
              </div>
              <div className='position-absolute start-50 translate-middle top-50 line-height-1 mt-8'>
                <div className='d-flex align-items-center justify-content-center line-height-1 text-sm'>
                  <span className='barNumber line-height-1'>40</span>
                  <span>%</span>
                </div>
                <span className='line-height-1 text-xs text-secondary-light'>
                  Users
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
