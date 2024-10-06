'use client'
import React, { useState } from 'react'

type PaymentOption = 'virtual_account' | 'bank_transfer' | 'qris'

const Pembayaran = () => {
  const [voucherCode, setVoucherCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const subtotal = 600000
  const shippingCost = 0
  const totalWithDiscount = subtotal + shippingCost - discount
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(
    null,
  )
  const [showModal, setShowModal] = useState(false)

  const handlePaymentSelect = (payment: PaymentOption) => {
    setSelectedPayment(payment)
    setShowModal(true)
  }

  const applyVoucher = () => {
    if (voucherCode === 'DISCOUNT20') setDiscount(20000)
    else setDiscount(0)
  }

  return (
    <div className="homepage max-w-[500px] mx-auto py-4">
      {/* Shipping Information */}
      <div className="flex justify-between p-4 bg-neutral-100 rounded-lg space-x-8 rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
            fill="#0095FF"
          />
        </svg>
        <div className="py-2 flex items-center">
          <div className="flex flex-col">
            <h2 className="text-[#0F0F0F] font-nunito text-[16px] font-bold">
              Rumah Saya
            </h2>
            <p className="text-[#1B1E28] font-nunito text-[13px]">
              Jl. Kanjeng Sepuh No. 1 No. 9, Kauman, Kec. Sidayu, Kabupaten
              Gresik, Jawa Timur, 61153
            </p>
          </div>
        </div>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1716 11.9999L8.2218 7.0502L9.636 5.63599L16 11.9999L9.636 18.3639L8.2218 16.9497L13.1716 11.9999Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Product Details */}
      <div className="py-4 mt-6 bg-neutral-100 rounded-lg p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        {/* SVG dan Nama Toko Sejajar */}
        <div className="flex items-center mb-4 px-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2498 12.1386V18.3333H20.1665V20.1666H1.83317V18.3333H2.74984V12.1386C1.64435 11.3987 0.916504 10.1384 0.916504 8.70825C0.916504 7.95004 1.12223 7.21978 1.49696 6.59759L3.98303 2.29159C4.14677 2.00797 4.44939 1.83325 4.77688 1.83325H17.2228C17.5502 1.83325 17.8529 2.00797 18.0166 2.29159L20.4942 6.58316C20.8775 7.21978 21.0832 7.95004 21.0832 8.70825C21.0832 10.1384 20.3553 11.3987 19.2498 12.1386ZM17.4165 12.808C17.266 12.8247 17.1131 12.8333 16.9582 12.8333C15.804 12.8333 14.7388 12.3548 13.979 11.562C13.2192 12.3548 12.154 12.8333 10.9998 12.8333C9.84566 12.8333 8.7805 12.3548 8.02067 11.562C7.26085 12.3548 6.19569 12.8333 5.0415 12.8333C4.88659 12.8333 4.73366 12.8247 4.58317 12.808V18.3333H17.4165V12.808ZM5.3061 3.66659L3.07615 7.52869C2.86359 7.88181 2.74984 8.28558 2.74984 8.70825C2.74984 9.97389 3.77585 10.9999 5.0415 10.9999C5.98655 10.9999 6.82412 10.4227 7.16981 9.56029C7.47745 8.7928 8.56389 8.7928 8.87153 9.56029C9.2172 10.4227 10.0548 10.9999 10.9998 10.9999C11.9449 10.9999 12.7825 10.4227 13.1282 9.56029C13.4358 8.7928 14.5222 8.7928 14.8299 9.56029C15.1755 10.4227 16.0131 10.9999 16.9582 10.9999C18.2238 10.9999 19.2498 9.97389 19.2498 8.70825C19.2498 8.28558 19.1361 7.88181 18.915 7.51426L16.6935 3.66659H5.3061Z"
              fill="#878787"
            />
          </svg>

          <h3
            className="ml-4 font-nunito font-bold text-[14px] leading-[21px] tracking-[-0.322px]"
            style={{ color: 'var(--Light-Text-Color, #1B1E28)' }}
          >
            Anugrah Shoes
          </h3>
        </div>

        <div className="flex flex-col items-start px-2">
          {/* Foto Produk dan Keterangan */}
          <div className="flex items-start mb-3 ">
            <img
              className="w-[80px] h-[80px] rounded-md mr-3"
              src="https://contents.mediadecathlon.com/p2579714/k$54df0409441c99e7118a56028fcc0533/sepatu-hiking-gunung-pria-waterproof-mh100-biru-quechua-8503792.jpg?f=1920x0&format=auto"
              alt="Anugrah Shoes"
            />
            <div className="flex flex-col">
              <h2 className="font-nunito text-gray-700 text-[14px]">
                Sepatu Anak Sekolah SMP Semua Ukuran | Murah dan Berkualitas.
              </h2>
              <div className="flex flex-col justify-between py-2">
                <div className="flex items-center mb-2">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <g clipPath="url(#clip0_1834_6413)">
                      <path
                        d="M6.90471 3.84487C7.01938 3.58666 7.08309 3.30081 7.08309 3.00008C7.08309 1.84949 6.15034 0.916748 4.99975 0.916748C3.84917 0.916748 2.91642 1.84949 2.91642 3.00008C2.91642 4.07617 3.73227 4.96171 4.77917 5.07187C5.28559 4.3502 6.07317 3.92002 6.90471 3.84487ZM5.48075 7.97766C5.8315 7.21991 5.85275 6.32262 5.48096 5.52316C6.0998 4.67166 7.27446 4.40793 8.20634 4.94596C9.20275 5.52129 9.54417 6.79533 8.96888 7.79175C8.39359 8.78821 7.11942 9.12962 6.123 8.55433C5.86263 8.404 5.647 8.206 5.48075 7.97766ZM2.61363 4.67796C3.09453 5.36058 3.86097 5.82758 4.73925 5.90533C5.16717 6.86704 4.80821 8.01625 3.87632 8.55429C2.87988 9.12958 1.60573 8.78816 1.03044 7.79175C0.455141 6.79529 0.79655 5.52112 1.79299 4.94583C2.05338 4.7955 2.33274 4.70775 2.61363 4.67796Z"
                        fill="#51D7B1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1834_6413">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-nunito text-gray-500 text-xs">
                    Varian :{' '}
                    <span className="font-nunito font-semibold text-gray-700">
                      Hitam, 42
                    </span>
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M5.12133 5.5L3 7.6213L0.87868 5.5C-0.292893 4.3284 -0.292893 2.42892 0.87868 1.25734C2.05025 0.0857688 3.94973 0.0857688 5.12133 1.25734C6.2929 2.42892 6.2929 4.3284 5.12133 5.5ZM3 4.04533C3.3682 4.04533 3.66667 3.74686 3.66667 3.37866C3.66667 3.01047 3.3682 2.712 3 2.712C2.6318 2.712 2.33333 3.01047 2.33333 3.37866C2.33333 3.74686 2.6318 4.04533 3 4.04533Z"
                      fill="#0095FF"
                    />
                  </svg>
                  <p className="font-nunito text-gray-500 text-xs">
                    Dikirim dari :{' '}
                    <span className="font-nunito font-semibold text-gray-700">
                      Surabaya, Jawa Timur
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-[#0F0F0F] font-nunito text-[20px] font-bold">
                Rp 600.000
              </p>
            </div>
          </div>
        </div>
        {/* Jumlah Produk */}
        <div className="flex justify-end mr-4 py-2">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center rounded-[6px] border border-[var(--putih-80,#7F7F7F)] bg-[var(--White,#FFF)] p-1">
              <input
                type="text"
                value="1"
                className="w-5 h-5 text-center text-gray-700 border-none focus:outline-none"
                readOnly
              />
            </div>
            <p className="text-[12px] text-[var(--warna-utama-70,#25A07D)] cursor-pointer mt-1">
              Ubah
            </p>
          </div>
        </div>
      </div>

      {/* Notes for Seller */}
      <div className="p-4">
        <label className="block text-[#0F0F0F] font-nunito text-[15px] font-bold mb-2">
          Catatan untuk penjual
        </label>
        <textarea
          className="w-full h-10 p-2 border border-gray-300 rounded-md font-nunito text-[14px] text-[#0F0F0F]"
          placeholder="Tambahkan Catatan Untuk Penjual"
        ></textarea>
      </div>

      <div className="p-4 border-t border-gray-300 border-2">
        <label className="block text-[#0F0F0F] font-nunito text-[15px] font-bold mb-2">
          Pengiriman
        </label>
        <div className="flex justify-between p-4 bg-neutral-100 rounded-lg space-x-8 rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col items-start px-2">
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"
                  fill="#AFAFAF"
                />
              </svg>
              <h3
                className="ml-4 font-nunito font-bold text-[14px] leading-[21px] tracking-[-0.322px]"
                style={{ color: 'var(--hitam-30, #878787)' }}
              >
                Standar
              </h3>
              <div className="absolute right-8 flex items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11C3.23857 11 1 8.7614 1 6C1 3.23857 3.23857 1 6 1C8.7614 1 11 3.23857 11 6C11 8.7614 8.7614 11 6 11ZM6 10C8.20915 10 10 8.20915 10 6C10 3.79086 8.20915 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20915 3.79086 10 6 10ZM6.5 6H8.5V7H5.5V3.5H6.5V6Z"
                  fill="#878787"
                />
              </svg>
              <p className="ml-1 text-[#878787] font-nunito text-[13px]">
                Estimasi tiba 25-27 Sep
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Method Selection */}

      <div className="p-4 border-t border-gray-300">
        <h5 className="font-nunito font-bold text-[16px] text-black">
          Pilih metode pembayaran
        </h5>
        <button
          className="flex justify-between items-center py-2"
          onClick={() => handlePaymentSelect('virtual_account')}
        >
          <span className="font-nunito font-bold text-[13px]">
            Virtual Akun
          </span>
        </button>
        <button
          className="flex justify-between items-center py-2"
          onClick={() => handlePaymentSelect('bank_transfer')}
        >
          <span className="font-nunito font-bold text-[13px]">
            Transfer Bank
          </span>
        </button>
        <button
          className="flex justify-between items-center py-2"
          onClick={() => handlePaymentSelect('qris')}
        >
          <span className="font-nunito font-bold text-[13px]">QRIS</span>
        </button>
      </div>

      {/* Order Summary */}
      <div className="p-4 border-t border-gray-300">
        <h5 className="font-nunito font-bold text-[15px] text-black">
          Rincian Pesanan
        </h5>
        <div className="flex justify-between">
          <span className="font-nunito text-[13px] mt-1 ">
            Subtotal (1 produk)
          </span>
          <span className="font-nunito text-[13px] font-semibold">
            Rp {subtotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Voucher Section */}
      <div className="p-4 border-t border-gray-300">
        <h4 className="text-black font-nunito text-[15px] font-bold">
          Kode Voucher
        </h4>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md font-nunito text-[14px] text-gray-700 mt-1 mb-2"
          placeholder="Masukkan Kode Voucher"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
        />
        <button
          onClick={applyVoucher}
          className="font-nunito text-[12px] text-[#09cbca] font-semibold"
        >
          Gunakan
        </button>
      </div>

      {/* Total Calculation */}
      <div className="p-4 border-t border-gray-300">
        <div className="flex justify-between">
          <span className="font-nunito text-[13px] font-semibold">
            Total (Termasuk Voucher)
          </span>
          <span className="font-nunito text-[13px] font-semibold">
            Rp {totalWithDiscount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Finish Payment Button */}
      <div className="p-4 border-t border-gray-300">
        <button className="bg-teal-500 text-white font-nunito text-[15px] font-bold w-full py-2 rounded-md">
          Selesaikan Pembayaran
        </button>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md p-6">
            {selectedPayment === 'virtual_account' && (
              <p>Nomor Virtual Account: 1234567890</p>
            )}
            {selectedPayment === 'bank_transfer' && (
              <p>Pilih bank tujuan: BCA, Mandiri</p>
            )}
            {selectedPayment === 'qris' && (
              <img src="/qr_code.png" alt="QR Code" />
            )}
            <button onClick={() => setShowModal(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pembayaran
