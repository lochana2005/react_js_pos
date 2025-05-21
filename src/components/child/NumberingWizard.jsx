import { useState } from "react";

const NumberingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-body'>
          <h6 className='mb-4 text-xl'>Numbering wizard</h6>
          <p className='text-neutral-500'>
            Fill up your details and proceed next steps.
          </p>
          {/* Form Wizard Start */}
          <div className='form-wizard'>
            <form>
              <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                <ul className='list-unstyled form-wizard-list'>
                  <li
                    className={`form-wizard-list__item
                        ${[2, 3, 4, 5].includes(currentStep) && "activated"}
                      ${currentStep === 1 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>1</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                        ${[3, 4, 5].includes(currentStep) && "activated"}
                        ${currentStep === 2 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>2</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                        ${[4, 5].includes(currentStep) && "activated"}
                        ${currentStep === 3 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>3</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                        ${[5].includes(currentStep) && "activated"}
                        ${currentStep === 4 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>4</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item ${
                      currentStep === 5 && "active"
                    } `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>5</span>
                    </div>
                  </li>
                </ul>
              </div>
              <fieldset
                className={`wizard-fieldset ${currentStep === 1 && "show"} `}
              >
                <h6 className='text-md text-neutral-500'>
                  Personal Information
                </h6>
                <div className='row gy-3'>
                  <div className='col-sm-6'>
                    <label className='form-label'>First Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter First Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Last Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Last Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Email*</label>
                    <div className='position-relative'>
                      <input
                        type='email'
                        className='form-control wizard-required'
                        placeholder='Enter Email'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Password*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Confirm Password*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Confirm Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group text-end'>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 2 && "show"} `}
              >
                <h6 className='text-md text-neutral-500'>
                  Account Information
                </h6>
                <div className='row gy-3'>
                  <div className='col-12'>
                    <label className='form-label'>User Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter User Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <label className='form-label'>Card Number*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='Enter Card Number '
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <label className='form-label'>
                      Card Expiration(MM/YY)*
                    </label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='Enter Card Expiration'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <label className='form-label'>CVV Number*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='CVV Number'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Password*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 3 && "show"} `}
              >
                <h6 className='text-md text-neutral-500'>Bank Information</h6>
                <div className='row gy-3'>
                  <div className='col-sm-6'>
                    <label className='form-label'>Bank Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Bank Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Branch Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Branch Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Account Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Account Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Account Number*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='Enter Account Number'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 4 && "show"} `}
              >
                <h6 className='text-md text-neutral-500'>
                  Payment Information
                </h6>
                <div className='row gy-3'>
                  <div className='col-sm-12'>
                    <label className='form-label'>Holder Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Holder Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Card Number*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='Enter Card Number'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>CVC Number*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='CVC Number'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Expiry Date*</label>
                    <div className='row gy-4'>
                      <div className='col-sm-4'>
                        <div className='position-relative'>
                          <select
                            className='form-control form-select'
                            defaultValue='1'
                          >
                            <option value='Date'>Date</option>
                            <option value='1'>1</option>
                            <option value='3'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='position-relative'>
                          <select
                            className='form-control form-select'
                            defaultValue='Month'
                          >
                            <option value='Month'>Month</option>
                            <option value='jan'>jan</option>
                            <option value='Feb'>Feb</option>
                            <option value='March'>March</option>
                            <option value='April'>April</option>
                            <option value='May'>May</option>
                            <option value='June'>June</option>
                            <option value='July'>July</option>
                            <option value='August'>August</option>
                            <option value='Sept'>Sept</option>
                            <option value='Oct'>Oct</option>
                            <option value='Nov'>Nov</option>
                            <option value='Dec'>Dec</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='position-relative'>
                          <select
                            className='form-control form-select'
                            defaultValue='2019'
                          >
                            <option value='Years'>Years</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024'>2024</option>
                            <option value='2025'>2025</option>
                            <option value='2026'>2026</option>
                            <option value='2027'>2027</option>
                            <option value='2028'>2028</option>
                            <option value='2029'>2029</option>
                            <option value='2030'>2030</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 5 && "show"} `}
              >
                <div className='text-center mb-40'>
                  <img
                    src='assets/images/gif/success-img3.gif'
                    alt='WowDash React Vite'
                    className='gif-image mb-24'
                  />
                  <h6 className='text-md text-neutral-600'>Congratulations </h6>
                  <p className='text-neutral-400 text-sm mb-0'>
                    Well done! You have successfully completed.
                  </p>
                </div>
                <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    type='button'
                    className='form-wizard-submit btn btn-primary-600 px-32'
                  >
                    Publish
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          {/* Form Wizard End */}
        </div>
      </div>
    </div>
  );
};

export default NumberingWizard;
