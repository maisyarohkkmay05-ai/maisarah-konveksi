import React from 'react';
import { X, Trash2, ShoppingBag, Send, AlertCircle, Plus, Minus } from 'lucide-react';
import { InquiryCartItem, StoreSettings } from '../types';
import { generateWaLink, getMultiProductInquiryMsg, formatRupiah } from '../utils/whatsapp';

interface InquiryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: InquiryCartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  settings: StoreSettings;
}

export const InquiryCartDrawer: React.FC<InquiryCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  settings,
}) => {
  if (!isOpen) return null;

  const totalEstimate = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSendWa = () => {
    if (cart.length === 0) return;
    const itemsFormatted = cart.map((i) => ({
      name: i.product.name,
      quantity: i.quantity,
      unit: i.product.unit,
      price: i.product.price,
    }));
    const msg = getMultiProductInquiryMsg(itemsFormatted);
    const link = generateWaLink(settings.whatsappNumber, msg);
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Daftar Tanya Alat Jahit
              </h3>
              <p className="text-xs text-stone-500">
                {cart.length} macam barang dipilih
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3">
          {cart.length === 0 ? (
            <div className="py-16 text-center text-stone-400 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-stone-300 stroke-1" />
              <div className="text-stone-700 text-sm font-semibold">
                Daftar tanya masih kosong
              </div>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Pilih benang, jarum, furing, renda, atau kancing di halaman produk untuk menanyakan ketersediaannya sekaligus via WhatsApp.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="p-3 rounded-xl border border-stone-200 bg-stone-50 flex items-center gap-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-14 h-14 rounded-lg object-cover bg-stone-200 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-stone-900 truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-[11px] text-emerald-800 font-semibold font-serif">
                    {formatRupiah(item.product.price)} <span className="text-stone-500 font-normal">/ {item.product.unit}</span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="w-6 h-6 rounded bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="w-6 h-6 rounded bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Subtotal & delete */}
                <div className="text-right flex flex-col justify-between h-14">
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-stone-400 hover:text-red-600 transition self-end"
                    title="Hapus barang"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="text-xs font-bold text-stone-800">
                    {formatRupiah(item.product.price * item.quantity)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info & WhatsApp Action */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span>Estimasi Subtotal:</span>
              <span className="text-base font-bold text-stone-900 font-serif">
                {formatRupiah(totalEstimate)}
              </span>
            </div>

            <div className="flex items-start gap-2 text-[11px] text-stone-500">
              <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Ini adalah daftar tanya ketersediaan stok, bukan pembayaran online. Transaksi dibayar tunai atau transfer setelah konfirmasi di toko.
              </span>
            </div>

            <button
              id="send-cart-to-wa-btn"
              onClick={handleSendWa}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Daftar Barang ke WhatsApp</span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-xs text-stone-400 hover:text-stone-600 transition"
            >
              Kosongkan Semua Pilihan
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
