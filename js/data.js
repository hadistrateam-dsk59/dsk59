/**
 * DATA MOCK & KONFIGURASI SIM SEKOLAH
 * Berdasarkan Spesifikasi PRD v1.0
 */

const SIM_DATA = {
  // 1. Identitas Sekolah (PRD Section 4.18)
  school: {
    name: "SMA Negeri 1 Unggulan Nusantara",
    shortName: "SIM SMAN 1 Nusantara",
    brandTitle: "SIM Sekolah",
    tagline: "Sistem Informasi Manajemen Sekolah Terpadu",
    motto: "Membangun Generasi Cerdas, Berkarakter, dan Berdaya Saing Global",
    npsn: "20108924",
    accreditation: "A (Unggul - Skor 97)",
    address: "Jl. Pendidikan Luhur No. 45, Kompleks Edukasi Mandiri, Jakarta Selatan 12430",
    phone: "(021) 7890-1234",
    whatsapp: "+62 812-9876-5432",
    email: "info@sim-nusantara.sch.id",
    website: "https://sman1nusantara.sch.id",
    headmaster: {
      name: "Dr. H. Bambang Sujarwo, M.Pd.",
      nip: "19720315 199802 1 003",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      speechExcerpt: "Melalui implementasi SIM Sekolah berbasis digitalisasi terpadu, kami berkomitmen menghadirkan tata kelola akademik yang transparan, akuntabel, dan berpusat pada perkembangan holistik setiap peserta didik."
    },
    academicYear: "2026/2027",
    semester: "Semester Ganjil",
    operationalHours: "Senin – Jumat, 06.45 – 15.30 WIB",
    uptime: "99.98%",
    activeVersion: "v1.0.4 - Production Ready"
  },

  // 2. Statistik Utama (PRD Section 1.4 & 4.2)
  stats: [
    { id: "students", value: 1420, label: "Siswa Aktif Terdaftar", subtext: "Tersebar di 36 rombongan belajar", icon: "users", suffix: "+" },
    { id: "teachers", value: 86, label: "Guru & Tenaga Kependidikan", subtext: "100% tersertifikasi & kompeten", icon: "user-check", suffix: " Orang" },
    { id: "classes", value: 36, label: "Ruang Kelas & Smart Lab", subtext: "Dilengkapi fasilitas multimedia", icon: "layout-grid", suffix: " Ruang" },
    { id: "books", value: 12500, label: "Koleksi Buku & E-Library", subtext: "Ber-ISBN & terindeks digital", icon: "book-open", suffix: "+" },
    { id: "achievements", value: 248, label: "Prestasi Terverifikasi", subtext: "Tingkat Kota hingga Internasional", icon: "award", suffix: " Piala" },
    { id: "attendance", value: 99.4, label: "Tingkat Kehadiran Harian", subtext: "Tercatat real-time via sistem", icon: "check-circle", suffix: "%" }
  ],

  // 3. Modul Utama SIM Sekolah (PRD Section 2.1 & Bab 4)
  modules: [
    {
      id: "academic",
      title: "Manajemen Akademik & Jadwal",
      category: "Kurikulum & Kelas",
      icon: "graduation-cap",
      color: "blue",
      badge: "Modul Inti",
      shortDesc: "Kelola data siswa, guru, rombel kelas, kurikulum, dan penjadwalan anti-bentrok secara otomatis.",
      features: [
        "Data induk siswa & guru berfoto dengan NIS/NISN & NIP",
        "Penjadwalan cerdas deteksi bentrok ruang & guru",
        "Manajemen tahun ajaran, semester, dan mutasi kelas",
        "Cetak kartu pelajar & kartu guru dengan barcode"
      ]
    },
    {
      id: "attendance",
      title: "Absensi Presensi Real-Time",
      category: "Kedisiplinan",
      icon: "calendar-check",
      color: "emerald",
      badge: "Live Sync",
      shortDesc: "Pencatatan kehadiran harian dan per-jam pelajaran untuk siswa serta guru dengan rekap instan.",
      features: [
        "Pencatatan multi-status (Hadir, Sakit, Izin, Alpa, Dispensasi)",
        "Audit log perubahan data absensi mencegah manipulasi",
        "Rekap kehadiran otomatis mingguan, bulanan, & semesteran",
        "Notifikasi langsung pada portal siswa dan wali murid"
      ]
    },
    {
      id: "grading",
      title: "Sistem Penilaian & E-Rapor",
      category: "Evaluasi Pembelajaran",
      icon: "award",
      color: "amber",
      badge: "Kurikulum Merdeka",
      shortDesc: "Pengelolaan nilai tugas, kuis, PTS, PAS, pembobotan dinamis, hingga cetak laporan hasil belajar.",
      features: [
        "Input nilai massal berbasis spreadsheet maupun web form",
        "Kalkulasi nilai akhir transparan sesuai bobot mata pelajaran",
        "Fitur verifikasi & publikasi nilai sebelum dibuka ke siswa",
        "Ekspor E-Rapor siap cetak dalam format resmi PDF"
      ]
    },
    {
      id: "library",
      title: "Smart Library & Sirkulasi Buku",
      category: "Perpustakaan",
      icon: "library",
      color: "purple",
      badge: "Katalog ISBN",
      shortDesc: "Manajemen buku, e-katalog, transaksi peminjaman, pengembalian kilat, dan monitoring denda keterlambatan.",
      features: [
        "Pencarian buku cepat berdasarkan ISBN, judul, atau pengarang",
        "Validasi kuota & stok buku otomatis saat transaksi pinjam",
        "Deteksi jatuh tempo pengembalian & kalkulasi keterlambatan",
        "Riwayat literasi membaca per siswa dan guru terintegrasi"
      ]
    },
    {
      id: "achievements",
      title: "Portofolio Prestasi Siswa",
      category: "Bakat & Minat",
      icon: "trophy",
      color: "rose",
      badge: "Terverifikasi",
      shortDesc: "Dokumentasi rekam jejak juara siswa dari tingkat sekolah, kota, provinsi, nasional, hingga internasional.",
      features: [
        "Unggah bukti piagam, foto kejuaraan, & surat tugas resmi",
        "Alur verifikasi prestasi berjenjang oleh tim kesiswaan",
        "Kategori prestasi: Sains, Olahraga, Seni, & Keagamaan",
        "Ekspor portofolio prestasi untuk beasiswa & SNMPTN"
      ]
    },
    {
      id: "parent-portal",
      title: "Portal Edu-Connect Orang Tua",
      category: "Kemitraan Wali",
      icon: "heart-handshake",
      color: "cyan",
      badge: "Transparan",
      shortDesc: "Jembatan komunikasi interaktif antara pihak sekolah dan orang tua murid demi kemajuan anak.",
      features: [
        "Pantau riwayat absensi harian anak secara akurat",
        "Akses publikasi nilai rapor dan capaian akademik",
        "Informasi pengumuman sekolah dan kalender kegiatan",
        "Dukungan multi-anak dalam satu akun orang tua terpadu"
      ]
    },
    {
      id: "security",
      title: "Keamanan Ketat & Audit Log",
      category: "Infrastruktur & Data",
      icon: "shield-check",
      color: "indigo",
      badge: "RBAC Level 7",
      shortDesc: "Perlindungan data pribadi siswa dan guru dengan Role-Based Access Control dan audit trail lengkap.",
      features: [
        "7 level hak akses ketat (Super Admin hingga Orang Tua)",
        "Audit log mendetail: siapa, kapan, dan data apa yang diubah",
        "Perlindungan data sesuai kaidah UU Perlindungan Data Pribadi",
        "Mekanisme auto-backup database dan pemulihan berkala"
      ]
    },
    {
      id: "reports",
      title: "Laporan & Ekspor 1-Klik",
      category: "Administrasi Cepat",
      icon: "file-spreadsheet",
      color: "teal",
      badge: "PDF / Excel",
      shortDesc: "Generasi laporan komprehensif bagi Kepala Sekolah, Dinas Pendidikan, dan akreditasi sekolah.",
      features: [
        "Laporan statistik kehadiran, sebaran nilai, dan buku",
        "Ekspor data ke format Excel, CSV, dan PDF siap cetak",
        "Filter fleksibel per periode tanggal, kelas, atau mapel",
        "Dashboard visual interaktif dengan grafik analitik"
      ]
    }
  ],

  // 4. Pengalaman Berdasarkan Peran Pengguna (PRD Bab 3 RBAC)
  roles: [
    {
      id: "headmaster",
      roleName: "Kepala Sekolah",
      badge: "Eksekutif",
      tagline: "Monitoring Komprehensif & Pengambilan Keputusan Berbasis Data",
      description: "Kepala Sekolah memperoleh wawasan strategis kondisi sekolah secara real-time tanpa harus menunggu rekap fisik.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      capabilities: [
        "Dashboard analitik kehadiran siswa & guru hari ini",
        "Pemantauan grafik capaian rata-rata nilai per mata pelajaran",
        "Statistik prestasi sekolah dan aktivitas perpustakaan",
        "Melihat pengumuman penting & log aktivitas sekolah"
      ],
      quickStats: [
        { label: "Kehadiran Hari Ini", value: "98.8%" },
        { label: "Guru Mengajar", value: "82/86" },
        { label: "Prestasi Bulan Ini", value: "14 Juara" }
      ],
      previewSnippet: {
        title: "Executive Dashboard Preview",
        metric1: "Total Siswa: 1.420",
        metric2: "Kelulusan Rata-rata: 92.4",
        status: "Akreditasi: A Unggul (Aktif)"
      }
    },
    {
      id: "teacher",
      roleName: "Guru & Wali Kelas",
      badge: "Pendidik",
      tagline: "Efisiensi Administrasi Kelas & Penilaian Otomatis",
      description: "Membantu tenaga pendidik fokus mengajar dengan memangkas jam kerja manual untuk absensi dan rekap nilai rapor.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      capabilities: [
        "Presensi siswa per sesi jam pelajaran hanya dalam hitungan detik",
        "Input nilai tugas, kuis, dan ujian secara massal",
        "Melihat jadwal mengajar pribadi dan ruang kelas mingguan",
        "Khusus Wali Kelas: Kelola data 36 siswa bimbingan dan cetak e-rapor"
      ],
      quickStats: [
        { label: "Kelas Diampu", value: "5 Kelas" },
        { label: "Jam Mengajar", value: "24 JP/Minggu" },
        { label: "Nilai Terinput", value: "100% Lengkap" }
      ],
      previewSnippet: {
        title: "Teacher Portal Preview",
        metric1: "Jadwal Hari Ini: Fisika XII-IPA 1",
        metric2: "Presensi: 35 Hadir, 1 Sakit",
        status: "Nilai PTS: Siap Dipublikasikan"
      }
    },
    {
      id: "student",
      roleName: "Siswa",
      badge: "Peserta Didik",
      tagline: "Akses Jadwal, Nilai Mandiri, & Portofolio Digital",
      description: "Memberikan kemandirian bagi peserta didik untuk memantau progres akademik, jadwal belajar, dan catatan prestasi.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      capabilities: [
        "Lihat jadwal pelajaran mingguan dan tugas sekolah",
        "Cek rekap absensi kehadiran pribadi secara real-time",
        "Akses transkrip nilai dan capaian E-Rapor yang telah dirilis",
        "Pinjam buku perpustakaan & simpan rekam jejak sertifikat prestasi"
      ],
      quickStats: [
        { label: "IP Semester", value: "3.84" },
        { label: "Kehadiran", value: "99.2%" },
        { label: "Buku Dipinjam", value: "2 Buku" }
      ],
      previewSnippet: {
        title: "Student Portal Preview",
        metric1: "Kelas: XII MIPA 1 (NISN: 0067891234)",
        metric2: "Tugas Fisika: Selesai Dinilai (95)",
        status: "Status Akademik: Sangat Baik"
      }
    },
    {
      id: "parent",
      roleName: "Orang Tua / Wali",
      badge: "Wali Murid",
      tagline: "Transparansi Penuh Pendidikan Buah Hati Tercinta",
      description: "Orang tua selalu terhubung dengan sekolah. Tidak ada lagi kekhawatiran bolos sekolah atau ketertinggalan nilai ujian.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      capabilities: [
        "Notifikasi kehadiran anak setiap pagi saat bel masuk berbunyi",
        "Memantau nilai evaluasi belajar berkala langsung dari guru",
        "Menerima surat edaran dan pengumuman resmi sekolah",
        "Mendukung lebih dari satu anak dalam satu akun orang tua"
      ],
      quickStats: [
        { label: "Siswa Terhubung", value: "2 Anak" },
        { label: "Notifikasi Kehadiran", value: "Terkirim 07:05" },
        { label: "Status Rapor", value: "Terverifikasi" }
      ],
      previewSnippet: {
        title: "Parent Connect Preview",
        metric1: "Anak: Muhammad Rizky (XII-IPA 1)",
        metric2: "Presensi: Hadir (06.48 WIB)",
        status: "Undangan Rapat Wali: 12 Nov 2026"
      }
    },
    {
      id: "librarian",
      roleName: "Petugas Perpustakaan",
      badge: "Pustakawan",
      tagline: "Sirkulasi Buku Cepat & Inventaris Koleksi Akurat",
      description: "Mempermudah transaksi peminjaman buku ber-ISBN, pencatatan otomatis pengembalian, dan pelaporan denda.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      capabilities: [
        "Barcode scanner & ID buku untuk peminjaman instan dalam 5 detik",
        "Validasi kuota pinjam buku per siswa secara sistematis",
        "Daftar otomatis buku terlambat dan notifikasi jatuh tempo",
        "Laporan statistik buku terpopuler dan riwayat kunjungan"
      ],
      quickStats: [
        { label: "Buku Dipinjam", value: "148 Buku" },
        { label: "Kembali Hari Ini", value: "32 Buku" },
        { label: "Koleksi Aktif", value: "12.500 Judul" }
      ],
      previewSnippet: {
        title: "Smart Library System",
        metric1: "Peminjaman Hari Ini: 45 Transaksi",
        metric2: "Buku Terlambat: 4 Siswa (Notified)",
        status: "Katalog: Terindeks 100%"
      }
    },
    {
      id: "admin",
      roleName: "Super Admin & Operator",
      badge: "IT Operator",
      tagline: "Kendali Penuh, Keamanan Terjamin, & Tata Kelola Sistem",
      description: "Operator memiliki wewenang mengelola master data, hak akses pengguna, konfigurasi identitas sekolah, dan audit sistem.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      capabilities: [
        "Manajemen pengguna: buat akun, reset password, nonaktifkan akun",
        "Pengaturan tahun ajaran baru, semester, dan promosi kenaikan kelas",
        "Inspeksi log aktivitas lengkap untuk mencegah penyalahgunaan",
        "Prosedur pencadangan data otomatis (backup & restore data)"
      ],
      quickStats: [
        { label: "Total Akun", value: "1.540 User" },
        { label: "Audit Log Hari Ini", value: "1.280 Event" },
        { label: "Backup Status", value: "Tersimpan Aman" }
      ],
      previewSnippet: {
        title: "System Control Center",
        metric1: "Database Health: Optimal (14ms)",
        metric2: "Session Aktif: 412 Pengguna",
        status: "Security Patch: v1.0.4 Up-to-date"
      }
    }
  ],

  // 5. Prestasi Siswa Terkini (PRD Section 4.11)
  achievements: [
    {
      id: 1,
      title: "Medali Emas Olimpiade Sains Nasional (OSN) Bidang Fisika",
      student: "Ahmad Rayhan Al-Farizi",
      class: "XII MIPA 1",
      category: "sains",
      categoryLabel: "Sains & Teknologi",
      level: "Tingkat Nasional",
      levelBadge: "Nasional",
      organizer: "Puspresnas Kemendikbudristek RI",
      date: "Oktober 2026",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Juara 1 Lomba Debat Bahasa Inggris (ISDC)",
      student: "Clarissa Aurelia & Tim",
      class: "XI MIPA 3",
      category: "akademik",
      categoryLabel: "Akademik & Bahasa",
      level: "Tingkat Provinsi DKI Jakarta",
      levelBadge: "Provinsi",
      organizer: "Dinas Pendidikan DKI Jakarta",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Juara Umum Kejuaraan Karate Terbuka Pelajar Internasional",
      student: "Bintang Satria Pratama",
      class: "XI IPS 2",
      category: "olahraga",
      categoryLabel: "Olahraga",
      level: "Tingkat Internasional",
      levelBadge: "Internasional",
      organizer: "Asian Youth Karate Federation (AYKF)",
      date: "Agustus 2026",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Juara 2 Festival & Lomba Seni Siswa Nasional (FLS2N) Gitar Solo",
      student: "Naufal Dimas Pratama",
      class: "X MIPA 2",
      category: "seni",
      categoryLabel: "Seni & Budaya",
      level: "Tingkat Nasional",
      levelBadge: "Nasional",
      organizer: "Balai Pengembangan Talenta Indonesia",
      date: "Juli 2026",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Best Innovator - Indonesian Young Scientist Project",
      student: "Farah Salsabila & Kevin Arya",
      class: "XII MIPA 4",
      category: "sains",
      categoryLabel: "Sains & Teknologi",
      level: "Tingkat Nasional",
      levelBadge: "Nasional",
      organizer: "Indonesian Science Association",
      date: "Juni 2026",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Juara 1 Basket Putra DBL Regional Championship",
      student: "Tim Basket Putra SMA 1",
      class: "X - XII Gabungan",
      category: "olahraga",
      categoryLabel: "Olahraga",
      level: "Tingkat Provinsi",
      levelBadge: "Provinsi",
      organizer: "Development Basketball League",
      date: "Mei 2026",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80"
    }
  ],

  // 6. Pengumuman & Berita Sekolah Terkini (PRD Section 4.14 & 5.1)
  news: [
    {
      id: "ann-01",
      title: "Pelaksanaan Penilaian Tengah Semester (PTS) Ganjil T.A 2026/2027",
      category: "Akademik",
      date: "28 Oktober 2026",
      author: "Wakasek Bidang Kurikulum",
      excerpt: "Diberitahukan kepada seluruh siswa dan wali murid bahwa pelaksanaan PTS Ganjil akan dimulai pada 10 November 2026 menggunakan SIM Sekolah.",
      content: `Diberitahukan kepada seluruh peserta didik, bapak/ibu guru, serta orang tua/wali siswa kelas X, XI, dan XII bahwa pelaksanaan Penilaian Tengah Semester (PTS) Ganjil Tahun Ajaran 2026/2027 akan diselenggarakan mulai tanggal 10 hingga 20 November 2026.
      
Ketentuan Ujian:
1. Jadwal detail setiap mata pelajaran dapat diakses langsung melalui portal SIM Sekolah pada menu 'Jadwal Pelajaran'.
2. Peserta didik wajib menyelesaikan presensi kehadiran minimal 90% sebelum pekan ujian dimulai.
3. Orang tua dimohon memantau kesiapan belajar anak melalui menu 'Nilai & Progres' di portal Edu-Connect.
4. Kartu peserta ujian digital dapat diunduh langsung melalui akun siswa masing-masing.`
    },
    {
      id: "ann-02",
      title: "Peresmian Smart E-Library & Penambahan 1.500 Judul Buku Referensi",
      category: "Perpustakaan",
      date: "24 Oktober 2026",
      author: "Kepala Perpustakaan",
      excerpt: "Perpustakaan sekolah kini terintegrasi penuh dengan modul Smart Library SIM Sekolah untuk peminjaman cepat dan akses katalog online.",
      content: `Alhamdulillah, per tanggal 24 Oktober 2026, perpustakaan SMA Negeri 1 Unggulan Nusantara telah resmi mengintegrasikan sistem inventaris dengan modul Smart Library SIM Sekolah.

Keunggulan Sistem Baru:
- Siswa dan guru dapat mencari ketersediaan buku fisik maupun e-book melalui gawai masing-masing.
- Transaksi peminjaman kini menggunakan sistem scan QR code kartu pelajar digital.
- Fitur notifikasi pengingat pengembalian otomatis akan masuk ke akun siswa 2 hari sebelum jatuh tempo.
- Koleksi buku telah ditambah sebanyak 1.500 eksemplar buku sains, sastra, dan teknologi terkini.`
    },
    {
      id: "ann-03",
      title: "Sosialisasi Portal Edu-Connect untuk Orang Tua / Wali Siswa Baru",
      category: "Kesiswaan",
      date: "18 Oktober 2026",
      author: "Bidang Hubungan Masyarakat",
      excerpt: "Panduan login dan aktivasi akun orang tua untuk memantau presensi harian serta capaian akademik putra/putri.",
      content: `Menindaklanjuti transformasi digital sekolah, kami mengundang bapak/ibu orang tua/wali peserta didik untuk mengaktifkan akun resmi di Portal SIM Sekolah (Edu-Connect).

Melalui portal ini, orang tua dapat:
1. Memantau absensi jam masuk dan jam pulang anak secara real-time.
2. Melihat nilai tugas, ulangan harian, dan e-rapor berkala.
3. Mendapatkan surat pengumuman resmi dan agenda kegiatan sekolah langsung tanpa risiko tertinggal.

Kredensial login awal telah dibagikan melalui wali kelas masing-masing. Harap segera memperbarui kata sandi demi keamanan data.`
    }
  ],

  // 7. Fasilitas Sekolah Unggulan (PRD Section 5.1)
  facilities: [
    {
      title: "Laboratorium Komputer & AI",
      desc: "40 unit PC workstation mutakhir berkecepatan gigabit untuk pembelajaran informatika, riset sains, dan simulasi komputasi.",
      icon: "monitor",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Smart Classroom Multimedia",
      desc: "Ruang kelas modern ber-AC dilengkapi Interactive Flat Panel 75 inci dan sound system terintegrasi untuk pembelajaran interaktif.",
      icon: "tv",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Perpustakaan Digital (E-Library)",
      desc: "Ruang baca nyaman berkapasitas 150 pembaca dengan e-katalog mandiri, area diskusi, dan ribuan literatur ilmiah.",
      icon: "book-open",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sport Hall & Gelanggang Seni",
      desc: "Lapangan indoor basket, futsal, bulutangkis, panggung seni teater, serta sanggar musik berstandar kejuaraan daerah.",
      icon: "dribbble",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // 8. FAQ Seputar SIM Sekolah (PRD Section 1 & 6)
  faqs: [
    {
      q: "Apa itu SIM Sekolah dan siapa saja yang dapat mengaksesnya?",
      a: "SIM Sekolah adalah aplikasi web terpadu yang memadukan administrasi akademik, absensi cerdas, penilaian e-rapor, perpustakaan, hingga log aktivitas dalam satu sistem. Pengguna memiliki hak akses sesuai perannya: Super Admin, Kepala Sekolah, Guru & Wali Kelas, Petugas Perpustakaan, Siswa, dan Orang Tua/Wali."
    },
    {
      q: "Bagaimana cara orang tua/wali memantau absensi dan nilai anak?",
      a: "Orang tua diberikan kredensial akun khusus yang terhubung secara aman dengan data siswa bersangkutan. Setelah login, orang tua dapat langsung melihat rekap absensi harian secara real-time, nilai ujian yang telah dipublikasikan guru, serta pengumuman sekolah."
    },
    {
      q: "Apakah SIM Sekolah dapat diakses melalui ponsel atau tablet?",
      a: "Ya. SIM Sekolah dirancang dengan antarmuka yang 100% responsif dan ringan, sehingga dapat diakses dengan nyaman melalui browser pada desktop, laptop, tablet iPad/Android, maupun smartphone."
    },
    {
      q: "Bagaimana sistem menjamin keamanan dan privasi data siswa & guru?",
      a: "Sistem menerapkan Role-Based Access Control (RBAC) ketat. Siswa atau orang tua tidak dapat melihat data siswa lain. Guru hanya dapat mengubah nilai mata pelajaran yang diampunya. Setiap transaksi data penting tercatat dalam audit log yang tidak dapat diubah oleh pengguna biasa."
    },
    {
      q: "Apakah sistem perpustakaan terhubung dengan kartu siswa?",
      a: "Ya. Nomor anggota perpustakaan dan NIS siswa terintegrasi. Petugas perpustakaan cukup melakukan scan barcode atau memasukkan NIS untuk memproses peminjaman buku dalam waktu kurang dari 5 detik."
    }
  ],

  // 9. Quick Demo Login Presets (Untuk Uji Coba Interaktif Frontend)
  demoAccounts: [
    { role: "Kepala Sekolah", user: "kepsek@sim-nusantara.sch.id", pass: "kepsek2026", roleKey: "headmaster", name: "Dr. H. Bambang Sujarwo, M.Pd." },
    { role: "Guru / Wali Kelas", user: "guru.fisika@sim-nusantara.sch.id", pass: "guru2026", roleKey: "teacher", name: "Dra. Sri Wahyuni, M.Si." },
    { role: "Siswa", user: "siswa.rayhan@sim-nusantara.sch.id", pass: "siswa2026", roleKey: "student", name: "Ahmad Rayhan Al-Farizi (XII-MIPA 1)" },
    { role: "Orang Tua / Wali", user: "wali.rayhan@gmail.com", pass: "wali2026", roleKey: "parent", name: "Ir. Hendra Al-Farizi (Wali Murid)" },
    { role: "Petugas Perpustakaan", user: "pustaka@sim-nusantara.sch.id", pass: "pustaka2026", roleKey: "librarian", name: "Dewi Lestari, S.I.Pust." },
    { role: "Super Admin", user: "admin@sim-nusantara.sch.id", pass: "admin2026", roleKey: "admin", name: "Administrator Utama (IT)" }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.SIM_DATA = SIM_DATA;
}

