export type ServiceCategory = 'all' | 'wanita' | 'pria' | 'seragam' | 'anak' | 'permak';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'wanita' | 'pria' | 'seragam' | 'anak' | 'permak';
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  turnaroundDays: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export type ProductCategory = 'all' | 'benang' | 'jarum' | 'kain' | 'renda' | 'kancing' | 'alat';

export interface ProductItem {
  id: string;
  name: string;
  category: 'benang' | 'jarum' | 'kain' | 'renda' | 'kancing' | 'alat';
  price: number;
  unit: string;
  inStock: boolean;
  image: string;
  description: string;
}

export interface InquiryCartItem {
  product: ProductItem;
  quantity: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wanita' | 'pria' | 'seragam' | 'anak';
  clientType: string;
  description: string;
  image: string;
  completionTime: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface StoreSettings {
  shopName: string;
  tagline: string;
  whatsappNumber: string;
  email: string;
  address: string;
  subdistrict: string;
  regency: string;
  province: string;
  openingHoursWeekday: string;
  openingHoursWeekend: string;
  googleMapsEmbedUrl: string;
  instagramHandle: string;
  tiktokHandle: string;
  facebookPage: string;
}
