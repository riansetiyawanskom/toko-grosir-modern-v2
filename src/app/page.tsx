"use client";

import { useState } from "react";
import { HeroSlider } from "@/components/HeroSlider";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal, ProductType } from "@/components/ProductDetailModal";
import { Award, ShieldCheck, Truck, Phone } from "lucide-react";

// Sembako Products Data
const sembakoProducts: ProductType[] = [
  // Beras
  {
    id: "beras-1",
    name: "Beras Premium Cap Bunga 5kg",
    price: 72000,
    originalPrice: 78000,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500",
    category: "Beras",
    unit: "Karung",
    discount: "8%",
    description: "Beras premium kualitas terbaik, pulen dan wangi. Cocok untuk kebutuhan rumah tangga dan warung makan.",
  },
  {
    id: "beras-2",
    name: "Beras Pandan Wangi 10kg",
    price: 145000,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=500",
    category: "Beras",
    unit: "Karung",
    isNew: true,
    description: "Beras pandan wangi asli dengan aroma khas yang menggugah selera.",
  },
  // Gula
  {
    id: "gula-1",
    name: "Gulaku Gula Pasir Putih 1kg",
    price: 16500,
    originalPrice: 18000,
    image: "https://images.unsplash.com/photo-1581447100595-3a813597427a?auto=format&fit=crop&q=80&w=500",
    category: "Gula",
    unit: "Pack",
    discount: "8%",
    description: "Gula pasir putih berkualitas tinggi, higienis dan bersih untuk segala keperluan masak.",
  },
  {
    id: "gula-2",
    name: "Gula Merah Jawa 500g",
    price: 12000,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=500",
    category: "Gula",
    unit: "Pack",
    description: "Gula merah asli Jawa, manis alami untuk minuman dan masakan tradisional.",
  },
  // Minyak Goreng
  {
    id: "minyak-1",
    name: "Bimoli Minyak Goreng 2 Liter",
    price: 34500,
    originalPrice: 38900,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=500",
    category: "Minyak Goreng",
    unit: "Botol",
    discount: "11%",
    description: "Minyak goreng berkualitas dengan kandungan vitamin E untuk hasil gorengan yang renyah.",
  },
  {
    id: "minyak-2",
    name: "Sania Minyak Goreng Refill 2L",
    price: 32000,
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=500",
    category: "Minyak Goreng",
    unit: "Pouch",
    isNew: true,
    description: "Minyak goreng kemasan refill hemat, cocok untuk kebutuhan sehari-hari.",
  },
  // Daging
  {
    id: "daging-1",
    name: "Daging Sapi Has Dalam 500g",
    price: 85000,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=500",
    category: "Daging",
    unit: "Pack",
    description: "Daging sapi segar pilihan, cocok untuk steak, rendang, atau masakan berkuah.",
  },
  {
    id: "daging-2",
    name: "Ayam Potong Karkas 1kg",
    price: 38000,
    originalPrice: 42000,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=500",
    category: "Daging",
    unit: "Ekor",
    discount: "10%",
    description: "Ayam potong segar berkualitas, siap olah untuk berbagai masakan.",
  },
  // Telur
  {
    id: "telur-1",
    name: "Telur Ayam Negeri 1kg (±16 butir)",
    price: 28000,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=500",
    category: "Telur",
    unit: "Kg",
    description: "Telur ayam negeri segar dengan ukuran seragam, kaya protein.",
  },
  {
    id: "telur-2",
    name: "Telur Bebek Asin 6 butir",
    price: 24000,
    image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80&w=500",
    category: "Telur",
    unit: "Pack",
    isNew: true,
    description: "Telur bebek asin khas dengan rasa gurih dan kuning telur masir.",
  },
  // Susu
  {
    id: "susu-1",
    name: "Frisian Flag SKM Putih 370g",
    price: 12500,
    image: "https://images.unsplash.com/photo-1550583724-12558142ab12?auto=format&fit=crop&q=80&w=500",
    category: "Susu",
    unit: "Kaleng",
    description: "Susu kental manis berkualitas untuk minuman dan bahan masakan.",
  },
  {
    id: "susu-2",
    name: "Indomilk UHT Full Cream 1L",
    price: 18500,
    originalPrice: 20000,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=500",
    category: "Susu",
    unit: "Kotak",
    discount: "8%",
    description: "Susu UHT full cream dengan kandungan gizi lengkap untuk seluruh keluarga.",
  },
  // Garam & Bumbu
  {
    id: "bumbu-1",
    name: "Garam Cap Kapal 500g",
    price: 5500,
    image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&q=80&w=500",
    category: "Garam & Bumbu",
    unit: "Pack",
    description: "Garam beryodium berkualitas untuk kebutuhan masak sehari-hari.",
  },
  {
    id: "bumbu-2",
    name: "Merica Bubuk 50g",
    price: 8500,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500",
    category: "Garam & Bumbu",
    unit: "Pack",
    description: "Merica bubuk halus dengan aroma kuat untuk bumbu masakan.",
  },
  // Ikan
  {
    id: "ikan-1",
    name: "Ikan Tongkol Segar 1kg",
    price: 35000,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=500",
    category: "Ikan",
    unit: "Kg",
    description: "Ikan tongkol segar tangkapan nelayan lokal, kaya omega-3.",
  },
  {
    id: "ikan-2",
    name: "Ikan Teri Medan Kering 250g",
    price: 45000,
    originalPrice: 50000,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=500",
    category: "Ikan",
    unit: "Pack",
    discount: "10%",
    description: "Ikan teri Medan kering berkualitas untuk sambal atau lauk.",
  },
  // Sayuran
  {
    id: "sayur-1",
    name: "Kangkung Segar 1 Ikat",
    price: 5000,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=500",
    category: "Sayuran",
    unit: "Ikat",
    description: "Kangkung segar pilihan, cocok untuk tumis atau plecing.",
  },
  {
    id: "sayur-2",
    name: "Wortel Segar 500g",
    price: 8000,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=500",
    category: "Sayuran",
    unit: "Pack",
    isNew: true,
    description: "Wortel segar berkualitas, kaya vitamin A untuk kesehatan mata.",
  },
];

// Group products by category
const productsByCategory = sembakoProducts.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {} as Record<string, ProductType[]>);

const categoryIds: Record<string, string> = {
  "Beras": "beras",
  "Gula": "gula",
  "Minyak Goreng": "minyak",
  "Daging": "daging",
  "Telur": "telur",
  "Susu": "susu",
  "Garam & Bumbu": "bumbu",
  "Ikan": "ikan",
  "Sayuran": "sayuran",
};

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="bg-white pt-6">
        <div className="max-w-7xl mx-auto px-4">
          <HeroSlider />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h2 className="text-xl font-black text-gray-900 italic tracking-tight">KATEGORI SEMBAKO</h2>
          </div>
          <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold">
            9 Bahan Pokok
          </span>
        </div>
        <CategoryGrid />
      </section>

      {/* Info Banner */}
      <section className="bg-gradient-to-r from-primary to-red-700 py-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter mb-2">KATALOG SEMBAKO GROSIR</h2>
              <p className="text-white/80 font-medium">
                Lihat produk, pilih yang Anda butuhkan, langsung hubungi kami via WhatsApp!
              </p>
            </div>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>0812-3456-7890</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Sections by Category */}
      {Object.entries(productsByCategory).map(([category, products]) => (
        <section 
          key={category} 
          id={categoryIds[category]} 
          className="max-w-7xl mx-auto px-4 w-full scroll-mt-32"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <h2 className="text-xl font-black text-gray-900 italic tracking-tight uppercase">{category}</h2>
            </div>
            <span className="text-xs text-gray-500 font-semibold">{products.length} Produk</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetail={handleViewDetail}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Why Us Section */}
      <section className="max-w-7xl mx-auto px-4 w-full pt-12 border-t border-gray-100">
        <h2 className="text-xl font-black text-gray-900 italic tracking-tight mb-8 text-center">KENAPA PILIH KLIPANG GROSIR?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-50 p-3 rounded-2xl text-primary">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Harga Grosir</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Harga kompetitif langsung dari distributor.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Kualitas Terjamin</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Semua produk fresh dan berkualitas.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Antar Sampai Rumah</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Layanan antar untuk area Semarang.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Order via WhatsApp</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Pesan mudah langsung via chat WA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        waNumber="6281234567890"
      />
    </div>
  );
}
