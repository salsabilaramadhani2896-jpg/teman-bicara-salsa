export type NavTab = 'beranda' | 'materi' | 'simulasi' | 'kuis' | 'refleksi' | 'bantuan';

export interface MateriItem {
  id: string;
  nomor: string;
  judul: string;
  ringkasan: string;
  ikon: string;
  waktuBaca: string;
  tujuan: string;
  poinKunci: string[];
  kontenUtama: {
    subjudul: string;
    deskripsi: string;
    tipsPraktis?: string[];
    contohKonkret?: {
      situasi: string;
      caraKeliru: string;
      caraBijak: string;
    };
  }[];
  kutipanEmas: string;
}

export interface ChoiceOption {
  id: 'A' | 'B' | 'C';
  tipe: 'agresif' | 'pasif' | 'asertif';
  teks: string;
  badge: string;
  umpanBalik: {
    judul: string;
    isKonstruktif: boolean;
    analisis: string;
    dampakHubungan: string;
    rekomendasiTindakan: string;
  };
}

export interface KasusSimulasi {
  id: string;
  judul: string;
  kategori: string;
  tingkat: string;
  tokoh: string;
  latarBelakang: string;
  skenarioCerita: string;
  pertanyaan: string;
  pilihan: ChoiceOption[];
}

export interface SoalKuis {
  id: number;
  pertanyaan: string;
  pilihan: {
    key: string;
    teks: string;
  }[];
  kunciJawaban: string;
  pembahasan: string;
  konsepKunci: string;
}

export interface RefleksiData {
  namaPanggilan?: string;
  tanggal: string;
  gayaMenyampaikanPendapat: string;
  kesabaranMendengarkan: string;
  menghadapiPerbedaan: string;
  pengalamanKonflik: string;
  komitmenSahabat: string;
  ratingKontrolEmosi: number;
  ratingMendengarkanAktif: number;
  ratingKomunikasiAsertif: number;
  ratingMenghargaiPerbedaan: number;
}

export interface ProgressState {
  materiSelesai: string[]; // array of materi ids
  simulasiSelesai: string[]; // array of kasus ids
  skorKuis: number | null; // null if not taken yet
  kuisSelesai: boolean;
  refleksiSelesai: boolean;
}
