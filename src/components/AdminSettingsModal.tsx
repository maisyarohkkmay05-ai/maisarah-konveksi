import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, CheckCircle2, Shield, Store, ShoppingBag, Sparkles } from 'lucide-react';
import { StoreSettings, ProductItem, PortfolioItem, ProductCategory } from '../types';

interface AdminSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: StoreSettings;
  onSaveSettings: (newSettings: StoreSettings) => void;
  products: ProductItem[];
  onAddProduct: (prod: ProductItem) => void;
  onDeleteProduct: (prodId: string) => void;
  onResetToDefault: () => void;
}

export const AdminSettingsModal: React.FC<AdminSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  products,
  onAddProduct,
  onDeleteProduct,
  onResetToDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'produk'>('info');

  // Form states for settings
  const [shopName, setShopName] = useState(settings.shopName);
  const [tagline, setTagline] = useState(settings.tagline);
  const [waNumber, setWaNumber] = useState(settings.whatsappNumber);
  const [email, setEmail] = useState(settings.email);
  const [address, setAddress] = useState(settings.address);
  const [openingHoursWeekday, setOpeningHoursWeekday] = useState(settings.openingHoursWeekday);
  const [openingHoursWeekend, setOpeningHoursWeekend] = useState(settings.openingHoursWeekend);
  const [instagram, setInstagram] = useState(settings.instagramHandle);
  const [tiktok, setTiktok] = useState(settings.tiktokHandle);

  // New product form states
  const [newProdName, setNewProdName] = useState('');
  const [newProdCat, setNewProdCat] = useState<ProductCategory>('benang');
  const [newProdPrice, setNewProdPrice] = useState('5000');
  const [newProdUnit, setNewProdUnit] = useState('pcs');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImg, setNewProdImg] = useState('');

  const [savedAlert, setSavedAlert] = useState(false);

  if (!isOpen) return null;

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings({
      ...settings,
      shopName,
      tagline,
      whatsappNumber: waNumber,
      email,
      address,
      openingHoursWeekday,
      openingHoursWeekend,
      instagramHandle: instagram,
      tiktokHandle: tiktok,
    });
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    const newProd: ProductItem = {
      id: `prod-custom-${Date.now()}`,
      name: newProdName,
      category: newProdCat,
      price: parseInt(newProdPrice) || 5000,
      unit: newProdUnit,
      inStock: true,
      image: newProdImg.trim() || 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=600&q=80',
      description: newProdDesc || 'Perlengkapan jahit pilihan berkualitas di toko Ulee Glee.',
    };

    onAddProduct(newProd);
    setNewProdName('');
    setNewProdDesc('');
    setNewProdImg('');
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-300 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-base sm:text-lg">
                  Panel Kelola Toko (CMS Pemilik)
                </h3>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  Tanpa Koding
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Sesuai PRD: Pemilik usaha dapat memperbarui nomor WhatsApp, alamat, & harga produk kapan saja.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-6 pt-2 gap-4">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-2.5 text-xs sm:text-sm font-semibold border-b-2 transition ${
              activeTab === 'info'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Info Toko & Kontak WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('produk')}
            className={`pb-2.5 text-xs sm:text-sm font-semibold border-b-2 transition ${
              activeTab === 'produk'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Kelola Produk Alat Jahit ({products.length})
          </button>
        </div>

        {/* Feedback Alert */}
        {savedAlert && (
          <div className="mx-6 mt-4 p-3 bg-emerald-100 text-emerald-900 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Perubahan berhasil disimpan dan langsung aktif di website!</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-stone-800 space-y-6">
          
          {activeTab === 'info' && (
            <form onSubmit={handleSaveInfo} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nama Usaha
                  </label>
                  <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nomor WhatsApp (Aktif Terima Chat)
                  </label>
                  <input
                    type="text"
                    value={waNumber}
                    onChange={(e) => setWaNumber(e.target.value)}
                    placeholder="Contoh: 6282277889900"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                  <span className="text-[10px] text-stone-500">
                    Gunakan awalan 62 atau 08 (otomatis diarahkan ke WA)
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tagline Usaha
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Resmi
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Alamat Lengkap di Ulee Glee
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Jam Buka (Senin - Sabtu)
                  </label>
                  <input
                    type="text"
                    value={openingHoursWeekday}
                    onChange={(e) => setOpeningHoursWeekday(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Jam Buka (Minggu)
                  </label>
                  <input
                    type="text"
                    value={openingHoursWeekend}
                    onChange={(e) => setOpeningHoursWeekend(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Username Instagram
                  </label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Username TikTok
                  </label>
                  <input
                    type="text"
                    value={tiktok}
                    onChange={(e) => setTiktok(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Pengaturan Toko</span>
                </button>

                <button
                  type="button"
                  onClick={onResetToDefault}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-red-700 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Kembalikan ke Data Awal PRD</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'produk' && (
            <div className="space-y-6">
              
              {/* Form Add New Product */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-emerald-700" />
                  Tambah Produk Alat Jahit Baru
                </h4>

                <form onSubmit={handleCreateProduct} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">
                        Nama Barang
                      </label>
                      <input
                        type="text"
                        required
                        value={newProdName}
                        onChange={(e) => setNewProdName(e.target.value)}
                        placeholder="Misal: Jarum Rajut / Pita Satin"
                        className="w-full bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">
                        Kategori
                      </label>
                      <select
                        value={newProdCat}
                        onChange={(e) => setNewProdCat(e.target.value as ProductCategory)}
                        className="w-full bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-emerald-600"
                      >
                        <option value="benang">Benang Jahit</option>
                        <option value="jarum">Jarum & Pentul</option>
                        <option value="kain">Furing & Kain Keras</option>
                        <option value="renda">Renda & Bordir</option>
                        <option value="kancing">Kancing & Resleting</option>
                        <option value="alat">Alat Potong & Ukur</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">
                        Harga (Rp)
                      </label>
                      <input
                        type="number"
                        min="500"
                        step="500"
                        value={newProdPrice}
                        onChange={(e) => setNewProdPrice(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">
                        Satuan Jual
                      </label>
                      <input
                        type="text"
                        value={newProdUnit}
                        onChange={(e) => setNewProdUnit(e.target.value)}
                        placeholder="gulung / meter / pcs"
                        className="w-full bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">
                        URL Foto (Opsional)
                      </label>
                      <input
                        type="url"
                        value={newProdImg}
                        onChange={(e) => setNewProdImg(e.target.value)}
                        placeholder="https://..."
                        className="w-full bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambahkan ke Katalog Toko</span>
                  </button>
                </form>
              </div>

              {/* Current product list & delete */}
              <div>
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Daftar Barang yang Sedang Tampil ({products.length}):
                </h4>
                <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden max-h-60 overflow-y-auto">
                  {products.map((p) => (
                    <div key={p.id} className="p-3 bg-white flex items-center justify-between gap-3 text-xs">
                      <div className="truncate">
                        <div className="font-semibold text-stone-900 truncate">{p.name}</div>
                        <div className="text-[11px] text-stone-500">
                          Rp{p.price.toLocaleString('id-ID')} / {p.unit} ({p.category})
                        </div>
                      </div>
                      <button
                        onClick={() => onDeleteProduct(p.id)}
                        className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded transition"
                        title="Hapus produk"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Data tersimpan aman di browser Anda</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 text-white font-medium hover:bg-stone-700 transition"
          >
            Selesai
          </button>
        </div>

      </div>
    </div>
  );
};
