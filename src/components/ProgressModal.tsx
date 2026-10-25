import React from 'react';
import { X, Check, BookOpen, Sparkles, Award, PenTool, RotateCcw } from 'lucide-react';
import { ProgressState, NavTab } from '../types';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: ProgressState;
  onNavigate: (tab: NavTab) => void;
  onResetProgress: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  onNavigate,
  onResetProgress,
}) => {
  if (!isOpen) return null;

  const totalSteps = 6 + 5 + 1 + 1; // 13
  const completedSteps = 
    progress.materiSelesai.length + 
    progress.simulasiSelesai.length + 
    (progress.kuisSelesai ? 1 : 0) + 
    (progress.refleksiSelesai ? 1 : 0);
  const percent = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-purple-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-purple-950">Kemajuan Belajar Saya</h3>
              <p className="text-xs text-slate-500">Pantau pencapaian misi edukasi komunikasi dan resolusi konflikmu</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-purple-900 hover:bg-purple-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar & Status */}
        <div className="my-6 p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm font-bold text-purple-950">Kelengkapan Misi</span>
            <span className="text-xl font-extrabold text-purple-700">{percent}%</span>
          </div>
          <div className="w-full h-3 bg-purple-200/60 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="text-xs text-purple-800 font-medium mt-2">
            {completedSteps === totalSteps 
              ? '🎉 Selamat! Kamu telah menyelesaikan seluruh rangkaian edukasi Teman Bicara!' 
              : `Kamu sudah menuntaskan ${completedSteps} dari ${totalSteps} tahapan pembelajaran.`}
          </p>
        </div>

        {/* Detail Milestones */}
        <div className="space-y-3.5">
          {/* 1. Materi */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 hover:border-purple-200 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Modul Materi Edukasi</p>
                <p className="text-xs text-slate-500">6 topik komunikasi & empati</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800">
                {progress.materiSelesai.length} / 6 Selesai
              </span>
              <button
                onClick={() => { onClose(); onNavigate('materi'); }}
                className="text-xs font-semibold text-purple-700 hover:underline px-1 py-0.5"
              >
                Buka
              </button>
            </div>
          </div>

          {/* 2. Simulasi */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 hover:border-purple-200 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Simulasi Kasus Konflik</p>
                <p className="text-xs text-slate-500">5 skenario konflik pertemanan</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800">
                {progress.simulasiSelesai.length} / 5 Tuntas
              </span>
              <button
                onClick={() => { onClose(); onNavigate('simulasi'); }}
                className="text-xs font-semibold text-purple-700 hover:underline px-1 py-0.5"
              >
                Coba
              </button>
            </div>
          </div>

          {/* 3. Kuis */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 hover:border-purple-200 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Asesmen & Kuis</p>
                <p className="text-xs text-slate-500">Evaluasi pemahaman konsep</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800">
                {progress.skorKuis !== null ? `Skor: ${progress.skorKuis}%` : 'Belum Diambil'}
              </span>
              <button
                onClick={() => { onClose(); onNavigate('kuis'); }}
                className="text-xs font-semibold text-purple-700 hover:underline px-1 py-0.5"
              >
                {progress.skorKuis !== null ? 'Ulangi' : 'Mulai'}
              </button>
            </div>
          </div>

          {/* 4. Refleksi */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 hover:border-purple-200 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                <PenTool className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Jurnal Refleksi Diri</p>
                <p className="text-xs text-slate-500">Pencatatan komitmen sahabat</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                progress.refleksiSelesai 
                  ? 'bg-purple-100 text-purple-800' 
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {progress.refleksiSelesai ? 'Tersimpan ✓' : 'Belum Ditulis'}
              </span>
              <button
                onClick={() => { onClose(); onNavigate('refleksi'); }}
                className="text-xs font-semibold text-purple-700 hover:underline px-1 py-0.5"
              >
                Tulis
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-purple-100 flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm('Apakah kamu yakin ingin mereset seluruh progres pembelajaranmu?')) {
                onResetProgress();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-purple-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Ulang Progres</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
