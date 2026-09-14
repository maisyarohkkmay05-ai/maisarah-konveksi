import React from 'react';
import { Scissors, CheckCircle, Clock, HeartHandshake, Sparkles, MapPin, Store } from 'lucide-react';
import { StoreSettings } from '../types';

interface AboutSectionProps {
  settings: StoreSettings;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ settings, onNavigate }) => {
  const pillars = [
    {
      title: 'Jahitan Rapi & Presisi',
      desc: 'Setiap potongan pola diperhitungkan cermat sesuai lekuk tubuh agar tidak sempit saat duduk dan tidak kedodoran saat berdiri.',
      icon: Scissors,
    },
    {
      title: 'Tepat Waktu Sesuai Jadwal',
      desc: 'Kami sangat menghormati tenggat waktu acara Anda (resepsi, dinas, wisuda, atau lebaran). Jadwal pengerjaan kami sepakati di awal.',
      icon: Clock,
    },
    {
      title: 'One-Stop Service Jahit & Bahan',
      desc: 'Tidak perlu repot mencari benang, furing, renda, resleting, dan kancing di tempat lain. Toko kami menyediakan perlengkapan jahit lengkap.',
      icon: Store,
    },
    {
      title: 'Garansi Fitting Ulang 100%',
      desc: 'Bila baju yang selesai dicoba masih terasa kurang nyaman atau perlu sedikit penyesuaian, kami berikan permak gratis tanpa biaya ekstra.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="tentang" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tentang Maisarah Konveksi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Dedikasi Menghadirkan Busana Pas & Nyaman untuk Anda
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Berawal dari kecintaan pada seni jahit menjahit dan keinginan memberikan pilihan busana kustom yang berkualitas 
            bagi masyarakat Ulee Glee dan Kabupaten Pidie Jaya, <strong>Maisarah Konveksi</strong> hadir sebagai mitra berbusana 
            terpercaya untuk setiap momen istimewa Anda.
          </p>
        </div>

        {/* Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Atmospheric Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                alt="Proses Jahit Busana Maisarah Konveksi"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-1">
                  <MapPin className="w-4 h-4" /> Ulee Glee, Aceh Pidie Jaya
                </div>
                <p className="text-sm font-medium text-stone-200">
                  Melayani pesanan perseorangan, keluarga, sekolah, dinas instansi, hingga komunitas pengajian.
                </p>
              </div>
            </div>

            {/* Quote badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-stone-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-stone-800">
              <p className="font-serif italic text-xs text-stone-300 mb-2">
                "Pakaian yang bagus bukan hanya tentang model yang indah, tetapi bagaimana pakaian itu pas dan membuat Anda percaya diri saat memakainya."
              </p>
              <div className="text-xs font-bold text-emerald-400">
                — Maisarah, Pendiri & Head Tailor
              </div>
            </div>
          </div>

          {/* Right: Narrative Story & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose text-stone-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Di tengah maraknya pakaian jadi pabrikan yang seringkali ukurannya serba tanggung—panjang baju tidak sesuai, 
                lingkar dada kekecilan, atau bahan furing yang panas—kami meyakini bahwa setiap orang berhak memiliki pakaian 
                yang <strong>benar-benar pas di badan</strong>.
              </p>
              <p>
                Di <strong>Maisarah Konveksi</strong>, Anda dapat membawa kain sendiri ataupun meminta saran padu-padan bahan. 
                Kami mengawal setiap tahap: mulai dari konsultasi model gratis, pengukuran badan secara teliti, proses jahit 
                stik balik yang rapi, fitting busana, hingga garansi fitting ulang jika masih ada yang perlu disempurnakan.
              </p>
              <p className="font-medium text-stone-800">
                Kini Anda juga bisa berbelanja aneka kebutuhan perlengkapan jahit (benang, jarum, furing, renda, kancing) 
                dengan harga retail terjangkau langsung di toko kami di Pasar Ulee Glee.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                id="about-to-services-btn"
                onClick={() => onNavigate('layanan')}
                className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition shadow-sm"
              >
                Lihat Layanan Jahit
              </button>
              <button
                id="about-to-location-btn"
                onClick={() => onNavigate('kontak')}
                className="px-5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-semibold transition border border-stone-300"
              >
                Petunjuk Arah ke Toko
              </button>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
