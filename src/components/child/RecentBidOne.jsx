const RecentBidOne = () => {
  return (
    <div className='col-12'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Recent Bid</h6>
            <select
              className='form-select form-select-sm w-auto bg-base border text-secondary-light rounded-pill'
              defaultValue='All Items'
            >
              <option value='All Items'>All Items </option>
              <option value='New Item'>New Item</option>
              <option value='Trending Item'>Trending Item</option>
              <option value='Old Item'>Old Item</option>
            </select>
          </div>
          <div className='table-responsive scroll-sm'>
            <div className='table-responsive scroll-sm'>
              <table className='table bordered-table sm-table mb-0'>
                <thead>
                  <tr>
                    <th scope='col'>Items </th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Your Offer </th>
                    <th scope='col'>Recent Offer</th>
                    <th scope='col'>Time Left</th>
                    <th scope='col' className='text-center'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img1.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Spanky &amp; Friends
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img1.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img2.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Nike Air Shoe
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img2.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img3.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Woman Dresses
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img3.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img4.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Smart Watch
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img4.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img5.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Hoodie Rose
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img5.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img6.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Hoodie Rose
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img6.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-items-img2.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold'>
                            Hoodie Rose
                          </h6>
                          <span className='text-sm text-secondary-light fw-normal'>
                            Owned by ABC
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>1.44 ETH</td>
                    <td>3.053 ETH</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='assets/images/nft/nft-offer-img7.png'
                          alt='WowDash React Vite'
                          className='flex-shrink-0 me-12 w-40-px h-40-px rounded-circle me-12'
                        />
                        <div className='flex-grow-1'>
                          <h6 className='text-md mb-0 fw-semibold text-primary-light'>
                            1.44.00 ETH
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>2h 5m 40s</td>
                    <td>
                      <div className='d-inline-flex align-items-center gap-12'>
                        <button
                          type='button'
                          className='text-xl text-success-600'
                        >
                          <i className='ri-edit-line' />
                        </button>
                        <button
                          type='button'
                          className='text-xl text-danger-600 remove-btn'
                        >
                          <i className='ri-delete-bin-6-line' />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBidOne;
