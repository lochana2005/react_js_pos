import { ToastContainer, toast } from "react-toastify";

const ColorsLayer = () => {
  const handleColorCopy = (color) => {
    navigator.clipboard.writeText(color);
    toast.success("🦄 Copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className='row gy-4'>
      <ToastContainer />
      <div className='col-12'>
        <div className='card'>
          <div className='card-body p-24'>
            {/* Shade Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Shades</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#FFFFFF")}
                  className='color-box h-190-px cursor-pointer max-w-150-px w-100 bg-base position-relative p-28 flex-grow-1 border'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-base'
                    >
                      #FFFFFF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#111827")}
                  className='color-box h-190-px cursor-pointer max-w-150-px w-100 bg-neutral-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-neutral-900'
                    >
                      #111827
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Shade End */}
            {/* Neutral Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Neutral</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#FAFAFA")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-50 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      50
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-neutral-50'
                    >
                      #FAFAFA
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#F5F5F5")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-100 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-neutral-100'
                    >
                      #F5F5F5
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#E5E5E5")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-200 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      200
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-neutral-200'
                    >
                      #E5E5E5
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#D4D4D4")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-300 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      300
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-neutral-300'
                    >
                      #D4D4D4
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#A3A3A3")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-400 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-bloc'>
                      400
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-neutral-400'
                    >
                      #A3A3A3
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#737373")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-500 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      500
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-neutral-500'
                    >
                      #737373
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#525252")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-600 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      600
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-neutral-600'
                    >
                      #525252
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#404040")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-700 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      700
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-neutral-700'
                    >
                      #404040
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#262626")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-800 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      800
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-neutral-800'
                    >
                      #262626
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#171717")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-neutral-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      900
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-neutral-900'
                    >
                      #171717
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Neutral End */}
            {/* Primary Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Primary Color</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#E4F1FF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-50 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      50
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-primary-50'
                    >
                      #E4F1FF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#BFDCFF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-100 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-primary-100'
                    >
                      #BFDCFF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#95C7FF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-200 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      200
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-primary-200'
                    >
                      #95C7FF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#6BB1FF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-300 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      300
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-primary-300'
                    >
                      #6BB1FF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#519FFF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-400 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-bloc'>
                      400
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-primary-400'
                    >
                      #519FFF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#458EFF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-500 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      500
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-primary-500'
                    >
                      #458EFF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#487FFF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-600 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      600
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-primary-600'
                    >
                      #487FFF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#486CEA")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-700 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      700
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-primary-700'
                    >
                      #486CEA
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#4759D6")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-800 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      800
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-primary-800'
                    >
                      #4759D6
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#4536B6")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-primary-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      900
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-primary-900'
                    >
                      #4536B6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Primary End */}
            {/* Error Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Error Color</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#FEF2F2")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-50 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      50
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-danger-50'
                    >
                      #FEF2F2
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FEE2E2")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-100 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-danger-100'
                    >
                      #FEE2E2
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FECACA")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-200 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      200
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-danger-200'
                    >
                      #FECACA
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FCA5A5")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-300 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      300
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-danger-300'
                    >
                      #FCA5A5
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#F87171")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-400 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-bloc'>
                      400
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-danger-400'
                    >
                      #F87171
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#EF4444")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-500 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      500
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-danger-500'
                    >
                      #EF4444
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#DC2626")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-600 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      600
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-danger-600'
                    >
                      #DC2626
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#B91C1C")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-700 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      700
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-danger-700'
                    >
                      #B91C1C
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#991B1B")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-800 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      800
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-danger-800'
                    >
                      #991B1B
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#7F1D1D")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-danger-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      900
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-danger-900'
                    >
                      #7F1D1D
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Error End */}
            {/* Success Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Success Color</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#F0FDF4")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-50 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      50
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-success-50'
                    >
                      #F0FDF4
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#DCFCE7")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-100 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-success-100'
                    >
                      #DCFCE7
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#BBF7D0")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-200 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      200
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-success-200'
                    >
                      #BBF7D0
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#86EFAC")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-300 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      300
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-success-300'
                    >
                      #86EFAC
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#4ADE80")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-400 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-bloc'>
                      400
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-success-400'
                    >
                      #4ADE80
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#22C55E")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-500 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      500
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-success-500'
                    >
                      #22C55E
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#16A34A")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-600 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      600
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-success-600'
                    >
                      #16A34A
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#15803D")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-700 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      700
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-success-700'
                    >
                      #15803D
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#166534")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-800 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      800
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-success-800'
                    >
                      #166534
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#14532D")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-success-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      900
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-success-900'
                    >
                      #14532D
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Success End */}
            {/* Warning Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Warning Color</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#FEFCE8")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-50 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      50
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-warning-50'
                    >
                      #FEFCE8
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FEF9C3")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-100 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-warning-100'
                    >
                      #FEF9C3
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FEF08A")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-200 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-block'>
                      200
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-warning-200'
                    >
                      #FEF08A
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FDE047")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-300 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-block'>
                      300
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-warning-300'
                    >
                      #FDE047
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#FACC15")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-400 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-bloc'>
                      400
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-warning-400'
                    >
                      #FACC15
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#EAB308")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-500 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      500
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-warning-500'
                    >
                      #EAB308
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#CA8A04")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-600 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      600
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-warning-600'
                    >
                      #CA8A04
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#A16207")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-700 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      700
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-warning-700'
                    >
                      #A16207
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#854D0E")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-800 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      800
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-warning-800'
                    >
                      #854D0E
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#713F12")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-warning-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      900
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-warning-900'
                    >
                      #713F12
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Warning End */}
            {/* Info Start */}
            <div className='mb-32'>
              <h6 className='text-md mb-24'>Info Color</h6>
              <div className='d-flex flex-wrap'>
                <div
                  onClick={() => handleColorCopy("#EFF6FF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-50 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block'>
                      50
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block'
                      data-clipboard-text='bg-info-50'
                    >
                      #EFF6FF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#DBEAFE")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-100 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-block'>
                      100
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-info-100'
                    >
                      #DBEAFE
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#BFDBFE")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-200 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-block'>
                      200
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-info-200'
                    >
                      #BFDBFE
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#93C5FD")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-300 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-block'>
                      300
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-info-300'
                    >
                      #93C5FD
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#60A5FA")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-400 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-dark-1 d-bloc'>
                      400
                    </span>
                    <span
                      className='fw-medium text-md text-dark-1 d-block'
                      data-clipboard-text='bg-info-400'
                    >
                      #60A5FA
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#3B82F6")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-500 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      500
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-info-500'
                    >
                      #3B82F6
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#2563EB")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-600 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      600
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-info-600'
                    >
                      #2563EB
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#1D4ED8")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-700 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      700
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-info-700'
                    >
                      #1D4ED8
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#1E40AF")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-800 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      800
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-info-800'
                    >
                      #1E40AF
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleColorCopy("#1E3A8A")}
                  className='color-box h-190-px cursor-pointer min-w-120-px bg-info-900 position-relative p-28 flex-grow-1'
                >
                  <div className='position-absolute start-50 translate-middle-x bottom-0 text-center mb-28'>
                    <span className='fw-medium text-lg text-primary-light d-block text-base'>
                      900
                    </span>
                    <span
                      className='fw-medium text-md text-primary-light d-block text-base'
                      data-clipboard-text='bg-info-900'
                    >
                      #1E3A8A
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Info End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorsLayer;
