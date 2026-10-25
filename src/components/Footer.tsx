import React from 'react';
import { HeartHandshake, ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-gradient-to-b from-purple-50/60 to-[#F5EEFE] border-t border-purple-100 mt-20 pt-14 pb-10 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Important Educational Disclaimer Box */}
        <div className="mb-12 p-5 rounded-2xl bg-white border border-purple-200 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="text-sm">
            <h4 className="font-bold text-purple-950 flex items-center gap-2">
              <span>Catatan Etika Layanan Bimbingan & Konseling</span>
              <span className="text-[10px] font-semibold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                Edukasi Mandiri
              </span>
            </h4>
            <p className="text-slate-600 mt-1 leading-relaxed text-xs sm:text-sm">
              Website <strong>TEMAN BICARA</strong> dirancang khusus sebagai media pembelajaran dan simulasi interaktif untuk mengasah kecakapan komunikasi interpersonal dan penyelesaian konflik peserta didik. Media ini <strong>bukan pengganti sesi konseling individual</strong> atau penanganan krisis psikologis profesional. Jika kamu atau temanmu mengalami perundungan berat atau tekanan emosional mendalam, segeralah temui <strong>Guru BK</strong> di sekolahmu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-xs">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-purple-950 tracking-tight">
                TEMAN BICARA
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Media Digital Interaktif untuk Melatih Komunikasi Interpersonal dan Penyelesaian Konflik Pertemanan Peserta Didik.
            </p>
            <div className="p-3.5 rounded-xl bg-purple-100/60 border border-purple-200 text-purple-900 text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Slogan: “Berani Bicara, Saling Memahami, Bersama Menyelesaikan Konflik”</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h5 className="font-bold text-sm text-purple-950 uppercase tracking-wider mb-3">
              Navigasi Cepat
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => { onSelectTab('beranda'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-600 hover:text-purple-700 transition-colors text-left"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('materi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-600 hover:text-purple-700 transition-colors text-left"
                >
                  6 Modul Materi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('simulasi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-600 hover:text-purple-700 transition-colors text-left"
                >
                  Simulasi Kasus Teman
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('kuis'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-600 hover:text-purple-700 transition-colors text-left"
                >
                  Asesmen & Kuis Pemahaman
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('refleksi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-600 hover:text-purple-700 transition-colors text-left"
                >
                  Jurnal Refleksi Pribadi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('bantuan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-600 hover:text-purple-700 transition-colors text-left"
                >
                  Kapan Butuh Guru BK?
                </button>
              </li>
            </ul>
          </div>

          {/* Values Col */}
          <div>
            <h5 className="font-bold text-sm text-purple-950 uppercase tracking-wider mb-3">
              Prinsip Sahabat Bijak
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Mendengarkan tanpa memotong pembicaraan</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Berbicara jujur tanpa kata menyakiti (Asertif)</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Menghormati perbedaan dan ruang pribadi</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Menyelesaikan perselisihan dengan kepala dingin</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TEMAN BICARA. Media Edukasi Bimbingan dan Konseling.</p>
          <div className="flex items-center gap-1.5 text-purple-800 font-medium">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
            <span>untuk persahabatan sehat peserta didik</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
