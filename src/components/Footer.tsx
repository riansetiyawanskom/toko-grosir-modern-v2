import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-primary text-white p-2 rounded inline-flex items-center gap-1 font-black text-xl italic tracking-tighter mb-6">
              <span className="text-secondary">KLIK</span>
              <span>INDOGROSIR</span>
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

          {/* Customer Service */}
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

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(021) 1500-280</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>kontak@indogrosir.co.id</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Jl. Ancol Barat I No.9-10, Jakarta Utara, 14430</span>
              </li>
            </ul>
          </div>

          {/* Mobile Apps & Payment */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Download App Kami</h3>
            <div className="flex flex-col gap-3 mb-8">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer border border-gray-800 hover:bg-gray-900">
                <div className="text-[10px] leading-tight">Download on the <br /><span className="text-lg font-bold italic">App Store</span></div>
              </div>
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer border border-gray-800 hover:bg-gray-900">
                <div className="text-[10px] leading-tight">GET IT ON <br /><span className="text-lg font-bold italic">Google Play</span></div>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Partner Pembayaran</h3>
            <div className="flex flex-wrap gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 Klik Indogrosir. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-primary text-white p-2 rounded inline-flex items-center gap-1 font-black text-xl italic tracking-tighter mb-6">
              <span className="text-secondary">KLIK</span>
              <span>INDOGROSIR</span>
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

          {/* Customer Service */}
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

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(021) 1500-280</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>kontak@klipanggrosir.co.id</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Jl. Ancol Barat I No.9-10, Jakarta Utara, 14430</span>
              </li>
            </ul>
          </div>

          {/* Mobile Apps & Payment */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Download App Kami</h3>
            <div className="flex flex-col gap-3 mb-8">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer border border-gray-800 hover:bg-gray-900">
                <div className="text-[10px] leading-tight">Download on the <br /><span className="text-lg font-bold italic">App Store</span></div>
              </div>
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer border border-gray-800 hover:bg-gray-900">
                <div className="text-[10px] leading-tight">GET IT ON <br /><span className="text-lg font-bold italic">Google Play</span></div>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Partner Pembayaran</h3>
            <div className="flex flex-wrap gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 Klik Indogrosir. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-primary text-white p-2 rounded inline-flex items-center gap-1 font-black text-xl italic tracking-tighter mb-6">
              <span className="text-secondary">KLIK</span>
              <span>INDOGROSIR</span>
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

          {/* Customer Service */}
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

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(021) 1500-280</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>kontak@klipanggrosir.co.id</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Jl. Ancol Barat I No.9-10, Jakarta Utara, 14430</span>
              </li>
            </ul>
          </div>

          {/* Mobile Apps & Payment */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Download App Kami</h3>
            <div className="flex flex-col gap-3 mb-8">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer border border-gray-800 hover:bg-gray-900">
                <div className="text-[10px] leading-tight">Download on the <br /><span className="text-lg font-bold italic">App Store</span></div>
              </div>
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer border border-gray-800 hover:bg-gray-900">
                <div className="text-[10px] leading-tight">GET IT ON <br /><span className="text-lg font-bold italic">Google Play</span></div>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Partner Pembayaran</h3>
            <div className="flex flex-wrap gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
            </div>
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
