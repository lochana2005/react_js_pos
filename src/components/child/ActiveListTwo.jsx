import { Icon } from "@iconify/react/dist/iconify.js";

const ActiveListTwo = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Active List</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='list-group radius-8'>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <span className='d-flex'>
                  <Icon icon='ci:bell-notification' className='text-xl' />
                </span>
                Push Notification (This is push notifications)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <span className='d-flex'>
                  <Icon icon='mynaui:cart-check' className='text-xl' />
                </span>
                New Orders confirmed (This is Orders confirmed)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <span className='d-flex'>
                  <Icon icon='mdi:security-lock-outline' className='text-xl' />
                </span>
                Security Access (This is Security Access)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <span className='d-flex'>
                  <Icon icon='tabler:folder-open' className='text-xl' />
                </span>
                Storage Folder (This is Storage Folder)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base'>
              <div className='d-flex align-items-center gap-2'>
                <span className='d-flex'>
                  <Icon icon='flowbite:forward-outline' className='text-xl' />
                </span>
                Forward Message (This is Forward Message)
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveListTwo;
