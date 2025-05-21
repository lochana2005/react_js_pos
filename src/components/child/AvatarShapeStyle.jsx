const AvatarShapeStyle = () => {
  return (
    <div className='col-xxl-6 col-md-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Avatar Shape Style</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap justify-content-between gap-3'>
            <img
              src='assets/images/avatar/avatar-shape1.png'
              alt='WowDash React Vite'
              className='w-120-px h-120-px radius-8 object-fit-cover'
            />
            <img
              src='assets/images/avatar/avatar-shape2.png'
              alt='WowDash React Vite'
              className='w-120-px h-120-px rounded-circle object-fit-cover'
            />
            <img
              src='assets/images/avatar/avatar-shape3.png'
              alt='WowDash React Vite'
              className='w-auto h-120-px  object-fit-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarShapeStyle;
