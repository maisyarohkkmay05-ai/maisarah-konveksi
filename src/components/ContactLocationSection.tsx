import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  MessageCircle, 
  Mail, 
  Phone, 
  Send, 
  Instagram, 
  Share2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { StoreSettings } from '../types';
import { generateWaLink } from '../utils/whatsapp';

interface ContactLocationSectionProps {
  settings: StoreSettings;
}

export const ContactLocationSection: React.FC<ContactLocationSectionProps> = ({ settings }) => {
  const [senderName, setSenderName] = useState('');
  const [serviceInterest, setServiceInterest] = useState('Jahit Busana Kustom Baru');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo ${settings.shopName}, assalamu'alaikum. 
Nama saya: *${senderName || 'Pelanggan'}*
Keperluan: *${serviceInterest}*
Pesan / Rincian: ${notes || 'Ingin konsultasi jadwal dan harga.'}

Mohon informasi selanjutnya. Terima kasih.`;

    const link = generateWaLink(settings.whatsappNumber, msg);
    window.open(link, '_blank');
  };

  const directWaHref = generateWaLink(
    settings.whatsappNumber,
    `Halo ${settings.shopName}, saya ingin menanyakan lokasi toko atau jadwal konsultasi jahit.`
  );

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kontak & Lokasi Toko</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3">
            Kunjungi Toko Kami di Ulee Glee
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Silakan datang langsung untuk pengukuran badan, memilih bahan furing/renda, 
            atau konsultasi via WhatsApp sebelum berkunjung.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Details & Fast WA Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address & Hours Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Address */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">Alamat Toko</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {settings.address}, {settings.subdistrict}, {settings.regency}, {settings.province}
                </p>
                <div className="pt-1">
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    Kawasan Pasar Ulee Glee (Mudah Ditemukan)
                  </span>
                </div>
              </div>

              {/* Card 2: Hours */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">Jam Operasional</h3>
                <div className="text-xs text-stone-600 space-y-1">
                  <p><strong className="text-stone-800">Senin – Sabtu:</strong> 08:30 – 18:00 WIB</p>
                  <p><strong className="text-stone-800">Minggu:</strong> Janji Temu / Chat WA</p>
                </div>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Kanal Komunikasi Langsung
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href={directWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-emerald-300 text-stone-800 hover:text-emerald-700 hover:border-emerald-500 transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold">WhatsApp Aktif</div>
                    <div className="text-[11px] text-stone-500">+{settings.whatsappNumber}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-emerald-300 text-stone-800 hover:text-emerald-700 hover:border-emerald-500 transition"
                >
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="font-bold">Email Resmi</div>
                    <div className="text-[11px] text-stone-500 truncate">{settings.email}</div>
                  </div>
                </a>
              </div>

              {/* Social Media Links (PRD 6.5) */}
              <div className="flex items-center justify-between pt-1 text-xs text-stone-600">
                <span className="font-medium text-stone-700">Media Sosial:</span>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-800 font-semibold">{settings.instagramHandle}</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-emerald-800 font-semibold">{settings.tiktokHandle}</span>
                </div>
              </div>
            </div>

            {/* Fast Form to WhatsApp */}
            <div className="p-6 rounded-2xl bg-stone-900 text-white border border-stone-800 shadow-sm">
              <h4 className="font-serif text-lg font-bold mb-1 text-white">
                Kirim Pesan Konsultasi Cepat
              </h4>
              <p className="text-xs text-stone-400 mb-4">
                Isi form berikut, pesan Anda akan otomatis disiapkan untuk dikirim langsung ke WhatsApp kami.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Misal: Kak Rina / Pak Teuku"
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Jenis Kebutuhan
                  </label>
                  <select
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Jahit Busana Wanita (Gamis/Kebaya)">Jahit Busana Wanita (Gamis / Kebaya)</option>
                    <option value="Jahit Kemeja Batik / Pria">Jahit Kemeja Batik / Pria</option>
                    <option value="Seragam Keluarga / Instansi">Seragam Keluarga / Instansi</option>
                    <option value="Permak Pakaian (Potong/Kecilkan/Resleting)">Permak Pakaian</option>
                    <option value="Tanya Ketersediaan Perlengkapan Jahit">Tanya Ketersediaan Alat Jahit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Pesan / Catatan Tambahan
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Jelaskan kebutuhan Anda, jadwal acara, atau model yang diinginkan..."
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim ke WhatsApp Maisarah Konveksi</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right: Embedded Google Maps & Location Directions */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100">
              <div className="p-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="font-semibold text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  Peta Lokasi Toko di Ulee Glee
                </span>
                <a
                  href="https://maps.google.com/?q=Ulee+Glee+Pidie+Jaya+Aceh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Google Maps iframe */}
              <div className="relative h-96 w-full">
                <iframe
                  title="Peta Lokasi Maisarah Konveksi Ulee Glee"
                  src={settings.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-105"
                />
              </div>

              <div className="p-4 bg-white text-xs text-stone-600 space-y-2">
                <div className="font-bold text-stone-800">Petunjuk Arah Singkat:</div>
                <p>
                  📍 Berada di lintasan Jl. Banda Aceh - Medan, area pusat Pasar Ulee Glee, Kecamatan Bandar Dua. 
                  Sangat mudah dijangkau dari Meureudu, Lueng Putu, maupun arah Bireuen.
                </p>
                <div className="flex items-center gap-2 text-emerald-800 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Area parkir motor & mobil tersedia di depan toko</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Notice */}
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-800 block mb-0.5">Mau fitting di rumah atau kantor?</strong>
                Untuk pemesanan seragam sekolah atau dinas kantor dengan jumlah di atas 10 stel, tim tailor kami dapat datang langsung ke kantor/sekolah Anda di Pidie Jaya untuk pengukuran kolektif.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
