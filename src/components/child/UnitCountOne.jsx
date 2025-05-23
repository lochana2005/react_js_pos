import { Icon } from "@iconify/react";
const UnitCountOne = () => {
  return (

    <div>


      <div className='mt-24'>
        <div className='row gy-4'>
          <div className='col-xxl-3 col-sm-6'>
            <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-1'>
              <div className='card-body p-0'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                  <div className='d-flex align-items-center gap-2'>
                    <span className='mb-0 w-48-px h-48-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0'>
                      <Icon
                        icon='mingcute:user-follow-fill'
                        className='icon'
                      />
                    </span>
                    <div>
                      <span className='mb-2 fw-medium text-secondary-light text-sm'>
                        New Users
                      </span>
                      <h6 className='fw-semibold'>15,000</h6>
                    </div>
                  </div>
                  <div id='new-user-chart' className='remove-tooltip-title rounded-tooltip-value'>

                    <Icon icon="material-symbols:visibility-rounded" className="fs-4 text-info" />

                  </div>
                </div>
                <p className='text-sm mb-0'>
                  Increase by{" "}
                  <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                    +200
                  </span>{" "}
                  this week
                </p>
              </div>
            </div>
          </div>
          <div className='col-xxl-3 col-sm-6'>
            <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-2'>
              <div className='card-body p-0'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                  <div className='d-flex align-items-center gap-2'>
                    <span className='mb-0 w-48-px h-48-px bg-success-main flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6'>
                      <Icon
                        icon='mingcute:user-follow-fill'
                        className='icon'
                      />
                    </span>
                    <div>
                      <span className='mb-2 fw-medium text-secondary-light text-sm'>
                        Active Users
                      </span>
                      <h6 className='fw-semibold'>8,000</h6>
                    </div>
                  </div>
                  <div
                    id='active-user-chart'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    <Icon icon="solar:eye-bold" className="fs-4 text-success" />


                  </div>
                </div>
                <p className='text-sm mb-0'>
                  Increase by{" "}
                  <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                    +200
                  </span>{" "}
                  this week
                </p>
              </div>
            </div>
          </div>
          <div className='col-xxl-3 col-sm-6'>
            <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-3'>
              <div className='card-body p-0'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                  <div className='d-flex align-items-center gap-2'>
                    <span className='mb-0 w-48-px h-48-px bg-yellow text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6'>
                      <Icon icon='iconamoon:discount-fill' className='icon' />
                    </span>
                    <div>
                      <span className='mb-2 fw-medium text-secondary-light text-sm'>
                        Total Sales
                      </span>
                      <h6 className='fw-semibold'>$5,00,000</h6>
                    </div>
                  </div>
                  <div
                    id='total-sales-chart'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {/* pass the color value */}

                    <Icon icon="solar:eye-bold" style={{ color: 'orange', fontSize: '1.5rem' }} />

                  </div>
                </div>
                <p className='text-sm mb-0'>
                  Increase by{" "}
                  <span className='bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm'>
                    -$10k
                  </span>{" "}
                  this week
                </p>
              </div>
            </div>
          </div>
          <div className='col-xxl-3 col-sm-6'>
            <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-3'>
              <div className='card-body p-0'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                  <div className='d-flex align-items-center gap-2'>
                    <span className='mb-0 w-48-px h-48-px bg-purple text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6'>
                      <Icon icon='mdi:message-text' className='icon' />
                    </span>
                    <div>
                      <span className='mb-2 fw-medium text-secondary-light text-sm'>
                        Conversion
                      </span>
                      <h6 className='fw-semibold'>25%</h6>
                    </div>
                  </div>
                  <div
                    id='conversion-user-chart'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                 <Icon icon="solar:eye-bold" style={{ color: 'purple', fontSize: '1.5rem' }} />



                  </div>
                </div>
                <p className='text-sm mb-0'>
                  Increase by{" "}
                  <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                    +5%
                  </span>{" "}
                  this week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>

  );
};

export default UnitCountOne;
