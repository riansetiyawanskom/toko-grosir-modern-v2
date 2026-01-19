import { HeroSlider } from "@/components/HeroSlider";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Award, ShieldCheck, Truck } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Bimoli Minyak Goreng Spesial 2 Liter",
    price: 34500,
    originalPrice: 38900,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=500",
    category: "Sembako",
    unit: "PCH",
    discount: "11%",
  },
  {
    id: "2",
    name: "Indomie Goreng Spesial Pack 85g x 40 Pcs",
    price: 112000,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=500",
    category: "Minuman & Mie",
    unit: "KRT",
    isNew: true,
  },
  {
    id: "3",
    name: "Sedaap Mie Soto 75g x 40 Pcs",
    price: 108000,
    originalPrice: 115000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=500",
    category: "Minuman & Mie",
    unit: "KRT",
    discount: "6%",
  },
  {
    id: "4",
    name: "Gulaku Gula Pasir Kuning 1kg",
    price: 16000,
    image: "https://images.unsplash.com/photo-1581447100595-3a813597427a?auto=format&fit=crop&q=80&w=500",
    category: "Sembako",
    unit: "BKS",
  },
  {
    id: "5",
    name: "Frisian Flag SKM Putih 370g",
    price: 12500,
    image: "https://images.unsplash.com/photo-1550583724-12558142ab12?auto=format&fit=crop&q=80&w=500",
    category: "Susu & Olahan",
    unit: "KAL",
  },
];

export default function Home() {
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
          <h2 className="text-xl font-black text-gray-900 italic tracking-tight">KATEGORI PILIHAN</h2>
          <Button variant="ghost" className="text-primary font-bold gap-1 hover:bg-primary/5">
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <CategoryGrid />
      </section>

      {/* Flash Sale / Promo Section */}
      <section className="bg-primary py-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <Zap className="w-8 h-8 text-secondary fill-secondary" />
                <h2 className="text-3xl font-black italic tracking-tighter">KEBUTUHAN GROSIR MINGGU INI</h2>
              </div>
              <p className="text-white/80 font-medium text-lg max-w-md">
                Jangan lewatkan penawaran terbatas untuk stok toko Anda. Harga dijamin paling kompetitif!
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-24">
                <p className="text-3xl font-black text-secondary">02</p>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Hari</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-24">
                <p className="text-3xl font-black text-secondary">14</p>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Jam</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-24">
                <p className="text-3xl font-black text-secondary">45</p>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Menit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-black text-gray-900 italic tracking-tight uppercase">Produk Terpopuler</h2>
          </div>
          <Button variant="outline" className="border-2 border-gray-200 font-bold hover:border-primary hover:text-primary rounded-xl">
            Lihat Semua Produk
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Indogrosir Section */}
      <section className="max-w-7xl mx-auto px-4 w-full pt-12 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-50 p-3 rounded-2xl text-primary">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Harga Grosir</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Harga kompetitif langsung dari pusat distribusi utama.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Kualitas Terjamin</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Semua produk melalui kontrol kualitas yang ketat.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Pengiriman Cepat</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Layanan antar sampai ke toko atau rumah Anda.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-yellow-50 p-3 rounded-2xl text-yellow-600">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Promo Melimpah</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Berbagai penawaran menarik setiap minggunya.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
