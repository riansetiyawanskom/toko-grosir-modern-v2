"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal, ProductType } from "@/components/ProductDetailModal";
import { categorySlugMap, categoryInfo, getProductsByCategory } from "@/lib/products";
import { ChevronRight, Home, Package } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const categoryName = categorySlugMap[slug];
  const info = categoryInfo[categoryName];
  
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (categoryName) {
      setProducts(getProductsByCategory(categoryName));
    }
  }, [categoryName]);

  const handleViewDetail = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (!isMounted) {
    return null;
  }

  if (!categoryName || !info) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Kategori Tidak Ditemukan</h1>
        <p className="text-gray-500 mb-6">Kategori yang Anda cari tidak tersedia.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
          <Home className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="bg-gradient-to-r from-primary to-red-700 py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">{info.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black text-white italic tracking-tight mb-2">
            {info.name.toUpperCase()}
          </h1>
          <p className="text-white/80 font-medium">{info.desc}</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h2 className="text-xl font-black text-gray-900 italic tracking-tight">
              PRODUK {info.name.toUpperCase()}
            </h2>
          </div>
          <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold">
            {products.length} Produk
          </span>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetail={handleViewDetail}
                isBestSeller={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Belum ada produk dalam kategori ini.</p>
          </div>
        )}
      </section>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        waNumber="6281234567890"
      />
    </div>
  );
}
