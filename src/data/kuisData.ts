import { SoalKuis } from '../types';

export const KUIS_SOAL_LIST: SoalKuis[] = [
  {
    id: 1,
    pertanyaan: 'Manakah dari pernyataan berikut yang paling tepat membedakan antara "mendengar" (hearing) dan "mendengarkan aktif" (active listening)?',
    pilihan: [
      { key: 'A', teks: 'Mendengar memerlukan suara yang sangat keras, sedangkan mendengarkan aktif cukup dengan bisikan.' },
      { key: 'B', teks: 'Mendengar adalah proses penangkapan suara secara fisik semata, sedangkan mendengarkan aktif adalah tindakan sadar memahami makna dan perasaan di balik kata-kata.' },
      { key: 'C', teks: 'Mendengarkan aktif berarti langsung memberikan sanggahan begitu teman selesai mengucapkan satu kalimat.' },
      { key: 'D', teks: 'Mendengar dilakukan saat sendiri, sedangkan mendengarkan aktif hanya dilakukan di depan guru BK.' }
    ],
    kunciJawaban: 'B',
    konsepKunci: 'Active Listening & Empathy',
    pembahasan: 'Mendengar (hearing) adalah respon fisiologis alami tubuh terhadap gelombang suara, sedangkan mendengarkan aktif (active listening) menuntut perhatian penuh, empati, dan pengolahan pikiran untuk menangkap pesan verbal maupun emosi yang tersirat.'
  },
  {
    id: 2,
    pertanyaan: 'Pola kalimat "Pesan-Saya" (I-Message) sangat efektif meredakan potensi konflik karena...',
    pilihan: [
      { key: 'A', teks: 'Membuat teman merasa bersalah dan terpojok di depan teman-teman lain.' },
      { key: 'B', teks: 'Menuntut permintaan maaf secara langsung tanpa perlu mendengarkan penjelasan lawan bicara.' },
      { key: 'C', teks: 'Fokus pada ungkapan perasaan diri sendiri dan fakta perilaku tanpa melabeli atau menyerang pribadi lawan bicara.' },
      { key: 'D', teks: 'Memastikan bahwa pendapat kita adalah satu-satunya yang paling benar dalam kelompok.' }
    ],
    kunciJawaban: 'C',
    konsepKunci: 'Komunikasi Asertif (I-Message)',
    pembahasan: 'Rumus I-Message ("Saya merasa... ketika... karena... saya berharap...") fokus mengekspresikan dampak perilaku terhadap diri kita secara jujur tanpa menuduh. Hal ini mencegah lawan bicara menjadi defensif atau reaktif.'
  },
  {
    id: 3,
    pertanyaan: 'Ketika temanmu sedang menangis dan meluapkan rasa sedihnya karena dimarahi orang tua di rumah, respon empati yang paling konstruktif adalah...',
    pilihan: [
      { key: 'A', teks: '"Ah jangan cengeng dong! Cuma gitu doang kok sedih, hidup masih panjang."' },
      { key: 'B', teks: '"Aku paham kamu pasti merasa sangat sedih dan tertekan saat ini. Aku ada di sini kalau kamu butuh teman cerita."' },
      { key: 'C', teks: '"Kamu masih mending, aku kemarin malah dimarahin di depan tetangga se-kompleks!"' },
      { key: 'D', teks: 'Langsung memotret wajahnya dan mengirimkannya ke teman-teman agar mereka ikut kasihan.' }
    ],
    kunciJawaban: 'B',
    konsepKunci: 'Validasi Emosi & Empati',
    pembahasan: 'Respon B memberikan validasi emosi dan rasa aman. Pilihan A meremehkan perasaan teman, Pilihan C mengalihkan perhatian ke diri sendiri (one-upmanship), dan Pilihan D melanggar privasi teman.'
  },
  {
    id: 4,
    pertanyaan: 'Dalam metode S.T.O.P untuk mengendalikan emosi saat perselisihan memanas, huruf "O" merupakan singkatan dari...',
    pilihan: [
      { key: 'A', teks: 'Outrage (Meluapkan kemarahan sebesar-besarnya)' },
      { key: 'B', teks: 'Obligate (Memaksa lawan bicara menuruti kemauan kita)' },
      { key: 'C', teks: 'Observe (Mengamati situasi dan memeriksa apa yang sebenarnya dirasakan diri sendiri)' },
      { key: 'D', teks: 'Overcome (Mengalahkan lawan bicara dalam perdebatan)' }
    ],
    kunciJawaban: 'C',
    konsepKunci: 'Metode S.T.O.P Regulasi Emosi',
    pembahasan: 'Metode STOP terdiri dari: S (Stop - berhenti sejenak), T (Take a breath - tarik napas menenangkan saraf), O (Observe - mengamati apa yang memicu rasa sakit/amarah), dan P (Proceed - melanjutkan tindakan dengan kepala dingin).'
  },
  {
    id: 5,
    pertanyaan: 'Roni merasa tidak nyaman karena teman sebangkunya sering meminjam alat tulis tanpa izin dan terkadang merusaknya. Sikap asertif yang tepat bagi Roni adalah...',
    pilihan: [
      { key: 'A', teks: 'Menyembunyikan tempat pensil dan membalas merusak buku teman sebangkunya saat istirahat.' },
      { key: 'B', teks: 'Menegur dengan tenang: "Tolong minta izin dulu sebelum meminjam ya, dan jaga barangku dengan baik agar tidak rusak."' },
      { key: 'C', teks: 'Diam saja membiarkan tempat pensilnya rusak setiap hari agar tidak terjadi pertengkaran.' },
      { key: 'D', teks: 'Berteriak di depan kelas dan menyebut temannya sebagai maling.' }
    ],
    kunciJawaban: 'B',
    konsepKunci: 'Penegakan Batasan (Boundaries)',
    pembahasan: 'Sikap asertif adalah menyampaikan batasan diri secara jelas, tenang, dan tegas tanpa bersikap kasar atau merusak barang orang lain sebagai balas dendam.'
  },
  {
    id: 6,
    pertanyaan: 'Dalam resolusi konflik pertemanan, apa yang dimaksud dengan mencari solusi "Menang-Menang" (Win-Win Solution)?',
    pilihan: [
      { key: 'A', teks: 'Salah satu pihak harus mengalah total demi menjaga keutuhan kelompok pertemanan.' },
      { key: 'B', teks: 'Keputusan yang diambil berdasarkan suara terbanyak meskipun ada teman yang sangat tersakiti.' },
      { key: 'C', teks: 'Penyelesaian masalah yang mengakomodasi kebutuhan pokok kedua belah pihak secara adil tanpa ada yang dirugikan.' },
      { key: 'D', teks: 'Menunda masalah selamanya sampai kedua belah pihak melupakan kejadian tersebut dengan sendirinya.' }
    ],
    kunciJawaban: 'C',
    konsepKunci: 'Win-Win Resolution',
    pembahasan: 'Win-Win Solution adalah puncak dari resolusi konflik kolaboratif, di mana kedua pihak duduk bersama mengidentifikasi apa yang paling mereka butuhkan dan merumuskan kesepakatan yang saling menguntungkan.'
  },
  {
    id: 7,
    pertanyaan: 'Sandi dan Doni berbeda pendapat tentang tema dekorasi stand bazar kelas. Cara terbaik untuk menyikapi perbedaan tersebut adalah...',
    pilihan: [
      { key: 'A', teks: 'Membahas kelebihan dan kekurangan masing-masing ide secara terbuka, atau mengombinasikan elemen terbaik dari kedua konsep.' },
      { key: 'B', teks: 'Sandi memaksa idenya dipakai karena merasa dirinya lebih populer di kelas.' },
      { key: 'C', teks: 'Doni memutuskan mogok membantu bazar jika idenya tidak dituruti 100%.' },
      { key: 'D', teks: 'Keduanya saling mencela selera estetika masing-masing di media sosial.' }
    ],
    kunciJawaban: 'A',
    konsepKunci: 'Menghargai Keberagaman Ide',
    pembahasan: 'Perbedaan pandangan dalam kerja tim adalah peluang memperkaya hasil karya jika disikapi dengan diskusi objektif dan kolaborasi kreatif, bukan dengan pemaksaan kehendak atau aksi boikot.'
  }
];
