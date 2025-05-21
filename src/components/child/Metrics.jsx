import { Icon } from "@iconify/react/dist/iconify.js";

import useReactApexChart from "../../hook/useReactApexChart";

const Metrics = () => {
  let { createChartTen, createChatEleven } = useReactApexChart();
  return (
    <div className='card h-100 p-0 radius-12'>
      <div className='card-header border-bottom bg-base py-16 px-24'>
        <h6 className='text-lg fw-semibold mb-0'>Metrics</h6>
      </div>
      <div className='card-body p-24'>
        <div className='row row-cols-xxxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4'>
          <div className='col'>
            <div className='card shadow-none border bg-gradient-start-1'>
              <div className='card-body p-20'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                  <div>
                    <p className='fw-medium text-primary-light mb-1'>
                      Total Users
                    </p>
                    <h6 className='mb-0'>20,000</h6>
                  </div>
                  <div className='w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center'>
                    <Icon
                      icon='gridicons:multiple-users'
                      className='text-base text-2xl mb-0'
                    />
                  </div>
                </div>
                <p className='fw-medium text-sm text-primary-light mt-12 mb-0'>
                  <span className='text-success-main'>
                    <Icon icon='bxs:up-arrow' className='text-xs d-block' />
                    +5000
                  </span>{" "}
                  Last 30 days users
                </p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className='col'>
            <div className='card shadow-none border bg-gradient-start-2'>
              <div className='card-body p-20'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                  <div>
                    <p className='fw-medium text-primary-light mb-1'>
                      Subscription
                    </p>
                    <h6 className='mb-0'>15,000</h6>
                  </div>
                  <div className='w-50-px h-50-px bg-purple rounded-circle d-flex justify-content-center align-items-center'>
                    <Icon
                      icon='fa-solid:award'
                      className='text-base text-2xl mb-0'
                    />
                  </div>
                </div>
                <p className='fw-medium text-sm text-primary-light mt-12 mb-0'>
                  <span className='text-danger-main'>
                    <Icon icon='bxs:down-arrow' className='text-xs d-block' />
                    -800
                  </span>{" "}
                  Last 30 days
                </p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className='col'>
            <div className='card shadow-none border bg-gradient-start-3'>
              <div className='card-body p-20'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                  <div>
                    <p className='fw-medium text-primary-light mb-1'>
                      Total Free Users
                    </p>
                    <h6 className='mb-0'>5,000</h6>
                  </div>
                  <div className='w-50-px h-50-px bg-info rounded-circle d-flex justify-content-center align-items-center'>
                    <Icon
                      icon='fluent:people-20-filled'
                      className='text-base text-2xl mb-0'
                    />
                  </div>
                </div>
                <p className='fw-medium text-sm text-primary-light mt-12 mb-0'>
                  <span className='text-success-main'>
                    <Icon icon='bxs:up-arrow' className='text-xs d-block' />
                    +200
                  </span>{" "}
                  Last 30 days users
                </p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className='col'>
            <div className='card shadow-none border bg-gradient-start-4'>
              <div className='card-body p-20'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                  <div>
                    <p className='fw-medium text-primary-light mb-1'>
                      Total Income
                    </p>
                    <h6 className='mb-0'>$42,000</h6>
                  </div>
                  <div className='w-50-px h-50-px bg-success-main rounded-circle d-flex justify-content-center align-items-center'>
                    <Icon
                      icon='solar:wallet-bold'
                      className='text-base text-2xl mb-0'
                    />
                  </div>
                </div>
                <p className='fw-medium text-sm text-primary-light mt-12 mb-0'>
                  <span className='text-success-main'>
                    <Icon icon='bxs:up-arrow' className='text-xs d-block' />
                    +$20,000
                  </span>{" "}
                  Last 30 days
                </p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className='col'>
            <div className='card shadow-none border bg-gradient-start-5'>
              <div className='card-body p-20'>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                  <div>
                    <p className='fw-medium text-primary-light mb-1'>
                      Total Expense
                    </p>
                    <h6 className='mb-0'>$30,000</h6>
                  </div>
                  <div className='w-50-px h-50-px bg-red rounded-circle d-flex justify-content-center align-items-center'>
                    <Icon
                      icon='fa6-solid:file-invoice-dollar'
                      className='text-base text-2xl mb-0'
                    />
                  </div>
                </div>
                <p className='fw-medium text-sm text-primary-light mt-12 mb-0'>
                  <span className='text-success-main'>
                    <Icon icon='bxs:up-arrow' className='text-xs d-block' />
                    +$5,000
                  </span>{" "}
                  Last 30 days
                </p>
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
        <div className='mt-24'>
          <div className='row gy-4'>
            <div className='col-xxl-3 col-sm-6'>
              <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-1'>
                <div className='card-body p-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='mb-0 w-48-px h-48-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0'>
                        <Icon
                          icon='mingcute:user-follow-fill'
                          className='icon'
                        />
                      </span>
                      <div>
                        <span className='mb-2 fw-medium text-secondary-light text-sm'>
                          New Users
                        </span>
                        <h6 className='fw-semibold'>15,000</h6>
                      </div>
                    </div>
                    <div
                      id='new-user-chart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChartTen("#487fff")}
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6'>
              <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-2'>
                <div className='card-body p-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='mb-0 w-48-px h-48-px bg-success-main flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6'>
                        <Icon
                          icon='mingcute:user-follow-fill'
                          className='icon'
                        />
                      </span>
                      <div>
                        <span className='mb-2 fw-medium text-secondary-light text-sm'>
                          Active Users
                        </span>
                        <h6 className='fw-semibold'>8,000</h6>
                      </div>
                    </div>
                    <div
                      id='active-user-chart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChartTen("#45b369")}
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6'>
              <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-3'>
                <div className='card-body p-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='mb-0 w-48-px h-48-px bg-yellow text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6'>
                        <Icon icon='iconamoon:discount-fill' className='icon' />
                      </span>
                      <div>
                        <span className='mb-2 fw-medium text-secondary-light text-sm'>
                          Total Sales
                        </span>
                        <h6 className='fw-semibold'>$5,00,000</h6>
                      </div>
                    </div>
                    <div
                      id='total-sales-chart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChartTen("#f4941e")}
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm'>
                      -$10k
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-sm-6'>
              <div className='card p-3 shadow-none radius-8 border h-100 bg-gradient-end-3'>
                <div className='card-body p-0'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='mb-0 w-48-px h-48-px bg-purple text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6'>
                        <Icon icon='mdi:message-text' className='icon' />
                      </span>
                      <div>
                        <span className='mb-2 fw-medium text-secondary-light text-sm'>
                          Conversion
                        </span>
                        <h6 className='fw-semibold'>25%</h6>
                      </div>
                    </div>
                    <div
                      id='conversion-user-chart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChartTen("#8252e9")}
                    </div>
                  </div>
                  <p className='text-sm mb-0'>
                    Increase by{" "}
                    <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                      +5%
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-24 gy-0'>
          <div className='col-xxl-3 col-sm-6 pe-0'>
            <div className='card-body p-20 bg-base border h-100 d-flex flex-column justify-content-center border-end-0'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                <div>
                  <span className='mb-12 w-44-px h-44-px text-primary-600 bg-primary-light border border-primary-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                    <Icon icon='fa-solid:box-open' className='icon' />
                  </span>
                  <span className='mb-1 fw-medium text-secondary-light text-md'>
                    Total Products
                  </span>
                  <h6 className='fw-semibold text-primary-light mb-1'>300</h6>
                </div>
              </div>
              <p className='text-sm mb-0'>
                Increase by{" "}
                <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                  +200
                </span>{" "}
                this week
              </p>
            </div>
          </div>
          <div className='col-xxl-3 col-sm-6 px-0'>
            <div className='card-body p-20 bg-base border h-100 d-flex flex-column justify-content-center border-end-0'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                <div>
                  <span className='mb-12 w-44-px h-44-px text-yellow bg-yellow-light border border-yellow-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                    <Icon icon='flowbite:users-group-solid' className='icon' />
                  </span>
                  <span className='mb-1 fw-medium text-secondary-light text-md'>
                    Total Customer
                  </span>
                  <h6 className='fw-semibold text-primary-light mb-1'>
                    50,000
                  </h6>
                </div>
              </div>
              <p className='text-sm mb-0'>
                Increase by{" "}
                <span className='bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm'>
                  -5k
                </span>{" "}
                this week
              </p>
            </div>
          </div>
          <div className='col-xxl-3 col-sm-6 px-0'>
            <div className='card-body p-20 bg-base border h-100 d-flex flex-column justify-content-center border-end-0'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                <div>
                  <span className='mb-12 w-44-px h-44-px text-lilac bg-lilac-light border border-lilac-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                    <Icon icon='majesticons:shopping-cart' className='icon' />
                  </span>
                  <span className='mb-1 fw-medium text-secondary-light text-md'>
                    Total Orders
                  </span>
                  <h6 className='fw-semibold text-primary-light mb-1'>1500</h6>
                </div>
              </div>
              <p className='text-sm mb-0'>
                Increase by{" "}
                <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                  +1k
                </span>{" "}
                this week
              </p>
            </div>
          </div>
          <div className='col-xxl-3 col-sm-6 ps-0'>
            <div className='card-body p-20 bg-base border h-100 d-flex flex-column justify-content-center'>
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8'>
                <div>
                  <span className='mb-12 w-44-px h-44-px text-pink bg-pink-light border border-pink-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12'>
                    <Icon icon='ri:discount-percent-fill' className='icon' />
                  </span>
                  <span className='mb-1 fw-medium text-secondary-light text-md'>
                    Total Sales
                  </span>
                  <h6 className='fw-semibold text-primary-light mb-1'>
                    $25,00,000.00
                  </h6>
                </div>
              </div>
              <p className='text-sm mb-0'>
                Increase by{" "}
                <span className='bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm'>
                  +$10k
                </span>{" "}
                this week
              </p>
            </div>
          </div>
        </div>
        {/* Crypto Home Widgets Start */}
        <div className='mt-24'>
          <div className='row row-cols-xxxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4'>
            <div className='col'>
              <div className='card shadow-none border bg-gradient-end-3'>
                <div className='card-body p-20'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                    <img
                      src='assets/images/currency/crypto-img1.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0'
                    />
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-1'>Bitcoin</h6>
                      <p className='fw-medium text-secondary-light mb-0'>BTC</p>
                    </div>
                  </div>
                  <div className='mt-3 d-flex flex-wrap justify-content-between align-items-center gap-1'>
                    <div className=''>
                      <h6 className='mb-8'>$45,138</h6>
                      <span className='text-success-main text-md'>+ 27%</span>
                    </div>
                    <div
                      id='bitcoinAreaChart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChatEleven("#F98C08")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-none border bg-gradient-end-1'>
                <div className='card-body p-20'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                    <img
                      src='assets/images/currency/crypto-img2.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0'
                    />
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-1'>Ethereum </h6>
                      <p className='fw-medium text-secondary-light mb-0'>ETH</p>
                    </div>
                  </div>
                  <div className='mt-3 d-flex flex-wrap justify-content-between align-items-center gap-1'>
                    <div className=''>
                      <h6 className='mb-8'>$45,138</h6>
                      <span className='text-danger-main text-md'>- 27%</span>
                    </div>
                    <div
                      id='ethereumAreaChart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChatEleven("#5F80FF")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-none border bg-gradient-end-5'>
                <div className='card-body p-20'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                    <img
                      src='assets/images/currency/crypto-img3.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0'
                    />
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-1'>Solana</h6>
                      <p className='fw-medium text-secondary-light mb-0'>SOL</p>
                    </div>
                  </div>
                  <div className='mt-3 d-flex flex-wrap justify-content-between align-items-center gap-1'>
                    <div className=''>
                      <h6 className='mb-8'>$45,138</h6>
                      <span className='text-success-main text-md'>+ 27%</span>
                    </div>
                    <div
                      id='solanaAreaChart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChatEleven("#C817F8")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-none border bg-gradient-end-6'>
                <div className='card-body p-20'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                    <img
                      src='assets/images/currency/crypto-img4.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0'
                    />
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-1'>Litecoin</h6>
                      <p className='fw-medium text-secondary-light mb-0'>LTE</p>
                    </div>
                  </div>
                  <div className='mt-3 d-flex flex-wrap justify-content-between align-items-center gap-1'>
                    <div className=''>
                      <h6 className='mb-8'>$45,138</h6>
                      <span className='text-success-main text-md'>+ 27%</span>
                    </div>
                    <div
                      id='litecoinAreaChart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChatEleven("#2171EA")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-none border bg-gradient-end-3'>
                <div className='card-body p-20'>
                  <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
                    <img
                      src='assets/images/currency/crypto-img5.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0'
                    />
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-1'>Dogecoin</h6>
                      <p className='fw-medium text-secondary-light mb-0'>
                        DOGE
                      </p>
                    </div>
                  </div>
                  <div className='mt-3 d-flex flex-wrap justify-content-between align-items-center gap-1'>
                    <div className=''>
                      <h6 className='mb-8'>$45,138</h6>
                      <span className='text-success-main text-md'>+ 27%</span>
                    </div>
                    <div
                      id='dogecoinAreaChart'
                      className='remove-tooltip-title rounded-tooltip-value'
                    >
                      {/* pass the color value */}
                      {createChatEleven("#C2A633")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Crypto Home Widgets End */}
      </div>
    </div>
  );
};

export default Metrics;
