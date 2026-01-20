import { ShoppingCart, MessageCircle, CreditCard, Truck, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CaraBelanja() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Pilih Produk",
      description: "Jelajahi katalog produk kami dan pilih barang yang Anda butuhkan. Anda bisa melihat detail produk, harga, dan ketersediaan stok.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "2. Hubungi via WhatsApp",
      description: "Klik tombol 'Pesan via WhatsApp' pada produk yang dipilih. Anda akan terhubung langsung dengan tim kami untuk konfirmasi pesanan.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: CreditCard,
      title: "3. Konfirmasi & Pembayaran",
      description: "Tim kami akan mengkonfirmasi ketersediaan stok dan total harga. Lakukan pembayaran sesuai metode yang disepakati.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Truck,
      title: "4. Pengiriman",
      description: "Pesanan akan dikirim ke alamat Anda. Untuk area Semarang, tersedia layanan antar gratis untuk pembelian minimal tertentu.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "5. Terima Pesanan",
      description: "Terima pesanan Anda dan pastikan barang sesuai. Hubungi kami jika ada kendala atau pertanyaan.",
      color: "bg-red-50 text-red-600"
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
          <h1 className="text-3xl font-black text-gray-900 italic tracking-tight mb-4">CARA BELANJA</h1>
          <p className="text-gray-600 leading-relaxed">
            Belanja di Klipang Grosir sangat mudah! Ikuti langkah-langkah berikut untuk melakukan pemesanan.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-start">
              <div className={`p-4 rounded-2xl ${step.color} flex-shrink-0`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
          <p className="text-white/90 mb-6">Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp.</p>
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
