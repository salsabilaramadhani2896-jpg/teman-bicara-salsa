import React, { useState } from 'react';
import { 
  Award, 
  Check, 
  RotateCcw, 
  HelpCircle, 
  ArrowRight, 
  BookOpen, 
  PenTool, 
  Sparkles,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { KUIS_SOAL_LIST } from '../data/kuisData';
import { ProgressState, NavTab } from '../types';

interface KuisViewProps {
  progress: ProgressState;
  onSaveQuizScore: (score: number) => void;
  onNavigate: (tab: NavTab) => void;
}

export const KuisView: React.FC<KuisViewProps> = ({
  progress,
  onSaveQuizScore,
  onNavigate
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(progress.skorKuis !== null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const totalQuestions = KUIS_SOAL_LIST.length;
  const answeredCount = Object.keys(userAnswers).length;

  const handleSelectOption = (questionId: number, key: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: key
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    KUIS_SOAL_LIST.forEach((soal) => {
      if (userAnswers[soal.id] === soal.kunciJawaban) {
        correctCount++;
      }
    });
    return Math.round((correctCount / totalQuestions) * 100);
  };

  const handleSubmitQuiz = () => {
    if (answeredCount < totalQuestions) {
      const confirmSubmit = window.confirm(
        `Kamu baru menjawab ${answeredCount} dari ${totalQuestions} soal. Apakah kamu yakin ingin mengirimkan kuis sekarang?`
      );
      if (!confirmSubmit) return;
    }
    const finalScore = calculateScore();
    setIsSubmitted(true);
    onSaveQuizScore(finalScore);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const finalScore = isSubmitted ? (progress.skorKuis ?? calculateScore()) : 0;

  const getScoreBadge = (score: number) => {
    if (score >= 85) {
      return {
        badge: '🌟 Duta Komunikasi Bijak & Empatik',
        color: 'from-purple-700 to-indigo-800',
        deskripsi: 'Pemahamanmu luar biasa! Kamu menguasai seni mendengarkan aktif, etika I-Message, dan resolusi konflik dengan sangat matang.'
      };
    }
    if (score >= 70) {
      return {
        badge: '💜 Komunikator Hebat & Pengertian',
        color: 'from-purple-600 to-purple-800',
        deskripsi: 'Hasil yang sangat bagus! Kamu sudah memiliki dasar empati yang kuat untuk menjaga hubungan pertemanan tetap rukun dan harmonis.'
      };
    }
    if (score >= 50) {
      return {
        badge: '🌱 Sahabat yang Terus Bertumbuh',
        color: 'from-purple-500 to-indigo-700',
        deskripsi: 'Capaian yang cukup baik. Perkuat kembali latihan kalimat asertif dan teknik mengelola emosi melalui modul materi.'
      };
    }
    return {
      badge: '📚 Sahabat Pembelajar',
      color: 'from-purple-700 to-slate-800',
      deskripsi: 'Terus semangat! Bacalah kembali 6 modul materi bimbingan konseling dan ulangi kuis ini untuk meningkatkan pemahamanmu.'
    };
  };

  const badgeInfo = getScoreBadge(finalScore);

  return (
    <div className="space-y-12">
      
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-purple-100">
          <Award className="w-3.5 h-3.5" />
          <span>Evaluasi Pemahaman Materi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Asesmen & Kuis Komunikasi Teman
        </h1>
        <p className="text-purple-100 text-sm sm:text-base max-w-2xl leading-relaxed">
          Uji seberapa dalam pemahamanmu mengenai etika komunikasi interpersonal, validasi emosi, mendengarkan aktif, dan penyelesaian konflik secara damai melalui {totalQuestions} soal pilihan ganda.
        </p>

        {/* Status */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-bold bg-purple-950/40 px-3.5 py-1.5 rounded-xl border border-purple-400/30">
            📝 Terjawab: {answeredCount} / {totalQuestions} Soal
          </span>
          {isSubmitted && (
            <span className="font-bold bg-white text-purple-900 px-3.5 py-1.5 rounded-xl">
              🎯 Nilai Akhir: {finalScore} / 100
            </span>
          )}
        </div>
      </div>

      {/* RESULT CARD IF SUBMITTED */}
      {isSubmitted && (
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-purple-200 shadow-xl space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-purple-100">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-700 to-indigo-600 text-white flex flex-col items-center justify-center font-black shadow-md shadow-purple-200 shrink-0">
                <span className="text-2xl leading-none">{finalScore}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 mt-1">/ 100</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  Hasil Evaluasi Kuis
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-purple-950">
                  {badgeInfo.badge}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                  {badgeInfo.deskripsi}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleResetQuiz}
                className="px-5 py-3 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer flex-1 md:flex-none"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Kuis</span>
              </button>
              <button
                onClick={() => onNavigate('refleksi')}
                className="px-6 py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2 cursor-pointer flex-1 md:flex-none"
              >
                <PenTool className="w-4 h-4" />
                <span>Lanjut ke Refleksi Diri</span>
              </button>
            </div>
          </div>

          <div className="text-xs text-purple-800 bg-purple-50 p-4 rounded-2xl flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
            <span>Skor tersimpan otomatis di kemajuan belajarmu. Periksa pembahasan detail setiap soal di bawah ini untuk memperkaya pengetahuanmu!</span>
          </div>
        </div>
      )}

      {/* QUIZ QUESTIONS LIST / DETAIL */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-purple-950">
            Daftar Soal Asesmen
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {isSubmitted ? 'Mode Pembahasan Lengkap' : 'Pilih satu jawaban yang paling tepat'}
          </span>
        </div>

        <div className="space-y-8">
          {KUIS_SOAL_LIST.map((soal, idx) => {
            const selectedKey = userAnswers[soal.id];
            const isCorrect = selectedKey === soal.kunciJawaban;

            return (
              <div
                key={soal.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all ${
                  isSubmitted
                    ? isCorrect
                      ? 'border-purple-300 shadow-sm bg-white'
                      : 'border-purple-200 bg-[#FAF7FF]'
                    : 'border-purple-100 shadow-sm hover:border-purple-200'
                }`}
              >
                {/* Question Header */}
                <div className="space-y-3 pb-4 border-b border-purple-100">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                      Soal Nomor {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-100">
                      Konsep: {soal.konsepKunci}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    {soal.pertanyaan}
                  </h4>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-3 pt-4">
                  {soal.pilihan.map((pil) => {
                    const isSelected = selectedKey === pil.key;
                    const isKeyAnswer = soal.kunciJawaban === pil.key;

                    let optionStyle = 'bg-white border-purple-200 text-slate-700 hover:bg-purple-50/50';

                    if (isSubmitted) {
                      if (isKeyAnswer) {
                        optionStyle = 'bg-purple-100/80 border-purple-500 text-purple-950 font-semibold ring-2 ring-purple-300';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-purple-50 border-purple-300 text-purple-900 line-through opacity-80';
                      } else {
                        optionStyle = 'bg-slate-50/50 border-slate-200 text-slate-400';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-purple-50 border-purple-600 text-purple-950 ring-2 ring-purple-300 font-medium';
                    }

                    return (
                      <button
                        key={pil.key}
                        onClick={() => handleSelectOption(soal.id, pil.key)}
                        disabled={isSubmitted}
                        className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${optionStyle}`}
                      >
                        <div className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isSubmitted && isKeyAnswer
                            ? 'bg-purple-700 text-white'
                            : isSelected
                            ? 'bg-purple-700 text-white'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {pil.key}
                        </div>
                        <div className="flex-1 text-xs sm:text-sm leading-relaxed">
                          {pil.teks}
                        </div>
                        {isSubmitted && isKeyAnswer && (
                          <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-purple-800 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                            <Check className="w-3.5 h-3.5 text-purple-700" />
                            <span>Kunci Benar</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation / Pembahasan (Always visible after submit) */}
                {isSubmitted && (
                  <div className="mt-6 p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-purple-600 text-white">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-purple-950">
                        Pembahasan Jawaban Resmi BK:
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {soal.pembahasan}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Quiz Button */}
        {!isSubmitted && (
          <div className="p-6 rounded-3xl bg-purple-100/60 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-extrabold text-sm sm:text-base text-purple-950">
                Sudah selesai menjawab seluruh soal?
              </p>
              <p className="text-xs text-purple-800">
                {answeredCount < totalQuestions 
                  ? `Masih ada ${totalQuestions - answeredCount} soal yang belum kamu pilih.` 
                  : 'Semua soal telah terjawab! Tekan tombol untuk menghitung skor & melihat pembahasan.'}
              </p>
            </div>

            <button
              onClick={handleSubmitQuiz}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-black text-sm shadow-md shadow-purple-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-5 h-5" />
              <span>Kirim Jawaban & Lihat Pembahasan</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
