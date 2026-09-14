import React, { useState } from 'react';
import { 
  Scissors, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calculator, 
  RotateCcw, 
  Send, 
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { ServiceItem, ServiceCategory, StoreSettings } from '../types';
import { generateWaLink, getServiceInquiryMsg, getCalculatorInquiryMsg, formatRupiah } from '../utils/whatsapp';

interface ServicesSectionProps {
  services: ServiceItem[];
  settings: StoreSettings;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, settings }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  
  // Interactive Sewing Cost Estimator state
  const [calcServiceType, setCalcServiceType] = useState('Gamis Muslimah Syar\'i');
  const [calcLining, setCalcLining] = useState('Tanpa Furing');
  const [calcAcc, setCalcAcc] = useState('Standar (Tanpa Payet/Aplikasi)');
  const [calcQuantity, setCalcQuantity] = useState(1);
  const [calcNotes, setCalcNotes] = useState('');

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'wanita', label: 'Busana Wanita' },
    { id: 'pria', label: 'Busana Pria' },
    { id: 'seragam', label: 'Seragam Acara / Instansi' },
    { id: 'anak', label: 'Busana Anak' },
    { id: 'permak', label: 'Permak & Rekondisi' },
  ];

  // Process steps defined in PRD 6.3
  const workflowSteps = [
    {
      step: '1',
      title: 'Konsultasi Desain Gratis',
      desc: 'Diskusikan model impian, bawa referensi gambar (Instagram/Pinterest) atau kain Anda. Kami beri saran potongan terbaik.',
      icon: Sparkles
    },
    {
      step: '2',
      title: 'Pengukuran Teliti & Pas',
      desc: 'Pengukuran langsung di toko Ulee Glee atau kirimkan contoh baju kesayangan yang ukurannya paling nyaman.',
      icon: Scissors
    },
    {
      step: '3',
      title: 'Pengerjaan Presisi',
      desc: 'Pemotongan pola simetris, pelapisan kain keras berkualitas, dan penjahitan stik balik yang kuat serta bersih.',
      icon: Clock
    },
    {
      step: '4',
      title: 'Fitting Busana',
      desc: 'Anda mencoba busana secara langsung saat hampir selesai untuk memastikan kenyamanan lingkar dada, bahu, dan panjang baju.',
      icon: CheckCircle2
    },
    {
      step: '5',
      title: 'Garansi Fitting Ulang',
      desc: 'Jika terasa ada bagian yang kurang leluasa atau perlu sedikit ubah panjang, kami permak gratis hingga pas sempurna.',
      icon: ShieldCheck
    },
  ];

  // Cost calculation logic based on choices
  const calculateEstimate = () => {
    let base = 90000;
    if (calcServiceType.includes('Gamis')) base = 105000;
    else if (calcServiceType.includes('Kebaya')) base = 125000;
    else if (calcServiceType.includes('Kemeja Batik')) base = 85000;
    else if (calcServiceType.includes('Koko')) base = 75000;
    else if (calcServiceType.includes('Seragam')) base = 95000;
    else if (calcServiceType.includes('Anak')) base = 65000;
    else if (calcServiceType.includes('Permak')) base = 25000;

    let liningCost = 0;
    if (calcLining.includes('Asahi')) liningCost = 25000;
    if (calcLining.includes('Trikot')) liningCost = 35000;

    let accCost = 0;
    if (calcAcc.includes('Bordir')) accCost = 30000;
    if (calcAcc.includes('Payet')) accCost = 50000;

    const unitPrice = base + liningCost + accCost;
    return unitPrice * calcQuantity;
  };

  const estimatedTotal = calculateEstimate();

  const handleSendCalculatorWa = () => {
    const msg = getCalculatorInquiryMsg({
      categoryName: 'Simulasi Hitung Jahit',
      itemType: calcServiceType,
      liningOption: calcLining,
      accOption: calcAcc,
      quantity: calcQuantity,
      notes: calcNotes,
      estimatedPrice: estimatedTotal,
    });
    const link = generateWaLink(settings.whatsappNumber, msg);
    window.open(link, '_blank');
  };

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-stone-100/70 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Scissors className="w-3.5 h-3.5 text-emerald-700" />
            <span>Layanan Jahit Kustom & Permak</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Jasa Jahit Berkualitas dengan Harga Transparan
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Kisaran ongkos jahit <strong className="text-emerald-800 font-semibold">Rp50.000 – Rp150.000 / potong</strong> (sesuai kerumitan model & furing). 
            Setiap busana dikerjakan dengan standar jahitan halus dan bergaransi fitting ulang 100%.
          </p>
        </div>

        {/* 5-Step Process Visual Guide (PRD 6.3) */}
        <div className="mb-16 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Alur 5 Langkah Transparan
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Bagaimana Proses Menjahit di Maisarah Konveksi?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {workflowSteps.map((ws, i) => {
              const Icon = ws.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:bg-emerald-50/40 hover:border-emerald-300 transition group">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-md mb-3 group-hover:scale-110 transition-transform">
                    {ws.step}
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1.5 line-clamp-2">
                    {ws.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Garansi fitting ulang berlaku gratis hingga 14 hari sejak baju selesai diserahkan.</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-service-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-sm shadow-emerald-900/20'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredServices.map((service) => {
            const waInquiryLink = generateWaLink(
              settings.whatsappNumber,
              getServiceInquiryMsg(service.title, service.priceRange)
            );

            return (
              <div
                key={service.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                {/* Image & Badges */}
                <div className="relative h-48 bg-stone-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {service.popular && (
                    <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      Favorit
                    </span>
                  )}
                  <div className="absolute bottom-2 right-2 bg-stone-900/80 backdrop-blur-xs text-stone-200 text-[11px] font-medium px-2 py-0.5 rounded">
                    {service.turnaroundDays}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                        {service.category === 'wanita' ? 'Busana Wanita' :
                         service.category === 'pria' ? 'Busana Pria' :
                         service.category === 'seragam' ? 'Seragam' :
                         service.category === 'anak' ? 'Anak' : 'Permak'}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-stone-900 mb-2 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>

                    <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60 mb-3">
                      <div className="text-[11px] text-stone-500">Estimasi Ongkos Jahit</div>
                      <div className="text-base font-bold text-emerald-800">
                        {service.priceRange}
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-3">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    id={`wa-service-btn-${service.id}`}
                    href={waInquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-xs group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-white transition" />
                    <span>Konsultasi Jahit Model Ini</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Estimator / Calculator for Sewing Orders */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 text-xs font-semibold border border-emerald-700/50">
                <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kalkulator & Estimasi Biaya Jahit</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Hitung Simulasi Ongkos Jahit Anda Sendiri
              </h3>
              
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Ingin tahu perkiraan biaya sebelum berkunjung ke toko? Sesuaikan jenis pakaian, 
                pilihan furing, dan aksesoris tambahan di samping. Hasil simulasi bisa langsung 
                dikirim ke WhatsApp kami untuk konsultasi detail dan jadwal pengukuran.
              </p>

              <div className="space-y-2 pt-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Estimasi transparan tanpa biaya tersembunyi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sudah termasuk konsultasi pola & fitting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Potongan khusus untuk seragam partai / keluarga</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700 space-y-4 text-stone-100">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Jenis Busana */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Jenis Busana
                  </label>
                  <select
                    id="calc-service-type"
                    value={calcServiceType}
                    onChange={(e) => setCalcServiceType(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Gamis Muslimah Syar'i">Gamis Muslimah Syar'i (Mulai Rp85k)</option>
                    <option value="Kebaya Modern & Pesta">Kebaya Modern & Pesta (Mulai Rp95k)</option>
                    <option value="Kemeja Batik Pria">Kemeja Batik Pria (Mulai Rp70k)</option>
                    <option value="Baju Koko / Kurta Pria">Baju Koko / Kurta Pria (Mulai Rp65k)</option>
                    <option value="Seragam Kantor / Guru / Keluarga">Seragam Kantor / Guru / Keluarga (Mulai Rp75k)</option>
                    <option value="Busana Anak Kustom">Busana Anak Kustom (Mulai Rp50k)</option>
                    <option value="Permak / Ganti Resleting / Potong">Permak / Kecilkan / Potong (Mulai Rp25k)</option>
                  </select>
                </div>

                {/* Lapisan Furing */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Lapisan Furing / Keras
                  </label>
                  <select
                    id="calc-lining-type"
                    value={calcLining}
                    onChange={(e) => setCalcLining(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Tanpa Furing">Tanpa Furing (Standar)</option>
                    <option value="Furing Asahi / Hero Lembut (+Rp25.000)">Furing Asahi / Hero Lembut (+Rp25.000)</option>
                    <option value="Furing Trikot Perekat Kemeja (+Rp35.000)">Furing Trikot Perekat Batik (+Rp35.000)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Detail Tambahan / Aksesoris */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Detail / Aksesoris Tambahan
                  </label>
                  <select
                    id="calc-acc-type"
                    value={calcAcc}
                    onChange={(e) => setCalcAcc(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Standar (Tanpa Payet/Aplikasi)">Standar Polos (Tanpa Payet)</option>
                    <option value="Aplikasi Renda / Bordir Cantik (+Rp30.000)">Aplikasi Renda / Bordir (+Rp30.000)</option>
                    <option value="Aplikasi Payet Mutiara Mewah (+Rp50.000)">Aplikasi Payet Mutiara Mewah (+Rp50.000)</option>
                  </select>
                </div>

                {/* Jumlah Baju */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Jumlah Pesanan (Potong/Stel)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcQuantity(Math.max(1, calcQuantity - 1))}
                      className="w-9 h-9 rounded-lg bg-stone-700 hover:bg-stone-600 text-white font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-bold text-base px-2 text-emerald-400">
                      {calcQuantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCalcQuantity(calcQuantity + 1)}
                      className="w-9 h-9 rounded-lg bg-stone-700 hover:bg-stone-600 text-white font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                    <span className="text-xs text-stone-400">
                      {calcQuantity >= 5 ? '(Diskon Seragam)' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Catatan Tambahan (Opsional)
                </label>
                <input
                  type="text"
                  id="calc-notes"
                  value={calcNotes}
                  onChange={(e) => setCalcNotes(e.target.value)}
                  placeholder="Misal: Sudah ada kain batik sendiri, perlu selesai sebelum tgl 20..."
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Total & Action Bar */}
              <div className="pt-3 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-400">Simulasi Perkiraan Biaya:</span>
                  <div className="text-2xl font-bold text-emerald-400 font-serif">
                    ~{formatRupiah(estimatedTotal)}
                  </div>
                  <span className="text-[10px] text-stone-400">
                    *Harga final disepakati setelah melihat detail kain & pola
                  </span>
                </div>

                <button
                  id="send-calculator-wa-btn"
                  onClick={handleSendCalculatorWa}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md transition transform hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Rincian ke WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
