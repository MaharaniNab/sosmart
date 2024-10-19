'use client'
import { useRouter } from 'next/navigation'

interface AlamatProps {
  name: string
  phone: string
  address: string
  district: string
  city: string
  province: string
  postalCode: string
}

const Alamat = ({
  name,
  address,
  district,
  city,
  province,
  postalCode,
  phone,
}: AlamatProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/address-list') // Navigasi ke halaman address list
  }

  return (
    <div className="mt-4 px-4">
      <div
        className="bg-white p-4 rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex items-start cursor-pointer"
        onClick={handleNavigation}
      >
        {/* Icon maps */}
        <div className="flex-shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
              fill="#0095FF"
            />
          </svg>
        </div>

        {/* Informasi Alamat */}
        <div className="ml-6 flex-grow">
          <h2 className="text-[#0F0F0F] font-nunito text-[14px] font-bold">
            {name}
          </h2>
          <p className="mt-2 text-[#1B1E28] font-nunito text-[12px]">
            {address}, {district}
          </p>
          <p className="text-[#1B1E28] font-nunito text-[12px]">
            {city}
          </p>
          <p className="text-[#1B1E28] font-nunito text-[12px]">
            {province}
          </p>
          <p className="text-[#1B1E28] font-nunito text-[12px]">
            {postalCode}
          </p>
        </div>

        {/* Icon arrow-up-s-line */}
        <div className="flex-shrink-0">
          <svg
            width="24"
            height="24"
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
      </div>
    </div>
  )
}

export default Alamat
