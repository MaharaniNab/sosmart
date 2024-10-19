const PaymentSectionQris = () => {
  return (
    <div className="px-4">
      <div className="rounded-[12px] border w-full mx-auto space-y-6 py-4 border-gray-200 bg-[#FDFDFD] shadow-[0_0_4px_rgba(0,0,0,0.25)]">
        <div className="text-sm font-nunito font-semibold px-4 py-1 border-gray-300">
          <div className="flex items-center space-x-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM9.75 9H12.75V10.5H8.25V5.25H9.75V9Z"
                fill="#878787"
              />
            </svg>
            <span className="items-center text-gray-500 text-[12px]">
              Lakukan pembayaran dalam
            </span>

            {/* Timer Section */}
            <div className="flex items-center flex-grow justify-end min-w-0 gap-1">
              <div className="w-5 h-5 bg-[#ee443f] rounded flex justify-center items-center">
                <div className="text-white text-[10px] font-semibold leading-[15px]">
                  00
                </div>
              </div>
              <div className="w-0.5 h-1.5 relative">
                <div className="w-0.5 h-0.5 left-0 top-0 absolute bg-[#ee443f] rounded-[14px]" />
                <div className="w-0.5 h-0.5 left-0 top-[4px] absolute bg-[#ee443f] rounded-[14px]" />
              </div>
              <div className="w-5 h-5 bg-[#ee443f] rounded flex justify-center items-center">
                <div className="text-white text-[10px] font-semibold leading-[15px]">
                  14
                </div>
              </div>
              <div className="w-0.5 h-1.5 relative">
                <div className="w-0.5 h-0.5 left-0 top-0 absolute bg-[#ee443f] rounded-[14px]" />
                <div className="w-0.5 h-0.5 left-0 top-[4px] absolute bg-[#ee443f] rounded-[14px]" />
              </div>
              <div className="w-5 h-5 bg-[#ee443f] rounded flex justify-center items-center">
                <div className="text-white text-[10px] font-semibold leading-[15px]">
                  00
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-nunito text-black">QRIS</span>
            </div>
            <div
              className="-pb-[1px]"
              style={{ borderBottom: '2px solid var(--putih-60, #D3D3D3)' }}
            ></div>

            <div className="flex justify-center border border-[#878787] rounded-lg text-[14px] font-semibold p-6">
              <svg
                width="200"
                height="200"
                viewBox="0 0 214 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1004_7792)">
                  <path
                    d="M80.25 0H0V80.25H80.25V0ZM66.875 66.875H13.375V13.375H66.875V66.875Z"
                    fill="#444444"
                  />
                  <path
                    d="M26.75 26.75H53.5V53.5H26.75V26.75Z"
                    fill="#444444"
                  />
                  <path
                    d="M0 214H80.25V133.75H0V214ZM13.375 147.125H66.875V200.625H13.375V147.125Z"
                    fill="#444444"
                  />
                  <path
                    d="M26.75 160.5H53.5V187.25H26.75V160.5Z"
                    fill="#444444"
                  />
                  <path
                    d="M133.75 0V80.25H214V0H133.75ZM200.625 66.875H147.125V13.375H200.625V66.875Z"
                    fill="#444444"
                  />
                  <path
                    d="M160.5 26.75H187.25V53.5H160.5V26.75Z"
                    fill="#444444"
                  />
                  <path
                    d="M26.75 93.625H0V120.375H40.125V107H26.75V93.625Z"
                    fill="#444444"
                  />
                  <path
                    d="M93.625 120.375H120.375V147.125H93.625V120.375Z"
                    fill="#444444"
                  />
                  <path
                    d="M40.125 93.625H66.875V107H40.125V93.625Z"
                    fill="#444444"
                  />
                  <path
                    d="M120.375 160.5H93.625V173.875H107V187.25H120.375V173.875V160.5Z"
                    fill="#444444"
                  />
                  <path
                    d="M80.25 93.625V107H66.875V120.375H93.625V93.625H80.25Z"
                    fill="#444444"
                  />
                  <path d="M107 53.5H120.375V80.25H107V53.5Z" fill="#444444" />
                  <path
                    d="M120.375 107V120.375H147.125V93.625H107V107H120.375Z"
                    fill="#444444"
                  />
                  <path
                    d="M93.625 80.25H107V93.625H93.625V80.25Z"
                    fill="#444444"
                  />
                  <path
                    d="M120.375 187.25H147.125V214H120.375V187.25Z"
                    fill="#444444"
                  />
                  <path
                    d="M93.625 187.25H107V214H93.625V187.25Z"
                    fill="#444444"
                  />
                  <path
                    d="M120.375 147.125H133.75V160.5H120.375V147.125Z"
                    fill="#444444"
                  />
                  <path
                    d="M120.375 40.125V13.375H107V0H93.625V53.5H107V40.125H120.375Z"
                    fill="#444444"
                  />
                  <path
                    d="M160.5 187.25H173.875V214H160.5V187.25Z"
                    fill="#444444"
                  />
                  <path
                    d="M160.5 160.5H187.25V173.875H160.5V160.5Z"
                    fill="#444444"
                  />
                  <path
                    d="M147.125 173.875H160.5V187.25H147.125V173.875Z"
                    fill="#444444"
                  />
                  <path
                    d="M133.75 160.5H147.125V173.875H133.75V160.5Z"
                    fill="#444444"
                  />
                  <path
                    d="M187.25 133.75V147.125H200.625V160.5H214V133.75H200.625H187.25Z"
                    fill="#444444"
                  />
                  <path
                    d="M200.625 173.875H187.25V214H214V187.25H200.625V173.875Z"
                    fill="#444444"
                  />
                  <path
                    d="M133.75 133.75V147.125H173.875V120.375H147.125V133.75H133.75Z"
                    fill="#444444"
                  />
                  <path
                    d="M160.5 93.625V107H187.25V120.375H214V93.625H187.25H160.5Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1004_7792">
                    <rect width="214" height="214" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">Total Pembayaran</span>
          </div>
          <div className="flex justify-center p-2">
            <span className="text-2xl font-bold text-gray-900">Rp 580.000</span>
          </div>
          <div className="bg-red-100 p-3 text-red-500 text-sm rounded-[12px]">
            <div className="flex items-start space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332ZM9.1665 12.4998V14.1665H10.8332V12.4998H9.1665ZM9.1665 5.83317V10.8332H10.8332V5.83317H9.1665Z"
                  fill="#EE443F"
                />
              </svg>
              <span className="ml-2">
                Pembayaran akan gagal apabila melebihi batas waktu
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSectionQris
