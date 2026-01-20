import { FileText, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SyaratKetentuan() {
  const sections = [
    {
      title: "1. Ketentuan Umum",
      content: [
        "Dengan mengakses dan menggunakan layanan Klipang Grosir, Anda menyetujui untuk terikat dengan syarat dan ketentuan ini.",
        "Klipang Grosir berhak mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu.",
        "Anda bertanggung jawab untuk membaca dan memahami syarat dan ketentuan yang berlaku."
      ]
    },
    {
      title: "2. Pemesanan Produk",
      content: [
        "Semua pesanan dilakukan melalui WhatsApp dan dikonfirmasi oleh tim kami.",
        "Harga produk dapat berubah sewaktu-waktu sesuai kondisi pasar tanpa pemberitahuan terlebih dahulu.",
        "Ketersediaan stok bergantung pada kondisi saat pemesanan.",
        "Pesanan dianggap sah setelah pembayaran diterima dan dikonfirmasi."
      ]
    },
    {
      title: "3. Pembayaran",
      content: [
        "Pembayaran harus dilakukan sesuai dengan metode yang disepakati.",
        "Untuk pembayaran transfer, konfirmasi pembayaran wajib dikirimkan dalam waktu 1x24 jam.",
        "Pesanan yang tidak dibayar dalam waktu yang ditentukan akan dibatalkan secara otomatis.",
        "Klipang Grosir tidak bertanggung jawab atas kesalahan transfer ke rekening selain yang tercantum resmi."
      ]
    },
    {
      title: "4. Pengiriman",
      content: [
        "Estimasi waktu pengiriman bersifat perkiraan dan dapat berubah tergantung kondisi.",
        "Klipang Grosir tidak bertanggung jawab atas keterlambatan yang disebabkan oleh pihak ketiga (ekspedisi).",
        "Pembeli wajib memastikan alamat dan nomor telepon yang diberikan sudah benar.",
        "Biaya pengiriman ulang akibat kesalahan alamat ditanggung oleh pembeli."
      ]
    },
    {
      title: "5. Pengembalian & Penukaran",
      content: [
        "Pengembalian produk hanya diterima jika barang rusak atau tidak sesuai pesanan.",
        "Klaim harus dilakukan dalam waktu 1x24 jam setelah barang diterima dengan menyertakan bukti foto/video.",
        "Pengembalian dana akan diproses dalam waktu 3-7 hari kerja setelah klaim disetujui.",
        "Produk yang sudah dibuka atau digunakan tidak dapat dikembalikan kecuali terbukti cacat produksi."
      ]
    },
    {
      title: "6. Harga Grosir",
      content: [
        "Harga grosir berlaku untuk pembelian dalam jumlah tertentu sesuai ketentuan masing-masing produk.",
        "Minimum order untuk mendapatkan harga grosir berbeda untuk setiap kategori produk.",
        "Harga yang tertera sudah termasuk PPN kecuali dinyatakan lain."
      ]
    },
    {
      title: "7. Batasan Tanggung Jawab",
      content: [
        "Klipang Grosir tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan layanan kami.",
        "Tanggung jawab maksimal kami terbatas pada nilai pesanan yang bersangkutan.",
        "Kami tidak menjamin bahwa layanan akan selalu tersedia tanpa gangguan."
      ]
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
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900 italic tracking-tight mb-2">SYARAT & KETENTUAN</h1>
              <p className="text-sm text-gray-500">Terakhir diperbarui: Januari 2026</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Dokumen ini mengatur hubungan antara Anda sebagai pelanggan dengan Klipang Grosir sebagai penyedia layanan. Mohon baca dengan seksama sebelum melakukan transaksi.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">Ada Pertanyaan?</h3>
          <p className="text-white/90 mb-6">Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami.</p>
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
