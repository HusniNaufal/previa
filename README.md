Previa App (Preview Anemia) 🩸

Previa App adalah aplikasi web berbasis mobile-first yang dirancang untuk membantu remaja putri dan ibu hamil mencegah anemia. Aplikasi ini berfokus pada kepatuhan konsumsi Tablet Tambah Darah (TTD) melalui pendekatan gamifikasi, pencatatan riwayat, serta fitur skrining kesehatan dini menggunakan teknologi kamera.

🌟 Fitur Utama

1. Gamified Adherence Tracker (Pelacak Kepatuhan)

Karakter Interaktif: Avatar yang berubah ekspresi (Lemas vs. Ceria) berdasarkan status minum obat harian/mingguan.

Motivasi Visual: Memberikan feedback langsung setelah pengguna meminum suplemen.

2. Riwayat Kalender

Pencatatan Otomatis: Menandai hari-hari dimana suplemen telah dikonsumsi (Hijau) atau terlewat (Merah).

Log Mingguan: Logika khusus untuk konsumsi TTD seminggu sekali (1 klik menandai 7 hari aman).

3. Dual-Input Health Screener (Skrining Kesehatan)

Deteksi Warna (Camera-based): Menggunakan kamera perangkat untuk menganalisis tingkat kemerahan pada kelopak mata bawah atau kuku jari sebagai indikasi awal anemia (analisis nilai piksel RGB).

Input Lab Hb: Pencatatan hasil hemoglobin manual dengan batas normal yang disesuaikan kategori pengguna (Remaja Putri, Pria, Ibu Hamil).

Kuesioner Risiko 5L: Deteksi gejala Lesu, Lelah, Letih, Lemah, Lunglai.

Kalkulator BMI: Memantau berat badan ideal.

4. Edukasi & Gaya Hidup

Artikel Kesehatan: Informasi seputar penyerapan zat besi (misal: Bayam + Jeruk = Baik, Teh/Kopi = Buruk).

Jadwal Olahraga: Rekomendasi aktivitas fisik harian.

Smart Meal Planner: Rekomendasi menu saat terdeteksi risiko anemia.

5. Komunitas

Forum diskusi dan update berita kesehatan terkini dari sumber terpercaya.

🛠️ Teknologi yang Digunakan

Frontend Framework: React.js (via Vite)

Styling: Tailwind CSS

Icons: Lucide React

State Management: React Hooks (useState, useEffect)

Persistence: LocalStorage (Penyimpanan data lokal di browser)

Camera/Image Processing: HTML5 Canvas API & MediaDevices API

🚀 Cara Menjalankan Project (Instalasi)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer lokal Anda:

Prasyarat

Pastikan Anda sudah menginstall Node.js (versi 16 atau lebih baru).

Langkah Instalasi

Clone repositori ini:

git clone [https://github.com/username-anda/previa-app.git](https://github.com/username-anda/previa-app.git)
cd previa-app

Install dependencies:

npm install

Jalankan server development:

npm run dev

Buka di browser:
Kunjungi tautan yang muncul di terminal (biasanya http://localhost:5173/).

Catatan Penting untuk Fitur Kamera:
Fitur deteksi warna menggunakan akses kamera. Browser modern sering memblokir akses kamera jika situs tidak menggunakan HTTPS. Namun, fitur ini tetap berjalan lancar di localhost. Jika Anda membukanya lewat Network (IP Address HP), kamera mungkin tidak berfungsi kecuali Anda men-deploy ke server HTTPS (seperti Vercel/Netlify).

📂 Struktur Folder

previa-app/
├── public/ # Aset statis
├── src/
│ ├── App.jsx # Komponen Utama (Single File Component untuk MVP)
│ ├── index.css # Konfigurasi Tailwind & Global Styles
│ └── main.jsx # Entry point React
├── index.html # HTML Root
├── package.json # Daftar dependensi
├── tailwind.config.js # Konfigurasi Tailwind
└── vite.config.js # Konfigurasi Vite

🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin menambahkan fitur baru atau memperbaiki bug:

Fork repositori ini.

Buat branch fitur baru (git checkout -b fitur-keren).

Commit perubahan Anda (git commit -m 'Menambahkan fitur keren').

Push ke branch tersebut (git push origin fitur-keren).

Buat Pull Request.

📄 Lisensi

Project ini dilisensikan di bawah MIT License.

Dibuat dengan ❤️ untuk Indonesia Sehat Bebas Anemia.
