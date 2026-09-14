import React from 'react';
import { MessageCircle, ShoppingBag, ShieldCheck, Sparkles, Ruler, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { StoreSettings } from '../types';
import { generateWaLink, getGeneralConsultationMsg } from '../utils/whatsapp';

interface HeroSectionProps {
  settings: StoreSettings;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ settings, onNavigate }) => {
  const waGeneralLink = generateWaLink(settings.whatsappNumber, getGeneralConsultationMsg(settings.shopName));

  return (
    <section id="beranda" className="relative overflow-hidden bg-stone-900 text-stone-100 pt-10 pb-16 lg:py-20">
      {/* Subtle decorative background pattern inspired by sewing stitching */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Soft warm gradient highlights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Authenticity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tailor Lokal Ulee Glee, Aceh Pidie Jaya</span>
              <span className="hidden sm:inline-block text-emerald-500">•</span>
              <span className="hidden sm:inline-block text-stone-300">Jasa Jahit & Retail Alat Jahit</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {settings.tagline.split('untuk')[0]}
              <span className="block text-emerald-400 font-serif italic">
                untuk Busana Impian Anda
              </span>
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Selamat datang di <strong className="text-white font-semibold">{settings.shopName}</strong>. 
              Solusi busana <em className="italic">tailor-made</em> berpresisi tinggi untuk gamis syar'i, kebaya modern, 
              seragam instansi, hingga kemeja batik pria di Ulee Glee. Dilengkapi toko perlengkapan jahit terlengkap harga bersahabat.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-wa-cta"
                href={waGeneralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current text-emerald-200" />
                <span>Konsultasi Desain Gratis</span>
              </a>

              <button
                id="hero-catalog-btn"
                onClick={() => onNavigate('produk')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-medium text-base border border-stone-700 hover:border-stone-600 transition duration-200"
              >
                <ShoppingBag className="w-5 h-5 text-emerald-400" />
                <span>Katalog Alat Jahit (Mulai Rp2.000)</span>
              </button>
            </div>

            {/* Value Guarantees / Diferensiasi */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-stone-800 text-left">
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-800/40 border border-stone-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Garansi Fitting Ulang</h4>
                  <p className="text-[11px] text-stone-400">Penyesuaian gratis sampai pas di badan</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-800/40 border border-stone-800">
                <Ruler className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Presisi & Rapi</h4>
                  <p className="text-[11px] text-stone-400">Pola jahitan proporsional & nyaman</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-800/40 border border-stone-800">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Tepat Waktu</h4>
                  <p className="text-[11px] text-stone-400">Komitmen selesai sebelum hari H acara</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image with refined frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700/60 shadow-2xl shadow-emerald-950/40 bg-stone-800">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                  alt="Penjahit Busana Wanita Maisarah Konveksi Ulee Glee"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                
                {/* Overlay details */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-emerald-600/90 text-white text-xs font-semibold uppercase tracking-wider">
                      One-Stop Tailor
                    </span>
                    <span className="text-xs text-stone-300 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Pasar Ulee Glee
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Pengerjaan Jahit Satuan & Seragam Instansi
                  </h3>
                  <p className="text-xs text-stone-300">
                    Bawa bahan Anda sendiri atau konsultasikan model impian. Kisaran jahit Rp50.000 – Rp150.000.
                  </p>
                </div>
              </div>

              {/* Floating Mini Badge 1: Customer Satisfaction */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-stone-900 border border-emerald-500/40 rounded-xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Garansi Fitting</div>
                  <div className="text-[10px] text-stone-400">Gratis revisi sampai cocok</div>
                </div>
              </div>

              {/* Floating Mini Badge 2: Retail Supplies */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-stone-900/95 border border-stone-700 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Retail Alat Jahit Lengkap</div>
                  <div className="text-[10px] text-emerald-400">Benang, Jarum, Renda, Furing</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
