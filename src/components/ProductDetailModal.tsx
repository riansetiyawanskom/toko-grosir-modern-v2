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
import { X } from "lucide-react";

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
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain p-8"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-blue-600 hover:bg-blue-700 text-xs px-2 py-1 font-bold">BARU</Badge>
            )}
            {product.discount && (
              <Badge className="bg-primary hover:bg-primary text-xs px-2 py-1 font-bold">-{product.discount}</Badge>
            )}
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{product.category}</p>
            <h2 className="text-xl font-black text-gray-900 leading-tight">{product.name}</h2>
          </div>

          {/* Price */}
          <div className="bg-gray-50 p-4 rounded-xl">
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through mb-1">
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-primary">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm font-bold text-gray-500">/{product.unit}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 mb-2">Keterangan Produk</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description || `${product.name} dengan kualitas terbaik. Cocok untuk kebutuhan rumah tangga maupun usaha grosir Anda. Tersedia dalam satuan ${product.unit}. Hubungi kami untuk informasi stok dan pemesanan.`}
            </p>
          </div>

          {/* WhatsApp Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full h-14 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-xl gap-3 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan via WhatsApp
          </Button>

          <p className="text-[11px] text-center text-gray-400">
            Klik tombol di atas untuk chat langsung dengan admin kami
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
