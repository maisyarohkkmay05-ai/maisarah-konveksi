import { ProductItem, ServiceItem, PortfolioItem, TestimonialItem, StoreSettings } from '../types';

export const initialStoreSettings: StoreSettings = {
  shopName: 'Maisarah Konveksi',
  tagline: 'Tailor Terpercaya untuk Busana Impian Anda',
  whatsappNumber: '6282366557653', // Format tanpa simbol untuk direct wa.me URL
  email: 'maisyarohkkmay05@gmail.com',
  address: 'Jl. Banda Aceh - Medan Km. 165, Pasar Ulee Glee',
  subdistrict: 'Kec. Bandar Dua',
  regency: 'Kabupaten Pidie Jaya',
  province: 'Aceh 24184',
  openingHoursWeekday: 'Senin – Sabtu: 08:30 – 18:00 WIB',
  openingHoursWeekend: 'Minggu: Janji Temu / Konsultasi WhatsApp',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.723145415758!2d96.2890532!3d5.2286756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3047a06c57fba3bd%3A0x6b8761fa08a49c6!2sUlee%20Glee%2C%20Bandar%20Dua%2C%20Kabupaten%20Pidie%20Jaya%2C%20Aceh!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  instagramHandle: '@maisarah_konveksi',
  tiktokHandle: '@maisarahkonveksi',
  facebookPage: 'Maisarah Konveksi Ulee Glee'
};

export const initialServices: ServiceItem[] = [
  {
    id: 'gamis-syari',
    title: 'Gamis & Busana Muslimah Syar\'i',
    category: 'wanita',
    priceRange: 'Rp85.000 – Rp145.000',
    minPrice: 85000,
    maxPrice: 145000,
    turnaroundDays: '4–7 hari kerja',
    description: 'Jahitan baju kurung, abaya, dan gamis modern dengan siluet anggun, jahitan dalam bersih, dan kenyamanan saat dikenakan beraktivitas.',
    features: ['Potongan pas tubuh & tidak ketat', 'Jahitan stik balik rapi', 'Pilihan furing adem', 'Bisa request wudhu friendly (resleting/kancing manset)'],
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'kebaya-pesta',
    title: 'Kebaya Modern & Busana Pesta',
    category: 'wanita',
    priceRange: 'Rp95.000 – Rp150.000',
    minPrice: 95000,
    maxPrice: 150000,
    turnaroundDays: '5–10 hari kerja',
    description: 'Kreasi kebaya kutubaru, kebaya kartini, encim, hingga gaun pesta elegan dengan furing premium dan pemasangan payet yang teliti.',
    features: ['Pola kupnat presisi membingkai lekuk tubuh', 'Aplikasi renda & brokat simetris', 'Furing lembut anti gatal', 'Garansi fitting ulang 100%'],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'kemeja-batik',
    title: 'Kemeja Batik & Formal Pria',
    category: 'pria',
    priceRange: 'Rp70.000 – Rp120.000',
    minPrice: 70000,
    maxPrice: 120000,
    turnaroundDays: '3–6 hari kerja',
    description: 'Kemeja lengan panjang maupun pendek dengan sambungan motif batik presisi di bagian saku dan plaket kancing depan.',
    features: ['Kerah tegak kokoh berkain keras', 'Saku depan tembus motif rapi', 'Lapisan furing trikot/hero opsional', 'Manset pergelangan rapi'],
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'koko-kurta',
    title: 'Baju Koko & Kurta Pria Kustom',
    category: 'pria',
    priceRange: 'Rp65.000 – Rp110.000',
    minPrice: 65000,
    maxPrice: 110000,
    turnaroundDays: '3–5 hari kerja',
    description: 'Baju koko harian, sholat Jumat, hari raya, dan kurta modern dengan bordir dada halus dan pilihan bahan katun madinah/toyobo.',
    features: ['Kerah shanghai tegak nyaman di leher', 'Saku samping dalam dan fungsional', 'Jahitan double tindas awet', 'Bisa request ukuran jumbo'],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'seragam-instansi',
    title: 'Seragam Guru, Dinas & Instansi',
    category: 'seragam',
    priceRange: 'Rp75.000 – Rp135.000',
    minPrice: 75000,
    maxPrice: 135000,
    turnaroundDays: '7–14 hari (tergantung kuota)',
    description: 'Pengerjaan seragam dinas harian (PDH), seragam guru PGRI/Kemenag, dan seragam instansi pemerintahan di Pidie Jaya.',
    features: ['Standar pola dinas resmi', 'Kerapian seragam skala instansi', 'Potongan harga khusus pemesanan kolektif', 'Layanan fitting di tempat untuk partai besar'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'seragam-keluarga',
    title: 'Seragam Acara Keluarga & Resepsi',
    category: 'seragam',
    priceRange: 'Rp80.000 – Rp140.000',
    minPrice: 80000,
    maxPrice: 140000,
    turnaroundDays: '7–14 hari kerja',
    description: 'Paket busana serasi untuk pernikahan, khitanan, dan kenduri keluarga besar dengan keserasian motif & warna pada setiap anggota.',
    features: ['Ukuran disesuaikan tiap individu', 'Desain serasi ayah, ibu, dan anak', 'Penjadwalan tepat waktu sebelum hari H', 'Konsultasi konsep warna gratis'],
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'busana-anak',
    title: 'Busana Kustom Anak Laki & Perempuan',
    category: 'anak',
    priceRange: 'Rp50.000 – Rp85.000',
    minPrice: 50000,
    maxPrice: 85000,
    turnaroundDays: '3–5 hari kerja',
    description: 'Gaun pesta anak, setelan koko cilik, dan seragam sekolah dengan bahan lembut yang ramah kulit anak tanpa bagian menusuk.',
    features: ['Karet elastis lembut tidak membekas', 'Bahan adem dan leluasa bergerak', 'Jahitan tepi halus tidak gatal', 'Toleransi ukuran tumbuh kembang'],
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'permak-pakaian',
    title: 'Permak & Rekondisi Busana',
    category: 'permak',
    priceRange: 'Rp15.000 – Rp50.000',
    minPrice: 15000,
    maxPrice: 50000,
    turnaroundDays: '1–2 hari kerja (Bisa Express)',
    description: 'Layanan potong panjang celana/rok, kecilkan pinggang, besarkan lingkar dada, ganti resleting celana/jaket, hingga ganti kancing.',
    features: ['Kelim obras orisinil dipertahankan', 'Ganti resleting YKK berkualitas', 'Kecilkan pinggang presisi bentuk tubuh', 'Proses cepat bisa ditunggu untuk perbaikan ringan'],
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
  }
];

export const initialProducts: ProductItem[] = [
  {
    id: 'prod-benang-astra',
    name: 'Benang Jahit Astra Extra Aneka Warna (500m)',
    category: 'benang',
    price: 3500,
    unit: 'gulung',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=600&q=80',
    description: 'Benang jahit serbaguna berkualitas tinggi, kuat dan tidak mudah putus saat menjahit di mesin jahit biasa maupun high speed.'
  },
  {
    id: 'prod-benang-obras',
    name: 'Benang Obras Polyester 150D (Besar)',
    category: 'benang',
    price: 9000,
    unit: 'cones',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80',
    description: 'Benang obras lentur untuk pinggiran kain pakaian, lembut dan menghasilkan anyaman tepian yang rapi.'
  },
  {
    id: 'prod-jarum-organ',
    name: 'Jarum Mesin Jahit Organ Original (No. 11, 13, 14, 16)',
    category: 'jarum',
    price: 15000,
    unit: 'bungkus (isi 5 pcs)',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=600&q=80',
    description: 'Jarum mesin jahit baja presisi dari pabrikan terpercaya, ujung tajam tidak merusak serat kain katun, sifon, maupun denim.'
  },
  {
    id: 'prod-jarum-pentul',
    name: 'Jarum Pentul Hijab & Fitting Baja Anti Karat',
    category: 'jarum',
    price: 8000,
    unit: 'kotak (isi 80 pcs)',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    description: 'Jarum pentul kepala mutiara bulat, tajam dan tidak meninggalkan lubang kasar pada kain hijab atau furing halus.'
  },
  {
    id: 'prod-furing-asahi',
    name: 'Kain Furing Asahi / Hero Lembut & Adem',
    category: 'kain',
    price: 16000,
    unit: 'meter',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    description: 'Kain pelapis dalam pakaian (furing) yang sejuk, menyerap keringat, dan membuat busana terasa lebih tegap dan nyaman.'
  },
  {
    id: 'prod-furing-trikot',
    name: 'Kain Keras Perekat Trikot Tipis Lembut',
    category: 'kain',
    price: 18000,
    unit: 'meter',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
    description: 'Trikot berperekat setrika untuk pelapis kemeja batik pria, gamis pesta, dan kerah agar struktur pakaian terlihat berkelas.'
  },
  {
    id: 'prod-renda-bordir',
    name: 'Renda Bordir Kerancang Bunga Cantik (Lebar 5cm)',
    category: 'renda',
    price: 12000,
    unit: 'meter',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    description: 'Renda hiasan untuk tepian gamis, ujung lengan, mukena, dan kerudung pesta. Warna awet dan bordir tebal rapat.'
  },
  {
    id: 'prod-renda-katun',
    name: 'Renda Katun Vintage Halus (Lebar 2.5cm)',
    category: 'renda',
    price: 7500,
    unit: 'meter',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    description: 'Aksen renda manis bergaya klasik untuk baju anak, blouse santai, dan taplak atau kerajinan tangan rumah.'
  },
  {
    id: 'prod-kancing-kemeja',
    name: 'Kancing Kemeja & Jas Aneka Warna & Ukuran',
    category: 'kancing',
    price: 3000,
    unit: 'bungkus (isi 12 pcs)',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80',
    description: 'Kancing lubang 4 dan lubang 2 dengan finishing mengkilap tahan cuci dan tidak mudah pecah saat disetrika.'
  },
  {
    id: 'prod-resleting-ykk',
    name: 'Resleting YKK Original Celana / Rok (7 inch)',
    category: 'kancing',
    price: 5000,
    unit: 'pcs',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: 'Resleting logam / coil YKK asli, tarikan sangat lancar dan gigi retsleting tidak gampang selip atau rusak.'
  },
  {
    id: 'prod-resleting-jepang',
    name: 'Resleting Jepang Tak Terlihat (Invisible Zipper 50cm)',
    category: 'kancing',
    price: 7000,
    unit: 'pcs',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    description: 'Resleting tersembunyi untuk bagian belakang gamis, gaun pesta wanita, dan rok span agar terlihat menyatu rapi tanpa sambungan.'
  },
  {
    id: 'prod-gunting-kain',
    name: 'Gunting Kain Tailor Baja Hitam Tajam 9 Inch',
    category: 'alat',
    price: 25000,
    unit: 'pcs',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    description: 'Gunting potong kain profesional berbahan baja kuat, nyaman digenggam dan memotong lapisan kain dengan presisi tanpa serat tertarik.'
  },
  {
    id: 'prod-meteran-jahit',
    name: 'Meteran Jahit Pita Fleksibel Dua Sisi (150cm / 60inch)',
    category: 'alat',
    price: 4000,
    unit: 'pcs',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    description: 'Pita meteran elastis tidak gampang melar, angka cetak jelas dalam centimeter dan inch untuk pengukuran badan yang akurat.'
  },
  {
    id: 'prod-kapur-jahit',
    name: 'Kapur Jahit Segitiga Aneka Warna (Isi 4)',
    category: 'alat',
    price: 5000,
    unit: 'set',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    description: 'Kapur penanda pola kain mudah digoreskan dan mudah hilang saat dicuci atau disikat tanpa meninggalkan noda membandel.'
  },
  {
    id: 'prod-pendedel-benang',
    name: 'Pendedel Jahitan / Seam Ripper Tajam',
    category: 'alat',
    price: 3500,
    unit: 'pcs',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=600&q=80',
    description: 'Alat bantu pembongkar jahitan dan pemotong lubang kancing dengan bola pengaman pelindung serat kain.'
  }
];

export const initialPortfolio: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Gamis Syar\'i Brokat Resepsi Pernikahan',
    category: 'wanita',
    clientType: 'Ibu Pengajian & Acara Adat Ulee Glee',
    description: 'Jahitan gamis model A-line dengan kombinasi brokat lace premium warna sage green dan furing sutra adem. Dilengkapi lengan lonceng wudhu-friendly.',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80',
    completionTime: '5 Hari Kerja',
    tags: ['Gamis Modern', 'Furing Sutra', 'Wudhu Friendly']
  },
  {
    id: 'port-2',
    title: 'Kemeja Batik Tulis Pria Lengan Panjang',
    category: 'pria',
    clientType: 'Pegawai Instansi Bandar Dua',
    description: 'Kemeja pria batik Aceh motif Pinto Aceh dengan pertemuan pola simetris di saku depan dan kerah tegak dilapisi kain keras berkualitas.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    completionTime: '4 Hari Kerja',
    tags: ['Batik Pria', 'Motif Presisi', 'Kerah Kaku']
  },
  {
    id: 'port-3',
    title: 'Seragam Guru Pengajar PGRI & Kemenag',
    category: 'seragam',
    clientType: 'Komunitas Guru Pidie Jaya (18 Stel)',
    description: 'Pesanan partai seragam batik dinas dengan ukuran kustom untuk masing-masing guru. Hasil potongan pas dan diselesaikan tepat sebelum upacara.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    completionTime: '10 Hari Kerja',
    tags: ['Seragam Dinas', 'Ukuran Kustom', 'Partai Besar']
  },
  {
    id: 'port-4',
    title: 'Kebaya Modern Payet Mutiara Wisuda & Tunangan',
    category: 'wanita',
    clientType: 'Mahasiswi Asal Meureudu',
    description: 'Kebaya peplum dengan aplikasi renda bunga mutiara di bagian dada dan pinggang. Dilengkapi rok batik lilit songket.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    completionTime: '6 Hari Kerja',
    tags: ['Kebaya Wisuda', 'Aplikasi Payet', 'Fitting Pas']
  },
  {
    id: 'port-5',
    title: 'Setelan Baju Koko & Gamis Anak Kembar',
    category: 'anak',
    clientType: 'Keluarga Bpk. Herman - Ulee Glee',
    description: 'Setelan busana hari raya Idul Fitri untuk anak umur 5 dan 7 tahun dengan bahan katun toyobo jepang yang lembut dan anti gerah.',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
    completionTime: '4 Hari Kerja',
    tags: ['Busana Anak', 'Katun Toyobo', 'Nyaman Bergerak']
  },
  {
    id: 'port-6',
    title: 'Seragam Busana Resepsi Keluarga Besar (24 Orang)',
    category: 'seragam',
    clientType: 'Keluarga Besar Pengantin Pidie Jaya',
    description: 'Pengerjaan seragam resepsi pernikahan untuk keluarga inti (ayah, ibu, anak muda hingga lansia) dengan warna terakota senada.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    completionTime: '12 Hari Kerja',
    tags: ['Seragam Keluarga', 'Resepsi Nikah', 'Garansi Fitting']
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Ibu Cut Marlina, S.Pd.',
    role: 'Guru SMP Negeri di Ulee Glee',
    location: 'Bandar Dua, Pidie Jaya',
    quote: 'Sudah tiga kali bikin seragam dinas dan kebaya di Maisarah Konveksi. Jahitannya sangat rapi, kerahnya tegak dan yang paling saya suka ada garansi fitting ulang jika terasa kurang pas. Pelayanan ramah sekali!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'testi-2',
    name: 'Teuku Firdaus',
    role: 'Pegawai Kantor Kecamatan',
    location: 'Ulee Glee',
    quote: 'Potongan kemeja batiknya luar biasa presisi, motif depan dan kantongnya benar-benar menyatu tanpa putus. Harganya sangat bersahabat dibanding tailor kota besar tapi mutunya nomor satu.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'testi-3',
    name: 'Rahmi Ananda',
    role: 'Ibu Rumah Tangga & Pengrajin Jahit',
    location: 'Meureudu, Pidie Jaya',
    quote: 'Sangat terbantu karena tokonya one-stop! Selain bisa jahit baju gamis idaman, kalau butuh benang, jarum, furing, dan renda tinggal beli di sini. Harganya murah mulai 2 ribuan dan barangnya lengkap.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'testi-4',
    name: 'Nurlaila Zulkifli',
    role: 'Penyelenggara Acara & Pengantin',
    location: 'Ulee Glee, Aceh',
    quote: 'Pesan seragam bridesmaid 8 orang semuanya pas tanpa perlu banyak permak. Pengerjaannya tepat waktu sesuai tanggal yang dijanjikan, bahkan selesai 2 hari lebih cepat. Terima kasih Kak Maisarah!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];
