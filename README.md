# SIM Sekolah — Frontend Landing Page

Landing Page publik dan gerbang portal resmi **Sistem Informasi Manajemen Sekolah (SIM Sekolah)** yang dibangun murni di sisi **Frontend (Frontend Only)** berdasarkan dokumen spesifikasi lengkap [prd.md](./prd.md).

---

## 🌟 Fitur Utama & Kesesuaian dengan PRD

Sesuai dengan **Bab 5.1 (Homepage Publik)** dan modul-modul terkait dalam PRD:

1. **Top Announcement & Academic Status Bar** (PRD 4.18 & 5.1):
   - Status Uptime sistem (99.98%), indikator live pulse.
   - Tahun Ajaran Aktif: **2026/2027 • Semester Ganjil**.
   - Jam operasional & kalender waktu lokal real-time.
   - NPSN: 20108924 & Akreditasi A (Unggul).

2. **Hero Section Interaktif** (PRD 5.1):
   - Headline digitalisasi tata kelola sekolah.
   - Mockup visual dashboard sekolah real-time lengkap dengan mini status kehadiran siswa, statistik guru aktif, dan live activity log.
   - Tombol Call-to-Action: Akses Portal Login, Eksplorasi Modul, dan Simulasi Peran.

3. **Statistik Terpusat dengan Counter Beranimasi** (PRD 1.4 & 4.2):
   - Siswa aktif: 1.420+
   - Guru & staf: 86 Orang
   - Ruang kelas & Smart Lab: 36 Ruang
   - Koleksi E-Library: 12.500+ Buku ber-ISBN
   - Prestasi Terverifikasi: 248 Piala
   - Tingkat Kehadiran Harian: 99.4%

4. **Sambutan Kepala Sekolah & Profil 4 Pilar** (PRD 5.1):
   - Sambutan resmi Dr. H. Bambang Sujarwo, M.Pd.
   - Profil Visi-Misi sekolah dan nilai-nilai keunggulan (Akuntabilitas, Kurikulum Merdeka, Literasi Digital, Kemitraan Orang Tua).

5. **Katalog 8 Modul Inti SIM Sekolah** (PRD Bab 4):
   - Manajemen Akademik & Jadwal Anti-Bentrok
   - Absensi Presensi Siswa & Guru Real-Time
   - Sistem Penilaian & E-Rapor Kurikulum Merdeka
   - Smart E-Library & Sirkulasi Buku
   - Portofolio Prestasi Siswa Terverifikasi
   - Portal Edu-Connect Orang Tua / Wali
   - Keamanan Ketat, RBAC, & Audit Trail
   - Laporan & Ekspor Dokumen 1-Klik

6. **Interactive Role-Based Access Control (RBAC) Simulator** (PRD Bab 3):
   - Tab interaktif untuk 6 peran pengguna:
     - **Kepala Sekolah**: Dashboard analitik eksekutif.
     - **Guru & Wali Kelas**: Presensi sesi, input nilai massal, rapor kelas.
     - **Siswa**: Jadwal, transkrip nilai mandiri, riwayat baca perpustakaan.
     - **Orang Tua / Wali**: Notifikasi presensi harian, nilai anak, pengumuman.
     - **Petugas Perpustakaan**: Barcode scanner kilat, stok buku, deteksi denda.
     - **Super Admin & Operator**: Tata kelola user, master data, audit log.

7. **Katalog Prestasi Siswa dengan Filter Kategori** (PRD 4.11):
   - Filter tab: Semua, Sains & Teknologi, Olahraga, Seni & Budaya, Akademik.
   - Lengkap dengan nama siswa, kelas, tingkat lomba (Nasional, Internasional, Provinsi), penyelenggara, dan foto dokumentasi.

8. **Fasilitas Pembelajaran Modern** (PRD 5.1):
   - Lab Komputer & AI, Smart Classroom IFP, Perpustakaan Digital, Sport Hall & Gelanggang Seni.

9. **Warta, Pengumuman & Kalender Akademik** (PRD 4.14):
   - Berita terkini sekolah dengan modal detail interaktif.
   - Widget Kalender Akademik Semester Ganjil 2026/2027 (PTS, Hari Guru, PAS, Pembagian Rapor).

10. **Standar Keamanan & Kepatuhan Data** (PRD Bab 6):
    - Penjelasan hashing kata sandi, audit log, auto-backup, dan verifikasi otorisasi di server.

11. **FAQ Interaktif (Accordion)**:
    - Tanya jawab seputar sistem dan hak akses akun.

12. **Formulir Hubungi Kami & Tata Usaha** (PRD 4.18):
    - Validasi interaktif dengan feedback toast alert.

13. **Simulasi Login Portal SIM Sekolah** (PRD 4.1):
    - Modal login dengan tombol preset 1-klik untuk mencoba akun Kepala Sekolah, Guru, Siswa, Orang Tua, Pustakawan, dan Admin.
    - Dilengkapi fitur show/hide password, loading state indikator, serta popup simulasi dashboard peran pengguna yang berhasil masuk.

---

## 🚀 Cara Menjalankan Aplikasi (Frontend Only)

Aplikasi ini tidak memerlukan instalasi dependensi luar atau kompilasi rumit karena menggunakan arsitektur web modern (HTML5, Tailwind CSS via CDN, Lucide Icons, dan Modular Vanilla JavaScript).

### Opsi 1: Langsung Buka di Browser (Paling Cepat)
Cukup buka berkas `index.html` langsung dengan klik dua kali (double-click) di File Explorer atau buka via peramban Anda (Chrome, Edge, Firefox, Safari):
```
file:///c:/Users/HADISTRA/Documents/DSK59/index.html
```

### Opsi 2: Menggunakan Node.js Built-in Server (Port 3000)
Jalankan perintah berikut pada terminal:
```bash
node server.js
```
Lalu buka: [http://localhost:3000](http://localhost:3000)

### Opsi 3: Menggunakan Python (Jika Diinginkan)
```bash
python -m http.server 3000
```
Lalu buka: [http://localhost:3000](http://localhost:3000)

---

## 📁 Struktur Berkas

```
DSK59/
├── index.html           # Halaman landing page utama yang responsif & semantik
├── css/
│   └── styles.css       # Styling kustom (glassmorphism, anim float, custom scrollbar)
├── js/
│   ├── data.js          # Mock data komprehensif sesuai PRD v1.0
│   └── app.js           # Logika interaktif (tabs, filter, modal login, counter, toast)
├── assets/              # Direktori aset gambar & ikon
├── server.js            # Server statis lokal zero-dependency Node.js
├── package.json         # Konfigurasi npm script ("npm start")
├── prd.md               # Dokumen Product Requirements Document (PRD)
└── README.md            # Dokumentasi panduan
```

