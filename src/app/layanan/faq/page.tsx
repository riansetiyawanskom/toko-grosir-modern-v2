"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Bagaimana cara memesan di Klipang Grosir?",
      answer: "Anda cukup memilih produk yang diinginkan di katalog kami, kemudian klik tombol 'Pesan via WhatsApp'. Anda akan langsung terhubung dengan tim kami untuk konfirmasi pesanan, pembayaran, dan pengiriman."
    },
    {
      question: "Berapa minimal pembelian untuk mendapat harga grosir?",
      answer: "Minimal pembelian untuk harga grosir berbeda-beda tergantung kategori produk. Umumnya, untuk produk sembako seperti beras minimal 5 karung, gula minimal 5 kg, minyak goreng minimal 5 liter. Untuk informasi lebih detail, silakan hubungi tim kami."
    },
    {
      question: "Apakah ada minimal order untuk pengiriman?",
      answer: "Untuk pengiriman area Semarang Kota, minimal order adalah Rp 100.000. Untuk gratis ongkir, minimal pembelian Rp 300.000. Untuk area luar kota, tidak ada minimal order namun ongkir dihitung berdasarkan berat dan jarak."
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer: "Kami menerima pembayaran melalui transfer bank (BCA, BRI, Mandiri), e-wallet (GoPay, OVO, DANA, ShopeePay), dan COD (Cash on Delivery) untuk area Semarang dengan minimal pembelian Rp 200.000."
    },
    {
      question: "Berapa lama waktu pengiriman?",
      answer: "Untuk area Semarang, kami menyediakan same day delivery untuk pesanan sebelum jam 12.00. Untuk area Ungaran, Demak, Kendal estimasi 1-2 hari kerja. Pengiriman via ekspedisi ke luar kota membutuhkan 2-5 hari kerja."
    },
    {
      question: "Apakah bisa ambil sendiri di toko?",
      answer: "Ya, Anda bisa mengambil pesanan langsung di toko kami di Jl. Klipang Raya No. 88, Semarang. Silakan konfirmasi terlebih dahulu via WhatsApp agar pesanan bisa disiapkan."
    },
    {
      question: "Bagaimana jika barang yang diterima rusak atau tidak sesuai?",
      answer: "Silakan laporkan ke kami dalam waktu 1x24 jam setelah barang diterima dengan menyertakan foto/video sebagai bukti. Tim kami akan memproses pengembalian atau penggantian barang sesuai ketentuan yang berlaku."
    },
    {
      question: "Apakah harga sudah termasuk PPN?",
      answer: "Ya, semua harga yang tertera di katalog kami sudah termasuk PPN kecuali dinyatakan lain."
    },
    {
      question: "Jam operasional Klipang Grosir?",
      answer: "Toko offline kami buka setiap hari Senin-Sabtu pukul 07.00-17.00 WIB. Untuk pemesanan online via WhatsApp, kami melayani 24 jam namun respon tercepat pada jam kerja."
    },
    {
      question: "Apakah bisa request produk yang tidak ada di katalog?",
      answer: "Tentu! Jika ada produk sembako yang Anda butuhkan namun tidak tersedia di katalog, silakan hubungi kami. Kami akan berusaha memenuhi kebutuhan Anda."
    },
    {
      question: "Apakah ada diskon untuk pembelian dalam jumlah besar?",
      answer: "Ya, kami memberikan harga khusus untuk pembelian dalam jumlah besar atau untuk pelanggan tetap. Silakan hubungi tim kami untuk negosiasi harga terbaik."
    },
    {
      question: "Bagaimana cara menjadi reseller Klipang Grosir?",
      answer: "Untuk menjadi reseller, silakan hubungi tim kami via WhatsApp. Kami akan memberikan informasi tentang syarat, ketentuan, dan keuntungan menjadi mitra reseller Klipang Grosir."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-primary transition-colors">
            ← Kembali ke Beranda
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900 italic tracking-tight mb-2">FAQ (TANYA JAWAB)</h1>
              <p className="text-sm text-gray-500">Pertanyaan yang sering diajukan</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Temukan jawaban untuk pertanyaan umum tentang layanan Klipang Grosir. Jika pertanyaan Anda tidak ada di sini, jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">Tidak Menemukan Jawaban?</h3>
          <p className="text-white/90 mb-6">Tim customer service kami siap membantu menjawab semua pertanyaan Anda.</p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
