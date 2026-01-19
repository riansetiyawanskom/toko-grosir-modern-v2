"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
      <div className="aspect-[21/9] sm:aspect-[25/8] w-full">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000" 
          alt="Banner Katalog Sembako" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-8 sm:p-16">
          <span className="bg-secondary text-gray-900 font-black px-4 py-1.5 rounded-full text-xs sm:text-sm w-fit mb-4">
            KATALOG SEMBAKO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white italic tracking-tighter mb-4 drop-shadow-md">
            SEMBILAN BAHAN<br />POKOK LENGKAP!
          </h1>
          <p className="text-white font-bold text-sm sm:text-lg mb-8 max-w-md drop-shadow-sm">
            Beras, Gula, Minyak, Daging, Telur, Susu, Garam, Ikan, dan Sayuran dengan harga grosir terbaik.
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Klipang%20Grosir!%20Saya%20ingin%20bertanya%20tentang%20produk%20sembako."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl w-fit transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hubungi Kami
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Slider Controls */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-8 h-2 bg-secondary rounded-full shadow-sm"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
    </div>
  );
}
