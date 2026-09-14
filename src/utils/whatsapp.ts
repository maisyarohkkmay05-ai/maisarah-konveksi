/**
 * Utility functions for creating direct WhatsApp chat links with tailored Indonesian messages.
 */

export function cleanPhoneForWa(phone: string): string {
  // Remove non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.startsWith('0')) {
    return '62' + digitsOnly.slice(1);
  }
  if (digitsOnly.startsWith('8')) {
    return '62' + digitsOnly;
  }
  return digitsOnly;
}

export function formatPhoneNumberDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  // normalize to 08...
  let local = digits;
  if (local.startsWith('62')) {
    local = '0' + local.slice(2);
  }
  if (local.length === 12) {
    return `${local.slice(0, 4)}-${local.slice(4, 8)}-${local.slice(8)}`;
  }
  if (local.length === 11) {
    return `${local.slice(0, 4)}-${local.slice(4, 7)}-${local.slice(7)}`;
  }
  if (local.length === 13) {
    return `${local.slice(0, 4)}-${local.slice(4, 8)}-${local.slice(8)}`;
  }
  return local || phone;
}

export function generateWaLink(phone: string, text: string): string {
  const cleanPhone = cleanPhoneForWa(phone);
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function getGeneralConsultationMsg(shopName: string = 'Maisarah Konveksi'): string {
  return `Halo ${shopName}, assalamu'alaikum. Saya melihat website Anda dan ingin konsultasi mengenai pembuatan busana / jahit pakaian kustom. Mohon info jadwal dan panduan pengukurannya. Terima kasih.`;
}

export function getServiceInquiryMsg(serviceTitle: string, priceRange: string): string {
  return `Halo Maisarah Konveksi, assalamu'alaikum. Saya tertarik dengan layanan jahit: *${serviceTitle}* (${priceRange}).

Boleh saya kirimkan foto referensi model yang saya inginkan untuk konsultasi desain dan estimasi biayanya? Terima kasih.`;
}

export function getProductInquiryMsg(productName: string, price: number, unit: string): string {
  const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  return `Halo Maisarah Konveksi, assalamu'alaikum. Saya ingin menanyakan ketersediaan stok perlengkapan jahit berikut:

📦 *Produk:* ${productName}
💰 *Harga di Katalog:* ${formattedPrice} / ${unit}

Apakah stok barang ini sedang tersedia di toko Ulee Glee? Terima kasih.`;
}

export function getMultiProductInquiryMsg(items: { name: string; quantity: number; unit: string; price: number }[]): string {
  let msg = `Halo Maisarah Konveksi, assalamu'alaikum. Saya ingin menanyakan ketersediaan stok beberapa perlengkapan jahit berikut:\n\n`;
  let totalEstimated = 0;

  items.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    totalEstimated += subtotal;
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(subtotal);
    msg += `${index + 1}. *${item.name}* x ${item.quantity} ${item.unit} (${formattedPrice})\n`;
  });

  const formattedTotal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(totalEstimated);
  msg += `\n*Estimasi Total:* ${formattedTotal}\n\nApakah barang-barang tersebut ready di toko? Terima kasih.`;

  return msg;
}

export function getCalculatorInquiryMsg(data: {
  categoryName: string;
  itemType: string;
  liningOption: string;
  accOption: string;
  quantity: number;
  notes: string;
  estimatedPrice: number;
}): string {
  const formattedEstimate = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(data.estimatedPrice);
  return `Halo Maisarah Konveksi, assalamu'alaikum. Saya telah mencoba simulasi estimasi jahit di website:

✂️ *Jenis Busana:* ${data.itemType} (${data.categoryName})
🧵 *Lapisan Furing:* ${data.liningOption}
✨ *Aksesoris / Detail:* ${data.accOption}
🔢 *Jumlah:* ${data.quantity} potong/stel
📊 *Simulasi Estimasi Biaya Jahit:* ~${formattedEstimate}
${data.notes ? `📝 *Catatan Khusus:* ${data.notes}\n` : ''}
Kapan waktu yang tepat bagi saya untuk datang pengukuran / konsultasi model lebih lanjut? Terima kasih.`;
}

export function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(num);
}
