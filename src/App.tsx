import React, { useState, useEffect } from 'react';
import { NavTab, ProgressState } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProgressModal } from './components/ProgressModal';
import { BerandaView } from './views/BerandaView';
import { MateriView } from './views/MateriView';
import { SimulasiView } from './views/SimulasiView';
import { KuisView } from './views/KuisView';
import { RefleksiView } from './views/RefleksiView';
import { BantuanBKView } from './views/BantuanBKView';
import { 
  Compass, 
  BookOpen, 
  Sparkles, 
  Award, 
  PenTool, 
  HelpCircle 
} from 'lucide-react';

const PROGRESS_STORAGE_KEY = 'teman_bicara_learning_progress';

const initialProgress: ProgressState = {
  materiSelesai: [],
  simulasiSelesai: [],
  skorKuis: null,
  kuisSelesai: false,
  refleksiSelesai: false,
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('beranda');
  const [isProgressModalOpen, setIsProgressModalOpen] = useState<boolean>(false);
  const [progress, setProgress] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Gagal memuat kemajuan belajar', e);
    }
    return initialProgress;
  });

  // Save progress changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Gagal menyimpan progress ke localStorage', e);
    }
  }, [progress]);

  // Check if reflection exists in local storage
  useEffect(() => {
    try {
      const hasRefleksi = localStorage.getItem('teman_bicara_refleksi_data');
      if (hasRefleksi && !progress.refleksiSelesai) {
        setProgress((prev) => ({ ...prev, refleksiSelesai: true }));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleToggleMateri = (id: string) => {
    setProgress((prev) => {
      const exists = prev.materiSelesai.includes(id);
      const updated = exists
        ? prev.materiSelesai.filter((item) => item !== id)
        : [...prev.materiSelesai, id];
      return { ...prev, materiSelesai: updated };
    });
  };

  const handleCompleteKasus = (id: string) => {
    setProgress((prev) => {
      if (prev.simulasiSelesai.includes(id)) return prev;
      return { ...prev, simulasiSelesai: [...prev.simulasiSelesai, id] };
    });
  };

  const handleSaveQuizScore = (score: number) => {
    setProgress((prev) => ({
      ...prev,
      skorKuis: score,
      kuisSelesai: true,
    }));
  };

  const handleRefleksiSaved = () => {
    setProgress((prev) => ({
      ...prev,
      refleksiSelesai: true,
    }));
  };

  const handleResetProgress = () => {
    setProgress(initialProgress);
    try {
      localStorage.removeItem(PROGRESS_STORAGE_KEY);
      localStorage.removeItem('teman_bicara_refleksi_data');
    } catch (e) {
      // ignore
    }
    setIsProgressModalOpen(false);
  };

  const handleNavigate = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8FE] text-slate-800 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-950">
      
      {/* Top Professional Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleNavigate}
        progress={progress}
        onOpenProgressModal={() => setIsProgressModalOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {currentTab === 'beranda' && (
          <BerandaView onNavigate={handleNavigate} progress={progress} />
        )}
        {currentTab === 'materi' && (
          <MateriView
            progress={progress}
            onToggleMateriSelesai={handleToggleMateri}
            onNavigate={handleNavigate}
          />
        )}
        {currentTab === 'simulasi' && (
          <SimulasiView
            progress={progress}
            onCompleteKasus={handleCompleteKasus}
            onNavigate={handleNavigate}
          />
        )}
        {currentTab === 'kuis' && (
          <KuisView
            progress={progress}
            onSaveQuizScore={handleSaveQuizScore}
            onNavigate={handleNavigate}
          />
        )}
        {currentTab === 'refleksi' && (
          <RefleksiView
            onRefleksiSaved={handleRefleksiSaved}
            onNavigate={handleNavigate}
          />
        )}
        {currentTab === 'bantuan' && (
          <BantuanBKView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer with Educational Ethics Disclaimer */}
      <Footer onSelectTab={handleNavigate} />

      {/* Progress Breakdown Modal */}
      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
        progress={progress}
        onNavigate={handleNavigate}
        onResetProgress={handleResetProgress}
      />

      {/* Mobile Sticky Bottom Quick-Bar for Effortless Navigation */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-purple-100 py-1.5 px-2 flex justify-around items-center shadow-lg">
        <button
          onClick={() => handleNavigate('beranda')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
            currentTab === 'beranda' ? 'text-purple-700' : 'text-slate-500 hover:text-purple-600'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span>Beranda</span>
        </button>

        <button
          onClick={() => handleNavigate('materi')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
            currentTab === 'materi' ? 'text-purple-700' : 'text-slate-500 hover:text-purple-600'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span>Materi</span>
        </button>

        <button
          onClick={() => handleNavigate('simulasi')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
            currentTab === 'simulasi' ? 'text-purple-700' : 'text-slate-500 hover:text-purple-600'
          }`}
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span>Simulasi</span>
        </button>

        <button
          onClick={() => handleNavigate('kuis')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
            currentTab === 'kuis' ? 'text-purple-700' : 'text-slate-500 hover:text-purple-600'
          }`}
        >
          <Award className="w-5 h-5 mb-0.5" />
          <span>Kuis</span>
        </button>

        <button
          onClick={() => handleNavigate('refleksi')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
            currentTab === 'refleksi' ? 'text-purple-700' : 'text-slate-500 hover:text-purple-600'
          }`}
        >
          <PenTool className="w-5 h-5 mb-0.5" />
          <span>Refleksi</span>
        </button>

        <button
          onClick={() => handleNavigate('bantuan')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
            currentTab === 'bantuan' ? 'text-purple-700' : 'text-slate-500 hover:text-purple-600'
          }`}
        >
          <HelpCircle className="w-5 h-5 mb-0.5" />
          <span>Guru BK</span>
        </button>
      </div>

    </div>
  );
}
