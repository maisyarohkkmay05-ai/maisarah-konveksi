import React, { useState } from 'react';
import { Sparkles, MessageCircle, Clock, Tag, ExternalLink, X } from 'lucide-react';
import { PortfolioItem, StoreSettings } from '../types';
import { generateWaLink } from '../utils/whatsapp';

interface PortfolioSectionProps {
  portfolio: PortfolioItem[];
  settings: StoreSettings;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolio, settings }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Portofolio' },
    { id: 'wanita', label: 'Busana Muslimah & Kebaya' },
    { id: 'pria', label: 'Kemeja Batik & Pria' },
    { id: 'seragam', label: 'Seragam Instansi & Acara' },
    { id: 'anak', label: 'Busana Anak' },
  ];

  const filteredPortfolio = selectedCategory === 'all'
    ? portfolio
    : portfolio.filter((item) => item.category === selectedCategory);

  const getWaLinkForPortfolio = (item: PortfolioItem) => {
    const text = `Halo Maisarah Konveksi, saya melihat foto hasil jahitan: *${item.title}* (${item.tags.join(', ')}). Saya ingin konsultasi membuat baju dengan model atau konsep serupa. Apakah bisa dibantu?`;
    return generateWaLink(settings.whatsappNumber, text);
  };

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Galeri Karya & Hasil Jahitan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Portofolio Busana Pelanggan Kami
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Bukti nyata kerapian, presisi potongan, dan kepuasan pelanggan di Ulee Glee, Meureudu, 
            dan wilayah Pidie Jaya sekitarnya.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`portfolio-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image & Click trigger */}
              <div 
                className="relative h-64 overflow-hidden bg-stone-200 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors" />
                
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {item.clientType}
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-stone-900 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm opacity-90 group-hover:opacity-100">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{item.completionTime}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 
                    onClick={() => setSelectedItem(item)}
                    className="font-serif text-lg font-bold text-stone-900 hover:text-emerald-800 cursor-pointer transition-colors mb-2"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-700 border border-stone-200"
                      >
                        <Tag className="w-2.5 h-2.5 text-emerald-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs text-stone-600 hover:text-stone-900 font-medium"
                  >
                    Lihat Detail
                  </button>

                  <a
                    id={`portfolio-wa-btn-${item.id}`}
                    href={getWaLinkForPortfolio(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Mau Model Ini</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Preview Detail */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-300 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="pr-4">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  {selectedItem.clientType}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              <div className="rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 py-1 border-b border-stone-100">
                <span>Waktu Pengerjaan: <strong className="text-stone-800">{selectedItem.completionTime}</strong></span>
                <span>Garansi: <strong className="text-emerald-700">Fitting Ulang 100%</strong></span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 mb-1">Rincian Hasil Pengerjaan:</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedItem.tags.map((t, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-700 rounded-md">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-200"
              >
                Tutup
              </button>
              <a
                id="modal-wa-cta"
                href={getWaLinkForPortfolio(selectedItem)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Konsultasi Jahit Model Serupa</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
