import React, { useState } from 'react';
import { MessageCircle, X, Scissors, ShoppingBag, MapPin, Sparkles } from 'lucide-react';
import { StoreSettings } from '../types';
import { generateWaLink } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  settings: StoreSettings;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      title: 'Konsultasi Jahit Busana Baru',
      desc: 'Tanya model gamis, kebaya, kemeja, atau seragam',
      msg: `Halo ${settings.shopName}, saya ingin konsultasi pembuatan baju kustom baru. Mohon info cara pemesanan dan jadwal fittingnya.`,
      icon: Scissors,
    },
    {
      title: 'Tanya Permak & Rekondisi',
      desc: 'Potong panjang, kecilkan pinggang, ganti resleting',
      msg: `Halo ${settings.shopName}, apakah menerima permak pakaian (potong panjang / kecilkan baju / ganti resleting)? Berapa estimasi biayanya?`,
      icon: Sparkles,
    },
    {
      title: 'Tanya Stok Alat Jahit',
      desc: 'Cek stok benang, jarum, furing, renda, kancing',
      msg: `Halo ${settings.shopName}, saya ingin menanyakan ketersediaan stok perlengkapan jahit di toko Ulee Glee.`,
      icon: ShoppingBag,
    },
    {
      title: 'Tanya Jam Buka & Peta Toko',
      desc: 'Info alamat dan petunjuk jalan ke Ulee Glee',
      msg: `Halo ${settings.shopName}, boleh minta share location atau patokan lokasi toko di Ulee Glee? Hari ini buka sampai jam berapa?`,
      icon: MapPin,
    },
  ];

  const handleActionClick = (msg: string) => {
    const link = generateWaLink(settings.whatsappNumber, msg);
    window.open(link, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Quick Action Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold">
                <Scissors className="w-4 h-4 text-emerald-100" />
              </div>
              <div>
                <div className="font-serif font-bold text-sm leading-tight">
                  Chat Maisarah Konveksi
                </div>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online di Ulee Glee</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-700 transition"
              aria-label="Tutup menu chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Choice List */}
          <div className="p-3 space-y-1.5 max-h-72 overflow-y-auto">
            <div className="px-2 py-1 text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Pilih Topik Percakapan:
            </div>

            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleActionClick(action.msg)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/80 transition flex items-start gap-3 group border border-transparent hover:border-emerald-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-emerald-700 group-hover:text-white text-emerald-800 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                      {action.title}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-snug">
                      {action.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="p-3 bg-stone-50 border-t border-stone-100 text-center">
            <button
              onClick={() => handleActionClick(`Halo ${settings.shopName}, assalamu'alaikum. Saya ingin bertanya seputar layanan Maisarah Konveksi.`)}
              className="text-xs font-semibold text-emerald-800 hover:underline"
            >
              Atau mulai chat umum langsung →
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all duration-200 transform hover:scale-105 focus:outline-none ring-4 ring-emerald-600/20"
        aria-label="Buka WhatsApp Maisarah Konveksi"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white animate-pulse" />
        <span className="font-semibold text-xs sm:text-sm hidden sm:inline-block pr-1">
          Chat WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-stone-900 rounded-full" />
      </button>

    </div>
  );
};
