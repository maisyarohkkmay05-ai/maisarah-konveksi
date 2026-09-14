import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800 mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kepuasan Pelanggan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Apa Kata Mereka Tentang Maisarah Konveksi?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Ulasan jujur dari masyarakat Ulee Glee dan Pidie Jaya yang mempercayakan busana harian, dinas, dan hajatan kepada kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/70 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-200"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-700/60">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{testi.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-[11px] text-stone-400">{testi.role}</div>
                  <div className="text-[10px] text-emerald-400">{testi.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini highlight footer */}
        <div className="mt-12 text-center text-xs text-stone-400">
          ⭐ Nilai rata-rata kepuasan <strong className="text-white">4.9 / 5.0</strong> berdasarkan survei kepuasan pelanggan jahit & retail.
        </div>

      </div>
    </section>
  );
};
