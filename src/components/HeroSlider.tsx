"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
      <div className="aspect-[21/9] sm:aspect-[25/8] w-full">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000" 
          alt="Banner Promo Indogrosir" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex flex-col justify-center p-8 sm:p-16">
          <span className="bg-secondary text-primary font-black px-4 py-1.5 rounded-full text-xs sm:text-sm w-fit mb-4 animate-bounce">
            PROMO MINGGU INI
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white italic tracking-tighter mb-4 drop-shadow-md">
            STOK MELIMPAH,<br />HARGA TERMURAH!
          </h1>
          <p className="text-white font-bold text-sm sm:text-lg mb-8 max-w-md drop-shadow-sm">
            Dapatkan potongan harga hingga 40% untuk produk sembako dan kebutuhan pokok lainnya.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl w-fit transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
            Belanja Sekarang
            <ChevronRight className="w-5 h-5" />
          </button>
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
