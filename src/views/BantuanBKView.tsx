import React, { useState } from 'react';
import { 
  HelpCircle, 
  AlertTriangle, 
  ShieldCheck, 
  HeartHandshake, 
  MessageSquare, 
  Check, 
  Copy, 
  Users, 
  Lock, 
  Smile, 
  Sparkles,
  Info
} from 'lucide-react';
import { NavTab } from '../types';

interface BantuanBKViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const BantuanBKView: React.FC<BantuanBKViewProps> = ({ onNavigate }) => {
  const [copiedTemplateIdx, setCopiedTemplateIdx] = useState<number | null>(null);
  const [draftCurhat, setDraftCurhat] = useState<string>('');
  const [savedDraftNotice, setSavedDraftNotice] = useState<boolean>(false);

  const counselingTemplates = [
    {
      title: 'Template 1: Membuat Janji Temu Santai di Jam Istirahat',
      deskripsi: 'Gunakan jika kamu ingin bercerita tentang masalah pertemanan ringan atau sekadar butuh teman diskusi.',
      teks: `Selamat pagi/siang Ibu/Bapak [Nama Guru BK]. Saya [Nama Panggilan], siswa kelas [Kelas]. Jika Ibu/Bapak berkenan dan memiliki waktu luang di jam istirahat atau sepulang sekolah hari ini, apakah saya boleh berkunjung ke ruang BK untuk berkonsultasi sebentar tentang masalah pertemanan? Terima kasih banyak sebelumnya, Bu/Pak.`
    },
    {
      title: 'Template 2: Meminta Bantuan Penengah Konflik Kelompok',
      deskripsi: 'Gunakan jika terjadi kebuntuan atau pertengkaran dalam kelompok kelas yang tidak kunjung selesai.',
      teks: `Selamat pagi/siang Ibu/Bapak [Nama Guru BK]. Mohon maaf mengganggu waktunya. Saya [Nama Panggilan] dari kelas [Kelas]. Saat ini kelompok kami sedang mengalami sedikit kesalahpahaman tugas yang sulit diselesaikan sendiri. Jika memungkinkan, bisakah kami meminta bantuan Ibu/Bapak sebagai penengah yang netral agar kami bisa rukun kembali? Terima kasih banyak.`
    },
    {
      title: 'Template 3: Bantuan Mendesak Terkait Ketidaknyamanan / Bullying',
      deskripsi: 'Gunakan jika kamu atau temanmu merasa terancam, diejek berlebihan, atau dikucilkan secara sistematis.',
      teks: `Selamat pagi/siang Ibu/Bapak [Nama Guru BK/Wali Kelas]. Saya [Nama Panggilan] dari kelas [Kelas]. Saya ingin menyampaikan bahwa belakangan ini saya merasa sangat tidak nyaman dan tertekan di lingkungan sekolah karena ada situasi yang sulit saya hadapi sendiri. Saya berharap bisa bertemu dan bercerita secara privat dengan Ibu/Bapak hari ini. Terima kasih atas bantuannya.`
    }
  ];

  const handleCopyTemplate = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplateIdx(index);
    setTimeout(() => setCopiedTemplateIdx(null), 2000);
  };

  const handleSaveDraft = () => {
    localStorage.setItem('teman_bicara_draft_curhat', draftCurhat);
    setSavedDraftNotice(true);
    setTimeout(() => setSavedDraftNotice(false), 2500);
  };

  return (
    <div className="space-y-12">
      
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-purple-100">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Panduan Layanan BK & Konseling Profesional</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Pusat Bantuan Guru BK & Orang Dewasa Tepercaya
        </h1>
        <p className="text-purple-100 text-sm sm:text-base max-w-2xl leading-relaxed">
          Mengetahui kapan saatnya menyelesaikan masalah sendiri dan kapan saatnya meminta bantuan orang dewasa adalah tanda kecerdasan dan keberanian sejati.
        </p>
      </div>

      {/* MANDATORY ETHICAL DISCLAIMER CARD */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-sm flex flex-col sm:flex-row items-start gap-5">
        <div className="p-4 rounded-2xl bg-purple-100 text-purple-700 shrink-0">
          <Info className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-black text-purple-950">
              Pernyataan Resmi Batasan Media Edukasi
            </h3>
            <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-0.5 rounded-full">
              Wajib Diketahui
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Website <strong>TEMAN BICARA</strong> adalah media digital edukasi mandiri yang dirancang sebagai sarana pelatihan komunikasi interpersonal dan stimulasi penyelesaian konflik peserta didik. Website ini <strong>BUKAN pengganti layanan konseling tatap muka</strong> dengan Guru BK, Wali Kelas, Psikolog Sekolah, ataupun pihak profesional lainnya. Jika kamu menghadapi masalah yang menimbulkan kecemasan berat atau rasa tidak aman, berkonsultasi langsung adalah langkah terbaik yang harus kamu ambil.
          </p>
        </div>
      </div>

      {/* WHEN TO SEEK ADULT HELP (TANDA-TANDA PERLU BANTUAN) */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Kapan Harus Melapor?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-purple-950">
            Tanda-Tanda Kamu Perlu Segera Menghubungi Guru BK
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Tidak semua masalah pertemanan harus kamu pikul seorang diri. Segeralah temui Guru BK, Wali Kelas, atau Orang Tua jika kamu mengalami salah satu tanda berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-purple-950">
                1. Perundungan (Bullying) yang Terus Berulang
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adanya ejekan fisik, sindiran nama orang tua, pengucilan terorganisir, atau cyberbullying di media sosial yang tidak berhenti meski sudah ditegur secara tegas.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-purple-950">
                2. Ancaman Kekerasan Fisik atau Pemerasan
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jika ada teman yang mengancam akan memukul, merusak barang pribadimu, atau memeras uang saku dengan paksaan dan rasa takut.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-purple-950">
                3. Merasa Takut & Tidak Mau Berangkat ke Sekolah
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Perselisihan yang terjadi sudah membuatmu merasa tertekan, sering sakit perut/pusing di pagi hari karena cemas bertemu teman tertentu di kelas.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-purple-950">
                4. Sahabat Menunjukkan Tanda Depresi Berat
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jika sahabatmu menceritakan keputusasaan yang mendalam atau menunjukkan indikasi ingin melukai diri sendiri, segeralah beritahu Guru BK demi menyelamatkan keselamatannya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MYTHS VS FACTS RUANG BK */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Mengenal Lebih Dekat
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-purple-950">
            Mitos vs Fakta Ruang Bimbingan & Konseling
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Masih ragu atau takut masuk ke ruang BK? Ketahui fakta sebenarnya berikut ini:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-3">
            <div className="text-xs font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-lg inline-block">
              Mitos #1
            </div>
            <p className="text-xs font-bold text-slate-800 italic">
              "Ruang BK itu tempat menghukum siswa yang nakal dan bermasalah saja."
            </p>
            <div className="pt-2 border-t border-purple-100">
              <p className="text-xs font-bold text-purple-950 mb-1">Fakta Sebenarnya:</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ruang BK adalah tempat pengembangan potensi seluruh siswa, tempat curhat yang nyaman, dan sarana konsultasi masa depan serta kesehatan mental bagi siapa saja.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-3">
            <div className="text-xs font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-lg inline-block">
              Mitos #2
            </div>
            <p className="text-xs font-bold text-slate-800 italic">
              "Rahasiaku pasti akan dibocorkan ke teman sekelas atau orang lain."
            </p>
            <div className="pt-2 border-t border-purple-100">
              <p className="text-xs font-bold text-purple-950 mb-1">Fakta Sebenarnya:</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guru BK terikat oleh <strong>Asas Kerahasiaan</strong> dalam kode etik profesi konseling. Ceritamu aman dan tidak akan disebarluaskan tanpa persetujuanmu.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-3">
            <div className="text-xs font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-lg inline-block">
              Mitos #3
            </div>
            <p className="text-xs font-bold text-slate-800 italic">
              "Datang ke BK berarti aku lemah dan tidak bisa menyelesaikan masalah."
            </p>
            <div className="pt-2 border-t border-purple-100">
              <p className="text-xs font-bold text-purple-950 mb-1">Fakta Sebenarnya:</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meminta bantuan adalah bukti kedewasaan dan keberanian. Atlet profesional pun memiliki pelatih; memiliki konselor membantu kita melihat solusi dari sudut pandang yang lebih jernih.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT / MESSAGE TEMPLATES */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Panduan Komunikasi Sopan
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-purple-950">
            Template Pesan untuk Menghubungi Guru BK
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Bingung cara menyusun kalimat untuk menghubungi guru BK lewat WhatsApp atau surat izin? Salin dan sesuaikan template di bawah ini:
          </p>
        </div>

        <div className="space-y-4">
          {counselingTemplates.map((template, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-purple-200 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-purple-950">
                    {template.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {template.deskripsi}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyTemplate(template.teks, idx)}
                  className="self-start sm:self-auto px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  {copiedTemplateIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Pesan</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
                {template.teks}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DRAFT CURHAT PLANNER (PRIVATE PRACTICE NOTEPAD) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-purple-950">
              Papan Catat Poin Konseling (Draft Mandiri)
            </h3>
            <p className="text-xs text-slate-500">
              Sebelum menemui Guru BK, kamu bisa menuliskan poin-poin yang ingin kamu ceritakan agar tidak lupa:
            </p>
          </div>
        </div>

        <textarea
          rows={4}
          value={draftCurhat}
          onChange={(e) => setDraftCurhat(e.target.value)}
          placeholder="Misal: 1. Masalah dengan kelompok tugas... 2. Perasaan tidak enak karena candaan teman... 3. Ingin minta saran cara menegur yang baik..."
          className="w-full p-4 rounded-2xl border border-purple-200 bg-purple-50/30 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <span className="text-xs text-slate-500">
            🔒 Catatan ini aman tersimpan hanya di browsermu tanpa pengumpulan data.
          </span>
          <button
            onClick={handleSaveDraft}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            {savedDraftNotice ? (
              <>
                <Check className="w-4 h-4" />
                <span>Poin Tersimpan!</span>
              </>
            ) : (
              <span>Simpan Catatan Poin</span>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
