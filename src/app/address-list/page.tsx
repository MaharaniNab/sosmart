'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // Import useRouter untuk navigasi
import Alamat from '../components/pembayaran/alamat' // Import Alamat

// Exporting addressData
export const addressData = [
  {
    key: 1,
    name: 'Annas Aulia Rahman',
    phone: '081234567890',
    address: 'Jl. Kanjeng Sepuh No. 1 ',
    district: 'Kecamatan Kauman',
    city: 'Kabupaten Gresik',
    province: 'Jawa Timur',
    postalCode: '61153',
  },
  {
    key: 2,
    name: 'Maharani Nabila Putri',
    phone: '087718141331',
    address: 'Jl. Duduhan No. 28 RT 1 RW 5',
    district: 'Kecamatan Mijen',
    city: 'Kota Semarang',
    province: 'Jawa Tengah',
    postalCode: '50219',
  },
  // Tambahkan data alamat lain di sini
]

const AddressList = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true) // Popup langsung visible
  const router = useRouter() // Inisialisasi router

  // Fungsi untuk menutup popup dan redirect ke halaman pembayaran
  const closePopup = () => {
    setIsPopupVisible(false)
    router.push('/pembayaran') // Navigasi ke halaman pembayaran
  }

  return (
    <>
      <div className="container w-[400px] mx-auto p-4 bg-gray-100"> {/* Tambahkan latar belakang di sini */}
        {/* Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-end bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closePopup} // Menutup popup saat klik area luar popup
        >
          {/* Stop click propagation to prevent closing when clicking inside the popup */}
          <div
            className="bg-white w-full max-w-md p-6 rounded-t-[24px] shadow-lg transform transition-transform duration-300 ease-out translate-y-0"
            onClick={(e) => e.stopPropagation()} // Cegah penutupan popup ketika area dalam di-klik
          >
            {/* Header Popup dengan tombol Exit dan Judul Sejajar */}
            <div className="flex justify-between items-center px-4 py-2 mb-4">
              {/* Judul Popup */}
              <h3 className="text-[16px] font-bold">Ganti Alamat</h3>

              {/* Tombol Exit */}
              <button
                className="text-gray-500"
                onClick={() => setIsPopupVisible(false)}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9998 11.4687L18.362 6.10645L19.8941 7.63851L14.5318 13.0008L19.8941 18.3629L18.362 19.895L12.9998 14.5328L7.63754 19.895L6.10547 18.3629L11.4677 13.0008L6.10547 7.63851L7.63754 6.10645L12.9998 11.4687Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-1">
              {/* Pemetaan data alamat dengan komponen Alamat */}
              {addressData.map((address, index) => (
                <Alamat
                  key={index}
                  name={address.name}
                  phone={address.phone}
                  address={address.address}
                  district={address.district}
                  city={address.city}
                  province={address.province}
                  postalCode={address.postalCode}
                />
              ))}
            </div>

            <Link href="/address-form"> {/*sosmart\src\app\components\pembayaran\form-address.tsx*/}
              <button className="px-4 text-[#0F0F0F] font-nunito text-[14px] font-bold mt-4 flex items-center text-black">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                    fill="black"
                  />
                </svg>
                <span className="px-2">Tambah Alamat Baru</span>
              </button>
            </Link>

            <div className="px-4">
              <Link href="/pembayaran">
                <button
                  className="px-4 text-[#0F0F0F] font-nunito text-[16px] font-bold mt-4 w-full py-3 text-white rounded-lg"
                  style={{
                    background: 'var(--Warna-Utama, #51D7B1)',
                    borderRadius: '8px',
                  }}
                >
                  Lanjutkan
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}

export default AddressList
