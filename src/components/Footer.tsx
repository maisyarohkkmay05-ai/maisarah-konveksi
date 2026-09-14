import React from 'react';
import { Scissors, MapPin, Phone, Mail, Clock, MessageCircle, Heart } from 'lucide-react';
import { StoreSettings } from '../types';
import { generateWaLink, getGeneralConsultationMsg } from '../utils/whatsapp';

interface FooterProps {
  settings: StoreSettings;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onNavigate, onOpenAdmin }) => {
  const waLink = generateWaLink(settings.whatsappNumber, getGeneralConsultationMsg(settings.shopName));

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white border border-emerald-500/30">
                <Scissors className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">
                  {settings.shopName}
                </span>
                <p className="text-xs text-stone-400">
                  {settings.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pr-4">
              Jasa jahit pakaian kustom terpercaya untuk busana muslimah, kebaya pesta, kemeja batik pria, 
              serta seragam instansi di Ulee Glee, Aceh Pidie Jaya. Dilengkapi etalase retail perlengkapan jahit terlengkap.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-stone-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-emerald-400">
                Garansi Fitting Ulang 100%
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-emerald-400">
                Konsultasi Desain Gratis
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-emerald-400 transition"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="hover:text-emerald-400 transition"
                >
                  Layanan Jahit Kustom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('produk')}
                  className="hover:text-emerald-400 transition"
                >
                  Retail Perlengkapan Jahit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portofolio')}
                  className="hover:text-emerald-400 transition"
                >
                  Galeri Portofolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tentang')}
                  className="hover:text-emerald-400 transition"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kontak')}
                  className="hover:text-emerald-400 transition"
                >
                  Kontak & Peta Lokasi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services Overview */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Kategori Busana
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Gamis & Busana Syar'i</li>
              <li>Kebaya Modern & Resepsi</li>
              <li>Kemeja Batik Pria Presisi</li>
              <li>Baju Koko & Kurta</li>
              <li>Seragam Dinas & Guru PGRI</li>
              <li>Permak Potong & Ganti Resleting</li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Toko Ulee Glee
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{settings.address}, {settings.subdistrict}, {settings.regency}, Aceh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{settings.openingHoursWeekday}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+{settings.whatsappNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{settings.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Chat Langsung ke WA</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {settings.shopName}. Hak Cipta Dilindungi.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="text-stone-400 hover:text-emerald-400 transition underline underline-offset-4"
            >
              Mode Kelola Toko (Admin)
            </button>
            <span className="text-stone-700">•</span>
            <span>Ulee Glee, Aceh Pidie Jaya</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
