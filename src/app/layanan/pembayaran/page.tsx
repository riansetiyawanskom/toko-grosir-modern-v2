import { Building2, Wallet, Banknote, ShieldCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Pembayaran() {
  const paymentMethods = [
    {
      icon: Building2,
      title: "Transfer Bank",
      description: "Pembayaran melalui transfer ke rekening bank kami.",
      details: [
        "BCA: 1234567890 a.n. Klipang Grosir",
        "BRI: 0987654321 a.n. Klipang Grosir",
        "Mandiri: 1122334455 a.n. Klipang Grosir"
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Wallet,
      title: "E-Wallet",
      description: "Pembayaran praktis menggunakan dompet digital.",
      details: [
        "GoPay: 081234567890",
        "OVO: 081234567890",
        "DANA: 081234567890",
        "ShopeePay: 081234567890"
      ],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Banknote,
      title: "Cash on Delivery (COD)",
      description: "Bayar tunai saat barang diterima.",
      details: [
        "Tersedia untuk area Semarang",
        "Minimal pembelian Rp 200.000",
        "Siapkan uang pas untuk mempercepat transaksi"
      ],
      color: "bg-amber-50 text-amber-600"
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
          <h1 className="text-3xl font-black text-gray-900 italic tracking-tight mb-4">METODE PEMBAYARAN</h1>
          <p className="text-gray-600 leading-relaxed">
            Klipang Grosir menyediakan berbagai metode pembayaran yang aman dan nyaman untuk kemudahan transaksi Anda.
          </p>
        </div>

        <div className="space-y-6">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex gap-6 items-start mb-4">
                <div className={`p-4 rounded-2xl ${method.color} flex-shrink-0`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h2>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 ml-0 md:ml-20">
                <ul className="space-y-2">
                  {method.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-xl bg-green-50 text-green-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Keamanan Transaksi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Semua transaksi di Klipang Grosir dijamin aman. Kami tidak pernah menyimpan data kartu kredit atau informasi sensitif pembayaran Anda. Pastikan selalu melakukan pembayaran ke rekening resmi yang tertera di atas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">Ada Pertanyaan Tentang Pembayaran?</h3>
          <p className="text-white/90 mb-6">Hubungi tim kami untuk bantuan lebih lanjut mengenai metode pembayaran.</p>
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
