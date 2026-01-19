"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, MapPin, Menu, X, ChevronDown, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-[10px] sm:text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span>Download App</span>
            <span>Promosi</span>
            <span>Bantuan</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Pilih Lokasi Toko: <strong className="cursor-pointer hover:underline">Indogrosir Kemayoran</strong>
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
              placeholder="Cari produk grosir, brand, atau kategori..." 
              className="pl-10 h-11 border-2 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg"
            />
            <Button className="absolute right-1 top-1 h-9 bg-primary hover:bg-primary/90 text-white font-bold rounded-md">
              Cari
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="hidden lg:flex items-center gap-1 text-xs font-semibold cursor-pointer hover:text-primary transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <User className="w-5 h-5 text-gray-600 group-hover:text-primary" />
              </div>
              <div className="hidden lg:block leading-none">
                <p className="text-[10px] text-gray-500 font-medium">Selamat Datang</p>
                <p className="text-xs font-bold text-gray-900">Masuk / Daftar</p>
              </div>
            </div>

            <div className="relative cursor-pointer group">
              <div className="bg-secondary p-2.5 rounded-full shadow-sm group-hover:bg-secondary/90 transition-all">
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                0
              </span>
            </div>

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

      {/* Navigation Bar */}
      <div className="hidden md:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center">
            <div className="flex items-center gap-2 py-3 px-4 bg-primary text-white font-bold cursor-pointer hover:bg-primary/90 transition-colors">
              <Menu className="w-5 h-5" />
              <span>KATEGORI</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex gap-6 ml-6 text-sm font-semibold text-gray-700">
              <Link href="#" className="hover:text-primary transition-colors">Produk Baru</Link>
              <Link href="#" className="hover:text-primary transition-colors">Paling Laris</Link>
              <Link href="#" className="hover:text-primary transition-colors">Brand Populer</Link>
              <Link href="#" className="hover:text-primary transition-colors text-primary font-bold">Katalog Promo</Link>
            </div>
          </nav>
          <div className="flex gap-4 items-center">
            <span className="text-[10px] bg-red-100 text-primary px-2 py-0.5 rounded font-bold animate-pulse">
              CUCI GUDANG %
            </span>
            <div className="text-xs font-bold text-gray-400">|</div>
            <Link href="#" className="text-xs font-bold text-gray-600 hover:text-primary">Lacak Pesanan</Link>
          </div>
        </div>
      </div>

      {/* Mobile Search - Only on mobile */}
      <div className="md:hidden p-3 bg-white border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Cari di Klik Indogrosir" className="pl-9 h-10 bg-gray-50 border-none rounded-full" />
        </div>
      </div>
    </header>
  );
}
