import { Icon } from "@iconify/react/dist/iconify.js";
import useReactApexChart from "../hook/useReactApexChart";
import { Link } from "react-router-dom";

const MarketplaceLayer = () => {
  let { createChartNine } = useReactApexChart();
  return (
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
          <button
            type='button'
            className='btn border py-8 text-secondary-light fw-medium bg-hover-neutral-50 radius-8'
          >
            Watchlist
          </button>
        </div>
        <Link
          to='/portfolio'
          className='btn btn-primary text-sm btn-sm px-24 py-10 radius-8'
        >
          Portfolios
        </Link>
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
                <th scope='col'>Circulating Supply</th>
                <th scope='col'>Price</th>
                <th scope='col'>Market Cap</th>
                <th scope='col'>Change %</th>
                <th scope='col'>Last (24H)</th>
                <th scope='col' className='text-center'>
                  Watchlist
                </th>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-up-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart1'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-up-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart2'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-up-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart3'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-up-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart4'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-down-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart5'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#EF4A00")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-down-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart6'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-down-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart7'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#EF4A00")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-down-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart8'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-down-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart9'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#EF4A00")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                      alt='WowDash React Vite'
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
                <td>$361.32B</td>
                <td>
                  <span className='bg-danger-focus text-danger-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                    <i className='ri-arrow-down-s-fill' />
                    1.37%
                  </span>
                </td>
                <td>
                  <div
                    id='timeSeriesChart10'
                    className='remove-tooltip-title rounded-tooltip-value'
                  >
                    {createChartNine("#45B369")}
                  </div>
                </td>
                <td className='text-center'>
                  <button
                    type='button'
                    className='star-btn text-2xl text-neutral-400 text-hover-primary-600 line-height-1'
                  >
                    <i className='ri-star-line' />
                  </button>
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
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
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
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
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
  );
};

export default MarketplaceLayer;
