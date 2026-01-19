"use client";

import React from "react";
import { Eye, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductType } from "@/components/ProductDetailModal";

interface ProductCardProps {
  product: ProductType;
  onViewDetail: (product: ProductType) => void;
  isBestSeller?: boolean;
}

export function ProductCard({ product, onViewDetail, isBestSeller }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

    return (
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all group relative flex flex-col h-full">
        {/* Badge Container */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
            {isBestSeller && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-[10px] px-1.5 py-0 font-bold flex items-center gap-1">
                <Flame className="w-3 h-3" />
                TERLARIS
              </Badge>
            )}
            {product.isNew && (
              <Badge className="bg-blue-600 hover:bg-blue-700 text-[10px] px-1.5 py-0 font-bold">BARU</Badge>
            )}
            {product.discount && (
              <Badge className="bg-primary hover:bg-primary text-[10px] px-1.5 py-0 font-bold">-{product.discount}</Badge>
            )}
          </div>

        {/* Image - Full bleed to edges */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col p-4">
          <p className="text-[10px] font-bold text-primary uppercase mb-1">{product.category}</p>
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

      {/* Detail Button */}
      <div className="mt-4">
        <Button 
          onClick={() => onViewDetail(product)}
          className="w-full bg-secondary hover:bg-secondary/80 text-gray-900 font-bold h-9 rounded-lg gap-2 shadow-sm border-b-2 border-primary/20"
        >
          <Eye className="w-4 h-4" />
          <span>Lihat Detail</span>
        </Button>
      </div>
    </div>
  );
}
