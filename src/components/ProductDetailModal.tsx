"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Package, Tag, Layers } from "lucide-react";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  isNew?: boolean;
  discount?: string;
  description?: string;
}

interface ProductDetailModalProps {
  product: ProductType | null;
  isOpen: boolean;
  onClose: () => void;
  waNumber?: string;
}

export function ProductDetailModal({ 
  product, 
  isOpen, 
  onClose, 
  waNumber = "6281234567890" 
}: ProductDetailModalProps) {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppLink = () => {
    const message = `Halo Klipang Grosir! 👋

Saya tertarik dengan produk berikut:

📦 *${product.name}*
💰 Harga: ${formatPrice(product.price)}/${product.unit}
📁 Kategori: ${product.category}

Apakah produk ini masih tersedia? Mohon informasi lebih lanjut. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${waNumber}?text=${encodedMessage}`;
  };

  const handleWhatsAppClick = () => {
    const url = generateWhatsAppLink();
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden" showCloseButton={false}>
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {product.isNew && (
                <Badge className="bg-blue-600 hover:bg-blue-700 text-[10px] px-2 py-0.5 font-bold shadow-md">BARU</Badge>
              )}
              {product.discount && (
                <Badge className="bg-primary hover:bg-primary text-[10px] px-2 py-0.5 font-bold shadow-md">-{product.discount}</Badge>
              )}
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Right: Product Info */}
          <div className="p-5 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              {/* Category & Name */}
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                  <Layers className="w-3 h-3" />
                  {product.category}
                </span>
                <h2 className="text-lg font-black text-gray-900 leading-tight mt-2">{product.name}</h2>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border border-amber-100">
                <div className="flex items-center justify-between">
                  <div>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-primary">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs font-bold text-gray-500">/{product.unit}</span>
                    </div>
                  </div>
                  {product.discount && (
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                      Hemat {product.discount}
                    </span>
                  )}
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                  <Package className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[10px] text-gray-400">Satuan</p>
                    <p className="text-xs font-bold text-gray-700">{product.unit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[10px] text-gray-400">Kategori</p>
                    <p className="text-xs font-bold text-gray-700">{product.category}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-bold text-gray-700 mb-1">Keterangan</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {product.description || `${product.name} dengan kualitas terbaik. Cocok untuk kebutuhan rumah tangga maupun usaha grosir Anda.`}
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-4 space-y-2">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full h-11 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-lg gap-2 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pesan via WhatsApp
              </Button>
              <p className="text-[10px] text-center text-gray-400">
                Klik untuk chat langsung dengan admin
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
