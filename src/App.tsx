/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  StoreSettings, 
  ServiceItem, 
  ProductItem, 
  PortfolioItem, 
  TestimonialItem, 
  InquiryCartItem 
} from './types';
import { 
  initialStoreSettings, 
  initialServices, 
  initialProducts, 
  initialPortfolio, 
  initialTestimonials 
} from './data/initialData';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InquiryCartDrawer } from './components/InquiryCartDrawer';
import { AdminSettingsModal } from './components/AdminSettingsModal';
import { Footer } from './components/Footer';

const STORAGE_KEYS = {
  SETTINGS: 'maisarah_konveksi_settings_v1',
  PRODUCTS: 'maisarah_konveksi_products_v1',
  CART: 'maisarah_konveksi_inquiry_cart_v1',
};

export default function App() {
  // Store Settings state with persistence
  const [settings, setSettings] = useState<StoreSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return initialStoreSettings;
  });

  // Services list
  const [services] = useState<ServiceItem[]>(initialServices);

  // Products catalog with persistence
  const [products, setProducts] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return initialProducts;
  });

  // Portfolio & Testimonials
  const [portfolio] = useState<PortfolioItem[]>(initialPortfolio);
  const [testimonials] = useState<TestimonialItem[]>(initialTestimonials);

  // Multi-item inquiry cart state
  const [inquiryCart, setInquiryCart] = useState<InquiryCartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  // Navigation & Modal UI states
  const [activeSection, setActiveSection] = useState('beranda');
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Persist settings
  const handleSaveSettings = (newSettings: StoreSettings) => {
    setSettings(newSettings);
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(newSettings));
  };

  // Persist products
  const handleAddProduct = (newProduct: ProductItem) => {
    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(updated));
  };

  const handleDeleteProduct = (productId: string) => {
    const updated = products.filter((p) => p.id !== productId);
    setProducts(updated);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(updated));
    // also remove from cart if present
    setInquiryCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleResetToDefault = () => {
    setSettings(initialStoreSettings);
    setProducts(initialProducts);
    setInquiryCart([]);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.CART);
  };

  // Cart operations
  const handleToggleInquiryItem = (product: ProductItem) => {
    setInquiryCart((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      let updated: InquiryCartItem[];
      if (exists) {
        updated = prev.filter((item) => item.product.id !== product.id);
      } else {
        updated = [...prev, { product, quantity: 1 }];
      }
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setInquiryCart((prev) => {
      const updated = prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as InquiryCartItem[];
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setInquiryCart((prev) => {
      const updated = prev.filter((item) => item.product.id !== productId);
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearCart = () => {
    setInquiryCart([]);
    localStorage.removeItem(STORAGE_KEYS.CART);
  };

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'layanan', 'produk', 'portofolio', 'tentang', 'kontak'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-700 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        settings={settings}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        inquiryCount={inquiryCart.length}
        onOpenInquiryCart={() => setIsCartDrawerOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Beranda / Hero */}
        <HeroSection
          settings={settings}
          onNavigate={handleNavigate}
        />

        {/* 2. Tentang Kami & 4 Pilar Keunggulan */}
        <AboutSection
          settings={settings}
          onNavigate={handleNavigate}
        />

        {/* 3. Layanan Jahit Kustom, Alur 5 Langkah & Kalkulator Estimasi Biaya */}
        <ServicesSection
          services={services}
          settings={settings}
        />

        {/* 4. Katalog Retail Perlengkapan Jahit */}
        <ProductsSection
          products={products}
          settings={settings}
          inquiryCart={inquiryCart}
          onToggleInquiryItem={handleToggleInquiryItem}
          onOpenInquiryCart={() => setIsCartDrawerOpen(true)}
        />

        {/* 5. Galeri Portofolio Hasil Jahitan */}
        <PortfolioSection
          portfolio={portfolio}
          settings={settings}
        />

        {/* 6. Testimoni Pelanggan Lokal */}
        <TestimonialsSection
          testimonials={testimonials}
        />

        {/* 7. Kontak, Lokasi Toko Ulee Glee & Peta Google Maps */}
        <ContactLocationSection
          settings={settings}
        />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp
        settings={settings}
      />

      {/* Multi-Item Inquiry Cart Drawer */}
      <InquiryCartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        cart={inquiryCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        settings={settings}
      />

      {/* Admin Settings Modal (Local CMS for Owner) */}
      <AdminSettingsModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        settings={settings}
        onSaveSettings={handleSaveSettings}
        products={products}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
        onResetToDefault={handleResetToDefault}
      />

      {/* Footer */}
      <Footer
        settings={settings}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

    </div>
  );
}
