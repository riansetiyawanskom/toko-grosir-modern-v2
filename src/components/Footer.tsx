import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

// Klipang Grosir Footer Component

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="bg-primary text-white p-2 rounded inline-flex items-center gap-1 font-black text-xl italic tracking-tighter mb-6">
              <span className="text-secondary">KLIPANG</span>
              <span>GROSIR</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Klipang Grosir adalah toko online yang melayani kebutuhan grosir untuk pedagang retail, UMKM, dan kebutuhan rumah tangga dengan harga terbaik.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Layanan Pelanggan</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-primary transition-colors">Cara Belanja</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pembayaran</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pengiriman</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ (Tanya Jawab)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(024) 7600-123</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>kontak@klipanggrosir.co.id</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Jl. Klipang Raya No. 88, Semarang, 50124</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6">Hubungi via WhatsApp</h3>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-bold transition-colors mb-6"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              0812-3456-7890
            </a>
            <p className="text-xs text-gray-500">Chat langsung untuk pemesanan dan info produk</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 Klipang Grosir. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
