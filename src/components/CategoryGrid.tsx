"use client";

import React from "react";
import { 
  Wheat,
  Droplets,
  Egg,
  Beef,
  Fish,
  Cookie,
  Flame,
  Milk,
  LeafyGreen
} from "lucide-react";

// Sembilan Bahan Pokok (Sembako) Categories
const categories = [
  { name: "Beras", icon: Wheat, color: "bg-amber-100 text-amber-700", desc: "Berbagai jenis beras" },
  { name: "Gula", icon: Cookie, color: "bg-pink-100 text-pink-600", desc: "Gula pasir & gula merah" },
  { name: "Minyak Goreng", icon: Droplets, color: "bg-yellow-100 text-yellow-600", desc: "Minyak goreng & kelapa" },
  { name: "Daging", icon: Beef, color: "bg-red-100 text-red-600", desc: "Daging sapi & ayam" },
  { name: "Telur", icon: Egg, color: "bg-orange-100 text-orange-600", desc: "Telur ayam & bebek" },
  { name: "Susu", icon: Milk, color: "bg-blue-100 text-blue-600", desc: "Susu & olahan susu" },
  { name: "Garam & Bumbu", icon: Flame, color: "bg-slate-100 text-slate-600", desc: "Garam, merica, bumbu dapur" },
  { name: "Ikan", icon: Fish, color: "bg-cyan-100 text-cyan-600", desc: "Ikan segar & olahan" },
  { name: "Sayuran", icon: LeafyGreen, color: "bg-green-100 text-green-600", desc: "Sayuran segar" },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
      {categories.map((cat, index) => (
        <div 
          key={index} 
          className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-2 sm:gap-3 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all cursor-pointer group"
        >
          <div className={`${cat.color} p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
            <cat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight block">{cat.name}</span>
            <span className="text-[9px] text-gray-400 hidden sm:block mt-0.5">{cat.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
