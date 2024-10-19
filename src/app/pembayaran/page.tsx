'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import DetailProduk from '../components/pembayaran/detail-produk'
import Pengiriman from '../components/pembayaran/pengiriman'
import PaymentDropdown from '../components/pembayaran/metode-pembayaran'
import Alamat from '../components/pembayaran/alamat'
import { addressData } from '../address-list/page'
import VoucherOngkir from '../components/pembayaran/voucher-ongkir'

const Pembayaran = () => {
  const selectedAddress = addressData.find((address) => address.key === 1)

  const [subtotal, setSubtotal] = useState(600000)
  const [shippingCost, setShippingCost] = useState(8000)
  const [shippingName, setShippingName] = useState<string>('Standar')
  const [voucherCode, setVoucherCode] = useState('')
  const [voucherDiscount, setVoucherDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  const [isPaymentSelected, setIsPaymentSelected] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('') // State untuk menyimpan metode pembayaran yang dipilih

  useEffect(() => {
    const calculatedTotal = subtotal + shippingCost - voucherDiscount
    setTotal(calculatedTotal)
  }, [subtotal, shippingCost, voucherDiscount])

  const handleApplyDiscount = (discount: number) => {
    setVoucherDiscount(discount)
  }

  const handleShippingChange = (cost: number, name: string) => {
    setShippingCost(cost)
    setShippingName(name)
  }

  // Fungsi untuk menangani pemilihan metode pembayaran
  const handlePaymentSelection = (method: string) => {
    setIsPaymentSelected(true)
    setSelectedPaymentMethod(method) // Update state dengan metode pembayaran yang dipilih
  }

  return (
    <div className="homepage w-[400px] mx-auto py-4">
      {selectedAddress && (
        <Link href="/address-list">
          <Alamat
            name={selectedAddress.name}
            address={selectedAddress.address}
            district={selectedAddress.district}
            city={selectedAddress.city}
            province={selectedAddress.province}
            postalCode={selectedAddress.postalCode}
            phone={selectedAddress.phone}
          />
        </Link>
      )}

      <DetailProduk />
      <div
        className="pb-[19px]"
        style={{ borderBottom: '2px solid var(--putih-60, #D3D3D3)' }}
      ></div>

      <div className="p-4">
        <label className="block text-[#0F0F0F] font-nunito text-[15px] font-bold mb-2">
          Catatan untuk penjual
        </label>
        <input
          type="text"
          className="w-full h-10 p-2 font-nunito text-[13px] border border-gray-300 rounded-md"
          placeholder="Tambahkan catatan untuk penjual"
        />
      </div>

      <div
        className="pb-[9px] -mt-1 mb-3"
        style={{ borderBottom: '8px solid var(--Button-Grey, #F1F1F1)' }}
      ></div>

      <Pengiriman onShippingChange={handleShippingChange} />
      <div
        className="pb-[19px]"
        style={{ borderBottom: '8px solid var(--Button-Grey, #F1F1F1)' }}
      ></div>

      <PaymentDropdown onPaymentSelect={handlePaymentSelection} />
      <div
        className="pb-[8px] mb-3"
        style={{ borderBottom: '8px solid var(--Button-Grey, #F1F1F1)' }}
      ></div>

      <VoucherOngkir onApplyDiscount={handleApplyDiscount} />
      <div
        className="pb-[19px]"
        style={{ borderBottom: '8px solid var(--Button-Grey, #F1F1F1)' }}
      ></div>

      <div className="p-4 bg-white">
        <h2 className="block text-[#0F0F0F] font-nunito text-[15px] font-bold mb-2">
          Rincian Pesanan
        </h2>
        <div className="font-nunito flex justify-between mb-2">
          <span className="text-gray-600 text-[14px]">Subtotal (1 produk)</span>
          <span className="text-[#0F0F0F] font-bold text-[14px]">
            Rp {subtotal.toLocaleString()}
          </span>
        </div>
      </div>

      <div
        className="pb-[3px]"
        style={{ borderBottom: '2px solid var(--putih-60, #D3D3D3)' }}
      ></div>

      <div className="px-4 bg-white mt-3">
        <h2 className="block text-[#0F0F0F] font-nunito text-[15px] font-bold mb-2">
          Pengiriman
        </h2>
        <div className="font-nunito flex justify-between mb-2">
          <span className="text-gray-600 text-[14px]">{shippingName}</span>
          <span className="text-[#0F0F0F] font-bold text-[14px]">
            Rp {shippingCost.toLocaleString()}
          </span>
        </div>

        <div className="font-nunito flex justify-between mb-4">
          <span className="text-gray-600 text-[14px]">Kode Voucher</span>
          <span className="text-[#0F0F0F] font-bold text-[14px]">
            Rp {voucherDiscount.toLocaleString()}
          </span>
        </div>
      </div>

      <div
        className="pb-[6px]"
        style={{ borderBottom: '2px solid var(--putih-60, #D3D3D3)' }}
      ></div>

      <div className="px-4 font-nunito flex justify-between mt-4">
        <span className="text-[#0F0F0F] font-bold">
          Total{' '}
          <span className="ml-2 text-gray-600 font-normal text-[15px]">
            (Termasuk Voucher)
          </span>
        </span>
        <span className="text-[#0F0F0F] font-bold">
          Rp {total.toLocaleString()}
        </span>
      </div>

      <div className="px-4 mt-4">
        {isPaymentSelected ? (
          <Link href={`/laman-pembayaran?method=${selectedPaymentMethod}`}>
            <button className="font-nunito mt-4 w-full p-3 rounded-lg bg-emerald-400 text-white">
              Selesaikan Pembayaran
            </button>
          </Link>
        ) : (
          <button
            className="font-nunito mt-4 w-full p-3 rounded-lg bg-gray-300 text-gray-500"
            disabled
          >
            Selesaikan Pembayaran
          </button>
        )}
      </div>
    </div>
  )
}

export default Pembayaran