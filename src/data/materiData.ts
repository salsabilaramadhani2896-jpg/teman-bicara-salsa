import { MateriItem } from '../types';

export const MATERI_LIST: MateriItem[] = [
  {
    id: 'materi-1',
    nomor: '01',
    judul: 'Komunikasi Interpersonal: Jembatan Pertemanan',
    ringkasan: 'Memahami bagaimana pesan, nada bicara, dan ekspresi membangun kedekatan serta mencegah salah paham dengan teman sebaya.',
    ikon: 'MessageCircleHeart',
    waktuBaca: '4 Menit',
    tujuan: 'Peserta didik memahami konsep dasar komunikasi tatap muka dan digital serta menyadari dampak kata-kata terhadap perasaan orang lain.',
    poinKunci: [
      'Komunikasi bukan hanya tentang berbicara, tetapi bagaimana pesan dimengerti.',
      'Bahasa tubuh dan nada suara menyumbang lebih dari 70% kesan percakapan.',
      'Komunikasi pertemanan yang sehat dilandasi rasa saling percaya dan keterbukaan.'
    ],
    kontenUtama: [
      {
        subjudul: 'Apa Itu Komunikasi Interpersonal?',
        deskripsi: 'Komunikasi interpersonal adalah proses pertukaran pesan, ide, dan perasaan antara dua orang atau dalam kelompok kecil. Di lingkungan sekolah, cara kita menyapa, merespons ajakan, atau menanggapi cerita teman menentukan apakah hubungan kita terasa nyaman atau justru menegangkan.',
        tipsPraktis: [
          'Gunakan kontak mata yang bersahabat saat teman berbicara.',
          'Perhatikan nada bicara; nada yang terlalu tinggi atau ketus sering memicu salah paham walau maksudmu baik.',
          'Di pesan chat (WhatsApp/DM), gunakan tanda baca yang wajar dan emoji pendukung agar tidak terkesan galak.'
        ],
        contohKonkret: {
          situasi: 'Menolak ajakan nongkrong karena harus belajar atau membantu orang tua.',
          caraKeliru: '"Gak bisa, males banget!" (Terdengar menolak orangnya secara kasar)',
          caraBijak: '"Maaf ya, hari ini aku belum bisa ikut karena ada tugas yang harus kuselesaikan. Makasih banyak sudah mengajak, lain kali kita atur waktu lagi ya!"'
        }
      },
      {
        subjudul: 'Tiga Komponen Percakapan Sehat',
        deskripsi: 'Setiap percakapan melibatkan Pesan Verbal (kata-kata), Vokal (kecepatan & nada), dan Visual (ekspresi wajah & bahasa tubuh). Menyelaraskan ketiganya membuat teman merasa dihargai dan aman saat berbicara dengan kita.',
        tipsPraktis: [
          'Singkirkan layar HP saat teman sedang bercerita serius kepadamu.',
          'Tunjukkan ekspresi yang sesuai: tersenyumlah saat mendengar kabar gembira, dan berikan tatapan hangat saat teman bersedih.'
        ]
      }
    ],
    kutipanEmas: 'Kata-kata yang diucapkan dengan tulus dan santun adalah jembatan terkuat dalam menjaga persahabatan tetap hangat.'
  },
  {
    id: 'materi-2',
    nomor: '02',
    judul: 'Empati: Memahami Sudut Pandang Teman',
    ringkasan: 'Melatih kemampuan melihat situasi dari kacamata teman sebelum buru-buru menghakimi atau menyalahkan.',
    ikon: 'HeartHandshake',
    waktuBaca: '5 Menit',
    tujuan: 'Peserta didik mampu menempatkan diri pada posisi orang lain dan memberikan validasi emosi tanpa meremehkan.',
    poinKunci: [
      'Empati berbeda dari simpati; empati merasakan bersama, bukan sekadar merasa kasihan.',
      'Setiap teman memiliki latar belakang, suasana hati di rumah, dan beban yang berbeda.',
      'Validasi emosi membuat orang merasa didengar dan ditenangkan.'
    ],
    kontenUtama: [
      {
        subjudul: 'Melepaskan Kacamata Sendiri',
        deskripsi: 'Seringkali kita cepat tersinggung ketika teman mendadak pendiam atau jutek. Sebelum berpikir dia sombong atau memusuhi kita, ingatlah bahwa mungkin dia sedang mengalami hari yang berat, masalah keluarga, atau kelelahan mental.',
        tipsPraktis: [
          'Tanyakan kabar dengan lembut: "Kamu kelihatan lelah hari ini, ada yang bisa kubantu atau mau istirahat dulu?"',
          'Hindari langsung membandingkan: "Ah itu mah belum seberapa, masalahku lebih parah!"',
          'Sadari bahwa apa yang sepele bagimu bisa jadi sangat berarti dan menyakitkan bagi temanmu.'
        ],
        contohKonkret: {
          situasi: 'Teman mendapatkan nilai ulangan rendah dan menangis di pojok kelas.',
          caraKeliru: '"Ah lebay banget gitu aja nangis, cuma ulangan harian doang!"',
          caraBijak: '"Aku tahu kamu sudah belajar keras banget semalam. Pasti sedih dan kecewa ya. Kalau mau ditemani atau cerita, aku ada di sini ya."'
        }
      },
      {
        subjudul: 'Seni Validasi Emosi',
        deskripsi: 'Memvalidasi bukan berarti harus selalu setuju dengan perbuatannya, melainkan mengakui bahwa emosi yang dia rasakan itu nyata dan wajar dirasakan sebagai manusia.',
        tipsPraktis: [
          'Gunakan kalimat: "Wajar banget kalau kamu merasa kesal karena situasi itu."',
          'Jangan terburu-buru memberi nasihat jika teman belum memintanya; seringkali mereka hanya butuh ditemani.'
        ]
      }
    ],
    kutipanEmas: 'Sebelum menghakimi langkah seseorang, cobalah berjalan satu mil dengan sepatunya.'
  },
  {
    id: 'materi-3',
    nomor: '03',
    judul: 'Mendengarkan Aktif: Mendengar untuk Memahami',
    ringkasan: 'Belajar menyimak cerita teman dengan sepenuh hati, bukan sekadar menunggu giliran untuk berbicara atau membantah.',
    ikon: 'Ear',
    waktuBaca: '4 Menit',
    tujuan: 'Peserta didik menguasai teknik mendengar aktif dengan gestur, parafrasa, dan pertanyaan yang mendalam.',
    poinKunci: [
      'Mendengar (hearing) adalah respon fisik, sedangkan mendengarkan (listening) adalah tindakan sadar dengan pikiran dan hati.',
      'Memotong pembicaraan membuat lawan bicara merasa tidak dihargai.',
      'Parafrasa membantu memastikan kita benar-benar menangkap maksud cerita teman.'
    ],
    kontenUtama: [
      {
        subjudul: 'Teknik SOLER dalam Menyimak Teman',
        deskripsi: 'Dalam bimbingan konseling, terdapat panduan gestur menyimak yang disebut SOLER:\n• S (Squarely): Hadapkan tubuh ke arah teman.\n• O (Open): Sikap tubuh terbuka (jangan bersedekap dada atau membuang muka).\n• L (Lean): Condongkan tubuh sedikit ke depan sebagai tanda antusias.\n• E (Eye Contact): Jaga kontak mata wajar tanpa melotot.\n• R (Relax): Tetap santai dan ramah.',
        tipsPraktis: [
          'Berikan respon kecil seperti anggukan kepala, "Oh begitu", atau "Hmm, lalu bagaimana?".',
          'Tahan godaan memotong kalimat teman sebelum dia selesai meluapkan ceritanya.',
          'Jika ada yang kurang jelas, tanyakan dengan sopan setelah dia selesai berbicara.'
        ],
        contohKonkret: {
          situasi: 'Teman bercerita bahwa dia merasa tidak dianggap dalam kepanitiaan pentas seni kelas.',
          caraKeliru: '"Halah kamu baperan! Kemarin aku juga gitu tapi santai aja tuh."',
          caraBijak: '"Jadi kamu merasa ide-idemu sering dilewati saat rapat kemarin ya? Itu pasti bikin kamu merasa kurang dihargai."'
        }
      },
      {
        subjudul: 'Kekuatan Parafrasa',
        deskripsi: 'Parafrasa adalah mengulang kembali inti cerita teman dengan bahasamu sendiri. Ini memberi sinyal bahwa kamu benar-benar menyimak dan memberikan kesempatan bagi teman untuk meluruskan jika ada salah tangkap.',
        tipsPraktis: [
          'Awali dengan: "Kalau aku tidak salah tangkap, kamu merasa..."',
          'Biarkan teman mengonfirmasi atau melengkapi ceritanya.'
        ]
      }
    ],
    kutipanEmas: 'Salah satu hadiah terindah yang bisa kamu berikan kepada teman adalah perhatian tulus saat dia sedang berbicara.'
  },
  {
    id: 'materi-4',
    nomor: '04',
    judul: 'Komunikasi Asertif & Rumus "Pesan-Saya" (I-Message)',
    ringkasan: 'Menyampaikan pendapat, batasan, dan perasaan tidak nyaman secara tegas dan sopan tanpa menyerang atau memendam rasa.',
    ikon: 'Sparkles',
    waktuBaca: '6 Menit',
    tujuan: 'Peserta didik terampil menggunakan pola kalimat I-Message untuk menegur teman tanpa menimbulkan pertengkaran defensif.',
    poinKunci: [
      'Asertif berada di titik tengah antara Pasif (mengalah hingga tersiksa) dan Agresif (menyerang orang lain).',
      'Pesan-Kamu (You-Message) memicu pertahanan diri dan tuduhan balik.',
      'Pesan-Saya (I-Message) fokus pada perasaan diri sendiri dan fakta perilaku.'
    ],
    kontenUtama: [
      {
        subjudul: '4 Gaya Komunikasi Utama',
        deskripsi: '1. Pasif: Menyimpan unek-unek sendiri, takut berbicara, membiarkan haknya diinjak agar tidak ribut.\n2. Agresif: Berteriak, mengejek, menyalahkan orang lain, memaksakan kehendak sendiri.\n3. Pasif-Agresif: Menyindir di media sosial, mendiamkan (silent treatment), pura-pura lupa janji.\n4. Asertif: Jujur, tenang, menghormati diri sendiri sekaligus menghormati perasaan teman.',
        tipsPraktis: [
          'Berbicaralah dengan suara tenang, jangan berbisik dan jangan membentak.',
          'Pilih waktu yang tepat: jangan menegur di depan banyak orang saat emosi sedang meluap.'
        ]
      },
      {
        subjudul: 'Rumus Sakti: Pesan-Saya (I-Message)',
        deskripsi: 'Rumus I-Message terdiri dari 4 bagian:\n1. [Saya merasa...] (Sebutkan emosi spesifik: cemas, kecewa, bingung)\n2. [Ketika...] (Sebutkan fakta perilaku yang netral tanpa melabeli)\n3. [Karena...] (Jelaskan dampak nyatanya terhadapmu)\n4. [Saya berharap/Mari...] (Tawarkan solusi ke depan)',
        contohKonkret: {
          situasi: 'Teman meminjam buku catatan dan belum mengembalikannya sampai H-1 ujian.',
          caraKeliru: '"Kamu emang gak tau diri ya! Mau bikin aku gak lulus ulangan besok?!" (Pesan-Kamu yang menuduh)',
          caraBijak: '"Aku merasa cemas ketika catatanku belum kembali hari ini, karena besok kita sudah ujian dan aku perlu belajar dari situ. Bisa tolong difotokan bagian bab 3 dulu atau kuambil sore ini?"'
        }
      }
    ],
    kutipanEmas: 'Menjadi asertif bukan berarti menang dalam perdebatan, melainkan menjaga martabat diri sendiri tanpa merendahkan orang lain.'
  },
  {
    id: 'materi-5',
    nomor: '05',
    judul: 'Menghargai Perbedaan & Menjaga Batasan Teman',
    ringkasan: 'Menghormati privasi, gaya hidup, dan pendapat yang berbeda serta menetapkan batasan pribadi secara sehat.',
    ikon: 'ShieldCheck',
    waktuBaca: '5 Menit',
    tujuan: 'Peserta didik menyadari bahwa berteman akrab bukan berarti harus memiliki segalanya sama atau melanggar ruang privasi teman.',
    poinKunci: [
      'Beda pendapat adalah hal lumrah dalam hubungan antarmanusia.',
      'Batasan pribadi (boundaries) bukan tanda sombong, melainkan pelindung kesehatan mental.',
      'Bercanda yang menyasar fisik, keluarga, atau latar belakang bukanlah candaan melainkan intimidasi.'
    ],
    kontenUtama: [
      {
        subjudul: 'Mengenal Batasan Pribadi (Personal Boundaries)',
        deskripsi: 'Hubungan yang sehat memiliki pagar yang jelas. Kita boleh sangat dekat dengan sahabat, namun tetap harus menghargai ruang pribadi mereka:\n• Batasan Digital: Tidak membuka HP teman tanpa izin, tidak membagikan foto teman yang mempermalukan.\n• Batasan Emosional: Menghargai saat teman sedang butuh waktu sendiri.\n• Batasan Fisik: Tidak menyentuh atau memukul teman dengan dalih bercanda.',
        tipsPraktis: [
          'Tanyakan izin sebelum meminjam barang atau mengunggah foto bersama ke media sosial.',
          'Hormati kata "Tidak": jika teman mengatakan tidak nyaman dengan suatu candaan, segera hentikan tanpa menuduhnya baper.'
        ],
        contohKonkret: {
          situasi: 'Dipaksa teman untuk membolos jam pelajaran tambahan atau melanggar aturan sekolah.',
          caraKeliru: 'Ikut membolos karena takut dikucilkan dan takut dibilang bukan teman sejati.',
          caraBijak: '"Aku tetap teman baikmu, tapi untuk urusan bolos aku tidak bisa ikut. Kalian tetap temanku dan nanti sore kita bisa ngobrol lagi."'
        }
      },
      {
        subjudul: 'Menyikapi Perbedaan Pendapat',
        deskripsi: 'Kita tidak harus selalu sependapat untuk bisa tetap berteman. Sikap setuju untuk tidak setuju (agree to disagree) menunjukkan kedewasaan mental.',
        tipsPraktis: [
          'Gunakan kalimat penengah: "Aku mengerti sudut pandangmu, dan aku punya pandangan yang berbeda. Menarik ya kita bisa melihat dari sisi lain!"',
          'Fokus pada ide pembicaraan, bukan menyerang kepribadian teman.'
        ]
      }
    ],
    kutipanEmas: 'Persahabatan yang kokoh tidak menuntut keseragaman, melainkan merayakan keberagaman dengan rasa hormat.'
  },
  {
    id: 'materi-6',
    nomor: '06',
    judul: '6 Langkah Damai Menyelesaikan Konflik Pertemanan',
    ringkasan: 'Panduan sistematis menyelesaikan perselisihan dari awal hingga mencapai kesepakatan yang saling menguntungkan (Win-Win Solution).',
    ikon: 'Smile',
    waktuBaca: '6 Menit',
    tujuan: 'Peserta didik mampu menerapkan metode STOP dan mediasi untuk memulihkan hubungan yang sempat retak.',
    poinKunci: [
      'Konflik itu wajar terjadi; yang menentukan adalah cara kita meresponnya.',
      'Hindari mengambil keputusan atau membalas chat saat emosi sedang di puncak.',
      'Tujuan penyelesaian konflik adalah memperbaiki hubungan, bukan mencari siapa yang menang dan kalah.'
    ],
    kontenUtama: [
      {
        subjudul: 'Metode S.T.O.P Saat Terjadi Gesekan',
        deskripsi: 'Ketika perselisihan mulai memanas:\n• S (Stop): Berhenti bicara sejenak. Jangan langsung mengetik pesan amarah atau membalas sindiran.\n• T (Take a breath): Tarik napas dalam 3 kali untuk menurunkan detak jantung dan hormon stres.\n• O (Observe): Amati situasi dan emosimu: apa yang sebenarnya membuatmu terluka?\n• P (Proceed): Lanjutkan dengan pikiran yang lebih dingin dan kepala jernih.',
        tipsPraktis: [
          'Berikan jeda waktu pendinginan (cool-down time) 1-2 jam sebelum membahas masalah sensitif.',
          'Pilih tempat yang privat untuk berdiskusi, hindari berdebat di depan kelas atau di grup chat umum.'
        ]
      },
      {
        subjudul: '6 Langkah Damai Menuju Solusi Bersama',
        deskripsi: '1. Atur Waktu dan Tempat Tenang: Ajak teman bicara empat mata tanpa gangguan.\n2. Utarakan Masalah dengan I-Message: Sampaikan fakta tanpa kata "Kamu selalu..." atau "Kamu tidak pernah...".\n3. Dengarkan Versi Teman Tanpa Menyela: Berikan kesempatan dia menjelaskan apa yang dialaminya.\n4. Temukan Akar Masalah yang Sebenarnya: Seringkali masalahnya adalah rasa takut diabaikan atau kesalahpahaman informasi.\n5. Brainstorming Solusi Win-Win: Cari jalan keluar yang adil bagi kedua belah pihak.\n6. Buat Komitmen Baru & Berjabat Tangan: Tuliskan atau sepakati aturan baru pertemanan kalian.',
        contohKonkret: {
          situasi: 'Dua teman berebut posisi ketua dalam proyek sekolah.',
          caraKeliru: 'Saling menyindir dan membuat kubu-kubuan di kelas.',
          caraBijak: 'Membagi peran secara adil: satu menjadi koordinator konsep materi, yang satu lagi menjadi koordinator presentasi dan desain, sehingga potensi keduanya terpakai optimal.'
        }
      }
    ],
    kutipanEmas: 'Menyelesaikan konflik bukan tentang siapa yang salah dan siapa yang benar, melainkan bagaimana kita menyelamatkan persahabatan yang berharga.'
  }
];

export const KAMUS_EMOSI_STARTER = [
  {
    perasaan: 'Aku merasa kesal',
    kapan: 'Saat teman mengingkari janji temu tanpa kabar',
    contoh: '"Aku merasa kesal ketika kamu tidak memberi kabar kemarin, karena aku sudah menunggu satu jam. Lain kali tolong kabari lebih awal ya."'
  },
  {
    perasaan: 'Aku merasa tersisih',
    kapan: 'Saat teman-teman membuat rencana tanpa mengajakmu',
    contoh: '"Aku merasa sedih dan tersisih ketika mendengar rencana main kemarin, karena aku sangat ingin ikut bersama kalian. Boleh ajak aku lain kali?"'
  },
  {
    perasaan: 'Aku merasa tertekan',
    kapan: 'Saat teman terus memaksa meminjam uang/tugas',
    contoh: '"Aku merasa terbebani ketika kamu memaksaku meminjamkan tugasku, karena aku ingin kita sama-sama belajar. Aku bisa temani kamu belajar bersama."'
  },
  {
    perasaan: 'Aku merasa tidak nyaman',
    kapan: 'Saat ada lelucon atau candaan fisik yang menyakitkan',
    contoh: '"Aku merasa kurang nyaman saat julukan itu diucapkan, karena itu melukai perasaanku. Tolong panggil nama asliku saja ya."'
  }
];
