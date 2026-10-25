import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  RotateCcw, 
  ArrowRight, 
  ShieldAlert, 
  HeartHandshake, 
  MessageSquare, 
  UserCheck, 
  Users, 
  HelpCircle,
  Award
} from 'lucide-react';
import { SIMULASI_CASES } from '../data/simulasiData';
import { ProgressState, NavTab, ChoiceOption } from '../types';

interface SimulasiViewProps {
  progress: ProgressState;
  onCompleteKasus: (id: string) => void;
  onNavigate: (tab: NavTab) => void;
}

export const SimulasiView: React.FC<SimulasiViewProps> = ({
  progress,
  onCompleteKasus,
  onNavigate
}) => {
  const [activeKasusIndex, setActiveKasusIndex] = useState<number>(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, 'A' | 'B' | 'C' | null>>({});

  const currentKasus = SIMULASI_CASES[activeKasusIndex];
  const userChoiceId = selectedChoices[currentKasus.id] || null;
  const chosenOption: ChoiceOption | undefined = currentKasus.pilihan.find((p) => p.id === userChoiceId);

  const handleSelectChoice = (choiceId: 'A' | 'B' | 'C') => {
    setSelectedChoices((prev) => ({
      ...prev,
      [currentKasus.id]: choiceId
    }));
    // mark as completed in progress state
    onCompleteKasus(currentKasus.id);
  };

  const handleResetCurrentCase = () => {
    setSelectedChoices((prev) => ({
      ...prev,
      [currentKasus.id]: null
    }));
  };

  const handleNextCase = () => {
    if (activeKasusIndex < SIMULASI_CASES.length - 1) {
      setActiveKasusIndex(activeKasusIndex + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-purple-100">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Laboratorium Interaktif Resolusi Konflik</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Simulasi Kasus Konflik Pertemanan
        </h1>
        <p className="text-purple-100 text-sm sm:text-base max-w-2xl leading-relaxed">
          Pilihlah respon tindakan terbaik dalam menghadapi 5 situasi pertikaian nyata di lingkungan sekolah. Telusuri dampak dari respon agresif, pasif, hingga komunikasi asertif yang konstruktif.
        </p>

        {/* Progress tracker */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-bold bg-purple-950/40 px-3.5 py-1.5 rounded-xl border border-purple-400/30">
            🎯 {progress.simulasiSelesai.length} dari {SIMULASI_CASES.length} Kasus Telah Dicoba
          </span>
          {progress.simulasiSelesai.length === SIMULASI_CASES.length && (
            <span className="font-bold bg-white text-purple-900 px-3.5 py-1.5 rounded-xl">
              🌟 Luar biasa! Semua skenario telah kamu tuntaskan!
            </span>
          )}
        </div>
      </div>

      {/* Case Navigator Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SIMULASI_CASES.map((kasus, idx) => {
          const isActive = idx === activeKasusIndex;
          const isDone = progress.simulasiSelesai.includes(kasus.id);

          return (
            <button
              key={kasus.id}
              onClick={() => setActiveKasusIndex(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer border ${
                isActive
                  ? 'bg-purple-700 text-white border-purple-700 shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 border-purple-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${
                isActive ? 'bg-purple-800 text-white' : 'bg-purple-100 text-purple-800'
              }`}>
                {idx + 1}
              </span>
              <span>Kasus {idx + 1}</span>
              {isDone && (
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-purple-800 text-purple-100' : 'bg-purple-100 text-purple-800'
                }`}>
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Case Detail Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-sm space-y-8">
        
        {/* Case Meta & Story */}
        <div className="space-y-4 pb-6 border-b border-purple-100">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              Kasus {activeKasusIndex + 1}: {currentKasus.kategori}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="bg-purple-50 text-purple-800 px-2.5 py-1 rounded-lg border border-purple-100 font-semibold">
                Tokoh: {currentKasus.tokoh}
              </span>
              <span className="bg-purple-50 text-purple-800 px-2.5 py-1 rounded-lg border border-purple-100 font-semibold">
                Jenjang: {currentKasus.tingkat}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-purple-950">
            {currentKasus.judul}
          </h2>

          <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2">
            <p className="font-bold text-purple-900">Latar Belakang Kejadian:</p>
            <p>{currentKasus.latarBelakang}</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7FF] border border-purple-200 text-slate-800 text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-bold text-purple-950 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-700" />
              <span>Skenario Masalah:</span>
            </p>
            <p className="italic">{currentKasus.skenarioCerita}</p>
          </div>

          <div className="pt-2">
            <h4 className="font-extrabold text-base text-purple-950">
              {currentKasus.pertanyaan}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Klik salah satu dari 3 pilihan tindakan di bawah ini untuk melihat dampaknya:
            </p>
          </div>
        </div>

        {/* 3 Action Options */}
        <div className="grid grid-cols-1 gap-4">
          {currentKasus.pilihan.map((option) => {
            const isSelected = userChoiceId === option.id;
            
            return (
              <div
                key={option.id}
                onClick={() => handleSelectChoice(option.id)}
                className={`p-5 rounded-2xl transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50/90 border-purple-500 ring-2 ring-purple-300 shadow-md'
                    : 'bg-white hover:bg-purple-50/40 border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-xs'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {option.id}
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900">
                        {option.badge}
                      </span>
                      {isSelected && (
                        <span className="text-xs font-bold text-purple-800 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-purple-700" />
                          <span>Pilihan Terpilih</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {option.teks}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Feedback Section (Appears when an option is selected) */}
        {chosenOption && (
          <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
            chosenOption.umpanBalik.isKonstruktif 
              ? 'bg-purple-50/90 border-purple-300 shadow-sm' 
              : 'bg-[#FAF5FF] border-purple-200'
          }`}>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-purple-200/80">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${
                  chosenOption.umpanBalik.isKonstruktif 
                    ? 'bg-purple-700 text-white' 
                    : 'bg-purple-200 text-purple-800'
                }`}>
                  {chosenOption.umpanBalik.isKonstruktif ? (
                    <Sparkles className="w-6 h-6" />
                  ) : (
                    <ShieldAlert className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-purple-950">
                    {chosenOption.umpanBalik.judul}
                  </h4>
                  <p className="text-xs text-purple-800 font-medium">
                    Evaluasi Respon Pilihan {chosenOption.id}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetCurrentCase}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Uji Pilihan Lain</span>
                </button>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-purple-100 space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                  🧠 Analisis Psikologis & Komunikasi
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {chosenOption.umpanBalik.analisis}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-100 space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                  👥 Dampak Terhadap Hubungan Pertemanan
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {chosenOption.umpanBalik.dampakHubungan}
                </p>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-200 space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-purple-950 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-purple-700" />
                <span>Rekomendasi Bimbingan Konseling (Solusi Konstruktif)</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {chosenOption.umpanBalik.rekomendasiTindakan}
              </p>
            </div>

            {/* Next Step Nav */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-purple-800 italic">
                {chosenOption.umpanBalik.isKonstruktif 
                  ? 'Keren! Kamu memilih jalur resolusi paling dewasa dan konstruktif.' 
                  : 'Coba klik opsi C untuk melihat bagaimana kalimat asertif menyelesaikan masalah ini.'}
              </p>

              {activeKasusIndex < SIMULASI_CASES.length - 1 ? (
                <button
                  onClick={handleNextCase}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lanjut ke Kasus {activeKasusIndex + 2}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('kuis')}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Uji Pemahaman di Asesmen & Kuis</span>
                </button>
              )}
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
