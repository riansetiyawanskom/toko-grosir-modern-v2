import { Truck, MapPin, Clock, Package, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Pengiriman() {
  const shippingInfo = [
    {
      icon: MapPin,
      title: "Area Layanan",
      description: "Kami melayani pengiriman ke seluruh wilayah Semarang dan sekitarnya.",
      details: [
        "Semarang Kota - Gratis ongkir min. Rp 300.000",
        "Semarang Barat, Timur, Selatan, Utara - Gratis ongkir min. Rp 400.000",
        "Ungaran, Demak, Kendal - Ongkir mulai Rp 15.000",
        "Luar kota - Menggunakan ekspedisi (JNE, J&T, SiCepat)"
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Clock,
      title: "Waktu Pengiriman",
      description: "Estimasi waktu pengiriman tergantung lokasi dan ketersediaan stok.",
      details: [
        "Same Day Delivery untuk area Semarang (order sebelum jam 12.00)",
        "1-2 hari kerja untuk area Ungaran, Demak, Kendal",
        "2-5 hari kerja untuk pengiriman via ekspedisi",
        "Jadwal pengiriman reguler: Senin - Sabtu"
      ],
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Package,
      title: "Pengemasan",
      description: "Barang dikemas dengan aman untuk menjaga kualitas produk.",
      details: [
        "Pengemasan standar untuk produk kering",
        "Pengemasan khusus untuk produk mudah pecah",
        "Segel keamanan pada setiap paket",
        "Label pengiriman yang jelas"
      ],
      color: "bg-green-50 text-green-600"
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
          <h1 className="text-3xl font-black text-gray-900 italic tracking-tight mb-4">INFORMASI PENGIRIMAN</h1>
          <p className="text-gray-600 leading-relaxed">
            Klipang Grosir menyediakan layanan pengiriman yang cepat dan aman untuk kenyamanan belanja Anda.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 mb-8 text-white flex items-center gap-4">
          <Truck className="w-12 h-12 flex-shrink-0" />
          <div>
            <h2 className="font-bold text-lg">Gratis Ongkir!</h2>
            <p className="text-white/90 text-sm">Nikmati gratis ongkir untuk pembelian minimal Rp 300.000 di area Semarang Kota</p>
          </div>
        </div>

        <div className="space-y-6">
          {shippingInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex gap-6 items-start mb-4">
                <div className={`p-4 rounded-2xl ${info.color} flex-shrink-0`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h2>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 ml-0 md:ml-20">
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
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
          <h3 className="font-bold text-gray-900 mb-4">Catatan Penting</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
              <span>Pastikan alamat dan nomor telepon yang diberikan sudah benar untuk menghindari keterlambatan pengiriman.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
              <span>Pengiriman tidak tersedia pada hari Minggu dan tanggal merah.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
              <span>Untuk pesanan dalam jumlah besar, silakan hubungi kami untuk pengaturan pengiriman khusus.</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">Tanya Tentang Pengiriman?</h3>
          <p className="text-white/90 mb-6">Hubungi kami untuk informasi lebih lanjut tentang pengiriman ke lokasi Anda.</p>
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
