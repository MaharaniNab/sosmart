'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' // CSS untuk leaflet
import L, { LatLngTuple } from 'leaflet' // Import leaflet dan LatLngTuple untuk posisi

// Custom marker menggunakan DivIcon dengan SVG
const customMarkerIcon = L.divIcon({
  className: 'custom-icon', // ClassName kosong untuk menghindari CSS bawaan leaflet
  html: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" fill="#0095FF"/>
    </svg>
  `,
  iconSize: [24, 24], // Ukuran icon
  iconAnchor: [12, 24], // Anchor agar titik pusat icon berada di ujung bawah
})

const PinLocation = () => {
  const router = useRouter()
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('') // State untuk kota
  const [position, setPosition] = useState<LatLngTuple>([51.505, -0.09]) // Posisi default untuk marker
  const [showPopup, setShowPopup] = useState(false) // Kontrol untuk popup

  useEffect(() => {
    // Ambil data dari localStorage dan set address dan city
    const addressData = JSON.parse(localStorage.getItem('addressData') || '{}')
    setAddress(
      `${addressData.address}, ${addressData.district}, ${addressData.city}, ${addressData.province}`,
    )
    setCity(addressData.city || '') // Menyimpan nama kota dari data yang diambil
  }, [])

  const handleConfirmLocation = () => {
    // Tampilkan popup setelah mengonfirmasi lokasi
    setShowPopup(true)
  }

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setPosition([latitude, longitude]) // Set posisi ke lokasi saat ini
      })
    } else {
      alert('Geolocation tidak didukung oleh browser ini.')
    }
  }

  const handleLanjutkan = () => {
    // Navigasi ke halaman berikutnya ketika lanjutkan ditekan
    router.push('/pembayaran') // Ganti dengan halaman berikutnya
  }

  const handleClosePopup = () => {
    // Tutup popup dan arahkan kembali ke halaman pembayaran
    setShowPopup(false)
    router.push('/pembayaran') // Ganti dengan halaman pembayaran
  }

  return (
    <div className="flex flex-col items-center homepage w-[400px] mx-auto py-4">
      {/* Header */}
      <div className="w-full bg-white py-4 shadow-sm flex items-center justify-between px-4">
        <button onClick={() => router.back()} className="text-xl">
          &#x2190;
        </button>
        <h1 className="text-center text-lg font-nunito font-semibold">
          Tambahkan Pin Point
        </h1>
        <div className="w-6" /> {/* Placeholder for symmetry */}
      </div>

      {/* Peta menggunakan react-leaflet */}
      <div className="w-full h-[500px] relative z-0">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customMarkerIcon}>
            <Popup>
              Lokasi terpilih. <br /> Anda dapat mengubahnya.
            </Popup>
          </Marker>
        </MapContainer>

        {/* Tombol untuk menggunakan lokasi saat ini */}
        <button
          onClick={handleUseCurrentLocation}
          className="absolute z-20 bottom-4 right-4 bg-emerald-100 border border-emerald-400 px-6 py-3 rounded-lg shadow-md text-emerald-600 font-semibold flex items-center space-x-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM11 6V12.59L15.7 15.3L16.42 14.12L12.5 11.83V6H11Z"
              fill="#10B981"
            />
          </svg>
          <span>Gunakan Lokasi Saat Ini</span>
        </button>
      </div>

      {/* Detail alamat */}
      <div className="w-full bg-white px-4 py-6 border-t border-gray-300">
        <p className="font-bold text-lg text-center text-emerald-400">{city}</p>
        <p className="font-nunito text-center text-gray-500 mt-2">{address}</p>

        {/* Tombol untuk menyimpan lokasi */}
        <button
          onClick={handleConfirmLocation}
          className="w-full mt-8 bg-emerald-400 text-white p-3 rounded-lg"
        >
          Pilih Lokasi dan Simpan
        </button>
      </div>

      {/* Popup yang muncul setelah menyimpan lokasi */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-end"
          onClick={handleClosePopup} // Menggunakan handleClosePopup untuk menutup popup
        >
          {/* Stop click propagation to prevent closing when clicking inside the popup */}
          <div
            className="bg-white w-full max-w-md h-[360px] p-6 rounded-t-[24px] shadow-lg transform transition-transform duration-300 ease-out translate-y-0"
            onClick={(e) => e.stopPropagation()} // Cegah penutupan popup ketika area dalam di-klik
          >
            {/* Konten popup */}

            <div className="mt-2 text-center">
              {/* SVG Icon */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-4"
              >
                <path
                  d="M60 110C32.3857 110 10 87.614 10 60C10 32.3857 32.3857 10 60 10C87.614 10 110 32.3857 110 60C110 87.614 87.614 110 60 110ZM55.013 80L90.3685 44.6447L83.2975 37.5736L55.013 65.858L40.871 51.7155L33.8 58.787L55.013 80Z"
                  fill="url(#paint0_linear_1851_7486)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1851_7486"
                    x1="10"
                    y1="60"
                    x2="110"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#83E69B" />
                    <stop offset="1" stopColor="#00BAE1" />
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-[#0F0F0F] text-center font-nunito text-[25px] font-bold">
                Tersimpan
              </h1>

              {/* Pesan informasi */}
              <div className="text-black text-[14px] text-center font-medium font-nunito py-4">
                Alamat baru anda sudah tersimpan di daftar alamat.
              </div>
            </div>

            {/* Tombol Lanjutkan */}
            <div className="px-2 mt-2">
              <button
                onClick={handleLanjutkan}
                className="text-[#0F0F0F] font-nunito text-[16px] font-bold w-full p-3 text-white rounded-lg"
                style={{
                  background: 'var(--Warna-Utama, #51D7B1)',
                  borderRadius: '8px',
                }}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PinLocation
