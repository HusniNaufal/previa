import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Calendar as CalendarIcon,
  Activity,
  BookOpen,
  Users,
  Check,
  X,
  Info,
  Camera,
  Droplet,
  Smile,
  Frown,
  Upload,
  RefreshCw,
  Bell,
  Utensils,
  ChevronRight,
  MessageCircle,
  Newspaper,
  Heart,
  Video,
  StopCircle,
  UserCircle,
} from "lucide-react";

// --- Utility Functions ---

const getTodayString = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - offset);
  return localDate.toISOString().split("T")[0];
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// --- Components ---

// 1. Feature: Pengingat & Avatar (Home)
const HomeView = ({ todayStatus, onTakeSupplement, userHb }) => {
  // Alarm state removed

  const isLowHb = userHb && userHb < 10;
  const showMealPlan = !todayStatus || isLowHb;

  // Sports Schedule Data
  const sportsSchedule = [
    { day: "Senin", act: "Jalan Cepat (20 - 30 menit)." },
    { day: "Selasa", act: "Yoga atau Pilates (30 menit)." },
    { day: "Rabu", act: "Bersepeda Santai atau Berenang (30 menit)." },
    { day: "Kamis", act: "Istirahat Aktif (Hanya peregangan ringan di rumah)." },
    { day: "Jumat", act: "Latihan Beban Ringan (Angkat dumble ringan atau bodyweight training)." },
    { day: "Sabtu", act: "Jogging Santai atau Senam Aerobik (30 - 40 menit)." },
    { day: "Minggu", act: "Jalan Santai di area terbuka (45 menit) atau Istirahat Total." },
  ];

  const daysMap = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const currentDayName = daysMap[new Date().getDay()];

  return (
    <div className="flex flex-col h-full pb-24">
      <div className="text-center mb-6 mt-4">
        <h1 className="text-3xl font-bold text-emerald-800">Halo, Previa!</h1>
        <p className="text-slate-500">Jaga semangatmu hari ini.</p>
      </div>

      {/* Avatar Section */}
      <div className={`relative flex flex-col items-center justify-center transition-all duration-500 ${todayStatus ? "scale-110" : "scale-100"}`}>
        <div className={`w-40 h-40 rounded-full border-4 flex items-center justify-center shadow-xl transition-colors duration-500 ${todayStatus ? "bg-orange-100 border-orange-400" : "bg-slate-200 border-slate-400"}`}>
          {todayStatus ? <Smile size={100} className="text-orange-500 animate-bounce" /> : <Frown size={100} className="text-slate-500" />}
        </div>
        <div className="mt-4 text-center">
          <h2 className={`text-2xl font-bold ${todayStatus ? "text-orange-600" : "text-slate-600"}`}>{todayStatus ? "Ceria & Bertenaga!" : "Lemas & Pucat..."}</h2>
          <p className="text-sm text-slate-500 mt-1">{todayStatus ? "Hebat! Kamu terlindungi minggu ini." : "Waktunya minum TTD mingguanmu!"}</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 px-6">
        {!todayStatus ? (
          <button
            onClick={onTakeSupplement}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transform active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Check size={24} />
            Sudah Minum (Untuk 1 Minggu)
          </button>
        ) : (
          <div className="bg-orange-100 text-orange-700 p-4 rounded-xl text-center font-bold border border-orange-200 shadow-sm flex items-center justify-center gap-2">
            <span>✨ Tercatat! TTD Mingguan Sukses.</span>
          </div>
        )}
      </div>

      {/* Smart Meal Planner (Conditional) */}
      {showMealPlan && (
        <div className="mt-8 mx-4 bg-white p-4 rounded-2xl shadow-md border border-slate-100 animate-fade-in">
          <h3 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
            <Utensils size={20} className="text-orange-500" /> Smart Meal Planner
          </h3>
          <p className="text-xs text-slate-500 mb-3">{isLowHb ? "Hb kamu rendah. Coba menu ini:" : "Rekomendasi menu peningkat energi:"}</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg">
              <div className="bg-red-100 p-2 rounded-full">🍖</div>
              <div>
                <p className="font-bold text-sm text-slate-700">Hati Ayam & Bayam</p>
                <p className="text-xs text-slate-500">Super tinggi zat besi (Heme Iron).</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg">
              <div className="bg-orange-100 p-2 rounded-full">🍊</div>
              <div>
                <p className="font-bold text-sm text-slate-700">Jus Jambu Biji</p>
                <p className="text-xs text-slate-500">Kaya Vit C bantu penyerapan.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Replaced Alarm with Sports Schedule */}
      <div className="mt-6 mx-4 mb-8 bg-blue-50 p-4 rounded-2xl shadow-sm border border-blue-100">
        <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
          <Activity size={20} className="text-blue-600" /> Jadwal Olahraga
        </h3>
        <p className="text-xs text-slate-500 mb-3">Rutinitas harian untuk sirkulasi oksigen optimal.</p>
        <div className="space-y-2">
          {sportsSchedule.map((item, idx) => {
            const isToday = item.day === currentDayName;
            return (
              <div
                key={idx}
                className={`p-3 rounded-lg border text-sm shadow-sm transition-all ${
                  isToday ? "bg-blue-600 text-white border-blue-600 scale-105 shadow-md ring-2 ring-blue-300 ring-offset-1" : "bg-white border-blue-100 text-slate-600 hover:bg-blue-50"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold ${isToday ? "text-white" : "text-blue-600"}`}>{item.day}</span>
                  {isToday && <span className="text-[10px] bg-white text-blue-600 px-2 py-0.5 my-1 rounded-full font-bold">Hari Ini</span>}
                </div>
                <div className={isToday ? "text-blue-50" : "text-slate-600"}>{item.act}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// 2. Feature: Riwayat Kalender
const CalendarTracker = ({ history }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const monthName = date.toLocaleString("default", { month: "long" });
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const todayStr = getTodayString();

  return (
    <div className="p-4 flex flex-col h-full pb-24">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
        <CalendarIcon size={28} /> Riwayat Kepatuhan
      </h2>

      <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100">
        <h3 className="text-md font-bold text-slate-600 mb-4 text-center">
          {monthName} {year}
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
            <div key={i} className="text-center text-xs font-bold text-slate-400 mb-2">
              {d}
            </div>
          ))}
          {days.map((day) => {
            const dayStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const isToday = dayStr === todayStr;
            const status = history[dayStr];

            const isFuture = dayStr > todayStr;

            let bgClass = "bg-slate-50 text-slate-300";

            if (status) {
              bgClass = "bg-emerald-500 text-white shadow-emerald-200 shadow-md";
            } else if (!isFuture) {
              bgClass = "bg-red-100 text-red-400";
            }

            if (isToday) bgClass += " ring-2 ring-orange-400 ring-offset-2";

            return (
              <div key={day} className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all ${bgClass}`}>
                {day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
        <h4 className="font-bold text-emerald-800 text-sm mb-2">Evaluasi Bulanan</h4>
        <div className="flex gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Diminum/Tercover
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-100"></div> Terlewat
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Feature: Skrining Lengkap (BMI, 5L, Lab, Warna)
const HealthScreener = ({ hbValue, setHbValue, userCategory, setUserCategory }) => {
  const [activeSection, setActiveSection] = useState("menu"); // menu, color, risk, bmi, lab
  const [riskScore, setRiskScore] = useState(0);
  const [riskResult, setRiskResult] = useState(null);

  // BMI State
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  // Color Screener State
  const [image, setImage] = useState(null);
  const [colorResult, setColorResult] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // --- Helper: Get Hb Threshold ---
  const getHbThreshold = (cat) => {
    switch (cat) {
      case "putri":
        return 12; // Remaja Putri < 12
      case "pria":
        return 14; // Remaja Pria < 14
      case "hamil":
        return 11; // Ibu Hamil < 11
      default:
        return 12;
    }
  };

  // --- Camera Logic ---
  const startCamera = async () => {
    try {
      setIsCameraOpen(true);
      setImage(null);
      setColorResult(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Tidak dapat mengakses kamera. Pastikan izin browser diberikan.");
      setIsCameraOpen(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // --- AUTO ANALYZE CENTER POINT ---
      const centerX = Math.floor(canvas.width / 2);
      const centerY = Math.floor(canvas.height / 2);
      const pixel = ctx.getImageData(centerX, centerY, 1, 1).data;
      const [r, g, b] = pixel;

      const isPale = r < g || r < b || r < 140;

      setColorResult({
        rgb: `rgb(${r}, ${g}, ${b})`,
        status: isPale ? "Indikasi Anemia (Pucat)" : "Normal",
        range: isPale ? "Estimasi Hb: 1 - 10 g/dL" : "Estimasi Hb: 11 - 13 g/dL",
        color: isPale ? "text-red-500" : "text-emerald-600",
      });

      stopCamera();

      const dataUrl = canvas.toDataURL("image/png");
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        setImage(img);
      };
    }
  };

  // Cleanup camera when component unmounts or section changes
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [activeSection]);

  // --- Logic Sections ---

  const calculateBMI = () => {
    if (weight && height) {
      const hMeter = height / 100;
      const bmi = (weight / (hMeter * hMeter)).toFixed(1);
      let cat = "";
      if (bmi < 18.5) cat = "Kekurangan Berat Badan";
      else if (bmi < 24.9) cat = "Normal (Ideal)";
      else if (bmi < 29.9) cat = "Kelebihan Berat Badan";
      else cat = "Obesitas";
      setBmiResult({ bmi, cat });
    }
  };

  const handleRiskSubmit = (e) => {
    e.preventDefault();
    if (riskScore >= 3) {
      setRiskResult({ level: "Tinggi", msg: "Kamu mengalami gejala anemia signifikan (5L). Segera cek Hb!", color: "text-red-600 bg-red-50" });
    } else {
      setRiskResult({ level: "Rendah", msg: "Gejala minim. Tetap jaga asupan zat besi.", color: "text-emerald-600 bg-emerald-50" });
    }
  };

  // Fallback Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setColorResult(null);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && canvasRef.current && !isCameraOpen) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (canvas.width !== image.width) {
        const scale = Math.min(1, 320 / image.width);
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
      }
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  }, [image, isCameraOpen]);

  const analyzeColor = (e) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;

    const isPale = r < g || r < b || r < 140;

    setColorResult({
      rgb: `rgb(${r}, ${g}, ${b})`,
      status: isPale ? "Indikasi Anemia (Pucat)" : "Normal",
      range: isPale ? "Estimasi Hb: 1 - 10 g/dL" : "Estimasi Hb: 11 - 13 g/dL",
      color: isPale ? "text-red-500" : "text-emerald-600",
    });
  };

  const limit = getHbThreshold(userCategory);
  const isAnemia = hbValue && parseFloat(hbValue) < limit;

  // --- Views ---

  if (activeSection === "menu") {
    return (
      <div className="p-4 flex flex-col h-full pb-24">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
          <Activity size={28} /> Pusat Deteksi
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setActiveSection("color")} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2 hover:shadow-md transition-all">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
              <Camera size={24} />
            </div>
            <span className="font-bold text-sm text-slate-700">Scan Warna</span>
          </button>
          <button onClick={() => setActiveSection("risk")} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2 hover:shadow-md transition-all">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <MessageCircle size={24} />
            </div>
            <span className="font-bold text-sm text-slate-700">Kuesioner 5L</span>
          </button>
          <button onClick={() => setActiveSection("lab")} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2 hover:shadow-md transition-all">
            <div className="p-3 bg-red-100 text-red-600 rounded-full">
              <Droplet size={24} />
            </div>
            <span className="font-bold text-sm text-slate-700">Input Lab Hb</span>
          </button>
          <button onClick={() => setActiveSection("bmi")} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2 hover:shadow-md transition-all">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
              <Activity size={24} />
            </div>
            <span className="font-bold text-sm text-slate-700">Cek BMI</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pb-24">
      <button onClick={() => setActiveSection("menu")} className="mb-4 flex items-center gap-1 text-slate-500 font-medium hover:text-emerald-600">
        <ChevronRight className="rotate-180" size={16} /> Kembali
      </button>

      {/* 1. Color Screener View (Updated with Live Camera) */}
      {activeSection === "color" && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-fade-in">
          <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <Camera size={20} className="text-orange-500" /> Deteksi Warna
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Arahkan kamera ke <strong>Kelopak Mata Bawah</strong> atau <strong>Kuku Jari</strong>.
          </p>

          <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-md flex items-center justify-center min-h-[240px]">
            {!image && !isCameraOpen && (
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <button onClick={startCamera} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg">
                  <Camera size={20} /> Buka Kamera
                </button>
                <label className="text-xs text-slate-400 cursor-pointer underline mt-2">
                  Atau upload file
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>
            )}

            {isCameraOpen && (
              <>
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-24 h-24 border-2 border-white/80 rounded-lg shadow-[0_0_0_100vmax_rgba(0,0,0,0.6)] relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
                    <div className="absolute -top-8 w-40 -left-8 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full text-center">Arahkan mata/kuku ke sini</div>
                  </div>
                </div>
                <div className="absolute bottom-4 w-full flex justify-center gap-4 z-20">
                  <button onClick={capturePhoto} className="w-14 h-14 bg-white rounded-full border-4 border-slate-200 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                  </button>
                  <button onClick={stopCamera} className="absolute right-4 bottom-2 text-white bg-black/50 p-2 rounded-full">
                    <X size={20} />
                  </button>
                </div>
              </>
            )}

            <canvas ref={canvasRef} onClick={analyzeColor} className={`w-full h-auto cursor-crosshair ${!image || isCameraOpen ? "hidden" : "block"}`} />

            {image && !isCameraOpen && (
              <button
                onClick={() => {
                  setImage(null);
                  setColorResult(null);
                  startCamera();
                }}
                className="absolute top-2 right-2 bg-white/80 p-2 rounded-full text-slate-700 hover:text-emerald-600 shadow-md z-10"
              >
                <RefreshCw size={18} />
              </button>
            )}
          </div>

          {image && !isCameraOpen && !colorResult && <p className="text-center text-sm font-bold text-emerald-600 mt-3 animate-pulse">👆 Klik area mata/kuku pada foto di atas jika hasil belum muncul.</p>}

          {colorResult && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200 animate-fade-in">
              <div className={`font-bold text-lg ${colorResult.color}`}>{colorResult.status}</div>
              <div className="text-sm font-semibold text-slate-700 mt-1">{colorResult.range}</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full border border-slate-300" style={{ backgroundColor: colorResult.rgb }}></div>
                <span className="font-mono text-xs text-slate-400">{colorResult.rgb}</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 italic border-t pt-2">*Hanya estimasi skrining, bukan diagnosis medis.</p>
            </div>
          )}
        </div>
      )}

      {/* 2. Risk Questionnaire (5L) */}
      {activeSection === "risk" && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-fade-in">
          <h3 className="font-bold text-emerald-800 mb-4">Kuesioner Gejala 5L</h3>
          {!riskResult ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">Apakah Anda sering merasakan gejala berikut dalam 1 minggu terakhir?</p>
              {["Lesu (Tidak bersemangat)", "Lelah (Cepat capek)", "Letih (Tenaga berkurang)", "Lemah (Otot tak bertenaga)", "Lunglai (Ingin rebahan terus)"].map((q, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500" onChange={(e) => setRiskScore((prev) => (e.target.checked ? prev + 1 : prev - 1))} />
                  <span className="text-sm font-medium text-slate-700">{q}</span>
                </label>
              ))}
              <button onClick={handleRiskSubmit} className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl mt-2">
                Cek Risiko
              </button>
            </div>
          ) : (
            <div className={`p-4 rounded-xl text-center ${riskResult.color}`}>
              <h4 className="font-bold text-xl mb-2">Risiko {riskResult.level}</h4>
              <p className="text-sm">{riskResult.msg}</p>
              <button
                onClick={() => {
                  setRiskResult(null);
                  setRiskScore(0);
                }}
                className="mt-4 text-xs underline"
              >
                Ulangi Tes
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. Input Lab Hb */}
      {activeSection === "lab" && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-fade-in">
          <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <Droplet size={20} className="fill-red-100 text-red-500" /> Input Data Hb
          </h3>
          <p className="text-sm text-slate-500 mb-4">Masukkan hasil lab dari Puskesmas/RS.</p>

          <div className="mb-4">
            <label className="text-xs font-bold text-slate-500 mb-1 block">Siapa Anda?</label>
            <select value={userCategory} onChange={(e) => setUserCategory(e.target.value)} className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm">
              <option value="putri">Remaja Putri (Batas Hb &lt; 12)</option>
              <option value="pria">Remaja Pria (Batas Hb &lt; 14)</option>
              <option value="hamil">Ibu Hamil (Batas Hb &lt; 11)</option>
            </select>
          </div>

          <div className="flex gap-2">
            <input type="number" value={hbValue || ""} onChange={(e) => setHbValue(e.target.value)} placeholder="Contoh: 11.5" className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="bg-emerald-600 text-white px-6 rounded-lg font-bold">Simpan</button>
          </div>

          {hbValue && (
            <div className={`mt-4 p-3 rounded-lg text-sm font-medium border ${isAnemia ? "bg-red-50 border-red-200 text-red-700" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`}>
              {isAnemia ? `⚠ Hb Rendah (<${limit} g/dL). Risiko Anemia.` : `✅ Hb Normal (≥${limit} g/dL).`}
            </div>
          )}
        </div>
      )}

      {/* 4. BMI Calculator */}
      {activeSection === "bmi" && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-fade-in">
          <h3 className="font-bold text-emerald-800 mb-4">Kalkulator BMI</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-500">Berat (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border p-2 rounded-lg" placeholder="60" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Tinggi (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border p-2 rounded-lg" placeholder="165" />
            </div>
            <button onClick={calculateBMI} className="w-full bg-emerald-600 text-white font-bold py-2 rounded-lg mt-2">
              Hitung
            </button>
          </div>
          {bmiResult && (
            <div className="mt-4 text-center p-4 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-700">{bmiResult.bmi}</div>
              <div className="font-medium text-slate-600">{bmiResult.cat}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// 4. Feature: Edukasi & Artikel Expanded
const EducationView = () => {
  const openHalodoc = () => window.open("https://www.halodoc.com", "_blank");

  return (
    <div className="space-y-4 pb-24 p-4">
      <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg mb-4">
        <h2 className="text-2xl font-bold mb-1">Pojok Edukasi</h2>
        <p className="opacity-90 text-sm">Ilmu adalah kunci pencegahan.</p>
        <button onClick={openHalodoc} className="mt-4 bg-white text-emerald-700 font-bold py-2 px-4 rounded-full text-sm shadow-md flex items-center gap-2 hover:bg-slate-100 transition-colors">
          <Heart size={16} className="fill-emerald-700" /> Konsultasi Sekarang
        </button>
      </div>

      <div className="grid gap-4">
        {/* Anemia Types */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-emerald-800 mb-2">Definisi & Jenis Anemia</h3>
          <div className="text-sm text-slate-600 leading-relaxed">
            <p>Anemia adalah kondisi kekurangan sel darah merah. Tipe umum:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Defisiensi Besi:</strong> Paling umum, karena kurang asupan zat besi.
              </li>
              <li>
                <strong>Thalassemia:</strong> Kelainan genetik pada hemoglobin.
              </li>
              <li>
                <strong>Anemia Aplastik:</strong> Tubuh berhenti memproduksi sel darah baru.
              </li>
            </ul>
          </div>
        </div>

        {/* Pregnancy Symptoms */}
        <div className="bg-pink-50 p-4 rounded-xl shadow-sm border border-pink-100">
          <h3 className="font-bold text-pink-800 mb-2">Ibu Hamil & Anemia</h3>
          <div className="text-sm text-slate-600">
            <p>Waspadai ciri-ciri berikut pada Bumil:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Pusing dan sakit kepala berlebih.</li>
              <li>Kulit, bibir, dan kuku terlihat pucat.</li>
              <li>Jantung berdebar cepat atau tidak beraturan.</li>
              <li>Sesak napas saat aktivitas ringan.</li>
            </ul>
          </div>
        </div>

        {/* Nutrition */}
        <div className="bg-orange-50 p-4 rounded-xl shadow-sm border border-orange-100">
          <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
            <Utensils size={18} /> Nutrisi & Diet
          </h3>
          <div className="text-sm text-slate-600 space-y-2">
            <p>
              <strong>Zat Besi Tinggi:</strong> Daging merah, hati ayam, bayam, kacang-kacangan.
            </p>
            <p>
              <strong>Tips Penyerapan:</strong> <br />✅ Minum Jus Jeruk (Vit C). <br />❌ Hindari Teh/Kopi (Tanin) saat makan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Feature: Komunitas (New)
const CommunityView = () => {
  return (
    <div className="p-4 flex flex-col h-full pb-24">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
        <Users size={28} /> Komunitas
      </h2>

      {/* Forum Threads */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-slate-700">Diskusi Terbaru</h3>
          <button className="text-xs text-emerald-600 font-bold">Lihat Semua</button>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-sm text-slate-800">Efek samping mual minum TTD?</h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">Ada yang merasa mual setelah minum tablet? Tipsnya dong kakak-kakak...</p>
            <div className="flex gap-3 mt-2 text-[10px] text-slate-400">
              <span>Oleh: Rina A.</span>
              <span>💬 12 Balasan</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-sm text-slate-800">Resep Smoothies Bayam Enak</h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">Aku campur nanas dan sedikit madu, rasanya seger banget ga bau langu!</p>
            <div className="flex gap-3 mt-2 text-[10px] text-slate-400">
              <span>Oleh: DapurSehat</span>
              <span>💬 5 Balasan</span>
            </div>
          </div>
        </div>
      </div>

      {/* News Update */}
      <div>
        <h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
          <Newspaper size={18} /> Update Berita
        </h3>
        <div className="bg-slate-800 text-white p-4 rounded-xl shadow-md">
          <div className="text-xs font-bold text-orange-400 mb-1">KEMENKES RI</div>
          <h4 className="font-bold text-sm mb-2">Program Pemberian TTD Remaja Putri Sekolah</h4>
          <p className="text-xs text-slate-300">Pemerintah galakkan distribusi TTD gratis di SMA/SMK seluruh Indonesia untuk tekan angka stunting masa depan.</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [history, setHistory] = useState({});
  const [todayStatus, setTodayStatus] = useState(false);
  const [userHb, setUserHb] = useState(null);
  const [userCategory, setUserCategory] = useState("putri"); // Default category
  const today = getTodayString();

  useEffect(() => {
    const savedHistory = localStorage.getItem("previa_history");
    const savedHb = localStorage.getItem("previa_hb");
    const savedCat = localStorage.getItem("previa_cat");

    if (savedHistory) {
      const parsed = JSON.parse(savedHistory);
      setHistory(parsed);
      if (parsed[today]) setTodayStatus(true);
    }
    if (savedHb) setUserHb(savedHb);
    if (savedCat) setUserCategory(savedCat);
  }, []);

  const handleTakeSupplement = () => {
    const newHistory = { ...history };
    const todayDate = new Date();

    // Mark today and next 6 days (total 7 days) as TRUE/GREEN
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(todayDate);
      nextDate.setDate(todayDate.getDate() + i);
      const offset = nextDate.getTimezoneOffset() * 60000;
      const localDate = new Date(nextDate.getTime() - offset);
      const dateStr = localDate.toISOString().split("T")[0];
      newHistory[dateStr] = true;
    }

    setHistory(newHistory);
    setTodayStatus(true);
    localStorage.setItem("previa_history", JSON.stringify(newHistory));
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  };

  const handleSetHb = (val) => {
    setUserHb(val);
    localStorage.setItem("previa_hb", val);
  };

  const handleSetUserCategory = (cat) => {
    setUserCategory(cat);
    localStorage.setItem("previa_cat", cat);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeView todayStatus={todayStatus} onTakeSupplement={handleTakeSupplement} userHb={userHb} />;
      case "calendar":
        return <CalendarTracker history={history} />;
      case "check":
        return <HealthScreener hbValue={userHb} setHbValue={handleSetHb} userCategory={userCategory} setUserCategory={handleSetUserCategory} />;
      case "learn":
        return <EducationView />;
      case "community":
        return <CommunityView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-slate-200">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-emerald-300 rounded-lg flex items-center justify-center text-white font-bold">P</div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">Previa App</span>
        </div>
        <button onClick={() => setActiveTab("community")} className="relative p-2 rounded-full hover:bg-slate-100 text-slate-600">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="min-h-[calc(100vh-140px)]">{renderContent()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-200 flex justify-between px-6 items-center py-3 pb-safe z-20">
        <NavBtn icon={Home} label="Home" id="home" activeTab={activeTab} setTab={setActiveTab} />
        <NavBtn icon={CalendarIcon} label="Riwayat" id="calendar" activeTab={activeTab} setTab={setActiveTab} />

        {/* Center Button */}
        <button
          onClick={() => setActiveTab("check")}
          className={`relative -top-6 bg-emerald-500 text-white p-4 rounded-full shadow-xl border-4 border-slate-50 transition-transform ${activeTab === "check" ? "scale-110 bg-emerald-600" : "hover:scale-105"}`}
        >
          <Activity size={24} />
        </button>

        <NavBtn icon={BookOpen} label="Edukasi" id="learn" activeTab={activeTab} setTab={setActiveTab} />
        <NavBtn icon={Users} label="Forum" id="community" activeTab={activeTab} setTab={setActiveTab} />
      </nav>

      <style>{`
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 20px); }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
}

const NavBtn = ({ icon: Icon, label, id, activeTab, setTab }) => (
  <button onClick={() => setTab(id)} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === id ? "text-emerald-600" : "text-slate-400"}`}>
    <Icon size={24} strokeWidth={activeTab === id ? 2.5 : 2} />
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);
