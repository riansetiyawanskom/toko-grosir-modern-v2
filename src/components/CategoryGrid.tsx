"use client";

import React from "react";
import { 
  Coffee, 
  Utensils, 
  Baby, 
  Sparkles, 
  Home, 
  Smartphone, 
  Shirt, 
  HeartPulse 
} from "lucide-react";

const categories = [
  { name: "Sembako", icon: Utensils, color: "bg-orange-100 text-orange-600" },
  { name: "Minuman", icon: Coffee, color: "bg-blue-100 text-blue-600" },
  { name: "Kebutuhan Ibu & Anak", icon: Baby, color: "bg-pink-100 text-pink-600" },
  { name: "Kebersihan", icon: Sparkles, color: "bg-green-100 text-green-600" },
  { name: "Rumah Tangga", icon: Home, color: "bg-purple-100 text-purple-600" },
  { name: "Elektronik", icon: Smartphone, color: "bg-slate-100 text-slate-600" },
  { name: "Fashion", icon: Shirt, color: "bg-yellow-100 text-yellow-600" },
  { name: "Kesehatan", icon: HeartPulse, color: "bg-red-100 text-red-600" },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      {categories.map((cat, index) => (
        <div 
          key={index} 
          className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer group"
        >
          <div className={`${cat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
            <cat.icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-gray-700 leading-tight">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
