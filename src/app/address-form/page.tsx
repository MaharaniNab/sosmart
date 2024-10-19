'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const FormAddress = () => {
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedPostalCode, setSelectedPostalCode] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [instructions, setInstructions] = useState('')

  const router = useRouter()

  // Validasi form harus terisi semua kecuali instruksi yang opsional
  const isFormValid =
    name &&
    phone &&
    selectedProvince &&
    selectedCity &&
    selectedDistrict &&
    selectedPostalCode &&
    address

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Cek apakah semua field yang wajib terisi
    if (!isFormValid) {
      alert('Harap isi semua field yang diperlukan.')
      return
    }

    const formData = {
      name,
      phone,
      province: selectedProvince,
      city: selectedCity,
      district: selectedDistrict,
      postalCode: selectedPostalCode,
      address,
      instructions, // Opsional
    }

    // Simpan data ke localStorage
    localStorage.setItem('addressData', JSON.stringify(formData))

    // Redirect ke halaman PinLocation setelah submit berhasil
    router.push('/pin-location')
  }

  return (
    <div className="container w-[400px] mx-auto p-4">
      <h1 className="text-[#0F0F0F] font-nunito text-xl font-semibold font-bold mb-8 text-center">
        Alamat Baru
      </h1>

      <form
        onSubmit={handleSubmit}
        className="text-[#949494] font-nunito text-[15px] font-semibold space-y-4"
      >
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        />

        <input
          type="tel"
          placeholder="Nomor Telepon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        />

        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        >
          <option value="" disabled>
            Pilih Provinsi
          </option>
          {['Jawa Timur', 'Jawa Tengah', 'Jawa Barat'].map(
            (province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ),
          )}
        </select>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        >
          <option value="" disabled>
            Pilih Kota
          </option>
          {['Surabaya', 'Semarang', 'Bandung'].map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        >
          <option value="" disabled>
            Pilih Kecamatan
          </option>
          {['Kecamatan Ponorogo', 'Kecamatan Mijen', 'Kecamatan Cisaat'].map(
            (district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ),
          )}
        </select>

        <select
          value={selectedPostalCode}
          onChange={(e) => setSelectedPostalCode(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        >
          <option value="" disabled>
            Pilih Kode Pos
          </option>
          {['61153', '50139', '40123'].map((postalCode, index) => (
            <option key={index} value={postalCode}>
              {postalCode}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Nama Jalan, Gedung"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        />

        <input
          type="text"
          placeholder="Instruksi Pengiriman/ Blok/ Unit No. (Optional)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-emerald-300"
        />
      </form>

      <button
        type="submit"
        className={`w-full py-4 rounded-lg text-white ${
          isFormValid ? 'bg-emerald-400' : 'bg-gray-300 cursor-not-allowed'
        } mt-12`}
        disabled={!isFormValid}
        onClick={handleSubmit} // Menggunakan handleSubmit di sini
      >
        Lanjutkan
      </button>
    </div>
  )
}

export default FormAddress
