import React, { useState } from 'react';
import { 
  BookOpen, 
  Check, 
  MessageCircleHeart, 
  HeartHandshake, 
  Ear, 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  Clock, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  XCircle, 
  Quote, 
  ChevronRight, 
  ArrowRight,
  MessageSquare,
  Wand2,
  Copy
} from 'lucide-react';
import { MATERI_LIST } from '../data/materiData';
import { ProgressState, NavTab } from '../types';

interface MateriViewProps {
  progress: ProgressState;
  onToggleMateriSelesai: (id: string) => void;
  onNavigate: (tab: NavTab) => void;
}

export const MateriView: React.FC<MateriViewProps> = ({
  progress,
  onToggleMateriSelesai,
  onNavigate
}) => {
  const [selectedMateriId, setSelectedMateriId] = useState<string>(MATERI_LIST[0].id);

  // State for Interactive I-Message Builder
  const [imEmosi, setImEmosi] = useState<string>('cemas dan bingung');
  const [imSituasi, setImSituasi] = useState<string>('tugas kelompok kita belum dikirim');
  const [imAlasan, setImAlasan] = useState<string>('besok pagi sudah batas waktu penilaian guru');
  const [imHarapan, setImHarapan] = useState<string>('kita bisa koordinasi 15 menit malam ini untuk menyelesaikannya');
  const [copiedIMessage, setCopiedIMessage] = useState<boolean>(false);

  const selectedMateri = MATERI_LIST.find((m) => m.id === selectedMateriId) || MATERI_LIST[0];
  const isSelectedCompleted = progress.materiSelesai.includes(selectedMateri.id);

  const getMateriIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircleHeart': return <MessageCircleHeart className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Ear': return <Ear className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const generatedIMessage = `“Saya merasa ${imEmosi} ketika ${imSituasi}, karena ${imAlasan}. Saya berharap ${imHarapan}.”`;

  const handleCopyIMessage = () => {
    navigator.clipboard.writeText(generatedIMessage);
    setCopiedIMessage(true);
    setTimeout(() => setCopiedIMessage(false), 2000);
  };

  return (
    <div className="space-y-12">
      
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-purple-100">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Kurikulum Edukasi BK Interpersonal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Modul Materi Komunikasi & Resolusi Konflik
        </h1>
        <p className="text-purple-100 text-sm sm:text-base max-w-2xl leading-relaxed">
          Pelajari 6 prinsip dasar menjaga hubungan pertemanan yang harmonis, melatih empati, memahami batasan diri, dan menyelesaikan konflik tanpa kekerasan.
        </p>

        {/* Progress status */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-bold bg-purple-950/40 px-3.5 py-1.5 rounded-xl border border-purple-400/30">
            📚 {progress.materiSelesai.length} dari 6 Modul Dituntaskan
          </span>
          {progress.materiSelesai.length === 6 && (
            <span className="font-bold bg-white text-purple-900 px-3.5 py-1.5 rounded-xl">
              🌟 Hebat! Seluruh materi telah kamu pelajari!
            </span>
          )}
        </div>
      </div>

      {/* Main Layout: Sidebar Topics + Active Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Topic Selector (Sidebar) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-700 px-1">
            Daftar Modul Belajar
          </h3>
          
          <div className="space-y-2">
            {MATERI_LIST.map((materi) => {
              const isActive = materi.id === selectedMateriId;
              const isCompleted = progress.materiSelesai.includes(materi.id);

              return (
                <button
                  key={materi.id}
                  onClick={() => {
                    setSelectedMateriId(materi.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-3.5 border cursor-pointer ${
                    isActive
                      ? 'bg-purple-700 text-white border-purple-700 shadow-md shadow-purple-200'
                      : 'bg-white text-slate-700 hover:bg-purple-50 border-purple-100 hover:border-purple-200'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isActive ? 'bg-purple-800 text-white' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {getMateriIcon(materi.ikon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider ${
                        isActive ? 'text-purple-200' : 'text-purple-600'
                      }`}>
                        MODUL {materi.nomor}
                      </span>
                      {isCompleted && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          isActive ? 'bg-purple-800 text-purple-100' : 'bg-purple-100 text-purple-800'
                        }`}>
                          <Check className="w-3 h-3" />
                          <span>Selesai</span>
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-sm leading-snug line-clamp-2 mt-0.5">
                      {materi.judul}
                    </h4>
                    <span className={`text-[11px] block mt-1 ${
                      isActive ? 'text-purple-200' : 'text-slate-400'
                    }`}>
                      ⏱️ {materi.waktuBaca}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick jump to simulation banner */}
          <div className="p-5 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-3 mt-6">
            <h4 className="text-sm font-bold text-purple-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Sudah Siap Berlatih?</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Terapkan teori komunikasi ini dalam skenario konflik pertemanan sekolah pada menu Simulasi.
            </p>
            <button
              onClick={() => onNavigate('simulasi')}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>Buka Simulasi Konflik</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Detail Reading View */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-sm space-y-8">
            
            {/* Header of Active Module */}
            <div className="space-y-4 pb-6 border-b border-purple-100">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  Modul Pembelajaran {selectedMateri.nomor}
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>Estimasi baca: {selectedMateri.waktuBaca}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-purple-950">
                {selectedMateri.judul}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedMateri.ringkasan}
              </p>

              {/* Learning Goal */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-600 text-white shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-purple-900">
                    Tujuan Pembelajaran Peserta Didik
                  </h5>
                  <p className="text-xs sm:text-sm text-purple-950 font-medium mt-1 leading-relaxed">
                    {selectedMateri.tujuan}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-base text-purple-950 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <span>Poin-Poin Kunci yang Harus Diingat</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {selectedMateri.poinKunci.map((poin, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{poin}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {selectedMateri.kontenUtama.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-purple-950">
                    {section.subjudul}
                  </h3>
                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-2">
                    {section.deskripsi}
                  </div>

                  {/* Practical Tips */}
                  {section.tipsPraktis && section.tipsPraktis.length > 0 && (
                    <div className="p-5 rounded-2xl bg-[#FAF7FF] border border-purple-200 space-y-2.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-purple-800">
                        💡 Tips Praktis di Sekolah
                      </h5>
                      <ul className="space-y-2">
                        {section.tipsPraktis.map((tip, tIdx) => (
                          <li key={tIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                            <span className="leading-relaxed">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Concrete Contrast Example (Cara Keliru vs Cara Bijak) */}
                  {section.contohKonkret && (
                    <div className="p-5 rounded-2xl bg-white border border-purple-200 space-y-3">
                      <div className="text-xs font-bold text-purple-900 bg-purple-100/70 px-3 py-1 rounded-lg inline-block">
                        Contoh Situasi: {section.contohKonkret.situasi}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900">
                            <XCircle className="w-4 h-4 text-purple-600" />
                            <span>Hindari Cara Ini</span>
                          </div>
                          <p className="text-xs text-slate-700 italic leading-relaxed">
                            {section.contohKonkret.caraKeliru}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-purple-100/60 border border-purple-300 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-950">
                            <CheckCircle2 className="w-4 h-4 text-purple-700" />
                            <span>Pilihan Cara Bijak</span>
                          </div>
                          <p className="text-xs text-purple-950 font-medium leading-relaxed">
                            {section.contohKonkret.caraBijak}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Golden Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 via-[#F3EAFF] to-purple-50 border border-purple-200 relative overflow-hidden">
              <Quote className="absolute right-4 bottom-2 w-16 h-16 text-purple-300/40 pointer-events-none" />
              <p className="text-sm sm:text-base font-semibold text-purple-950 italic relative z-10 leading-relaxed">
                “{selectedMateri.kutipanEmas}”
              </p>
              <span className="block mt-2 text-xs font-bold text-purple-700 tracking-wider uppercase">
                — Pesan Bimbingan Konseling
              </span>
            </div>

            {/* Mark As Read Button & Next Nav */}
            <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onToggleMateriSelesai(selectedMateri.id)}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSelectedCompleted
                    ? 'bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-300'
                    : 'bg-purple-700 hover:bg-purple-800 text-white shadow-md shadow-purple-200'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>
                  {isSelectedCompleted ? '✓ Sudah Ditandai Selesai (Klik Batal)' : 'Tandai Selesai Dibaca'}
                </span>
              </button>

              {/* Next module button */}
              {(() => {
                const currentIndex = MATERI_LIST.findIndex(m => m.id === selectedMateriId);
                const nextMateri = MATERI_LIST[currentIndex + 1];
                if (nextMateri) {
                  return (
                    <button
                      onClick={() => {
                        setSelectedMateriId(nextMateri.id);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Lanjut Modul {nextMateri.nomor}: {nextMateri.judul.split(':')[0]}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  );
                }
                return (
                  <button
                    onClick={() => onNavigate('simulasi')}
                    className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Lanjut ke Simulasi Konflik</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                );
              })()}
            </div>

          </div>

          {/* INTERACTIVE BONUS TOOL: I-MESSAGE BUILDER */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                <Wand2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-purple-950">
                  Praktik Mandiri: Generator Pesan-Saya (I-Message)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Ubah perasaan tidak nyaman menjadi kalimat diplomatis dan asertif dengan merangkai 4 komponen berikut:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-900 block">
                  1. Saya Merasa (Emosi):
                </label>
                <input
                  type="text"
                  value={imEmosi}
                  onChange={(e) => setImEmosi(e.target.value)}
                  placeholder="misal: cemas, kecewa, sedih, lelah..."
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/40 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-900 block">
                  2. Ketika (Fakta Situasi Netral):
                </label>
                <input
                  type="text"
                  value={imSituasi}
                  onChange={(e) => setImSituasi(e.target.value)}
                  placeholder="misal: kamu belum mengirimkan bagian tugas kelompok..."
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/40 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-900 block">
                  3. Karena (Alasan Nyata/Dampak):
                </label>
                <input
                  type="text"
                  value={imAlasan}
                  onChange={(e) => setImAlasan(e.target.value)}
                  placeholder="misal: besok pagi sudah harus dikumpulkan ke guru..."
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/40 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-900 block">
                  4. Saya Berharap (Solusi Positif):
                </label>
                <input
                  type="text"
                  value={imHarapan}
                  onChange={(e) => setImHarapan(e.target.value)}
                  placeholder="misal: kita bisa kerjakan bersama 15 menit malam ini..."
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/40 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>

            {/* Generated Preview Card */}
            <div className="p-5 rounded-2xl bg-purple-100/70 border border-purple-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-purple-900">
                  Hasil Kalimat Siap Pakai
                </span>
                <span className="text-[11px] font-semibold text-purple-700 bg-white px-2 py-0.5 rounded-md border border-purple-200">
                  Bebas Tuduhan Menyerang
                </span>
              </div>

              <p className="text-sm sm:text-base font-bold text-purple-950 leading-relaxed italic bg-white p-4 rounded-xl border border-purple-200 shadow-2xs">
                {generatedIMessage}
              </p>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-purple-800">
                  Gunakan saat berbicara langsung atau mengirim pesan chat kepada temanmu.
                </span>
                <button
                  onClick={handleCopyIMessage}
                  className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  {copiedIMessage ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kalimat</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
