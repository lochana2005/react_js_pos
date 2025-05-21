const FaqLayer = () => {
  return (
    <div className='card basic-data-table'>
      <div className='card-header p-0 border-0'>
        <div className='responsive-padding-40-150 bg-light-pink'>
          <div className='row gy-4 align-items-center'>
            <div className='col-xl-7'>
              <h4 className='mb-20'>Frequently asked questions.</h4>
              <p className='mb-0 text-secondary-light max-w-634-px text-xl'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard du
                text ever since the 1500s, when an unkn
              </p>
            </div>
            <div className='col-xl-5 d-xl-block d-none'>
              <img src='assets/images/faq-img.png' alt='WowDash React Vite' />
            </div>
          </div>
        </div>
      </div>
      <div className='card-body bg-base responsive-padding-40-150'>
        <div className='row gy-4'>
          <div className='col-lg-4'>
            <div
              className='active-text-tab nav flex-column nav-pills bg-base shadow py-0 px-24 radius-12 border'
              id='v-pills-tab'
              role='tablist'
              aria-orientation='vertical'
            >
              <button
                className='nav-link text-secondary-light fw-semibold text-xl px-0 py-16 border-bottom active'
                id='v-pills-about-us-tab'
                data-bs-toggle='pill'
                data-bs-target='#v-pills-about-us'
                type='button'
                role='tab'
                aria-controls='v-pills-about-us'
                aria-selected='true'
              >
                About Us
              </button>
              <button
                className='nav-link text-secondary-light fw-semibold text-xl px-0 py-16 border-bottom'
                id='v-pills-ux-ui-tab'
                data-bs-toggle='pill'
                data-bs-target='#v-pills-ux-ui'
                type='button'
                role='tab'
                aria-controls='v-pills-ux-ui'
                aria-selected='false'
              >
                UX UI Design
              </button>
              <button
                className='nav-link text-secondary-light fw-semibold text-xl px-0 py-16 border-bottom'
                id='v-pills-development-tab'
                data-bs-toggle='pill'
                data-bs-target='#v-pills-development'
                type='button'
                role='tab'
                aria-controls='v-pills-development'
                aria-selected='false'
              >
                Development
              </button>
              <button
                className='nav-link text-secondary-light fw-semibold text-xl px-0 py-16 border-bottom'
                id='v-pills-use-case-tab'
                data-bs-toggle='pill'
                data-bs-target='#v-pills-use-case'
                type='button'
                role='tab'
                aria-controls='v-pills-use-case'
                aria-selected='false'
              >
                How to can i use WowDash?{" "}
              </button>
              <button
                className='nav-link text-secondary-light fw-semibold text-xl px-0 py-16'
                id='v-pills-use-agency-tab'
                data-bs-toggle='pill'
                data-bs-target='#v-pills-use-agency'
                type='button'
                role='tab'
                aria-controls='v-pills-use-agency'
                aria-selected='false'
              >
                Can I use my agency?
              </button>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='tab-content' id='v-pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='v-pills-about-us'
                role='tabpanel'
                aria-labelledby='v-pills-about-us-tab'
                tabIndex={0}
              >
                <div className='accordion' id='accordionExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        Is there a free trial available?
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Can I change my plan later?
                      </button>
                    </h2>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        What is your cancellation policy?
                      </button>
                    </h2>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        Can other info be added to an invoice?
                      </button>
                    </h2>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                        aria-expanded='false'
                        aria-controls='collapseFive'
                      >
                        How does billing work?
                      </button>
                    </h2>
                    <div
                      id='collapseFive'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSix'
                        aria-expanded='false'
                        aria-controls='collapseSix'
                      >
                        How do I change my account email?
                      </button>
                    </h2>
                    <div
                      id='collapseSix'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='v-pills-ux-ui'
                role='tabpanel'
                aria-labelledby='v-pills-ux-ui-tab'
                tabIndex={0}
              >
                <div className='accordion' id='accordionExampleTwo'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-1'
                        aria-expanded='true'
                        aria-controls='c-1'
                      >
                        Is there a free trial available?
                      </button>
                    </h2>
                    <div
                      id='c-1'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-2'
                        aria-expanded='false'
                        aria-controls='c-2'
                      >
                        Can I change my plan later?
                      </button>
                    </h2>
                    <div
                      id='c-2'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-3'
                        aria-expanded='false'
                        aria-controls='c-3'
                      >
                        What is your cancellation policy?
                      </button>
                    </h2>
                    <div
                      id='c-3'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-4'
                        aria-expanded='false'
                        aria-controls='c-4'
                      >
                        Can other info be added to an invoice?
                      </button>
                    </h2>
                    <div
                      id='c-4'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-5'
                        aria-expanded='false'
                        aria-controls='c-5'
                      >
                        How does billing work?
                      </button>
                    </h2>
                    <div
                      id='c-5'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-6'
                        aria-expanded='false'
                        aria-controls='c-6'
                      >
                        How do I change my account email?
                      </button>
                    </h2>
                    <div
                      id='c-6'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='v-pills-development'
                role='tabpanel'
                aria-labelledby='v-pills-development-tab'
                tabIndex={0}
              >
                <div className='accordion' id='accordionExampleThree'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-7'
                        aria-expanded='true'
                        aria-controls='c-7'
                      >
                        Is there a free trial available?
                      </button>
                    </h2>
                    <div
                      id='c-7'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleThree'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-8'
                        aria-expanded='false'
                        aria-controls='c-8'
                      >
                        Can I change my plan later?
                      </button>
                    </h2>
                    <div
                      id='c-8'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleThree'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-9'
                        aria-expanded='false'
                        aria-controls='c-9'
                      >
                        What is your cancellation policy?
                      </button>
                    </h2>
                    <div
                      id='c-9'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleThree'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-10'
                        aria-expanded='false'
                        aria-controls='c-10'
                      >
                        Can other info be added to an invoice?
                      </button>
                    </h2>
                    <div
                      id='c-10'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleThree'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-11'
                        aria-expanded='false'
                        aria-controls='c-11'
                      >
                        How does billing work?
                      </button>
                    </h2>
                    <div
                      id='c-11'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleThree'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-12'
                        aria-expanded='false'
                        aria-controls='c-12'
                      >
                        How do I change my account email?
                      </button>
                    </h2>
                    <div
                      id='c-12'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleThree'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='v-pills-use-case'
                role='tabpanel'
                aria-labelledby='v-pills-use-case-tab'
                tabIndex={0}
              >
                <div className='accordion' id='accordionExampleFour'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-13'
                        aria-expanded='true'
                        aria-controls='c-13'
                      >
                        Is there a free trial available?
                      </button>
                    </h2>
                    <div
                      id='c-13'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleFour'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-14'
                        aria-expanded='false'
                        aria-controls='c-14'
                      >
                        Can I change my plan later?
                      </button>
                    </h2>
                    <div
                      id='c-14'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFour'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-15'
                        aria-expanded='false'
                        aria-controls='c-15'
                      >
                        What is your cancellation policy?
                      </button>
                    </h2>
                    <div
                      id='c-15'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFour'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-16'
                        aria-expanded='false'
                        aria-controls='c-16'
                      >
                        Can other info be added to an invoice?
                      </button>
                    </h2>
                    <div
                      id='c-16'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFour'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-17'
                        aria-expanded='false'
                        aria-controls='c-17'
                      >
                        How does billing work?
                      </button>
                    </h2>
                    <div
                      id='c-17'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFour'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-18'
                        aria-expanded='false'
                        aria-controls='c-18'
                      >
                        How do I change my account email?
                      </button>
                    </h2>
                    <div
                      id='c-18'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFour'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='v-pills-use-agency'
                role='tabpanel'
                aria-labelledby='v-pills-use-agency-tab'
                tabIndex={0}
              >
                <div className='accordion' id='accordionExampleFIve'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-19'
                        aria-expanded='true'
                        aria-controls='c-19'
                      >
                        Is there a free trial available?
                      </button>
                    </h2>
                    <div
                      id='c-19'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleFIve'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-20'
                        aria-expanded='false'
                        aria-controls='c-20'
                      >
                        Can I change my plan later?
                      </button>
                    </h2>
                    <div
                      id='c-20'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFIve'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-21'
                        aria-expanded='false'
                        aria-controls='c-21'
                      >
                        What is your cancellation policy?
                      </button>
                    </h2>
                    <div
                      id='c-21'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFIve'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-22'
                        aria-expanded='false'
                        aria-controls='c-22'
                      >
                        Can other info be added to an invoice?
                      </button>
                    </h2>
                    <div
                      id='c-22'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFIve'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-23'
                        aria-expanded='false'
                        aria-controls='c-23'
                      >
                        How does billing work?
                      </button>
                    </h2>
                    <div
                      id='c-23'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFIve'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button text-primary-light text-xl collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#c-24'
                        aria-expanded='false'
                        aria-controls='c-24'
                      >
                        How do I change my account email?
                      </button>
                    </h2>
                    <div
                      id='c-24'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleFIve'
                    >
                      <div className='accordion-body'>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqLayer;
