import { KasusSimulasi } from '../types';

export const SIMULASI_CASES: KasusSimulasi[] = [
  {
    id: 'kasus-1',
    judul: 'Tugas Kelompok Deadline Besok Pagi',
    kategori: 'Tanggung Jawab & Kerja Sama',
    tingkat: 'SMP / SMA',
    tokoh: 'Raka & Dimas',
    latarBelakang: 'Tugas presentasi Biologi harus dikumpulkan besok pukul 07.30 pagi. Raka sudah menyelesaikan 80% bagian kelompok, sedangkan Dimas belum mengirimkan bagian analisis datanya sama sekali dan chat WA-nya hanya centang satu atau tidak dibalas.',
    skenarioCerita: 'Waktu sudah menunjukkan pukul 19.30 malam. Raka melihat status Dimas di Instagram sedang bermain game online bersama teman luar sekolah. Raka merasa darahnya mendidih karena cemas nilai tugas kelompok mereka akan anjlok jika besok belum lengkap.',
    pertanyaan: 'Jika kamu berada di posisi Raka, tindakan mana yang paling bijak dan konstruktif untuk menyelesaikan masalah ini?',
    pilihan: [
      {
        id: 'A',
        tipe: 'agresif',
        badge: 'Tindakan Agresif / Menyerang',
        teks: 'Langsung menulis pesan di grup kelas besar: "Dimas emang beban kelompok! Kerjanya cuma main game doang! Besok namamu bakal aku coret di depan guru biar gak dapet nilai!"',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Respon Agresif)',
          isKonstruktif: false,
          analisis: 'Mempermalukan teman di depan umum memicu rasa malu dan dendam yang mendalam. Alih-alih merasa bersalah dan mengerjakan tugas, Dimas kemungkinan besar akan menyerang balik atau memutus komunikasi sama sekali.',
          dampakHubungan: 'Kerja sama kelompok hancur total, suasana kelas menjadi canggung dan terpecah menjadi kubu-kubu saling sindir.',
          rekomendasiTindakan: 'Saat emosi memuncak, jangan kirim pesan di ruang publik. Tarik napas, fokus pada penyelesaian tugas daripada melampiaskan amarah.'
        }
      },
      {
        id: 'B',
        tipe: 'pasif',
        badge: 'Tindakan Pasif / Memendam Rasa',
        teks: 'Mendiamkan Dimas, begadang sendirian sampai jam 3 pagi menyelesaikan bagian tugas Dimas sambil menangis dan memendam dendam.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Respon Pasif)',
          isKonstruktif: false,
          analisis: 'Sikap pasif mengorbankan kesehatan fisik dan mentalmu sendiri. Selain itu, tindakan ini tidak mendidik Dimas untuk bertanggung jawab atas komitmennya dan akan mengulang kebiasaan buruknya di masa depan.',
          dampakHubungan: 'Raka akan merasa lelah emosional (burnout) dan menaruh kebencian terpendam yang sewaktu-waktu bisa meledak menjadi permusuhan dingin.',
          rekomendasiTindakan: 'Jangan menanggung beban orang lain sendirian. Sampaikan kenyataan secara jujur dan tetapkan batas waktu yang jelas.'
        }
      },
      {
        id: 'C',
        tipe: 'asertif',
        badge: 'Tindakan Konstruktif & Asertif 🌟',
        teks: 'Kirim pesan privat langsung: "Dimas, aku cemas karena tugas Biologi besok harus dikumpul dan bagianmu belum ada. Kamu ada kendala apa? Aku tunggu kabar dan kiriman datamu sampai jam 21.00 ya, atau mau kita bagi dua biar cepat selesai?"',
        umpanBalik: {
          judul: 'Pilihan Sangat Konstruktif & Tepat! 🌟',
          isKonstruktif: true,
          analisis: 'Pilihan ini menggunakan prinsip I-Message: menyatakan kecemasan tanpa menghakimi pribadi Dimas ("aku cemas..."), menanyakan kendala dengan empati, memberikan tenggat waktu yang realistis (jam 21.00), dan menawarkan solusi praktis.',
          dampakHubungan: 'Menjaga harga diri teman sambil menegaskan tanggung jawab bersama. Hubungan pertemanan tetap terjaga dan tugas kelompok memiliki peluang besar untuk selesai tepat waktu.',
          rekomendasiTindakan: 'Jika Dimas tetap tidak merespons setelah batas waktu jam 21.00, barulah kamu dapat berkonsultasi secara objektif dan sopan kepada guru pengampu tanpa bumbu emosional.'
        }
      }
    ]
  },
  {
    id: 'kasus-2',
    judul: 'Komentar Sarkas & Sindiran di Grup WhatsApp',
    kategori: 'Etika Komunikasi Digital',
    tingkat: 'SMP / SMA',
    tokoh: 'Nadia & Cindy',
    latarBelakang: 'Nadia baru saja membagikan foto hasil karya poster lomba menggambarnya ke grup chat kelas untuk meminta masukan. Sebagian besar teman memuji karyanya.',
    skenarioCerita: 'Tiba-tiba Cindy mengirim stiker tertawa sambil menulis: "Wkwkwk warnanya norak banget, kayak gambar anak TK zaman purba 🗿". Beberapa anggota grup mengirim emotikon tertawa ikut-ikutan. Nadia merasa sangat malu, sakit hati, dan ingin menangis.',
    pertanyaan: 'Bagaimana langkah komunikasi interpersonal terbaik yang dapat diambil Nadia?',
    pilihan: [
      {
        id: 'A',
        tipe: 'agresif',
        badge: 'Tindakan Agresif / Balas Menyerang',
        teks: 'Membalas langsung dengan kata kasar: "Ngaca dong Cindy! Gambar lu aja lebih ancur, dasar julid sirik gak punya bakat!" lalu membanjiri grup dengan stiker mengejek.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Perang Terbuka)',
          isKonstruktif: false,
          analisis: 'Membalas ejekan dengan hinaan pribadi hanya akan membuat situasi semakin ricuh dan menarik teman-teman lain ikut ke dalam drama perdebatan yang toxic.',
          dampakHubungan: 'Menciptakan permusuhan sengit di kelas dan mengaburkan fakta bahwa karya Nadia sebenarnya bagus dan hanya menjadi korban candaan yang tidak sensitif.',
          rekomendasiTindakan: 'Jangan biarkan emosi sesaat membuat kita ikut melakukan hal yang sama buruknya dengan apa yang dilakukan orang lain.'
        }
      },
      {
        id: 'B',
        tipe: 'pasif',
        badge: 'Tindakan Pasif / Melarikan Diri',
        teks: 'Segera menekan tombol "Keluar dari Grup" (Left Group), mematikan HP, dan memutuskan tidak mau lagi ikut lomba menggambar karena merasa karyanya memang jelek.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Kalah oleh Keraguan Diri)',
          isKonstruktif: false,
          analisis: 'Meninggalkan grup secara mendadak mengindikasikan bahwa kamu membiarkan satu komentar negatif menghancurkan kepercayaan dirimu dan memutus hubungan dengan teman-teman lain yang mendukungmu.',
          dampakHubungan: 'Teman-teman kelas menjadi bingung dan merasa canggung berinteraksi denganmu, sementara masalah dengan Cindy tetap tidak terselesaikan.',
          rekomendasiTindakan: 'Bedakan antara opini subyektif satu orang yang kurang santun dengan kemampuan aslimu. Cari dukungan dari teman yang positif.'
        }
      },
      {
        id: 'C',
        tipe: 'asertif',
        badge: 'Tindakan Konstruktif & Asertif 🌟',
        teks: 'Di grup merespon santai: "Terima kasih masukannya Cindy. Seni memang soal selera, tapi aku lebih menghargai kritik yang membangun." Lalu jika masih mengganjal, hubungi Cindy secara privat untuk menyampaikan bahwa candaannya melukai perasaan.',
        umpanBalik: {
          judul: 'Pilihan Sangat Konstruktif & Berkelas! 🌟',
          isKonstruktif: true,
          analisis: 'Respon ini menunjukkan kedewasaan mental yang tinggi. Menunjukkan ketenangan di depan publik membungkam ejekan tanpa merendahkan diri sendiri, sekaligus mengedukasi anggota grup mengenai pentingnya kritik yang santun.',
          dampakHubungan: 'Nadia tetap dihormati oleh teman-teman kelas, dan Cindy mendapatkan batasan tegas bahwa perilakunya tidak bisa diterima sembarangan.',
          rekomendasiTindakan: 'Komunikasi privat setelahnya memungkinkan Cindy meminta maaf secara tulus tanpa rasa gengsi di depan teman-teman sekelas.'
        }
      }
    ]
  },
  {
    id: 'kasus-3',
    judul: 'Sahabat Dekat Tiba-tiba Menjauh (Ghosting)',
    kategori: 'Dinamika Persahabatan',
    tingkat: 'SMP / SMA',
    tokoh: 'Alif & Farel',
    latarBelakang: 'Alif dan Farel sudah bersahabat sejak kelas 7. Dua minggu belakangan, sejak kedatangan murid pindahan baru, Farel selalu istirahat dan pulang bersama murid baru tersebut.',
    skenarioCerita: 'Alif beberapa kali mengajak Farel mengobrol seperti biasa, namun Farel menjawab singkat dan tampak buru-buru menghindar. Alif merasa tersisihkan, sedih, dan cemburu.',
    pertanyaan: 'Sikap apa yang paling bijak dilakukan Alif untuk menjaga persahabatannya?',
    pilihan: [
      {
        id: 'A',
        tipe: 'agresif',
        badge: 'Tindakan Agresif / Membuat Status Sindiran',
        teks: 'Membuat postingan status media sosial dengan kalimat: "Sahabat lama gampang lupa diri ya pas dapet mainan baru, munafik banget!" agar dibaca oleh Farel.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Menyindir Pasif-Agresif)',
          isKonstruktif: false,
          analisis: 'Menyindir lewat media sosial adalah tindakan kekanak-kanakan yang hanya memperlebar jarak emosional dan memancing prasangka buruk.',
          dampakHubungan: 'Farel akan merasa tidak nyaman dan menjauh lebih jauh karena merasa Alif posesif serta gemar mengumbar masalah ke publik.',
          rekomendasiTindakan: 'Masalah persahabatan harus diselesaikan lewat tatap muka empat mata, bukan melalui panggung media sosial.'
        }
      },
      {
        id: 'B',
        tipe: 'pasif',
        badge: 'Tindakan Pasif / Silent Treatment',
        teks: 'Ikut mendiamkan Farel (silent treatment). Jika berpapasan di lorong sengaja memalingkan muka dan menganggap persahabatan mereka sudah resmi berakhir.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Asumsi Tanpa Klarifikasi)',
          isKonstruktif: false,
          analisis: 'Membalas sikap dingin dengan sikap dingin tidak menyelesaikan rasa sakit hati dan hanya membuat kedua belah pihak terjebak dalam kesimpulan sepihak yang belum tentu benar.',
          dampakHubungan: 'Persahabatan berharga selama bertahun-tahun bisa hilang begitu saja hanya karena kesalahpahaman yang tidak pernah dibicarakan.',
          rekomendasiTindakan: 'Hubungan yang baik membutuhkan keberanian untuk bertanya dan mendengarkan.'
        }
      },
      {
        id: 'C',
        tipe: 'asertif',
        badge: 'Tindakan Konstruktif & Asertif 🌟',
        teks: 'Menemui Farel saat jam istirahat: "Farel, boleh ngobrol sebentar berdua? Aku merasa akhir-akhir ini kita agak jarang ngobrol seperti dulu dan aku kangen masa-masa itu. Ada sesuatu yang mengganjal atau lagi ada hal yang bikin kamu sibuk?"',
        umpanBalik: {
          judul: 'Pilihan Sangat Konstruktif & Tulus! 🌟',
          isKonstruktif: true,
          analisis: 'Pendekatan ini tidak menuduh Farel atau menyalahkan murid baru. Alif secara jujur mengungkapkan rasa rindu persahabatan mereka dengan hangat dan memberikan ruang bagi Farel untuk menjelaskan kondisinya.',
          dampakHubungan: 'Membuka pintu dialog yang sehat. Seringkali teman baru diajak beradaptasi atas permintaan wali kelas atau ada hobi baru yang sedang mereka bahas bersama.',
          rekomendasiTindakan: 'Menyadari bahwa sahabat boleh memiliki teman-teman baru lain tanpa harus mengurangi rasa sayang dalam persahabatan lama.'
        }
      }
    ]
  },
  {
    id: 'kasus-4',
    judul: 'Rahasia Curhat yang Bocor ke Teman Lain',
    kategori: 'Kepercayaan & Batasan Pribadi',
    tingkat: 'SMP / SMA',
    tokoh: 'Siti & Maya',
    latarBelakang: 'Siti menceritakan rahasia pribadinya tentang masalah keluarganya hanya kepada Maya dengan kesepakatan kuat untuk tidak menceritakannya ke siapapun.',
    skenarioCerita: 'Saat jam istirahat di kantin, dua teman sekelas menghampiri Siti dan menanyakan perihal masalah keluarganya tersebut dengan nada ingin tahu. Siti sangat terkejut dan menyadari Maya telah membocorkan rahasianya.',
    pertanyaan: 'Tindakan apa yang mencerminkan kecerdasan emosional dan ketegasan asertif dari Siti?',
    pilihan: [
      {
        id: 'A',
        tipe: 'agresif',
        badge: 'Tindakan Agresif / Melabrak di Depan Teman',
        teks: 'Langsung menghampiri meja Maya, mengebrak meja dan berteriak: "Kamu pengkhianat bermuka dua! Gak tau malu ngomongin rahasiaku!"',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Reaksi Emosional Meluap)',
          isKonstruktif: false,
          analisis: 'Meskipun rasa kecewa Siti sangat valid, melabrak di tempat umum justru membuat seluruh kantin mengetahui bahwa ada masalah besar yang terjadi dan memperburuk situasi.',
          dampakHubungan: 'Membuat situasi menjadi tontonan banyak orang dan membuat penyelesaian masalah secara damai hampir mustahil tercapai.',
          rekomendasiTindakan: 'Tarik napas dalam-dalam. Kendalikan respon tubuhmu sebelum menghadapi orang yang mengecewakanmu.'
        }
      },
      {
        id: 'B',
        tipe: 'pasif',
        badge: 'Tindakan Pasif / Pura-pura Tidak Tahu',
        teks: 'Menghindar dari semua orang, pura-pura tidak mendengar di kantin, lalu menangis di toilet dan tidak mau lagi berteman dengan siapa pun seumur hidup.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Generalisasi Masalah)',
          isKonstruktif: false,
          analisis: 'Menyalahkan diri sendiri dan menganggap semua orang di dunia tidak bisa dipercaya (over-generalisasi) akan merugikan perkembangan sosialmu sendiri.',
          dampakHubungan: 'Maya tidak pernah menyadari kesalahannya yang fatal, dan Siti mengalami trauma pergaulan yang berlarut-larut.',
          rekomendasiTindakan: 'Kekecewaan terhadap satu orang tidak boleh menutup peluangmu menjalin hubungan sehat dengan orang lain yang tulus.'
        }
      },
      {
        id: 'C',
        tipe: 'asertif',
        badge: 'Tindakan Konstruktif & Asertif 🌟',
        teks: 'Menenangkan diri dulu. Setelah jam sekolah selesai, ajak Maya bicara di tempat tenang: "Maya, aku sangat kecewa dan terluka karena hal yang kuceritakan secara rahasia ternyata diketahui teman lain. Aku butuh penjelasanmu mengapa hal itu bisa terjadi."',
        umpanBalik: {
          judul: 'Pilihan Sangat Konstruktif & Bijaksana! 🌟',
          isKonstruktif: true,
          analisis: 'Siti menunjukkan batasan diri yang kokoh (strong personal boundaries). Dia berbicara saat emosinya sudah terkontrol, menyampaikan fakta pelanggaran kepercayaan dengan tegas, dan meminta pertanggungjawaban tanpa kekerasan fisik/verbal.',
          dampakHubungan: 'Memberikan ruang klarifikasi objektif dan menegaskan konsekuensi batasan: Maya menyadari batasannya, dan Siti berhak mengatur ulang tingkat kedekatan mereka.',
          rekomendasiTindakan: 'Setelah mendengar penjelasan Maya, Siti dapat memutuskan secara bijak apakah hubungan mereka tetap berlanjut sebagai teman biasa atau butuh waktu jeda.'
        }
      }
    ]
  },
  {
    id: 'kasus-5',
    judul: 'Bercanda Fisik (Body Shaming) yang Berulang',
    kategori: 'Penegakan Batasan Pribadi',
    tingkat: 'SMP / SMA',
    tokoh: 'Bagas & Gilang',
    latarBelakang: 'Gilang sering memanggil Bagas dengan sebutan yang menyinggung bentuk tubuh atau gaya berjalannya di depan teman-teman kelas dengan dalih "cuma bercanda akrab".',
    skenarioCerita: 'Bagas selalu merasa hatinya sakit dan tertekan setiap kali dipanggil dengan julukan tersebut, namun selama ini hanya ikut tersenyum canggung karena takut dicap kaku atau tidak asik dalam pergaulan.',
    pertanyaan: 'Bagaimana cara Bagas menghentikan pola candaan yang tidak sehat ini secara bermartabat?',
    pilihan: [
      {
        id: 'A',
        tipe: 'agresif',
        badge: 'Tindakan Agresif / Balas Mencela',
        teks: 'Mencari-cari kekurangan fisik Gilang atau mengejek nama orang tuanya saat jam pelajaran kosong agar Gilang merasakan hal yang sama.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Normalisasi Bullying)',
          isKonstruktif: false,
          analisis: 'Membalas ejekan dengan ejekan baru justru menormalkan budaya saling mengejek di lingkungan kelas dan memperparah iklim pertemanan.',
          dampakHubungan: 'Konflik terus bergulir tanpa henti dan dapat berujung pada perkelahian fisik jika salah satu pihak tidak terima.',
          rekomendasiTindakan: 'Hentikan siklus ejekan. Sikap tegas yang tenang jauh lebih berwibawa daripada membalas dengan hinaan serupa.'
        }
      },
      {
        id: 'B',
        tipe: 'pasif',
        badge: 'Tindakan Pasif / Pasrah & Tersenyum Palsu',
        teks: 'Tetap tersenyum dan ikut tertawa setiap dipanggil dengan julukan tersebut, meskipun saat pulang ke rumah menangis di kamar tidur.',
        umpanBalik: {
          judul: 'Pilihan Kurang Konstruktif (Memberi Lampu Hijau)',
          isKonstruktif: false,
          analisis: 'Ketika kamu tersenyum saat diejek, orang lain menganggap kamu menyukai atau tidak keberatan dengan julukan tersebut. Kamu secara tidak sengaja memberikan izin kepada orang lain untuk terus melukaimu.',
          dampakHubungan: 'Rasa percaya diri Bagas akan terus merosot, sementara Gilang tidak pernah belajar batasan empati dalam bercanda.',
          rekomendasiTindakan: 'Keberanian untuk berkata tidak adalah bentuk penghargaan tertinggi terhadap harga dirimu.'
        }
      },
      {
        id: 'C',
        tipe: 'asertif',
        badge: 'Tindakan Konstruktif & Asertif 🌟',
        teks: 'Hentikan senyum, tatap mata Gilang dengan tenang dan berwibawa: "Gilang, kita teman baik, tapi aku tidak nyaman dan tersinggung kalau kamu memanggilku begitu. Tolong panggil namaku saja ya. Aku menghargaimu, tolong hargai aku juga."',
        umpanBalik: {
          judul: 'Pilihan Sangat Konstruktif & Berani! 🌟',
          isKonstruktif: true,
          analisis: 'Pilihan ini adalah teladan komunikasi asertif yang sempurna. Bahasa tubuh yang tidak lagi tersenyum mengirimkan sinyal serius, diiringi kalimat tegas yang memisahkan antara persahabatan dan batasan perilaku yang tidak boleh dilanggar.',
          dampakHubungan: 'Teman yang baik akan langsung meminta maaf dan menyadari batasannya. Ini juga mengedukasi teman-teman lain di sekitar agar tidak mengulangi sebutan tersebut.',
          rekomendasiTindakan: 'Jika setelah ditegur secara tegas Gilang masih mengulanginya secara sengaja, perilaku ini sudah masuk ranah perundungan (bullying) dan berhak dilaporkan kepada Guru BK atau Wali Kelas.'
        }
      }
    ]
  }
];
