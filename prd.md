# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## SISTEM INFORMASI MANAJEMEN SEKOLAH (SIM SEKOLAH)

**Versi:** 1.0
**Status:** Draft untuk pengembangan
**Bahasa aplikasi:** Bahasa Indonesia
**Platform:** Web responsif
**Pengguna utama:** Admin sekolah, kepala sekolah, guru, wali kelas, petugas perpustakaan, siswa, dan orang tua/wali.

---

# 1. RINGKASAN PRODUK

## 1.1 Nama Produk

Sistem Informasi Manajemen Sekolah (SIM Sekolah).

## 1.2 Deskripsi Produk

SIM Sekolah adalah aplikasi berbasis web yang dirancang untuk mengintegrasikan pengelolaan administrasi, akademik, kepegawaian, absensi, penilaian, prestasi, serta perpustakaan dalam satu sistem.

Aplikasi menyediakan dashboard informatif sesuai peran pengguna, pengelolaan data dengan foto, laporan yang dapat dicetak atau diunduh, serta pencatatan aktivitas untuk meningkatkan keamanan dan akuntabilitas.

Sistem harus dibangun sebagai aplikasi **full-stack**, bukan sekadar tampilan frontend.

## 1.3 Permasalahan yang Ingin Diselesaikan

1. Data siswa dan guru tersimpan di berbagai tempat.
2. Pencatatan absensi masih dilakukan secara manual.
3. Pengelolaan nilai dan prestasi siswa belum terintegrasi.
4. Data buku dan transaksi peminjaman perpustakaan sulit dipantau.
5. Pembuatan laporan memerlukan waktu lama.
6. Aktivitas pengguna dan perubahan data sulit ditelusuri.
7. Kepala sekolah membutuhkan informasi kondisi sekolah secara cepat.
8. Hak akses pengguna perlu dibatasi sesuai tugas dan tanggung jawab.

## 1.4 Tujuan Produk

* Memusatkan data sekolah dalam satu database.
* Mempermudah administrasi siswa dan guru.
* Meningkatkan ketepatan pencatatan absensi.
* Mempermudah pengelolaan nilai dan prestasi.
* Mengelola inventaris buku dan peminjaman perpustakaan.
* Menyediakan laporan yang akurat dan mudah diakses.
* Menampilkan informasi sekolah melalui dashboard.
* Menyediakan kontrol akses dan riwayat aktivitas.
* Mengurangi pekerjaan administratif yang berulang.

## 1.5 Indikator Keberhasilan

Produk dianggap memenuhi tujuan awal apabila:

* Seluruh modul utama dapat digunakan sesuai hak akses.
* Data yang disimpan tetap tersedia setelah pengguna keluar dan masuk kembali.
* Setiap proses tambah, lihat, ubah, dan hapus data berjalan melalui backend dan database.
* Foto siswa dan guru dapat diunggah serta ditampilkan dengan benar.
* Absensi, nilai, dan transaksi perpustakaan dapat dicatat serta dilaporkan.
* Dashboard menampilkan data aktual dari database.
* Aktivitas penting pengguna tercatat.
* Tidak ada pengguna yang dapat mengakses fitur terlarang hanya dengan mengubah URL atau memanggil API secara langsung.
* Aplikasi dapat digunakan melalui desktop, tablet, dan ponsel.

---

# 2. RUANG LINGKUP PRODUK

## 2.1 Fitur yang Termasuk dalam Versi 1

1. Login dan autentikasi.
2. Manajemen pengguna dan hak akses.
3. Dashboard berdasarkan peran pengguna.
4. Log aktivitas dan audit perubahan data.
5. Manajemen data siswa beserta foto.
6. Manajemen data guru beserta foto.
7. Manajemen kelas dan tahun ajaran.
8. Manajemen mata pelajaran.
9. Jadwal pelajaran.
10. Absensi siswa.
11. Absensi guru.
12. Pengelolaan nilai siswa.
13. Pengelolaan prestasi siswa.
14. Manajemen buku perpustakaan.
15. Data anggota perpustakaan.
16. Transaksi peminjaman dan pengembalian buku.
17. Data orang tua/wali.
18. Pengumuman sekolah.
19. Notifikasi.
20. Laporan dan ekspor data.
21. Pengaturan identitas sekolah.
22. Pencarian data.
23. Pengelolaan foto dan dokumen.
24. Pengaturan tahun ajaran dan semester.
25. Backup dan pemeliharaan data.

## 2.2 Fitur di Luar Cakupan Awal

Fitur berikut dapat direncanakan untuk versi berikutnya:

* Pembayaran SPP dan keuangan sekolah.
* Integrasi WhatsApp Gateway.
* Integrasi SMS.
* Aplikasi Android atau iOS khusus.
* Presensi biometrik.
* Integrasi perangkat fingerprint.
* Pembelajaran daring dan ujian online.
* Integrasi sistem eksternal pemerintah.
* Penggajian guru.
* Manajemen inventaris fasilitas sekolah secara menyeluruh.

Fitur di luar cakupan awal tidak boleh menghambat penyelesaian modul utama.

---

# 3. JENIS PENGGUNA DAN HAK AKSES

Sistem harus menerapkan Role-Based Access Control (RBAC).

## 3.1 Super Admin

Hak akses:

* Mengelola seluruh pengguna.
* Mengatur peran dan izin akses.
* Mengakses seluruh modul.
* Mengatur identitas sekolah.
* Mengelola konfigurasi sistem.
* Melihat log aktivitas.
* Menjalankan atau mengelola proses backup sesuai kewenangan.
* Mengelola tahun ajaran dan semester.
* Mengakses laporan keseluruhan.

## 3.2 Admin atau Operator Sekolah

Hak akses:

* Mengelola data siswa dan guru.
* Mengelola kelas dan mata pelajaran.
* Mengelola jadwal.
* Mengelola absensi sesuai kewenangan.
* Mengelola pengumuman.
* Melihat dan membuat laporan.
* Mengelola data akademik yang diizinkan.

Admin tidak otomatis memiliki hak untuk mengubah konfigurasi keamanan atau mengelola seluruh izin Super Admin.

## 3.3 Kepala Sekolah

Hak akses:

* Melihat dashboard sekolah.
* Melihat statistik siswa dan guru.
* Memantau absensi.
* Memantau nilai dan prestasi.
* Melihat laporan akademik.
* Melihat laporan perpustakaan.
* Melihat pengumuman dan aktivitas penting.

Hak mengubah data dibatasi sesuai kebijakan sekolah.

## 3.4 Guru

Hak akses:

* Melihat profil sendiri.
* Melihat kelas dan mata pelajaran yang ditugaskan.
* Mengisi absensi siswa pada kelas atau pelajaran yang menjadi tanggung jawabnya.
* Memasukkan dan memperbarui nilai sesuai kewenangan.
* Mencatat prestasi siswa apabila diizinkan.
* Melihat jadwal mengajar.
* Melihat laporan pembelajaran yang relevan.

Guru tidak boleh mengubah nilai milik guru lain tanpa izin khusus.

## 3.5 Wali Kelas

Hak akses:

* Melihat data siswa dalam kelas binaannya.
* Memantau absensi siswa.
* Melihat nilai seluruh mata pelajaran siswa di kelasnya sesuai izin.
* Memantau prestasi.
* Membuat laporan kelas.
* Mengelola catatan siswa sesuai kebijakan sekolah.

## 3.6 Petugas Perpustakaan

Hak akses:

* Mengelola data buku.
* Mengelola kategori buku.
* Mengelola anggota perpustakaan.
* Mencatat peminjaman.
* Mencatat pengembalian.
* Memantau keterlambatan.
* Melihat laporan transaksi.

## 3.7 Siswa

Hak akses:

* Melihat profil sendiri.
* Melihat jadwal pelajaran.
* Melihat absensi sendiri.
* Melihat nilai yang telah dipublikasikan.
* Melihat prestasi sendiri.
* Melihat pengumuman.
* Melihat riwayat perpustakaan sendiri.

## 3.8 Orang Tua atau Wali

Hak akses:

* Melihat data anak yang terhubung dengan akunnya.
* Melihat absensi anak.
* Melihat nilai yang telah dipublikasikan.
* Melihat jadwal dan pengumuman.
* Melihat informasi prestasi anak.
* Melihat informasi peminjaman perpustakaan anak jika diizinkan.

Orang tua tidak boleh mengakses data siswa lain.

## 3.9 Aturan Hak Akses

* Hak akses diperiksa di backend, bukan hanya pada tampilan frontend.
* Setiap pengguna hanya boleh mengakses data sesuai peran dan cakupan tanggung jawabnya.
* Pengguna tidak dapat menaikkan hak akses sendiri.
* Perubahan peran harus dicatat dalam log.
* Akun yang dinonaktifkan tidak boleh digunakan untuk login.
* Perubahan izin penting harus dapat ditelusuri.

---

# 4. KEBUTUHAN FUNGSIONAL

## 4.1 Modul Login dan Autentikasi

### Tujuan

Memastikan hanya pengguna yang terdaftar dan berwenang yang dapat mengakses aplikasi.

### Fitur

* Login menggunakan username atau email dan kata sandi.
* Menampilkan logo serta nama sekolah.
* Tombol tampil/sembunyikan kata sandi.
* Validasi input.
* Pesan kesalahan yang jelas.
* Indikator proses login.
* Logout.
* Pengelolaan sesi.
* Pemulihan kata sandi melalui mekanisme yang aman.
* Pembatasan percobaan login.
* Pengalihan ke dashboard sesuai peran.

### Kriteria Penerimaan

* Pengguna dengan kredensial valid dapat masuk.
* Pengguna dengan kredensial salah menerima pesan yang sesuai.
* Akun nonaktif tidak dapat login.
* Pengguna tidak dapat mengakses halaman yang memerlukan autentikasi tanpa login.
* Sesi dapat berakhir sesuai kebijakan keamanan.
* Logout mengakhiri sesi dengan benar.
* Kata sandi tidak pernah disimpan dalam bentuk teks biasa.

---

## 4.2 Modul Dashboard

### Tujuan

Menampilkan informasi sekolah yang relevan secara ringkas dan mudah dipahami.

### Komponen

**Kartu statistik:**

* Total siswa aktif.
* Total guru aktif.
* Total kelas.
* Total mata pelajaran.
* Jumlah kehadiran siswa hari ini.
* Jumlah guru yang hadir hari ini.
* Total buku perpustakaan.
* Buku yang sedang dipinjam.
* Buku yang terlambat dikembalikan.
* Total prestasi siswa pada periode terpilih.

**Visualisasi:**

* Distribusi siswa per kelas.
* Rekap absensi siswa.
* Rekap absensi guru.
* Grafik nilai berdasarkan periode.
* Grafik prestasi.
* Statistik peminjaman buku.

**Informasi tambahan:**

* Pengumuman terbaru.
* Kalender akademik.
* Aktivitas terbaru.
* Daftar buku terlambat.
* Prestasi terbaru.
* Tombol akses cepat.

### Aturan

* Statistik harus dihitung dari database.
* Data harus mengikuti tahun ajaran dan rentang tanggal yang dipilih.
* Setiap peran melihat informasi yang sesuai dengan kewenangannya.
* Dashboard tidak boleh menggunakan angka statis sebagai data produksi.
* Jika data belum tersedia, tampilkan keadaan kosong yang informatif.

### Kriteria Penerimaan

Dashboard menampilkan data aktual dan berubah setelah data sumber diperbarui.

---

## 4.3 Modul Manajemen Siswa

### Data Siswa

* NIS.
* NISN jika tersedia.
* Nama lengkap.
* Foto.
* Jenis kelamin.
* Tempat lahir.
* Tanggal lahir.
* Agama jika diperlukan oleh kebijakan sekolah.
* Alamat.
* Nomor telepon jika tersedia.
* Email jika tersedia.
* Kelas.
* Program atau jurusan jika relevan.
* Tahun masuk.
* Status siswa.
* Data orang tua/wali.
* Catatan administratif.

Data sensitif yang tidak dibutuhkan untuk proses sekolah sebaiknya tidak dikumpulkan. Akses terhadap data pribadi harus dibatasi.

### Fitur

* Tambah siswa.
* Lihat detail siswa.
* Edit data siswa.
* Nonaktifkan siswa.
* Unggah atau ganti foto.
* Cari siswa.
* Filter berdasarkan kelas, status, dan tahun masuk.
* Urutkan data.
* Pagination.
* Impor data.
* Ekspor data.
* Cetak kartu siswa.
* Lihat riwayat akademik.

### Detail Siswa

Halaman detail memuat tab:

1. Biodata.
2. Orang tua/wali.
3. Absensi.
4. Nilai.
5. Jadwal.
6. Prestasi.
7. Riwayat perpustakaan.
8. Riwayat perubahan data sesuai izin.

### Kriteria Penerimaan

* Data siswa tersimpan di database.
* Foto dapat diunggah dan ditampilkan.
* Sistem memvalidasi format dan ukuran foto.
* NIS harus mengikuti aturan keunikan yang ditetapkan sekolah.
* Data siswa dapat dicari dan difilter.
* Riwayat akademik tetap tersedia ketika siswa lulus atau pindah, sesuai kebijakan retensi data.

---

## 4.4 Modul Manajemen Guru

### Data Guru

* NIP atau nomor identitas kepegawaian jika tersedia.
* NUPTK jika tersedia.
* Nama lengkap.
* Foto.
* Jenis kelamin.
* Tempat dan tanggal lahir jika diperlukan.
* Alamat.
* Nomor telepon.
* Email.
* Pendidikan terakhir.
* Jabatan.
* Status kepegawaian.
* Mata pelajaran yang diampu.
* Tanggal mulai bertugas.
* Status aktif atau nonaktif.

### Fitur

* Tambah, lihat, ubah, dan nonaktifkan data guru.
* Unggah foto.
* Pencarian dan filter.
* Impor dan ekspor.
* Cetak kartu guru.
* Lihat jadwal mengajar.
* Lihat riwayat absensi.
* Lihat kelas yang menjadi tanggung jawabnya.

### Kriteria Penerimaan

Data guru dapat dikelola melalui antarmuka dan backend, serta hanya dapat diubah oleh pengguna yang berwenang.

---

## 4.5 Modul Kelas dan Tahun Ajaran

### Data Kelas

* Nama kelas.
* Tingkat.
* Program atau jurusan jika relevan.
* Tahun ajaran.
* Wali kelas.
* Ruang kelas.
* Kapasitas.
* Status kelas.

### Fitur

* Membuat kelas.
* Mengubah informasi kelas.
* Menentukan wali kelas.
* Memasukkan siswa ke kelas.
* Memindahkan siswa.
* Melihat daftar siswa.
* Melihat absensi dan jadwal kelas.
* Mengarsipkan kelas yang sudah tidak aktif.

### Tahun Ajaran

Sistem mendukung beberapa tahun ajaran dan semester.

Contoh:

* Tahun ajaran 2026/2027.
* Semester ganjil.
* Semester genap.

Data historis tidak boleh berubah secara otomatis hanya karena tahun ajaran aktif berganti.

---

## 4.6 Modul Mata Pelajaran

### Data

* Kode mata pelajaran.
* Nama mata pelajaran.
* Kelompok mata pelajaran.
* Tingkat kelas.
* Guru pengampu.
* Jumlah jam pelajaran.
* Status aktif.

### Fitur

* CRUD mata pelajaran.
* Penugasan guru.
* Pengaturan kelas yang mengikuti mata pelajaran.
* Pencarian dan filter.
* Pengaturan berdasarkan tahun ajaran.

### Kriteria Penerimaan

Mata pelajaran dapat dikaitkan dengan kelas, guru, jadwal, absensi, dan nilai.

---

## 4.7 Modul Jadwal Pelajaran

### Data

* Hari.
* Jam mulai.
* Jam selesai.
* Kelas.
* Mata pelajaran.
* Guru.
* Ruangan.
* Tahun ajaran dan semester.

### Fitur

* Membuat jadwal.
* Mengubah jadwal.
* Menghapus atau membatalkan jadwal sesuai izin.
* Tampilan jadwal mingguan.
* Filter berdasarkan kelas dan guru.
* Pemeriksaan bentrok jadwal.

### Aturan

Sistem perlu mendeteksi bentrok guru, ruangan, atau kelas pada waktu yang sama.

Pengecualian harus mengikuti kebijakan sekolah dan tidak boleh diabaikan secara diam-diam.

---

## 4.8 Modul Absensi Siswa

### Status Absensi

* Hadir.
* Sakit.
* Izin.
* Alpa.
* Dispensasi.

Sekolah dapat menyesuaikan kategori absensi melalui pengaturan.

### Data Absensi

* Siswa.
* Kelas.
* Mata pelajaran atau sesi.
* Guru pencatat.
* Tanggal.
* Jam atau sesi pelajaran.
* Status kehadiran.
* Catatan.
* Waktu pencatatan.

### Fitur

* Absensi harian.
* Absensi per jam pelajaran.
* Pencatatan satu kelas sekaligus.
* Perubahan status sesuai izin.
* Rekap mingguan.
* Rekap bulanan.
* Rekap semester.
* Filter kelas, siswa, tanggal, dan status.
* Ekspor PDF dan Excel.
* Riwayat perubahan absensi.

### Aturan

* Hindari duplikasi absensi pada siswa dan sesi yang sama.
* Perubahan absensi setelah periode tertentu dapat memerlukan alasan.
* Perubahan penting dicatat dalam audit log.
* Rekap harus menggunakan status yang telah tersimpan.
* Sistem harus membedakan ketidakhadiran yang belum tercatat dengan status alpa sesuai kebijakan sekolah.

### Kriteria Penerimaan

Guru dapat mencatat absensi siswa sesuai kelas atau pelajaran yang ditugaskan, dan laporan menghasilkan jumlah kehadiran yang konsisten dengan data.

---

## 4.9 Modul Absensi Guru

### Data

* Guru.
* Tanggal.
* Waktu masuk.
* Waktu pulang.
* Status.
* Catatan.
* Pencatat atau sumber pencatatan.

### Status

* Hadir.
* Terlambat.
* Izin.
* Sakit.
* Dinas luar.
* Alpa.

### Fitur

* Pencatatan absensi.
* Pencatatan jam masuk dan pulang.
* Koreksi data sesuai izin.
* Rekap harian, bulanan, dan semester.
* Laporan keterlambatan.
* Ekspor laporan.

Fitur lokasi atau foto saat presensi bersifat opsional. Jika diterapkan, sekolah harus menetapkan tujuan, izin, pembatasan akses, serta masa penyimpanan data.

### Kriteria Penerimaan

Sistem dapat menampilkan rekap absensi guru berdasarkan periode dan status secara konsisten.

---

## 4.10 Modul Nilai Siswa

### Jenis Penilaian

* Tugas.
* Kuis.
* Ulangan.
* Ujian tengah semester.
* Ujian akhir semester.
* Praktik.
* Proyek.
* Sikap, jika digunakan sekolah.

### Data Nilai

* Siswa.
* Kelas.
* Mata pelajaran.
* Guru.
* Tahun ajaran.
* Semester.
* Jenis penilaian.
* Nilai.
* Bobot jika diperlukan.
* Catatan.
* Status publikasi.

### Fitur

* Input nilai satu per satu.
* Input nilai massal.
* Impor nilai.
* Perhitungan nilai akhir berdasarkan konfigurasi.
* Rekap nilai.
* Riwayat perubahan nilai.
* Cetak laporan hasil belajar.
* Publikasi nilai kepada siswa dan orang tua.

### Aturan

* Rentang nilai harus dapat dikonfigurasi, misalnya 0–100.
* Perhitungan nilai akhir harus mengikuti formula yang disepakati sekolah.
* Formula tidak boleh ditentukan secara tersembunyi oleh developer.
* Nilai yang telah dipublikasikan hanya dapat diubah sesuai izin.
* Perubahan nilai setelah publikasi dicatat dalam audit log.
* Siswa dan orang tua hanya melihat nilai yang telah dipublikasikan kepada mereka.

### Kriteria Penerimaan

Nilai tersimpan dengan relasi yang benar dan laporan menampilkan nilai sesuai siswa, mata pelajaran, semester, dan tahun ajaran.

---

## 4.11 Modul Prestasi Siswa

### Data

* Siswa.
* Nama prestasi.
* Kategori.
* Tingkat.
* Peringkat atau hasil.
* Tanggal.
* Penyelenggara.
* Deskripsi.
* Foto atau dokumen bukti.
* Status verifikasi.

### Kategori

* Akademik.
* Olahraga.
* Seni.
* Keagamaan.
* Sains dan teknologi.
* Organisasi.
* Lainnya.

### Tingkat

* Sekolah.
* Kecamatan.
* Kabupaten/kota.
* Provinsi.
* Nasional.
* Internasional.

### Fitur

* Tambah prestasi.
* Edit prestasi.
* Unggah bukti.
* Verifikasi prestasi.
* Filter kategori dan tingkat.
* Laporan prestasi.
* Tampilan prestasi unggulan pada dashboard atau homepage.

### Kriteria Penerimaan

Prestasi dapat ditelusuri ke siswa yang bersangkutan dan hanya ditampilkan secara publik setelah memenuhi aturan publikasi sekolah.

---

## 4.12 Modul Perpustakaan

### Data Buku

* ID buku.
* ISBN jika tersedia.
* Judul.
* Foto sampul.
* Penulis.
* Penerbit.
* Tahun terbit.
* Kategori.
* Lokasi rak.
* Jumlah total.
* Jumlah tersedia.
* Jumlah dipinjam.
* Kondisi.
* Deskripsi.

### Data Anggota

* Nomor anggota.
* Nama.
* Foto jika diperlukan.
* Jenis anggota.
* Kelas atau jabatan.
* Status keanggotaan.

### Transaksi Peminjaman

* Nomor transaksi.
* Anggota.
* Buku atau eksemplar buku.
* Tanggal pinjam.
* Tanggal jatuh tempo.
* Tanggal kembali.
* Status.
* Catatan.
* Denda jika kebijakan sekolah menerapkannya.

### Status Transaksi

* Dipinjam.
* Dikembalikan.
* Terlambat.
* Hilang.
* Rusak.

### Fitur

* CRUD buku.
* Manajemen kategori.
* Manajemen anggota.
* Pencatatan peminjaman.
* Pencatatan pengembalian.
* Pencarian buku.
* Filter transaksi.
* Daftar buku terlambat.
* Riwayat anggota.
* Cetak bukti transaksi.
* Laporan koleksi dan peminjaman.

### Aturan

* Buku tidak boleh dipinjam melebihi jumlah eksemplar yang tersedia.
* Peminjaman harus mengurangi stok tersedia.
* Pengembalian harus memperbarui stok secara konsisten.
* Transaksi tidak boleh diproses dua kali akibat permintaan berulang.
* Ketentuan durasi pinjam dan denda mengikuti konfigurasi sekolah.
* Riwayat transaksi tidak boleh hilang hanya karena buku dinonaktifkan.

### Kriteria Penerimaan

Petugas dapat meminjamkan dan menerima pengembalian buku, sementara stok serta riwayat transaksi diperbarui secara konsisten.

---

## 4.13 Modul Orang Tua atau Wali

### Data

* Nama.
* Hubungan dengan siswa.
* Nomor telepon.
* Email jika tersedia.
* Alamat jika diperlukan.
* Pekerjaan jika diperlukan.
* Anak yang terhubung.

### Fitur

* Mengelola data wali.
* Menghubungkan satu wali dengan beberapa siswa.
* Menghubungkan satu siswa dengan lebih dari satu wali.
* Mengatur hubungan akun orang tua dengan data anak.
* Membatasi akses berdasarkan hubungan yang telah diverifikasi.

### Kriteria Penerimaan

Akun orang tua hanya dapat mengakses data anak yang memang terhubung dan diizinkan oleh sistem.

---

## 4.14 Modul Pengumuman

### Data

* Judul.
* Isi pengumuman.
* Foto atau lampiran.
* Tanggal publikasi.
* Tanggal kedaluwarsa.
* Pembuat.
* Target penerima.
* Status publikasi.

### Fitur

* Membuat pengumuman.
* Mengedit pengumuman.
* Menjadwalkan publikasi.
* Mengarsipkan pengumuman.
* Menentukan target berdasarkan peran, kelas, atau seluruh sekolah.

### Kriteria Penerimaan

Pengumuman hanya tampil kepada kelompok pengguna yang menjadi targetnya.

---

## 4.15 Modul Notifikasi

### Jenis Notifikasi

* Pengumuman baru.
* Perubahan nilai.
* Informasi absensi.
* Pengingat pengembalian buku.
* Informasi prestasi.
* Informasi akademik lainnya.

### Fitur

* Daftar notifikasi.
* Status sudah dibaca atau belum.
* Tanggal notifikasi.
* Tautan ke informasi terkait.
* Pengaturan penerima.

Notifikasi dalam aplikasi merupakan fitur dasar. Pengiriman melalui email atau WhatsApp memerlukan konfigurasi dan integrasi tambahan.

---

## 4.16 Modul Laporan dan Ekspor

### Jenis Laporan

* Data siswa.
* Data guru.
* Data kelas.
* Absensi siswa.
* Absensi guru.
* Nilai.
* Prestasi.
* Data buku.
* Transaksi perpustakaan.
* Buku terlambat.
* Aktivitas pengguna.

### Fitur

* Filter berdasarkan tanggal.
* Filter berdasarkan tahun ajaran.
* Filter berdasarkan semester.
* Filter berdasarkan kelas.
* Filter berdasarkan guru.
* Filter berdasarkan status.
* Tampilan pratinjau.
* Cetak.
* Ekspor PDF.
* Ekspor Excel atau CSV sesuai jenis data.

### Aturan

* Data laporan harus berasal dari database.
* Pengguna hanya dapat mengekspor data yang berhak diakses.
* Ekspor data pribadi harus dibatasi dan dicatat sesuai tingkat sensitivitasnya.
* Laporan harus mencantumkan periode dan parameter filter yang digunakan.

---

## 4.17 Modul Log Aktivitas dan Audit

### Aktivitas yang Dicatat

* Login berhasil.
* Login gagal.
* Logout.
* Pembuatan data.
* Perubahan data.
* Penghapusan atau penonaktifan data.
* Perubahan nilai.
* Perubahan absensi.
* Perubahan hak akses.
* Impor dan ekspor data.
* Aktivitas penting perpustakaan.

### Data Log

* Pengguna.
* Peran pengguna.
* Jenis aktivitas.
* Modul.
* Waktu.
* ID data terkait.
* Ringkasan perubahan.
* Data sebelum dan sesudah perubahan jika diperlukan.
* Informasi perangkat atau alamat IP jika tersedia dan sesuai kebijakan privasi.

### Fitur

* Daftar log.
* Pencarian.
* Filter pengguna.
* Filter modul.
* Filter aktivitas.
* Filter rentang tanggal.
* Detail aktivitas.

### Aturan

* Log tidak dapat diubah oleh pengguna biasa.
* Akses log dibatasi.
* Kata sandi, token autentikasi, dan rahasia lainnya tidak boleh dicatat.
* Penyimpanan perubahan sebelum dan sesudah harus menghindari data sensitif yang tidak diperlukan.
* Periode penyimpanan log ditetapkan oleh kebijakan sekolah.

---

## 4.18 Modul Pengaturan Sekolah

### Data

* Nama sekolah.
* Logo.
* NPSN jika tersedia.
* Alamat.
* Nomor telepon.
* Email.
* Website.
* Nama kepala sekolah.
* Tahun ajaran aktif.
* Semester aktif.
* Jam operasional.
* Pengaturan absensi.
* Pengaturan nilai.
* Pengaturan perpustakaan.

### Fitur

* Mengubah profil sekolah.
* Mengunggah logo.
* Menetapkan tahun ajaran aktif.
* Menetapkan semester aktif.
* Mengelola konfigurasi yang diizinkan.

Hanya pengguna yang berwenang yang dapat mengubah pengaturan.

---

# 5. KEBUTUHAN HOMEPAGE DAN DESAIN ANTARMUKA

## 5.1 Homepage Publik

Jika aplikasi menyediakan halaman publik sekolah, homepage dapat memuat:

* Logo dan nama sekolah.
* Navigasi utama.
* Banner atau hero section.
* Sambutan kepala sekolah.
* Profil sekolah.
* Statistik umum sekolah.
* Program pendidikan.
* Informasi guru.
* Prestasi unggulan.
* Pengumuman.
* Berita sekolah.
* Galeri kegiatan.
* Fasilitas.
* Informasi kontak.
* Footer.

Data yang ditampilkan ke publik harus dipilih dan disetujui sekolah. Data pribadi siswa dan guru tidak boleh dipublikasikan secara otomatis.

## 5.2 Dashboard Internal

Dashboard internal harus berbeda dari homepage publik.

Komponen:

* Sidebar navigasi.
* Header.
* Informasi akun.
* Breadcrumb.
* Kartu statistik.
* Grafik.
* Tabel informasi terbaru.
* Notifikasi.
* Kalender.
* Tombol tindakan cepat.

## 5.3 Desain Visual

Gaya antarmuka:

* Modern.
* Bersih.
* Profesional.
* Mudah digunakan.
* Konsisten.
* Responsif.
* Memiliki kontras warna yang memadai.

Komponen yang dibutuhkan:

* Data table.
* Formulir.
* Modal atau dialog.
* Dropdown.
* Date picker.
* Pagination.
* Toast notification.
* Skeleton loading.
* Empty state.
* Error state.
* Confirmation dialog.

---

# 6. KEBUTUHAN NONFUNGSIONAL

## 6.1 Keamanan

* Gunakan hashing kata sandi yang aman.
* Gunakan sesi autentikasi yang aman.
* Terapkan validasi input di backend.
* Cegah SQL injection.
* Terapkan perlindungan XSS dan CSRF sesuai arsitektur.
* Batasi percobaan login.
* Periksa hak akses pada setiap endpoint.
* Lindungi unggahan berkas.
* Simpan rahasia dalam environment variables.
* Jangan mengirim rahasia server ke frontend.
* Gunakan HTTPS pada deployment produksi.
* Sediakan proses pemulihan akun yang aman.
* Catat aktivitas keamanan yang penting.

## 6.2 Privasi Data

* Kumpulkan hanya data yang diperlukan.
* Batasi akses berdasarkan peran.
* Batasi publikasi foto dan data siswa.
* Tetapkan aturan penyimpanan dan penghapusan data.
* Sediakan prosedur untuk menangani koreksi data.
* Lindungi file yang berisi data pribadi.
* Hindari penggunaan data siswa asli untuk pengujian.
* Gunakan data sintetis atau data uji yang tidak mengidentifikasi orang nyata.

## 6.3 Kinerja

* Gunakan pagination pada tabel besar.
* Optimalkan query database.
* Gunakan indeks pada kolom yang sering dicari.
* Optimalkan ukuran foto.
* Hindari memuat seluruh data siswa sekaligus.
* Gunakan caching hanya jika konsistensi data tetap terjaga.
* Tampilkan loading indicator pada operasi yang memerlukan waktu.

## 6.4 Responsivitas

Aplikasi harus mendukung:

* Desktop.
* Laptop.
* Tablet.
* Ponsel.

Tabel besar harus dapat digunakan pada layar kecil melalui scroll horizontal atau tampilan alternatif.

## 6.5 Aksesibilitas

* Formulir memiliki label.
* Tombol memiliki nama yang jelas.
* Navigasi mendukung keyboard.
* Fokus elemen terlihat.
* Gambar memiliki teks alternatif yang sesuai.
* Informasi tidak hanya dibedakan dengan warna.

## 6.6 Keandalan Data

* Gunakan relasi database dan foreign key.
* Gunakan transaksi database untuk operasi yang saling bergantung.
* Cegah duplikasi data penting.
* Validasi data sebelum disimpan.
* Sediakan backup dan prosedur pemulihan.
* Pertahankan riwayat akademik sesuai kebijakan sekolah.

## 6.7 Pemeliharaan

* Struktur kode modular.
* Pisahkan antarmuka, logika bisnis, dan akses database.
* Gunakan penamaan yang konsisten.
* Sediakan dokumentasi konfigurasi.
* Sediakan migration database.
* Sediakan seed data untuk pengembangan.
* Sediakan pengujian otomatis untuk alur penting.

---

# 7. REKOMENDASI TEKNOLOGI

Teknologi berikut merupakan rekomendasi awal dan dapat disesuaikan dengan lingkungan pengembangan.

| Komponen         | Rekomendasi                                             |
| ---------------- | ------------------------------------------------------- |
| Frontend         | Next.js dan React                                       |
| Bahasa           | TypeScript                                              |
| UI               | Tailwind CSS dan komponen UI yang konsisten             |
| Backend          | Next.js Route Handlers atau backend terpisah            |
| Database         | PostgreSQL                                              |
| ORM              | Prisma                                                  |
| Autentikasi      | Solusi autentikasi berbasis sesi yang terpelihara       |
| Validasi         | Zod atau pustaka validasi sejenis                       |
| Penyimpanan foto | Object storage privat atau penyimpanan yang aman        |
| Grafik           | Pustaka grafik yang kompatibel dengan React             |
| Formulir         | React Hook Form atau alternatif sejenis                 |
| Pengujian        | Unit test dan integration test                          |
| Deployment       | Platform yang mendukung aplikasi dan database terkelola |

### Persyaratan Arsitektur

* Frontend harus berkomunikasi dengan backend.
* Backend menjadi sumber utama aturan bisnis dan otorisasi.
* Database menjadi penyimpanan utama data aplikasi.
* File foto dan dokumen dikelola melalui mekanisme penyimpanan yang aman.
* Perubahan struktur database dilakukan melalui migration.
* Konfigurasi sensitif disimpan di environment variables.

**Catatan:** Pemilihan teknologi final harus mempertimbangkan kemampuan developer, biaya hosting, kebutuhan sekolah, dan kemudahan pemeliharaan.

---

# 8. KEBUTUHAN DATABASE

Database harus mendukung entitas utama berikut:

1. users
2. roles
3. permissions
4. role_permissions
5. activity_logs
6. students
7. parents
8. student_parents
9. teachers
10. classes
11. class_students
12. academic_years
13. subjects
14. teacher_subjects
15. schedules
16. student_attendance
17. teacher_attendance
18. grade_items
19. grades
20. achievements
21. book_categories
22. books
23. book_copies jika stok dikelola per eksemplar
24. library_members
25. borrowings
26. borrowing_items jika satu transaksi memuat banyak buku
27. announcements
28. notifications
29. school_settings

### Aturan Database

* Setiap tabel memiliki primary key.
* Relasi penting menggunakan foreign key.
* Kolom yang memerlukan nilai unik diberi constraint.
* Kolom pencarian umum memiliki indeks yang sesuai.
* Data historis terhubung dengan tahun ajaran atau semester apabila relevan.
* Operasi yang memengaruhi banyak tabel harus menggunakan transaksi.
* Data yang dinonaktifkan tidak otomatis menghapus riwayat terkait.
* Desain akhir harus disesuaikan dengan aturan sekolah yang telah disepakati.

---

# 9. KEBUTUHAN API

Jika menggunakan REST API, kelompok endpoint dapat meliputi:

| Modul                | Endpoint contoh           |
| -------------------- | ------------------------- |
| Autentikasi          | `/api/auth/*`             |
| Pengguna             | `/api/users`              |
| Peran                | `/api/roles`              |
| Dashboard            | `/api/dashboard`          |
| Siswa                | `/api/students`           |
| Guru                 | `/api/teachers`           |
| Kelas                | `/api/classes`            |
| Mata pelajaran       | `/api/subjects`           |
| Jadwal               | `/api/schedules`          |
| Absensi siswa        | `/api/student-attendance` |
| Absensi guru         | `/api/teacher-attendance` |
| Nilai                | `/api/grades`             |
| Prestasi             | `/api/achievements`       |
| Buku                 | `/api/books`              |
| Anggota perpustakaan | `/api/library/members`    |
| Peminjaman           | `/api/library/borrowings` |
| Pengumuman           | `/api/announcements`      |
| Notifikasi           | `/api/notifications`      |
| Laporan              | `/api/reports`            |
| Log aktivitas        | `/api/activity-logs`      |
| Pengaturan           | `/api/settings`           |

Daftar tersebut merupakan contoh kontrak awal, bukan batasan mutlak.

### Persyaratan Setiap API

* Memvalidasi input.
* Memeriksa autentikasi.
* Memeriksa hak akses.
* Mengembalikan format respons yang konsisten.
* Menangani kesalahan dengan aman.
* Menggunakan pagination untuk daftar besar.
* Tidak membocorkan informasi sensitif.
* Mencatat aktivitas penting.
* Memiliki pengujian untuk operasi yang kritis.

---

# 10. ALUR PENGGUNA UTAMA

## 10.1 Alur Login

1. Pengguna membuka aplikasi.
2. Sistem menampilkan halaman login.
3. Pengguna memasukkan kredensial.
4. Backend memvalidasi kredensial.
5. Sistem membuat sesi jika autentikasi berhasil.
6. Pengguna diarahkan ke dashboard sesuai perannya.
7. Sistem membatasi akses terhadap modul yang tidak diizinkan.

## 10.2 Alur Menambahkan Siswa

1. Admin membuka menu siswa.
2. Admin memilih tombol tambah siswa.
3. Sistem menampilkan formulir.
4. Admin mengisi data.
5. Admin mengunggah foto jika tersedia.
6. Backend memvalidasi input.
7. Sistem menyimpan data ke database.
8. Sistem menampilkan notifikasi berhasil.
9. Data baru muncul pada tabel dan dashboard yang relevan.
10. Aktivitas dicatat sesuai kebijakan audit.

## 10.3 Alur Absensi Siswa

1. Guru membuka menu absensi.
2. Guru memilih kelas dan jadwal.
3. Sistem menampilkan siswa yang menjadi tanggung jawab guru.
4. Guru mengisi status kehadiran.
5. Backend memvalidasi izin dan data.
6. Sistem menyimpan absensi.
7. Rekap kehadiran diperbarui.
8. Perubahan penting dicatat.

## 10.4 Alur Input Nilai

1. Guru memilih kelas.
2. Guru memilih mata pelajaran dan semester.
3. Sistem menampilkan daftar siswa yang relevan.
4. Guru memasukkan nilai.
5. Backend memvalidasi rentang nilai dan hak akses.
6. Sistem menyimpan nilai.
7. Nilai akhir dihitung berdasarkan konfigurasi.
8. Guru memeriksa hasil.
9. Nilai dipublikasikan sesuai kewenangan.
10. Perubahan nilai dicatat.

## 10.5 Alur Peminjaman Buku

1. Petugas memilih anggota perpustakaan.
2. Petugas memilih buku.
3. Sistem memeriksa ketersediaan.
4. Petugas menetapkan tanggal pinjam dan jatuh tempo.
5. Backend memvalidasi transaksi.
6. Sistem menyimpan transaksi.
7. Stok tersedia diperbarui.
8. Sistem menampilkan bukti transaksi.
9. Transaksi masuk ke riwayat peminjaman.

## 10.6 Alur Pengembalian Buku

1. Petugas mencari transaksi peminjaman.
2. Sistem menampilkan detail transaksi.
3. Petugas memproses pengembalian.
4. Backend memvalidasi status transaksi.
5. Sistem menyimpan tanggal pengembalian.
6. Stok diperbarui.
7. Sistem menghitung keterlambatan atau denda jika dikonfigurasi.
8. Riwayat transaksi diperbarui.

---

# 11. STRUKTUR NAVIGASI

Contoh sidebar utama:

**Dashboard**

**Akademik**

* Data Siswa
* Data Guru
* Data Kelas
* Mata Pelajaran
* Jadwal Pelajaran
* Tahun Ajaran
* Semester

**Absensi**

* Absensi Siswa
* Absensi Guru
* Rekap Absensi

**Penilaian**

* Input Nilai
* Rekap Nilai
* Laporan Hasil Belajar

**Prestasi**

* Data Prestasi
* Verifikasi Prestasi
* Laporan Prestasi

**Perpustakaan**

* Data Buku
* Kategori Buku
* Anggota
* Peminjaman
* Pengembalian
* Buku Terlambat
* Laporan Perpustakaan

**Informasi**

* Pengumuman
* Notifikasi
* Kalender Akademik

**Laporan**

* Laporan Siswa
* Laporan Guru
* Laporan Akademik
* Laporan Absensi
* Laporan Perpustakaan

**Administrasi Sistem**

* Pengguna
* Peran dan Hak Akses
* Log Aktivitas
* Pengaturan Sekolah
* Backup

Menu yang terlihat harus menyesuaikan peran pengguna.

---

# 12. STRATEGI PENGUJIAN

## 12.1 Pengujian Autentikasi

* Login berhasil.
* Login gagal.
* Logout.
* Sesi kedaluwarsa.
* Akun nonaktif.
* Pembatasan percobaan login.
* Pemulihan kata sandi.

## 12.2 Pengujian Hak Akses

* Guru tidak dapat mengubah data di luar kewenangannya.
* Siswa tidak dapat melihat nilai siswa lain.
* Orang tua hanya dapat melihat data anak yang terhubung.
* Petugas perpustakaan tidak dapat mengubah konfigurasi sistem tanpa izin.
* API menolak permintaan tanpa otorisasi.

## 12.3 Pengujian Data

* Tambah data.
* Edit data.
* Validasi data.
* Pencarian.
* Filter.
* Pagination.
* Unggah foto.
* Impor dan ekspor.
* Relasi antarentitas.

## 12.4 Pengujian Akademik

* Input absensi.
* Koreksi absensi.
* Input nilai.
* Perhitungan nilai akhir.
* Publikasi nilai.
* Rekap per semester.
* Perubahan tahun ajaran.

## 12.5 Pengujian Perpustakaan

* Peminjaman buku.
* Pengembalian buku.
* Validasi stok.
* Pencegahan peminjaman melebihi stok.
* Penanganan transaksi berulang.
* Perhitungan keterlambatan.
* Laporan transaksi.

## 12.6 Pengujian Antarmuka

* Tampilan desktop.
* Tampilan tablet.
* Tampilan ponsel.
* Formulir dan validasi.
* Loading state.
* Empty state.
* Error state.
* Navigasi keyboard.
* Dialog konfirmasi.

---

# 13. TAHAPAN PENGEMBANGAN

Pengembangan dilakukan bertahap agar setiap bagian dapat diuji sebelum fitur berikutnya dibangun.

## Fase 1 — Fondasi Sistem

* Menyiapkan proyek.
* Menyiapkan database.
* Menentukan struktur aplikasi.
* Membuat autentikasi.
* Membuat manajemen pengguna.
* Membuat peran dan hak akses.
* Membuat layout dan navigasi.
* Membuat log aktivitas dasar.

**Hasil:** pengguna dapat login dan mengakses dashboard sesuai peran.

## Fase 2 — Data Master

* Data siswa.
* Data guru.
* Foto siswa dan guru.
* Data kelas.
* Tahun ajaran.
* Mata pelajaran.
* Data orang tua/wali.

**Hasil:** data utama sekolah dapat dikelola dan disimpan dengan benar.

## Fase 3 — Jadwal dan Absensi

* Jadwal pelajaran.
* Absensi siswa.
* Absensi guru.
* Rekap kehadiran.

**Hasil:** proses absensi dapat digunakan dan dilaporkan.

## Fase 4 — Akademik

* Input nilai.
* Perhitungan nilai.
* Publikasi nilai.
* Prestasi siswa.
* Laporan hasil belajar.

**Hasil:** data nilai dan prestasi terintegrasi dengan siswa, guru, kelas, dan semester.

## Fase 5 — Perpustakaan

* Data buku.
* Kategori buku.
* Anggota perpustakaan.
* Peminjaman.
* Pengembalian.
* Keterlambatan.
* Laporan perpustakaan.

**Hasil:** siklus transaksi perpustakaan dapat berjalan dengan konsisten.

## Fase 6 — Dashboard dan Laporan

* Statistik sekolah.
* Grafik.
* Filter laporan.
* Ekspor PDF.
* Ekspor Excel atau CSV.
* Cetak dokumen.

**Hasil:** pengguna dapat melihat dan mengunduh laporan sesuai hak akses.

## Fase 7 — Pengumuman dan Audit

* Pengumuman.
* Notifikasi.
* Log aktivitas lengkap.
* Riwayat perubahan data.
* Dashboard berdasarkan peran.

**Hasil:** informasi dan aktivitas sistem dapat dipantau.

## Fase 8 — Pengujian dan Deployment

* Pengujian fungsional.
* Pengujian keamanan.
* Optimasi database.
* Optimasi gambar.
* Backup dan uji pemulihan.
* Dokumentasi.
* Deployment produksi.

**Hasil:** aplikasi siap digunakan dengan konfigurasi produksi yang aman.

---

# 14. KRITERIA SELESAI PRODUK

Aplikasi dinyatakan memenuhi persyaratan versi pertama apabila:

1. Autentikasi berjalan dengan benar.
2. Seluruh peran memiliki batas akses yang sesuai.
3. CRUD modul utama telah terhubung ke database.
4. Foto siswa, guru, dan sampul buku dapat dikelola.
5. Data kelas, mata pelajaran, dan jadwal saling terhubung.
6. Absensi siswa dan guru dapat dicatat serta direkap.
7. Nilai dapat dimasukkan, dihitung, dan dipublikasikan sesuai aturan.
8. Prestasi dapat dikelola dan dilaporkan.
9. Stok buku dan transaksi perpustakaan berjalan konsisten.
10. Dashboard menampilkan data aktual.
11. Laporan dapat dicetak atau diekspor sesuai kebutuhan.
12. Log aktivitas tersedia untuk tindakan penting.
13. Formulir memiliki validasi.
14. Aplikasi responsif.
15. Data pribadi dilindungi.
16. API memeriksa autentikasi dan otorisasi.
17. Backup dapat dibuat dan prosedur pemulihan telah diuji.
18. Dokumentasi instalasi dan konfigurasi tersedia.
19. Pengujian untuk alur utama telah lulus.
20. Tidak ada tombol utama yang hanya berupa tampilan tanpa fungsi.

---

# 15. ASUMSI DAN KEPUTUSAN YANG MASIH DIPERLUKAN

Sebelum implementasi final, pihak sekolah atau pemilik produk perlu menetapkan:

1. Jenis sekolah: SD, SMP, SMA, SMK, madrasah, atau lainnya.
2. Nama dan identitas sekolah.
3. Kurikulum serta aturan penilaian.
4. Format tahun ajaran dan semester.
5. Aturan absensi siswa dan guru.
6. Apakah absensi menggunakan jadwal pelajaran atau sistem harian.
7. Aturan peminjaman buku dan denda.
8. Apakah siswa dan orang tua mendapat akun.
9. Apakah homepage publik diperlukan.
10. Apakah notifikasi email atau WhatsApp diperlukan.
11. Pilihan teknologi final.
12. Lokasi penyimpanan foto dan dokumen.
13. Anggaran hosting dan pemeliharaan.
14. Kebijakan backup dan retensi data.
15. Siapa yang bertanggung jawab mengelola pengguna dan data.

Jika keputusan belum tersedia, developer boleh menggunakan asumsi sementara yang terdokumentasi, tetapi aturan penting seperti perhitungan nilai, privasi data, dan hak akses harus dikonfirmasi sebelum digunakan dalam produksi.

---

# 16. INSTRUKSI IMPLEMENTASI UNTUK DEVELOPER ATAU AI CODING ASSISTANT

Bangun aplikasi berdasarkan PRD ini dengan ketentuan berikut:

1. Bangun aplikasi full-stack yang benar-benar berfungsi.
2. Jangan berhenti pada pembuatan halaman frontend atau desain dashboard.
3. Hubungkan setiap modul dengan backend dan database.
4. Implementasikan autentikasi serta otorisasi di sisi server.
5. Buat migration database dan seed data untuk pengembangan.
6. Gunakan data dummy yang tidak mengidentifikasi orang nyata.
7. Implementasikan CRUD lengkap sesuai hak akses.
8. Implementasikan validasi frontend dan backend.
9. Implementasikan pengunggahan foto secara aman.
10. Pastikan relasi data dan transaksi database konsisten.
11. Implementasikan laporan berdasarkan data nyata.
12. Pastikan seluruh tombol dan formulir utama memiliki fungsi.
13. Buat pengujian untuk fitur kritis.
14. Dokumentasikan cara instalasi, konfigurasi, dan deployment.
15. Jangan mengklaim fitur selesai jika belum dapat digunakan dan diuji.
16. Kerjakan secara bertahap sesuai fase pengembangan.
17. Setelah setiap fase, jalankan pengujian dan perbaiki kesalahan sebelum melanjutkan.
18. Laporkan fitur yang sudah selesai, fitur yang belum selesai, asumsi yang digunakan, serta kendala yang ditemukan.

**Prioritas implementasi:** keamanan data → fondasi database → autentikasi dan hak akses → modul utama → konsistensi data → laporan → pengalaman pengguna → optimasi.

---

# PENUTUP

PRD ini menjadi acuan awal untuk membangun Sistem Informasi Manajemen Sekolah yang modular, aman, responsif, dan dapat dikembangkan secara bertahap.

Perubahan terhadap ruang lingkup, aturan bisnis, atau hak akses perlu didokumentasikan agar hasil akhir tetap konsisten dengan kebutuhan sekolah.
