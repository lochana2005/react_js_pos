import { Icon } from "@iconify/react/dist/iconify.js";
const MyOrdersOne = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg'>My Orders</h6>
            <div className=''>
              <select
                className='form-select form-select-sm w-auto bg-base border text-secondary-light'
                defaultValue='Today'
              >
                <option value='Today'>Today</option>
                <option value='Monthly'>Monthly</option>
                <option value='Weekly'>Weekly</option>
                <option value='Today'>Today</option>
              </select>
            </div>
          </div>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>Rate</th>
                  <th scope='col'>Amount ETH </th>
                  <th scope='col'>Price PLN</th>
                  <th scope='col' className='text-center'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className='text-success-main'>0.265415.00</span>
                  </td>
                  <td>29.4251512</td>
                  <td>2.154</td>
                  <td className='text-center line-height-1'>
                    <button
                      type='button'
                      className='text-lg text-danger-main remove-btn'
                    >
                      <Icon icon='radix-icons:cross-2' className='icon' />{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-success-main'>0.265415.00</span>
                  </td>
                  <td>29.4251512</td>
                  <td>2.154</td>
                  <td className='text-center line-height-1'>
                    <button
                      type='button'
                      className='text-lg text-danger-main remove-btn'
                    >
                      <Icon icon='radix-icons:cross-2' className='icon' />{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-danger-main'>0.265415.00</span>
                  </td>
                  <td>29.4251512</td>
                  <td>2.154</td>
                  <td className='text-center line-height-1'>
                    <button
                      type='button'
                      className='text-lg text-danger-main remove-btn'
                    >
                      <Icon icon='radix-icons:cross-2' className='icon' />{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-success-main'>0.265415.00</span>
                  </td>
                  <td>29.4251512</td>
                  <td>2.154</td>
                  <td className='text-center line-height-1'>
                    <button
                      type='button'
                      className='text-lg text-danger-main remove-btn'
                    >
                      <Icon icon='radix-icons:cross-2' className='icon' />{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-danger-main'>0.265415.00</span>
                  </td>
                  <td>29.4251512</td>
                  <td>2.154</td>
                  <td className='text-center line-height-1'>
                    <button
                      type='button'
                      className='text-lg text-danger-main remove-btn'
                    >
                      <Icon icon='radix-icons:cross-2' className='icon' />{" "}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-danger-main'>0.265415.00</span>
                  </td>
                  <td>29.4251512</td>
                  <td>2.154</td>
                  <td className='text-center line-height-1'>
                    <button
                      type='button'
                      className='text-lg text-danger-main remove-btn'
                    >
                      <Icon icon='radix-icons:cross-2' className='icon' />{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersOne;
