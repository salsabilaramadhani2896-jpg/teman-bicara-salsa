import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Save, 
  RotateCcw, 
  Copy, 
  Check, 
  Printer, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  MessageSquare,
  Lock,
  Calendar
} from 'lucide-react';
import { RefleksiData, NavTab } from '../types';

interface RefleksiViewProps {
  onRefleksiSaved: () => void;
  onNavigate: (tab: NavTab) => void;
}

const STORAGE_KEY = 'teman_bicara_refleksi_data';

export const RefleksiView: React.FC<RefleksiViewProps> = ({
  onRefleksiSaved,
  onNavigate
}) => {
  const [formData, setFormData] = useState<RefleksiData>({
    namaPanggilan: '',
    tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    gayaMenyampaikanPendapat: '',
    kesabaranMendengarkan: '',
    menghadapiPerbedaan: '',
    pengalamanKonflik: '',
    komitmenSahabat: '',
    ratingKontrolEmosi: 4,
    ratingMendengarkanAktif: 4,
    ratingKomunikasiAsertif: 4,
    ratingMenghargaiPerbedaan: 5
  });

  const [savedData, setSavedData] = useState<RefleksiData | null>(null);
  const [showSavedPreview, setShowSavedPreview] = useState<boolean>(false);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<boolean>(false);
  const [copiedNotice, setCopiedNotice] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing) {
        const parsed = JSON.parse(existing) as RefleksiData;
        setSavedData(parsed);
        setFormData(parsed);
      }
    } catch (e) {
      console.warn('Gagal memuat refleksi lokal', e);
    }
  }, []);

  const handleSaveToDevice = () => {
    try {
      const dataToSave = {
        ...formData,
        tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      setSavedData(dataToSave);
      setSaveSuccessNotice(true);
      onRefleksiSaved();
      setTimeout(() => setSaveSuccessNotice(false), 3500);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } catch (e) {
      alert('Gagal menyimpan data ke browser.');
    }
  };

  const handleClearForm = () => {
    if (window.confirm('Apakah kamu yakin ingin mengosongkan jurnal refleksi ini?')) {
      const emptyForm: RefleksiData = {
        namaPanggilan: '',
        tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        gayaMenyampaikanPendapat: '',
        kesabaranMendengarkan: '',
        menghadapiPerbedaan: '',
        pengalamanKonflik: '',
        komitmenSahabat: '',
        ratingKontrolEmosi: 3,
        ratingMendengarkanAktif: 3,
        ratingKomunikasiAsertif: 3,
        ratingMenghargaiPerbedaan: 3
      };
      setFormData(emptyForm);
      setSavedData(null);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const generateFormattedText = () => {
    const target = savedData || formData;
    return `==========================================
JURNAL REFLEKSI PRIBADI - TEMAN BICARA
Media Digital Bimbingan & Konseling Peserta Didik
Tanggal: ${target.tanggal}
Nama Panggilan: ${target.namaPanggilan || 'Anonim'}
==========================================

1. Cara Menyampaikan Pendapat:
${target.gayaMenyampaikanPendapat || '- Belum diisi -'}

2. Kesabaran Mendengarkan Teman:
${target.kesabaranMendengarkan || '- Belum diisi -'}

3. Cara Menghadapi Perbedaan & Batasan:
${target.menghadapiPerbedaan || '- Belum diisi -'}

4. Refleksi Pengalaman Konflik & Rencana Bijak:
${target.pengalamanKonflik || '- Belum diisi -'}

5. Janji Komitmen Menjadi Sahabat Terbaik:
${target.komitmenSahabat || '- Belum diisi -'}

EVALUASI DIRI (Skala 1 - 5):
• Kontrol Emosi: ${target.ratingKontrolEmosi}/5
• Mendengarkan Aktif: ${target.ratingMendengarkanAktif}/5
• Berbicara Asertif: ${target.ratingKomunikasiAsertif}/5
• Menghargai Perbedaan: ${target.ratingMenghargaiPerbedaan}/5

Slogan: Berani Bicara, Saling Memahami, Bersama Menyelesaikan Konflik.
==========================================`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateFormattedText());
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12">
      
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-purple-100">
          <PenTool className="w-3.5 h-3.5" />
          <span>Jurnal Ruang Pribadi Siswa</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Refleksi Diri & Komitmen Sahabat
        </h1>
        <p className="text-purple-100 text-sm sm:text-base max-w-2xl leading-relaxed">
          Hubungan pertemanan yang sehat dimulai dari kesadaran terhadap diri sendiri. Tuliskan refleksimu dengan jujur tanpa takut dinilai.
        </p>

        {/* Security & Privacy reassurance */}
        <div className="pt-2 flex items-center gap-2 text-xs font-medium bg-purple-950/40 p-3 rounded-2xl border border-purple-400/30 max-w-lg">
          <Lock className="w-4 h-4 text-purple-200 shrink-0" />
          <span>Privasi Terjaga: Jawaban tersimpan hanya di browsermu dan tidak dikirimkan ke internet.</span>
        </div>
      </div>

      {/* SUCCESS NOTICE */}
      {saveSuccessNotice && (
        <div className="p-4 rounded-2xl bg-purple-100 border border-purple-300 text-purple-950 font-bold text-xs sm:text-sm flex items-center gap-2 animate-in fade-in duration-200">
          <Check className="w-5 h-5 text-purple-700" />
          <span>Refleksi berhasil disimpan secara lokal di perangkatmu! Progres belajarmu telah diperbarui.</span>
        </div>
      )}

      {/* Main Journal Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-sm space-y-8">
        
        {/* Name & Date row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-purple-100">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-purple-950 block">
              Nama Panggilan atau Inisial:
            </label>
            <input
              type="text"
              value={formData.namaPanggilan}
              onChange={(e) => setFormData({ ...formData, namaPanggilan: e.target.value })}
              placeholder="Contoh: Rian / Salsabila (Opsional)"
              className="w-full px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/30 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-purple-950 block">
              Tanggal Refleksi:
            </label>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/50 text-xs sm:text-sm text-slate-700 font-medium">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span>{formData.tanggal}</span>
            </div>
          </div>
        </div>

        {/* 5 Reflective Prompts */}
        <div className="space-y-6">
          <h3 className="text-lg font-black text-purple-950 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span>Pertanyaan Refleksi Interpersonal</span>
          </h3>

          {/* Q1: Menyampaikan Pendapat */}
          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-2">
            <label className="text-xs sm:text-sm font-bold text-purple-950 block leading-snug">
              1. Bagaimana caramu biasanya menyampaikan pendapat jika tidak sependapat dengan teman?
            </label>
            <p className="text-xs text-slate-500">
              Apakah kamu cenderung diam memendam, langsung menyanggah, atau menunggu situasi santai untuk berbicara?
            </p>
            <textarea
              rows={3}
              value={formData.gayaMenyampaikanPendapat}
              onChange={(e) => setFormData({ ...formData, gayaMenyampaikanPendapat: e.target.value })}
              placeholder="Tuliskan pengalaman dan kebiasaanmu di sini..."
              className="w-full p-3.5 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Q2: Kesabaran Mendengarkan */}
          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-2">
            <label className="text-xs sm:text-sm font-bold text-purple-950 block leading-snug">
              2. Seberapa sabar kamu mendengarkan teman yang sedang meluapkan emosi atau bercerita?
            </label>
            <p className="text-xs text-slate-500">
              Apakah kamu sering tergesa-gesa memotong omongan mereka, melihat HP, atau bisa menyimak dengan tulus?
            </p>
            <textarea
              rows={3}
              value={formData.kesabaranMendengarkan}
              onChange={(e) => setFormData({ ...formData, kesabaranMendengarkan: e.target.value })}
              placeholder="Tuliskan refleksimu ketika menjadi pendengar..."
              className="w-full p-3.5 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Q3: Menghadapi Perbedaan */}
          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-2">
            <label className="text-xs sm:text-sm font-bold text-purple-950 block leading-snug">
              3. Bagaimana caramu menghadapi perbedaan selera, watak, atau pendapat dengan teman dekat?
            </label>
            <p className="text-xs text-slate-500">
              Bagaimana kamu menjaga batasan agar perbedaan tersebut tidak berubah menjadi perpecahan?
            </p>
            <textarea
              rows={3}
              value={formData.menghadapiPerbedaan}
              onChange={(e) => setFormData({ ...formData, menghadapiPerbedaan: e.target.value })}
              placeholder="Tuliskan caramu menghargai keberagaman kawan..."
              className="w-full p-3.5 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Q4: Pengalaman Konflik */}
          <div className="p-5 rounded-2xl bg-[#FAF8FE] border border-purple-100 space-y-2">
            <label className="text-xs sm:text-sm font-bold text-purple-950 block leading-snug">
              4. Ceritakan secara singkat salah satu pengalaman konflik pertemanan yang pernah kamu alami:
            </label>
            <p className="text-xs text-slate-500">
              Jika peristiwa itu terulang kembali hari ini, tindakan bijak dan kalimat apa yang ingin kamu sampaikan?
            </p>
            <textarea
              rows={3}
              value={formData.pengalamanKonflik}
              onChange={(e) => setFormData({ ...formData, pengalamanKonflik: e.target.value })}
              placeholder="Ceritakan kejadian dan pelajaran berharga yang kamu ambil..."
              className="w-full p-3.5 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Q5: Komitmen Sahabat */}
          <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
            <label className="text-xs sm:text-sm font-bold text-purple-950 block leading-snug flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-purple-700" />
              <span>5. Komitmen Nyataku untuk Menjadi Sahabat yang Lebih Baik Mulai Minggu Ini:</span>
            </label>
            <p className="text-xs text-slate-600">
              Tuliskan satu janji praktis untuk dirimu sendiri (contoh: "Aku berjanji tidak akan menyindir teman di status WA, melainkan bicara langsung secara santun").
            </p>
            <textarea
              rows={3}
              value={formData.komitmenSahabat}
              onChange={(e) => setFormData({ ...formData, komitmenSahabat: e.target.value })}
              placeholder="Tuliskan komitmen persahabatanmu..."
              className="w-full p-3.5 rounded-xl border border-purple-300 bg-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400 font-medium text-purple-950"
            />
          </div>
        </div>

        {/* SELF-RATING SCALES */}
        <div className="space-y-4 pt-4 border-t border-purple-100">
          <h3 className="text-base font-extrabold text-purple-950">
            Penilaian Mandiri Kecakapan Komunikasi (Skala 1 - 5)
          </h3>
          <p className="text-xs text-slate-500">
            Geser slider sesuai penilaian jujur terhadap dirimu saat ini:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Slider 1 */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-purple-950">
                <span>Kontrol Emosi saat Perselisihan:</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">{formData.ratingKontrolEmosi} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.ratingKontrolEmosi}
                onChange={(e) => setFormData({ ...formData, ratingKontrolEmosi: Number(e.target.value) })}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>

            {/* Slider 2 */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-purple-950">
                <span>Mendengarkan Aktif Tanpa Memotong:</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">{formData.ratingMendengarkanAktif} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.ratingMendengarkanAktif}
                onChange={(e) => setFormData({ ...formData, ratingMendengarkanAktif: Number(e.target.value) })}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>

            {/* Slider 3 */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-purple-950">
                <span>Keberanian Bicara Asertif (I-Message):</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">{formData.ratingKomunikasiAsertif} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.ratingKomunikasiAsertif}
                onChange={(e) => setFormData({ ...formData, ratingKomunikasiAsertif: Number(e.target.value) })}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>

            {/* Slider 4 */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-purple-950">
                <span>Menghormati Batasan Pribadi Teman:</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">{formData.ratingMenghargaiPerbedaan} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.ratingMenghargaiPerbedaan}
                onChange={(e) => setFormData({ ...formData, ratingMenghargaiPerbedaan: Number(e.target.value) })}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS: SAVE, PREVIEW, COPY, RESET */}
        <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleSaveToDevice}
              className="px-6 py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-200 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan ke Perangkat (Lokal)</span>
            </button>

            <button
              onClick={() => setShowSavedPreview(!showSavedPreview)}
              className="px-4 py-3.5 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{showSavedPreview ? 'Sembunyikan Rangkuman' : 'Lihat Rangkuman Refleksi'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-4 py-3 rounded-xl bg-white hover:bg-purple-50 text-slate-700 border border-purple-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Salin catatan refleksi sebagai teks"
            >
              {copiedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-purple-700" />
                  <span className="text-purple-700">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-3 rounded-xl bg-white hover:bg-purple-50 text-slate-700 border border-purple-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Cetak lembar refleksi"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak</span>
            </button>

            <button
              onClick={handleClearForm}
              className="px-3.5 py-3 rounded-xl text-slate-400 hover:text-purple-900 hover:bg-purple-50 text-xs font-semibold transition-all cursor-pointer"
              title="Hapus data refleksi"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SUMMARY PREVIEW ACCORDION */}
        {showSavedPreview && (
          <div className="mt-6 p-6 rounded-3xl bg-purple-50/80 border border-purple-200 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-purple-200">
              <h4 className="font-black text-sm text-purple-950 uppercase tracking-wider">
                📄 Rangkuman Lembar Refleksi Diri
              </h4>
              <span className="text-xs text-purple-800 font-semibold">
                Status: {savedData ? 'Tersimpan di Perangkat' : 'Draft Belum Disimpan'}
              </span>
            </div>

            <pre className="p-4 rounded-2xl bg-white border border-purple-100 text-xs text-slate-700 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {generateFormattedText()}
            </pre>
          </div>
        )}

      </div>

    </div>
  );
};
