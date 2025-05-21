import useReactApexChart from "../hook/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const PortfolioLayer = () => {
  let { timeSeriesChartSeriesTwo, timeSeriesChartOptionsTwo } =
    useReactApexChart();
  return (
    <div className='card h-100 p-0 radius-12'>
      <div className='card-body p-24'>
        {/* Card Top Start */}
        <div className='d-flex flex-wrap align-items-center justify-content-between mb-36'>
          <div className=''>
            <span className='text-secondary-light fw-medium text-sm mb-4'>
              PORTFOLIO VALUE
            </span>
            <div className='d-flex align-items-center gap-8'>
              <h4 className='text-lg mb-0'>$5,260</h4>
              <span className='bg-success-focus text-success-600 px-16 py-6 rounded-pill fw-semibold text-xs'>
                <i className='ri-arrow-up-s-fill' />
                1.37%
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center gap-16'>
            <select
              className='form-select bg-base form-select-sm w-auto radius-8'
              defaultValue='Select Coin'
            >
              <option value='Select Coin' disabled>
                Select Coin
              </option>
              <option value='All coins'>All coins</option>
              <option value='Bitcoin'>Bitcoin</option>
              <option value='Litecoin'>Litecoin</option>
              <option value='Dogecoin'>Dogecoin</option>
            </select>

            <select
              className='form-select bg-base form-select-sm w-auto radius-8'
              defaultValue='Select Frequency'
            >
              <option value='Select Frequency' disabled>
                Select Frequency
              </option>
              <option value='Yearly'>Yearly</option>
              <option value='Monthly'>Monthly</option>
              <option value='Weekly'>Weekly</option>
              <option value='Today'>Today</option>
            </select>
          </div>
        </div>
        {/* Card Top End */}
        {/* Chart Start */}
        <ReactApexChart
          id='timeSeriesChart'
          className='square-marker check-marker series-gap-24 d-flex justify-content-center'
          options={timeSeriesChartOptionsTwo}
          series={timeSeriesChartSeriesTwo}
          type='area'
          height={350}
        />
        {/* Chart End */}
        <h6 className='text-xl mb-16'>Your Assets</h6>
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
                <th scope='col'>Your Assets</th>
                <th scope='col'>Price</th>
                <th scope='col'>Change %</th>
                <th scope='col'>Allocation</th>
                <th scope='col' className='text-center'>
                  Action
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                <td className='text-center'>
                  <span className='py-4 px-16 text-primary-600 bg-primary-50 radius-4'>
                    Buy / Sell
                  </span>
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
                className='page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md bg-primary-600 text-white'
                to='#'
              >
                1
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px '
                to='#'
              >
                2
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
                to='#'
              >
                3
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
                to='#'
              >
                4
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
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
  );
};

export default PortfolioLayer;
