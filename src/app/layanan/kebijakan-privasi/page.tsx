import { Shield, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function KebijakanPrivasi() {
  const sections = [
    {
      title: "1. Informasi yang Kami Kumpulkan",
      content: [
        "Nama lengkap dan alamat pengiriman untuk keperluan pengiriman pesanan.",
        "Nomor telepon dan WhatsApp untuk komunikasi terkait pesanan.",
        "Riwayat pembelian untuk meningkatkan layanan dan memberikan rekomendasi produk.",
        "Informasi lokasi untuk menghitung biaya pengiriman."
      ]
    },
    {
      title: "2. Penggunaan Informasi",
      content: [
        "Memproses dan mengirimkan pesanan Anda.",
        "Menghubungi Anda terkait status pesanan atau konfirmasi pembayaran.",
        "Memberikan informasi tentang promo, diskon, atau produk baru (dengan persetujuan Anda).",
        "Meningkatkan kualitas layanan dan pengalaman berbelanja."
      ]
    },
    {
      title: "3. Perlindungan Data",
      content: [
        "Data pribadi Anda disimpan dengan aman dan tidak akan dijual kepada pihak ketiga.",
        "Akses ke data pelanggan hanya diberikan kepada staf yang berwenang.",
        "Kami menggunakan protokol keamanan standar untuk melindungi informasi Anda.",
        "Data pembayaran tidak disimpan di sistem kami."
      ]
    },
    {
      title: "4. Berbagi Informasi",
      content: [
        "Kami hanya membagikan informasi dengan pihak ketiga untuk keperluan pengiriman (ekspedisi/kurir).",
        "Informasi dasar seperti nama dan alamat diberikan kepada mitra pengiriman.",
        "Kami tidak membagikan informasi kontak Anda untuk keperluan pemasaran pihak ketiga.",
        "Dalam keadaan tertentu, kami mungkin diwajibkan membagikan informasi sesuai peraturan hukum yang berlaku."
      ]
    },
    {
      title: "5. Hak Pelanggan",
      content: [
        "Anda berhak meminta salinan data pribadi yang kami simpan.",
        "Anda dapat meminta pembaruan atau koreksi data yang tidak akurat.",
        "Anda dapat meminta penghapusan data pribadi Anda dari sistem kami.",
        "Anda dapat berhenti berlangganan dari komunikasi promosi kapan saja."
      ]
    },
    {
      title: "6. Cookies & Teknologi Pelacakan",
      content: [
        "Website kami mungkin menggunakan cookies untuk meningkatkan pengalaman pengguna.",
        "Cookies membantu kami memahami bagaimana Anda menggunakan layanan kami.",
        "Anda dapat menonaktifkan cookies melalui pengaturan browser Anda."
      ]
    },
    {
      title: "7. Perubahan Kebijakan",
      content: [
        "Klipang Grosir berhak mengubah kebijakan privasi ini sewaktu-waktu.",
        "Perubahan akan diinformasikan melalui website atau komunikasi langsung.",
        "Penggunaan layanan setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui."
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
            <div className="p-3 rounded-xl bg-green-50 text-green-600">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900 italic tracking-tight mb-2">KEBIJAKAN PRIVASI</h1>
              <p className="text-sm text-gray-500">Terakhir diperbarui: Januari 2026</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Klipang Grosir berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">Komitmen Kami</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            Kami menghormati privasi Anda dan berkomitmen untuk menjaga kerahasiaan data pribadi Anda. Data Anda hanya digunakan untuk keperluan transaksi dan peningkatan layanan.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">Pertanyaan Tentang Privasi?</h3>
          <p className="text-white/90 mb-6">Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi tim kami.</p>
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
