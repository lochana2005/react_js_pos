const NotificationLayer = () => {
  return (
    <div className='card h-100 p-0 radius-12 overflow-hidden'>
      <div className='card-body p-40'>
        <form action='#'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseSecretKey'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase secret key
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseSecretKey'
                  placeholder='Firebase secret key'
                  defaultValue='AAAAxGHw9lE:APA91bHKj6OsrD6EhnG5p26oTiQkXvOxTZwZEfVuuuipyUSNM-a8NB_CugVwfvvaosOvWgFAhQJOLMvxtv7e3Sw8DYpaWKwJIN3kjyIPoNRAe541sBz3x7E6sXZkA-ebueqnQiqNtbdP'
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebasePublicVapidKey'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase public vapid key (key pair)
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebasePublicVapidKey'
                  placeholder='Firebase public vapid key (key pair)'
                  defaultValue='BKAvKJbnB3QATdp8n1aUo_uhoNK3exVKLVzy7MP8VKydjjzthdlAWdlku6LQISxm4zA7dWoRACI9AHymf4V64kA'
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseAPIKey'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase API Key
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseAPIKey'
                  placeholder='Firebase  API Key'
                  defaultValue='AIzaSyDg1xBSwmHKV0usIKxTFL5a6fFTb4s3XVM'
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseAuthDomain'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase AUTH Domain
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseAuthDomain'
                  placeholder='Firebase  AUTH Domain'
                  defaultValue='wowdash.firebaseapp.com'
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseProjectID'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase Project ID
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseProjectID'
                  placeholder='Firebase Project ID'
                  defaultValue='wowdash.com'
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseStorageBucket'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase Storage Bucket
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseStorageBucket'
                  placeholder='Firebase Storage Bucket'
                  defaultValue='wowdash.appsport.com'
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseMessageSenderID'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase Message Sender ID
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseMessageSenderID'
                  placeholder='Firebase  Message Sender ID'
                  defaultValue={52362145}
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseAppID'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase App ID
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseAppID'
                  placeholder='Firebase  App ID'
                  defaultValue='1:843456771665:web:ac1e3115e9e17ee1582a70'
                />
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='mb-20'>
                <label
                  htmlFor='firebaseMeasurmentID'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Firebase Measurement ID
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  id='firebaseMeasurmentID'
                  placeholder='Firebase  Measurement ID'
                  defaultValue='G-GSJPS921XW'
                />
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
              <button
                type='reset'
                className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
              >
                Reset
              </button>
              <button
                type='submit'
                className='btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
              >
                Save Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationLayer;
