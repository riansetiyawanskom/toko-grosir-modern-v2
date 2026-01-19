"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Menu, X, ChevronDown, Phone, Wheat, Droplets, Egg, Beef, Fish, Cookie, Flame, Milk, LeafyGreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sembakoCategories = [
  { name: "Beras", icon: Wheat, href: "#beras" },
  { name: "Gula", icon: Cookie, href: "#gula" },
  { name: "Minyak Goreng", icon: Droplets, href: "#minyak" },
  { name: "Daging", icon: Beef, href: "#daging" },
  { name: "Telur", icon: Egg, href: "#telur" },
  { name: "Susu", icon: Milk, href: "#susu" },
  { name: "Garam & Bumbu", icon: Flame, href: "#bumbu" },
  { name: "Ikan", icon: Fish, href: "#ikan" },
  { name: "Sayuran", icon: LeafyGreen, href: "#sayuran" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-[10px] sm:text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="font-bold">KATALOG SEMBAKO GROSIR</span>
            <span className="opacity-70">|</span>
            <span>Sembilan Bahan Pokok Lengkap</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> Hubungi: <strong className="cursor-pointer hover:underline">0812-3456-7890</strong>
            </span>
            <span className="opacity-70">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Klipang, Semarang
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="bg-primary text-white p-2 rounded flex items-center gap-1 font-black text-xl italic tracking-tighter">
              <span className="text-secondary">KLIPANG</span>
              <span>GROSIR</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 hidden md:flex relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <Input 
              placeholder="Cari produk sembako: beras, gula, minyak goreng..." 
              className="pl-10 h-11 border-2 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg"
            />
            <Button className="absolute right-1 top-1 h-9 bg-primary hover:bg-primary/90 text-white font-bold rounded-md">
              Cari
            </Button>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-center gap-2 sm:gap-5">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hidden sm:inline">Chat WA</span>
            </a>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Sembako Categories */}
      <div className="hidden md:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center">
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <div className="flex items-center gap-2 py-3 px-4 bg-primary text-white font-bold cursor-pointer hover:bg-primary/90 transition-colors">
                <Menu className="w-5 h-5" />
                <span>KATEGORI SEMBAKO</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Dropdown */}
              {isCategoryOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-xl border border-gray-100 min-w-[280px] py-2 z-50">
                  {sembakoCategories.map((cat, index) => (
                    <a 
                      key={index}
                      href={cat.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <cat.icon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-gray-700">{cat.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-6 ml-6 text-sm font-semibold text-gray-700">
              <Link href="#beras" className="hover:text-primary transition-colors">Beras</Link>
              <Link href="#gula" className="hover:text-primary transition-colors">Gula</Link>
              <Link href="#minyak" className="hover:text-primary transition-colors">Minyak</Link>
              <Link href="#daging" className="hover:text-primary transition-colors">Daging</Link>
              <Link href="#telur" className="hover:text-primary transition-colors">Telur</Link>
              <Link href="#susu" className="hover:text-primary transition-colors">Susu</Link>
              <Link href="#bumbu" className="hover:text-primary transition-colors">Bumbu</Link>
            </div>
          </nav>
          <div className="flex gap-4 items-center">
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">
              HARGA GROSIR
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden p-3 bg-white border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Cari sembako..." className="pl-9 h-10 bg-gray-50 border-none rounded-full" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4">
          <p className="text-xs font-bold text-gray-400 mb-3 uppercase">Kategori Sembako</p>
          <div className="grid grid-cols-3 gap-2">
            {sembakoCategories.map((cat, index) => (
              <a 
                key={index}
                href={cat.href}
                className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <cat.icon className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-semibold text-gray-700">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
