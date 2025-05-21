const RazorPay = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card radius-12 shadow-none border overflow-hidden'>
        <div className='card-header bg-neutral-100 border-bottom py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
          <div className='d-flex align-items-center gap-10'>
            <span className='w-36-px h-36-px bg-base rounded-circle d-flex justify-content-center align-items-center'>
              <img
                src='assets/images/payment/payment-gateway2.png'
                alt='image_icon'
              />
            </span>
            <span className='text-lg fw-semibold text-primary-light'>
              RazorPay
            </span>
          </div>
          <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              defaultChecked
            />
          </div>
        </div>
        <div className='card-body p-24'>
          <div className='row gy-3'>
            <div className='col-sm-6'>
              <span className='form-label fw-semibold text-primary-light text-md mb-8'>
                Environment <span className='text-danger-600'>*</span>
              </span>
              <div className='d-flex align-items-center gap-3'>
                <div className='d-flex align-items-center gap-10 fw-medium text-lg'>
                  <div className='form-check style-check d-flex align-items-center'>
                    <input
                      className='form-check-input radius-4 border border-neutral-500'
                      type='checkbox'
                      name='checkbox'
                      id='sandbox2'
                      defaultChecked=''
                    />
                  </div>
                  <label
                    htmlFor='sandbox2'
                    className='form-label fw-medium text-lg text-primary-light mb-0'
                  >
                    Sandbox
                  </label>
                </div>
                <div className='d-flex align-items-center gap-10 fw-medium text-lg'>
                  <div className='form-check style-check d-flex align-items-center'>
                    <input
                      className='form-check-input radius-4 border border-neutral-500'
                      type='checkbox'
                      name='checkbox'
                      id='Production2'
                    />
                  </div>
                  <label
                    htmlFor='Production2'
                    className='form-label fw-medium text-lg text-primary-light mb-0'
                  >
                    Production
                  </label>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <label
                htmlFor='currencyTwo'
                className='form-label fw-semibold text-primary-light text-md mb-8'
              >
                Currency
                <span className='text-danger-600'>*</span>
              </label>
              <select
                className='form-control radius-8 form-select'
                id='currencyTwo'
                defaultValue='USD'
              >
                <option value='USD' disabled>
                  USD
                </option>
                <option value='TK'>TK</option>
                <option value='Rupee'>Rupee</option>
              </select>
            </div>
            <div className='col-sm-6'>
              <label
                htmlFor='secretKeyTwo'
                className='form-label fw-semibold text-primary-light text-md mb-8'
              >
                Secret Key <span className='text-danger-600'>*</span>
              </label>
              <input
                type='text'
                className='form-control radius-8'
                id='secretKeyTwo'
                placeholder='Secret Key'
                defaultValue='EGtgNkjt3I5lkhEEzicdot8gVH_PcFiKxx6ZBiXpVrp4QLDYcVQQMLX6MMG_fkS9_H0bwmZzBovb4jLP'
              />
            </div>
            <div className='col-sm-6'>
              <label
                htmlFor='publicKeyTwo'
                className='form-label fw-semibold text-primary-light text-md mb-8'
              >
                Publics Key<span className='text-danger-600'>*</span>
              </label>
              <input
                type='text'
                className='form-control radius-8'
                id='publicKeyTwo'
                placeholder='Publics Key'
                defaultValue='AcRx7vvy79nbNxBemacGKmnnRe_CtxkItyspBS_eeMIPREwfCEIfPg1uX-bdqPrS_ZFGocxEH_SJRrIJ'
              />
            </div>
            <div className='col-sm-6'>
              <label
                htmlFor='logoTwo'
                className='form-label fw-semibold text-primary-light text-md mb-8'
              >
                Logo <span className='text-danger-600'>*</span>
              </label>
              <input
                type='file'
                className='form-control radius-8'
                id='logoTwo'
              />
            </div>
            <div className='col-sm-6'>
              <label className='form-label fw-semibold text-primary-light text-md mb-8'>
                <span className='visibility-hidden'>Save</span>
              </label>
              <button
                type='submit'
                className='btn btn-primary border border-primary-600 text-md px-24 py-8 radius-8 w-100 text-center'
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorPay;
