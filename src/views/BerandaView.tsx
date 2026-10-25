import React, { useState } from 'react';
import { 
  HeartHandshake, 
  BookOpen, 
  Sparkles, 
  Award, 
  PenTool, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  Smile, 
  Users, 
  ChevronRight,
  Flame,
  Check
} from 'lucide-react';
import { NavTab, ProgressState } from '../types';
import { KAMUS_EMOSI_STARTER } from '../data/materiData';

interface BerandaViewProps {
  onNavigate: (tab: NavTab) => void;
  progress: ProgressState;
}

export const BerandaView: React.FC<BerandaViewProps> = ({ onNavigate, progress }) => {
  const [activeEmosiIdx, setActiveEmosiIdx] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const featureCards = [
    {
      tab: 'materi' as NavTab,
      nomor: '01',
      title: 'Modul Materi Edukatif',
      desc: 'Pelajari komunikasi interpersonal, empati, mendengarkan aktif, dan cara menyampaikan batasan diri.',
      icon: <BookOpen className="w-6 h-6 text-purple-700" />,
      bgIcon: 'bg-purple-100',
      actionText: 'Baca Materi',
      badge: `${progress.materiSelesai.length}/6 Selesai`
    },
    {
      tab: 'simulasi' as NavTab,
      nomor: '02',
      title: 'Simulasi Kasus Konflik',
      desc: 'Hadapi 5 skenario nyata pertikaian di sekolah dan dapatkan umpan balik psikologis dari setiap pilihan tindakanmu.',
      icon: <Sparkles className="w-6 h-6 text-purple-700" />,
      bgIcon: 'bg-purple-100',
      actionText: 'Mulai Simulasi',
      badge: `${progress.simulasiSelesai.length}/5 Selesai`
    },
    {
      tab: 'kuis' as NavTab,
      nomor: '03',
      title: 'Asesmen & Kuis Pemahaman',
      desc: 'Uji wawasan dan kepekaan komunikasimu dengan soal interaktif berbobot plus pembahasan lengkap.',
      icon: <Award className="w-6 h-6 text-purple-700" />,
      bgIcon: 'bg-purple-100',
      actionText: 'Ikuti Kuis',
      badge: progress.skorKuis !== null ? `Skor: ${progress.skorKuis}%` : '7 Soal Tersedia'
    },
    {
      tab: 'refleksi' as NavTab,
      nomor: '04',
      title: 'Jurnal Refleksi Diri',
      desc: 'Tuliskan pengalaman pribadimu, evaluasi kesabaranmu, dan simpan komitmen pertemanan langsung di browsermu.',
      icon: <PenTool className="w-6 h-6 text-purple-700" />,
      bgIcon: 'bg-purple-100',
      actionText: 'Tulis Refleksi',
      badge: progress.refleksiSelesai ? 'Tersimpan ✓' : 'Siap Diisi'
    },
    {
      tab: 'materi' as NavTab,
      nomor: '05',
      title: 'Generator Pesan-Saya (I-Message)',
      desc: 'Latih kemampuan mengubah kalimat menuduh ("Kamu...") menjadi pesan asertif yang menyejukkan hati kawan.',
      icon: <MessageSquare className="w-6 h-6 text-purple-700" />,
      bgIcon: 'bg-purple-100',
      actionText: 'Coba Latihan',
      badge: 'Alat Interaktif'
    },
    {
      tab: 'bantuan' as NavTab,
      nomor: '06',
      title: 'Pusat Bantuan Guru BK',
      desc: 'Ketahui kapan waktu tepat meminta bantuan orang dewasa dan pelajari etika kerahasiaan ruang bimbingan konseling.',
      icon: <HelpCircle className="w-6 h-6 text-purple-700" />,
      bgIcon: 'bg-purple-100',
      actionText: 'Pelajari Bantuan',
      badge: 'Ruang Aman Siswa'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100/90 via-[#F5EDFF] to-white border border-purple-200/80 p-8 sm:p-12 lg:p-16 shadow-lg shadow-purple-100/50">
        
        {/* Soft Lavender Background Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-200/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200 text-purple-800 text-xs sm:text-sm font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Media Layanan Bimbingan & Konseling Interaktif</span>
          </div>

          {/* Big Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-950 tracking-tight leading-tight">
              TEMAN BICARA
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-purple-800 max-w-3xl mx-auto leading-relaxed">
              “Media Digital Interaktif untuk Melatih Komunikasi Interpersonal dan Penyelesaian Konflik Pertemanan Peserta Didik”
            </p>
          </div>

          {/* Slogan Banner */}
          <div className="inline-block py-2.5 px-6 rounded-2xl bg-purple-600 text-white font-bold text-sm sm:text-base shadow-md shadow-purple-300">
            Berani Bicara, Saling Memahami, Bersama Menyelesaikan Konflik
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Selamat datang di ruang belajar mandiri yang aman dan ramah. Di sini kamu dapat melatih cara berbicara yang baik, memahami perasaan kawan sekelas, serta mencoba berbagai simulasi penyelesaian masalah pertemanan tanpa pertengkaran.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('materi')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm sm:text-base shadow-md shadow-purple-300 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Mulai Belajar Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('simulasi')}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-purple-50 text-purple-900 font-bold text-sm sm:text-base border border-purple-200 shadow-xs hover:border-purple-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span>Coba Simulasi Konflik</span>
            </button>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-white/80 border border-purple-100 shadow-2xs">
              <span className="block text-xl font-black text-purple-900">6 Modul</span>
              <span className="text-xs text-slate-500 font-medium">Kecakapan Komunikasi</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/80 border border-purple-100 shadow-2xs">
              <span className="block text-xl font-black text-purple-900">5 Kasus</span>
              <span className="text-xs text-slate-500 font-medium">Simulasi Nyata Sekolah</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/80 border border-purple-100 shadow-2xs">
              <span className="block text-xl font-black text-purple-900">Interaktif</span>
              <span className="text-xs text-slate-500 font-medium">Umpan Balik Psikologis</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/80 border border-purple-100 shadow-2xs">
              <span className="block text-xl font-black text-purple-900">Privat</span>
              <span className="text-xs text-slate-500 font-medium">Tanpa Rekam Data Sensitif</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6 MAIN FEATURE CARDS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Jelajahi Fasilitas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-950">
              Enam Menu Belajar Interaktif
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Pilihlah salah satu menu di bawah ini untuk memulai perjalanan mengasah kedewasaan pertemananmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(card.tab)}
              className="group p-6 rounded-3xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/70 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${card.bgIcon} group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-100">
                    {card.badge}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-black text-purple-400 tracking-wider">
                    MENU {card.nomor}
                  </span>
                  <h3 className="text-lg font-bold text-purple-950 group-hover:text-purple-700 transition-colors mt-0.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700 group-hover:text-purple-900">
                <span>{card.actionText}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE FEATURE: KAMUS RASA & KALIMAT ASERTIF */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white border border-purple-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              <Smile className="w-3.5 h-3.5" />
              <span>Alat Praktis Siswa</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-purple-950">
              Kamus Rasa: Latihan Memulai Bicara
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Bingung bagaimana mengungkapkan unek-unek kepada sahabat tanpa memicu pertengkaran? Klik salah satu emosi di bawah ini:
            </p>
          </div>
          <button
            onClick={() => onNavigate('materi')}
            className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 shrink-0"
          >
            <span>Pelajari Rumus I-Message Lengkap</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Emotion Pills */}
        <div className="flex flex-wrap gap-2.5">
          {KAMUS_EMOSI_STARTER.map((item, idx) => {
            const isSelected = activeEmosiIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveEmosiIdx(idx)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                    : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200/70'
                }`}
              >
                {item.perasaan}
              </button>
            );
          })}
        </div>

        {/* Active Phrase Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">
              Situasi: {KAMUS_EMOSI_STARTER[activeEmosiIdx].kapan}
            </span>
            <span className="text-[11px] font-semibold text-purple-600 bg-white px-2.5 py-0.5 rounded-full border border-purple-200 inline-block self-start sm:self-auto">
              Contoh Kalimat Asertif
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-purple-100 text-purple-950 font-medium text-sm sm:text-base leading-relaxed italic">
            {KAMUS_EMOSI_STARTER[activeEmosiIdx].contoh}
          </div>

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-slate-500">
              💡 <em>Tips BK: Katakan dengan nada santai, kontak mata hangat, dan hindari sindiran.</em>
            </p>
            <button
              onClick={() => handleCopyText(KAMUS_EMOSI_STARTER[activeEmosiIdx].contoh, activeEmosiIdx)}
              className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              {copiedIndex === activeEmosiIdx ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Salin Kalimat</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3 CORE PILLARS OF RESOLUTION */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
            Fondasi Karakter
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-950">
            Tiga Kunci Menyelesaikan Perselisihan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Saat terjadi beda pendapat, ingat selalu tiga prinsip bimbingan konseling ini agar pertemananmu tetap erat dan sehat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-lg">
              1
            </div>
            <h4 className="font-extrabold text-lg text-purple-950">Metode STOP</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Stop</strong> bicara saat amarah memuncak, <strong>Take a breath</strong> (tarik napas menenangkan saraf), <strong>Observe</strong> perasaanmu, lalu <strong>Proceed</strong> dengan kepala dingin.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-lg">
              2
            </div>
            <h4 className="font-extrabold text-lg text-purple-950">Validasi Perasaan</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Akui perasaan kawanmu sebelum berdebat: "Aku mengerti kamu kecewa...". Ketika seseorang merasa didengarkan, pertahanannya melunak dan dialog konstruktif dapat terwujud.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-lg">
              3
            </div>
            <h4 className="font-extrabold text-lg text-purple-950">Solusi Menang-Menang</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tujuan penyelesaian konflik bukan mencari siapa yang menang atau kalah, melainkan menyelamatkan persahabatan dengan solusi adil bagi kedua belah pihak.
            </p>
          </div>
        </div>
      </section>

      {/* POJOK GURU BK: SAFE SPACE QUOTE */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Pojok Konselor Sekolah</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
            “Memiliki konflik bukan berarti kalian tidak cocok berteman; itu tanda kalian sedang belajar bertumbuh bersama.”
          </h3>
          <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
            Guru Bimbingan dan Konseling di sekolah selalu terbuka untuk mendengarkan ceritamu. Ruang BK adalah tempat yang aman dan rahasiamu terjaga. Jangan ragu meminta bantuan saat beban pertemanan terasa terlalu berat.
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
          <button
            onClick={() => onNavigate('bantuan')}
            className="px-6 py-3.5 rounded-2xl bg-white text-purple-900 hover:bg-purple-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-purple-700" />
            <span>Kapan Butuh Bantuan Guru BK?</span>
          </button>
          <button
            onClick={() => onNavigate('refleksi')}
            className="px-6 py-3.5 rounded-2xl bg-purple-700/80 hover:bg-purple-700 text-white font-bold text-sm border border-purple-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PenTool className="w-4 h-4" />
            <span>Isi Jurnal Refleksi Diri</span>
          </button>
        </div>
      </section>

    </div>
  );
};
