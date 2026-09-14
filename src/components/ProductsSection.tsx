import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  MessageCircle, 
  Plus, 
  Check, 
  Tag, 
  Store, 
  Sparkles,
  Info
} from 'lucide-react';
import { ProductItem, ProductCategory, StoreSettings, InquiryCartItem } from '../types';
import { generateWaLink, getProductInquiryMsg, formatRupiah } from '../utils/whatsapp';

interface ProductsSectionProps {
  products: ProductItem[];
  settings: StoreSettings;
  inquiryCart: InquiryCartItem[];
  onToggleInquiryItem: (product: ProductItem) => void;
  onOpenInquiryCart: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  settings,
  inquiryCart,
  onToggleInquiryItem,
  onOpenInquiryCart,
}) => {
  const [selectedCat, setSelectedCat] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'benang', label: 'Benang Jahit' },
    { id: 'jarum', label: 'Jarum & Pentul' },
    { id: 'kain', label: 'Furing & Kain Keras' },
    { id: 'renda', label: 'Renda & Bordir' },
    { id: 'kancing', label: 'Kancing & Resleting' },
    { id: 'alat', label: 'Alat Potong & Ukur' },
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const isItemInCart = (prodId: string) => {
    return inquiryCart.some((item) => item.product.id === prodId);
  };

  return (
    <section id="produk" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />
            <span>Retail Perlengkapan Jahit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Alat & Bahan Jahit Terlengkap di Ulee Glee
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Menyediakan kebutuhan menjahit harian, furing, renda, resleting YKK, jarum, hingga gunting tailor. 
            Harga retail terjangkau <strong className="text-emerald-800 font-semibold">Rp2.000 – Rp25.000 / unit</strong>.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-200 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="product-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari benang, jarum, furing, resleting..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:border-emerald-600 focus:outline-none placeholder-stone-400"
              />
            </div>

            {/* Notice / Cart preview */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="text-xs text-stone-500 hidden sm:block">
                Menampilkan <strong className="text-stone-800">{filteredProducts.length}</strong> produk
              </div>

              {inquiryCart.length > 0 && (
                <button
                  id="products-open-cart-btn"
                  onClick={onOpenInquiryCart}
                  className="flex items-center gap-2 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-xs transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Lihat {inquiryCart.length} Barang Terpilih</span>
                </button>
              )}
            </div>
          </div>

          {/* Categories Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`prod-cat-tab-${cat.id}`}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
            <Info className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-stone-600 text-sm font-medium">Tidak ada produk yang cocok dengan pencarian Anda.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCat('all'); }}
              className="mt-3 text-xs text-emerald-700 font-semibold hover:underline"
            >
              Reset Filter & Tampilkan Semua
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inCart = isItemInCart(product.id);
              const waLink = generateWaLink(
                settings.whatsappNumber,
                getProductInquiryMsg(product.name, product.price, product.unit)
              );

              return (
                <div
                  key={product.id}
                  className="flex flex-col bg-stone-50/70 rounded-2xl border border-stone-200 overflow-hidden hover:border-emerald-300 hover:shadow-md transition-all duration-200 group"
                >
                  {/* Image container */}
                  <div className="relative h-44 bg-stone-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase">
                        Stok Ready
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                        {product.category}
                      </div>

                      <h3 className="font-semibold text-stone-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-emerald-800 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
                        {product.description}
                      </p>

                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-emerald-800 font-serif">
                          {formatRupiah(product.price)}
                        </span>
                        <span className="text-xs text-stone-500 font-normal">
                          / {product.unit}
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2 pt-1 border-t border-stone-200/80">
                      {/* Direct WhatsApp single item inquiry button */}
                      <a
                        id={`wa-inquire-product-${product.id}`}
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium transition shadow-2xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Tanya Stok via WA</span>
                      </a>

                      {/* Multi-item inquiry list toggle */}
                      <button
                        id={`toggle-cart-${product.id}`}
                        onClick={() => onToggleInquiryItem(product)}
                        className={`w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium transition border ${
                          inCart
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Tersimpan di Daftar Tanya</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-stone-500" />
                            <span>Tambah ke Daftar Tanya</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note banner: Direct offline shopping */}
        <div className="mt-14 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Bisa Beli Langsung di Toko Fisik Ulee Glee</h4>
              <p className="text-xs text-stone-600">
                Pilih langsung warna benang yang cocok dengan kain Anda dan cek kualitas renda di etalase kami.
              </p>
            </div>
          </div>
          <a
            id="product-to-location-wa"
            href={generateWaLink(settings.whatsappNumber, "Halo Maisarah Konveksi, saya ingin menanyakan apakah toko hari ini buka untuk beli alat jahit?")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition"
          >
            Tanya Jam Buka Hari Ini
          </a>
        </div>

      </div>
    </section>
  );
};
