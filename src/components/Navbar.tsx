import React, { useState } from 'react';
import { Scissors, ShoppingBag, MessageCircle, Menu, X, Settings, MapPin, Sparkles } from 'lucide-react';
import { StoreSettings } from '../types';
import { generateWaLink, getGeneralConsultationMsg } from '../utils/whatsapp';

interface NavbarProps {
  settings: StoreSettings;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  inquiryCount: number;
  onOpenInquiryCart: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  activeSection,
  onNavigate,
  inquiryCount,
  onOpenInquiryCart,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'layanan', label: 'Layanan Jahit' },
    { id: 'produk', label: 'Alat Jahit' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'kontak', label: 'Kontak & Lokasi' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const waLink = generateWaLink(settings.whatsappNumber, getGeneralConsultationMsg(settings.shopName));

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800">
      {/* Top Banner Notice: One Stop Tailor & Retail in Ulee Glee */}
      <div className="bg-emerald-800/90 text-emerald-100 text-xs px-4 py-1.5 flex items-center justify-between border-b border-emerald-700/50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-[11px] sm:text-xs">
              Menerima Jahit Busana Kustom & Retail Perlengkapan Jahit — Ulee Glee, Pidie Jaya
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-emerald-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" /> Ulee Glee, Aceh
            </span>
            <span className="text-emerald-300 font-medium">Buka 08:30 - 18:00 WIB</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-950/40 border border-emerald-500/30 group-hover:scale-105 transition-transform">
              <Scissors className="w-6 h-6 text-emerald-200 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {settings.shopName}
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Tailor
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block line-clamp-1">
                {settings.tagline}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-stone-800 border border-emerald-600/30'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Inquiry List + WA CTA + Admin settings */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Multi-item inquiry cart button */}
            <button
              id="nav-inquiry-cart-btn"
              onClick={onOpenInquiryCart}
              title="Daftar tanya alat jahit"
              className="relative p-2.5 rounded-lg bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700 transition border border-stone-700"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              {inquiryCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 text-stone-900 text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-stone-900 animate-bounce">
                  {inquiryCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Call to Action */}
            <a
              id="nav-wa-cta-btn"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-200 shadow-sm shadow-emerald-950/40 hover:shadow-emerald-600/30 focus:outline-none"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-200" />
              <span>Pesan via WA</span>
            </a>

            {/* Quick Admin/CMS button for shop owner */}
            <button
              id="nav-admin-settings-btn"
              onClick={onOpenAdmin}
              title="Pengaturan Toko (CMS Sederhana Pemilik)"
              className="p-2.5 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition border border-transparent hover:border-stone-700"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-inquiry-cart-btn"
              onClick={onOpenInquiryCart}
              className="relative p-2 rounded-lg bg-stone-800 text-stone-200"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              {inquiryCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-stone-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {inquiryCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  isActive
                    ? 'text-emerald-300 bg-stone-800 border-l-4 border-emerald-500'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'layanan' && (
                  <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">
                    Garansi Fitting
                  </span>
                )}
                {item.id === 'produk' && (
                  <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                    Mulai 2rb
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              id="mobile-wa-cta-btn"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Pesan via WhatsApp
            </a>

            <button
              id="mobile-admin-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-sm border border-stone-700"
            >
              <Settings className="w-4 h-4" />
              Mode Kelola Toko (Admin Sederhana)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
