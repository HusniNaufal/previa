# Previa App (Preview Anemia) 🩸

**Previa App** adalah aplikasi web berbasis _mobile-first_ yang dirancang untuk membantu remaja putri dan ibu hamil mencegah anemia. Aplikasi ini berfokus pada kepatuhan konsumsi Tablet Tambah Darah (TTD) melalui pendekatan gamifikasi, pencatatan riwayat, serta fitur skrining kesehatan dini menggunakan teknologi kamera.

## 🌟 Fitur Utama

### 1. Gamified Adherence Tracker (Pelacak Kepatuhan)

- **Karakter Interaktif:** Avatar yang berubah ekspresi (Lemas vs. Ceria) berdasarkan status minum obat harian/mingguan.
- **Logika Mingguan:** Satu kali klik tombol "Sudah Minum" akan mencatat kepatuhan untuk 1 minggu ke depan (sesuai dosis TTD umum).

### 2. Riwayat Kalender

- **Pencatatan Otomatis:** Menandai hari-hari dimana suplemen telah dikonsumsi atau tercover (Hijau) dan yang terlewat (Merah).
- **Evaluasi Bulanan:** Ringkasan visual kepatuhan pengguna dalam satu bulan.

### 3. Dual-Input Health Screener (Skrining Kesehatan)

- **Deteksi Warna (Camera-based):** Menggunakan kamera perangkat secara _real-time_ dengan panduan area fokus untuk menganalisis tingkat kemerahan pada kelopak mata bawah atau kuku jari (indikasi awal anemia).
- **Input Lab Hb:** Pencatatan hasil hemoglobin manual. Batas normal otomatis menyesuaikan kategori pengguna yang dipilih langsung di halaman (Remaja Putri, Remaja Pria, atau Ibu Hamil).
- **Kuesioner Risiko 5L:** Deteksi gejala Lesu, Lelah, Letih, Lemah, Lunglai.
- **Kalkulator BMI:** Memantau berat badan ideal.

### 4. Edukasi & Gaya Hidup

- **Pojok Edukasi:** Artikel singkat tentang nutrisi (Zat Besi, Vitamin C) dan pantangan (Teh/Kopi).
- **Jadwal Olahraga Harian:** Rekomendasi aktivitas fisik yang berbeda dari Senin hingga Minggu.
- **Smart Meal Planner:** Rekomendasi menu makanan khusus saat terdeteksi risiko anemia atau Hb rendah.

### 5. Komunitas

- **Forum Diskusi:** Tempat pengguna berbagi pengalaman.
- **Update Berita:** Informasi terkini dari sumber kesehatan terpercaya (Kemenkes, dll).

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework:** [React.js](https://react.dev/) (via Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence:** LocalStorage (Penyimpanan data lokal di browser)
- **Camera API:** `navigator.mediaDevices` & HTML5 Canvas untuk pemrosesan gambar real-time.

## 🚀 Cara Menjalankan Project (Instalasi)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer lokal Anda:

### Prasyarat

Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) (versi 16 atau lebih baru).

### Langkah Instalasi

1. **Clone repositori ini:**

   ```bash
   git clone [https://github.com/username-anda/previa-app.git](https://github.com/username-anda/previa-app.git)
   cd previa-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Jalankan server development:**

   ```bash
   npm run dev
   ```

4. **Buka di browser:**
   Kunjungi tautan yang muncul di terminal (biasanya `http://localhost:5173/`).

> **Catatan Penting untuk Fitur Kamera:**
> Fitur deteksi warna menggunakan akses kamera browser. Fitur ini berjalan lancar di `localhost` (komputer sendiri) atau pada domain yang menggunakan HTTPS. Jika Anda mengakses via Network IP (misal dari HP ke laptop via WiFi), kamera mungkin tidak terbuka karena kebijakan keamanan browser.

## 📂 Struktur Folder Utama

```text
src/
├── App.jsx          # Logika Utama Aplikasi (Fitur Kamera, State, UI)
├── index.css        # Konfigurasi Tailwind & Global Styles
└── main.jsx         # Entry point React
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan fork repositori ini dan buat Pull Request untuk perbaikan fitur atau penambahan modul baru.

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE).

---

Dibuat dengan ❤️ untuk Indonesia Sehat Bebas Anemia.
