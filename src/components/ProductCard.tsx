"use client";

import React from "react";
import Image from "next/image";
import { Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  isNew?: boolean;
  discount?: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-xl hover:border-primary/20 transition-all group relative flex flex-col h-full">
      {/* Badge Container */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.isNew && (
          <Badge className="bg-blue-600 hover:bg-blue-700 text-[10px] px-1.5 py-0 font-bold">BARU</Badge>
        )}
        {product.discount && (
          <Badge className="bg-primary hover:bg-primary text-[10px] px-1.5 py-0 font-bold">-{product.discount}</Badge>
        )}
      </div>

      <button className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{product.category}</p>
        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 h-10 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          {product.originalPrice && (
            <p className="text-[11px] text-gray-400 line-through mb-0.5">
              {formatPrice(product.originalPrice)}
            </p>
          )}
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] font-bold text-gray-500 italic">/{product.unit}</span>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="mt-4">
        <Button className="w-full bg-secondary hover:bg-secondary/80 text-primary-foreground font-bold h-9 rounded-lg gap-2 shadow-sm border-b-2 border-primary/20">
          <Plus className="w-4 h-4" />
          <span>Tambah</span>
        </Button>
      </div>
    </div>
  );
}
