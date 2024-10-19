'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import CaraMembayar from '../components/pembayaran/cara-membayar'
import OrderInformation from '../components/pembayaran/info-order'
import PaymentSection from '../components/pembayaran/pembayaran-va'
import PaymentSectionQris from '../components/pembayaran/pembayaran-qris'
import Link from 'next/link'


const PaymentPage = () => {
  const searchParams = useSearchParams()
  const method = searchParams.get('method') // Mengambil metode pembayaran dari URL query

  const [selectedMethod, setSelectedMethod] = useState<string>('')

  useEffect(() => {
    if (method) {
      setSelectedMethod(method)
    }
  }, [method])

  return (
    <div className="w-full max-w-[400px] mx-auto py-4 space-y-6">
      <OrderInformation />

      {/* Render komponen sesuai dengan metode pembayaran yang dipilih */}
      {selectedMethod === 'QRIS' ? (
        <PaymentSectionQris />
      ) : (
        <PaymentSection />
      )}

      <CaraMembayar />

      <div className="px-4 mt-2">
      <Link href="/pesanan">
      <button className="font-nunito mt-4 w-full p-3 rounded-lg bg-emerald-400 text-white">
              Sudah Bayar
            </button>
          </Link>
      </div>
    </div>
  )
}

export default PaymentPage
