import React, { useState } from 'react';
import { 
  HeartHandshake, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  PenTool, 
  Compass, 
  Menu, 
  X, 
  Award,
  ChevronRight
} from 'lucide-react';
import { NavTab, ProgressState } from '../types';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  progress: ProgressState;
  onOpenProgressModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  progress,
  onOpenProgressModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Compass className="w-4 h-4" /> },
    { id: 'materi', label: 'Materi', icon: <BookOpen className="w-4 h-4" />, badge: `${progress.materiSelesai.length}/6` },
    { id: 'simulasi', label: 'Simulasi Konflik', icon: <Sparkles className="w-4 h-4" />, badge: `${progress.simulasiSelesai.length}/5` },
    { id: 'kuis', label: 'Asesmen & Kuis', icon: <Award className="w-4 h-4" />, badge: progress.skorKuis !== null ? `${progress.skorKuis}%` : undefined },
    { id: 'refleksi', label: 'Refleksi Diri', icon: <PenTool className="w-4 h-4" /> },
    { id: 'bantuan', label: 'Bantuan Guru BK', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  // Calculate overall percentage
  const totalSteps = 6 + 5 + 1 + 1; // 6 materi, 5 simulasi, 1 kuis, 1 refleksi = 13 steps
  const completedSteps = 
    progress.materiSelesai.length + 
    progress.simulasiSelesai.length + 
    (progress.kuisSelesai ? 1 : 0) + 
    (progress.refleksiSelesai ? 1 : 0);
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-200 group-hover:scale-105 transition-transform duration-200">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-purple-950 font-sans">
                  TEMAN BICARA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  BK Edukasi
                </span>
              </div>
              <p className="text-xs text-purple-700/80 font-medium line-clamp-1">
                Melatih Komunikasi & Resolusi Konflik Siswa
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 relative ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-sm shadow-purple-200'
                      : 'text-slate-600 hover:text-purple-900 hover:bg-purple-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span 
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1 ${
                        isActive 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact Nav for Large Screens (lg but not xl) */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1">
            {navItems.slice(0, 5).map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                    isActive ? 'bg-purple-600 text-white' : 'text-slate-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right actions: Progress Pill & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenProgressModal}
              title="Lihat Progres Belajar"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 transition-all text-xs font-semibold cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                {progressPercent}%
              </div>
              <div className="hidden sm:block text-left">
                <span className="block text-[10px] text-purple-600 leading-tight">Progres Kamu</span>
                <span className="block text-xs font-bold text-purple-950">{completedSteps}/{totalSteps} Misi</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-purple-900 hover:bg-purple-50 border border-purple-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-purple-100 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-purple-600">
            Menu Navigasi
          </div>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-white' : 'text-purple-600'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-purple-100 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProgressModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 text-purple-800 text-sm font-bold border border-purple-200"
            >
              <span>📊 Rincian Kemajuan Belajar ({progressPercent}%)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
