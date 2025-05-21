import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const WalletLayer = () => {
  return (
    <>
      <div className='row gy-4'>
        <div className='col-lg-9'>
          <div className='card h-100 p-0 radius-12'>
            <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
              <div className='d-flex align-items-center flex-wrap gap-3'>
                <span className='text-md fw-medium text-secondary-light mb-0'>
                  Show
                </span>
                <select
                  className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
                  defaultValue='Select Number'
                >
                  <option value='Select Number' disabled>
                    Select Number
                  </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                <form className='navbar-search'>
                  <input
                    type='text'
                    className='bg-base h-40-px w-auto'
                    name='search'
                    placeholder='Search'
                  />
                  <Icon icon='ion:search-outline' className='icon' />
                </form>
                <select
                  className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
                  defaultValue='Select Status'
                >
                  <option value='Select Status' disabled>
                    Select Status
                  </option>
                  <option value='Active'>Active</option>
                  <option value='Inactive'>Inactive</option>
                </select>
              </div>
              <button
                type='button'
                className='btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2'
                data-bs-toggle='modal'
                data-bs-target='#exampleModalEdit'
              >
                <Icon
                  icon='ic:baseline-plus'
                  className='icon text-xl line-height-1'
                />
                Connect Wallet
              </button>
            </div>
            <div className='card-body p-24'>
              <div className='table-responsive scroll-sm'>
                <table className='table bordered-table sm-table mb-0'>
                  <thead>
                    <tr>
                      <th scope='col'>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border input-form-dark'
                              type='checkbox'
                              name='checkbox'
                              id='selectAll'
                            />
                          </div>
                          S.L
                        </div>
                      </th>
                      <th scope='col'>Aset</th>
                      <th scope='col'>Amount</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Change %</th>
                      <th scope='col'>Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={1}
                            />
                          </div>
                          01
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img1.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Bitcoin
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              BTC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.3464 BTC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-up-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "50%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={2}
                            />
                          </div>
                          02
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img2.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Ethereum
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              ETH
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 ETH</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-up-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "80%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={3}
                            />
                          </div>
                          03
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img3.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Litecoin
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              LTC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 LTC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-up-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "40%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={4}
                            />
                          </div>
                          04
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img4.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Binance
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              BNB
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 BNB</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-up-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "70%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={5}
                            />
                          </div>
                          05
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img6.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Dogecoin
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              DOGE
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 DOGE</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-down-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "40%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={6}
                            />
                          </div>
                          06
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img5.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Polygon{" "}
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              MATIC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 MATIC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-down-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "80%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={7}
                            />
                          </div>
                          06
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img5.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Polygon{" "}
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              MATIC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 MATIC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-down-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "80%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={8}
                            />
                          </div>
                          06
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img5.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Polygon{" "}
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              MATIC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 MATIC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-down-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "80%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={9}
                            />
                          </div>
                          06
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img5.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Polygon{" "}
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              MATIC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 MATIC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-down-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "80%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center gap-10'>
                          <div className='form-check style-check d-flex align-items-center'>
                            <input
                              className='form-check-input radius-4 border border-neutral-400'
                              type='checkbox'
                              name='checkbox'
                              id={10}
                            />
                          </div>
                          06
                        </div>
                      </td>
                      <td>
                        <Link
                          to='/marketplace-details'
                          className='d-flex align-items-center'
                        >
                          <img
                            src='assets/images/crypto/crypto-img5.png'
                            alt='Wowdash'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <span className='flex-grow-1 d-flex flex-column'>
                            <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                              Polygon{" "}
                            </span>
                            <span className='text-xs mb-0 fw-normal text-secondary-light'>
                              MATIC
                            </span>
                          </span>
                        </Link>
                      </td>
                      <td>0.5464 MATIC</td>
                      <td>$2,753.00</td>
                      <td>
                        <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                          <i className='ri-arrow-down-s-fill' />
                          1.37%
                        </span>
                      </td>
                      <td>
                        <div
                          className='progress w-100  bg-primary-50 rounded-pill h-8-px'
                          role='progressbar'
                          aria-label='Basic example'
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className='progress-bar bg-primary-600 rounded-pill'
                            style={{ width: "80%" }}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
                <span>Showing 1 to 10 of 12 entries</span>
                <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
                  <li className='page-item'>
                    <Link
                      className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
                      to='#'
                    >
                      <Icon icon='ep:d-arrow-left' className='' />
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      className='page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white'
                      to='#'
                    >
                      1
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px'
                      to='#'
                    >
                      2
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                      to='#'
                    >
                      3
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                      to='#'
                    >
                      4
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                      to='#'
                    >
                      5
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
                      to='#'
                    >
                      {" "}
                      <Icon icon='ep:d-arrow-right' className='' />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='card h-100'>
            <div className='card-body p-0'>
              <div className='px-24 py-20'>
                <span className='mb-8'>WowDash</span>
                <h5 className='text-2xl'>$40,570.85</h5>
                <div className='mt-24 pb-24 mb-24 border-bottom d-flex align-items-center gap-16 justify-content-between flex-wrap'>
                  <div className='text-center d-flex align-items-center  flex-column'>
                    <span className='w-60-px h-60-px bg-primary-50 text-primary-600 text-2xl d-inline-flex justify-content-center align-items-center rounded-circle '>
                      <i className='ri-add-line' />
                    </span>
                    <span className='text-primary-light fw-medium mt-6'>
                      Buy
                    </span>
                  </div>
                  <div className='text-center d-flex align-items-center  flex-column'>
                    <span className='w-60-px h-60-px bg-primary-50 text-primary-600 text-2xl d-inline-flex justify-content-center align-items-center rounded-circle '>
                      <i className='ri-arrow-left-right-line' />
                    </span>
                    <span className='text-primary-light fw-medium mt-6'>
                      Swap
                    </span>
                  </div>
                  <div className='text-center d-flex align-items-center  flex-column'>
                    <span className='w-60-px h-60-px bg-primary-50 text-primary-600 text-2xl d-inline-flex justify-content-center align-items-center rounded-circle '>
                      <i className='ri-upload-2-line' />
                    </span>
                    <span className='text-primary-light fw-medium mt-6'>
                      Send
                    </span>
                  </div>
                  <div className='text-center d-flex align-items-center  flex-column'>
                    <span className='w-60-px h-60-px bg-primary-50 text-primary-600 text-2xl d-inline-flex justify-content-center align-items-center rounded-circle '>
                      <i className='ri-download-2-line' />
                    </span>
                    <span className='text-primary-light fw-medium mt-6'>
                      Receive
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-8 pb-24 border-bottom'>
                  <h6 className='text-lg mb-0'>Watchlist</h6>
                  <Link to='#' className='text-primary-600 fw-medium text-md'>
                    Sell all
                  </Link>
                </div>
                <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 py-16 border-bottom'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/crypto/crypto-img1.png'
                      alt='Wowdash'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1 d-flex flex-column'>
                      <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                        Bitcoin
                      </span>
                      <span className='text-xs mb-0 fw-normal text-secondary-light'>
                        BTC
                      </span>
                    </div>
                  </div>
                  <div className=' d-flex flex-column'>
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      $1,236.21
                    </span>
                    <span className='text-xs mb-0 fw-normal text-secondary-light'>
                      1.4363 BTC{" "}
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 py-16 border-bottom'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/crypto/crypto-img2.png'
                      alt='Wowdash'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1 d-flex flex-column'>
                      <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                        Ethereum
                      </span>
                      <span className='text-xs mb-0 fw-normal text-secondary-light'>
                        ETH
                      </span>
                    </div>
                  </div>
                  <div className=' d-flex flex-column'>
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      $1,236.21
                    </span>
                    <span className='text-xs mb-0 fw-normal text-secondary-light'>
                      1.4363 ETH{" "}
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 py-16 border-bottom'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/crypto/crypto-img5.png'
                      alt='Wowdash'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1 d-flex flex-column'>
                      <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                        Dogecoin
                      </span>
                      <span className='text-xs mb-0 fw-normal text-secondary-light'>
                        DOGE
                      </span>
                    </div>
                  </div>
                  <div className=' d-flex flex-column'>
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      $1,658
                    </span>
                    <span className='text-xs mb-0 fw-normal text-secondary-light'>
                      1.4363 DOGE
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 py-16'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/crypto/crypto-img6.png'
                      alt='Wowdash'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1 d-flex flex-column'>
                      <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                        Digibyte
                      </span>
                      <span className='text-xs mb-0 fw-normal text-secondary-light'>
                        DGB
                      </span>
                    </div>
                  </div>
                  <div className=' d-flex flex-column'>
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      $165,8
                    </span>
                    <span className='text-xs mb-0 fw-normal text-secondary-light'>
                      1.4363 DGB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Edit Currecny */}
      <div
        className='modal fade'
        id='exampleModalEdit'
        tabIndex={-1}
        aria-labelledby='exampleModalEditLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog modal-dialog-centered'>
          <div className='modal-content radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5' id='exampleModalEditLabel'>
                Connect Wallet
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <div className='d-flex flex-column gap-8'>
                <Link
                  to='#'
                  className='d-flex align-items-center justify-content-between gap-8 p-16 border radius-8 bg-hover-neutral-50'
                >
                  <span className='d-flex align-items-center gap-16'>
                    <img
                      src='assets/images/crypto/wallet-icon1.png'
                      alt='Wowdash'
                      className='flex-shrink-0 me-12 overflow-hidden'
                    />
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      Bitcoin
                    </span>
                  </span>
                  <span className='text-secondary-light text-md'>
                    <i className='ri-arrow-right-s-line' />
                  </span>
                </Link>
                <Link
                  to='#'
                  className='d-flex align-items-center justify-content-between gap-8 p-16 border radius-8 bg-hover-neutral-50'
                >
                  <span className='d-flex align-items-center gap-16'>
                    <img
                      src='assets/images/crypto/wallet-icon2.png'
                      alt='Wowdash'
                      className='flex-shrink-0 me-12 overflow-hidden'
                    />
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      Coinbase Wallet
                    </span>
                  </span>
                  <span className='text-secondary-light text-md'>
                    <i className='ri-arrow-right-s-line' />
                  </span>
                </Link>
                <Link
                  to='#'
                  className='d-flex align-items-center justify-content-between gap-8 p-16 border radius-8 bg-hover-neutral-50'
                >
                  <span className='d-flex align-items-center gap-16'>
                    <img
                      src='assets/images/crypto/wallet-icon3.png'
                      alt='Wowdash'
                      className='flex-shrink-0 me-12 overflow-hidden'
                    />
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      Exodus Wallet
                    </span>
                  </span>
                  <span className='text-secondary-light text-md'>
                    <i className='ri-arrow-right-s-line' />
                  </span>
                </Link>
                <Link
                  to='#'
                  className='d-flex align-items-center justify-content-between gap-8 p-16 border radius-8 bg-hover-neutral-50'
                >
                  <span className='d-flex align-items-center gap-16'>
                    <img
                      src='assets/images/crypto/wallet-icon4.png'
                      alt='Wowdash'
                      className='flex-shrink-0 me-12 overflow-hidden'
                    />
                    <span className='text-md mb-0 fw-medium text-primary-light d-block'>
                      Trust Wallet
                    </span>
                  </span>
                  <span className='text-secondary-light text-md'>
                    <i className='ri-arrow-right-s-line' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletLayer;
