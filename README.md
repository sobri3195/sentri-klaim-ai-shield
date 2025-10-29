# 🧠 SentriKlaimAI
**AI-Powered Fraud Detection System for BPJS & Healthcare Claims**
Website: [sentriartificial.com](https://sentriartificial.com) | Admin Portal: [admin.sentriartificial.com](https://admin.sentriartificial.com)

## 📘 Deskripsi Proyek
SentriKlaimAI adalah platform analitik cerdas berbasis kecerdasan buatan (AI) yang dirancang untuk mendeteksi, mencegah, dan mengelola potensi fraud pada klaim BPJS Kesehatan secara real-time.
Dengan kombinasi machine learning, graph analytics, dan anomaly detection, sistem ini mampu mengidentifikasi pola klaim mencurigakan seperti upcoding, unbundling, phantom billing, hingga kolusi lintas fasilitas kesehatan.

SentriKlaimAI dikembangkan oleh tim multidisipliner (medis, data, dan teknologi) di bawah Sentri Artificial Intelligence Lab, berfokus pada efisiensi pembiayaan publik, integritas layanan kesehatan, dan akuntabilitas digital.

## 🚀 Fitur Utama
- 🔍 Fraud Risk Scoring Engine – Model ansambel AI yang memprediksi tingkat risiko fraud per klaim.
- 🧩 Graph-Based Collusion Detection – Analisis relasi pasien–provider untuk mendeteksi jaringan kolusi.
- 📊 Explainable AI (XAI) – Transparansi keputusan model dengan feature attribution (SHAP).
- 🕒 Real-Time Monitoring – Pemantauan klaim dan anomali secara langsung dengan notifikasi adaptif.
- 🔐 Data Privacy & Compliance – Sesuai UU PDP & ISO/IEC 27001, dengan data de-identifikasi dan enkripsi penuh.
- 🪪 Blockchain Audit Trail – Catatan keputusan model dan histori klaim yang tidak dapat dimanipulasi.
- 🧑‍⚕️ Case Management Dashboard – Workflow auditor untuk review, investigasi, dan feedback loop model.

## ⚙️ Arsitektur Sistem
```
Data Source (BPJS, RS, FKTP, Apotek)
      ↓
ETL & Data Quality Pipeline (Airflow / Prefect)
      ↓
Feature Store (Feast / Redis)
      ↓
AI Engine
 ├── Supervised Model (XGBoost / LightGBM)
 ├── Anomaly Detection (Isolation Forest / Autoencoder)
 └── Graph Analytics (GraphSAGE / GCN)
      ↓
Fraud Risk API (FastAPI / gRPC)
      ↓
Admin Portal & Mobile App
      ↓
Human-in-the-Loop Feedback → Model Retraining
```

## 📈 Target Dampak
| Indikator | Target |
|------------|---------|
| Akurasi Deteksi Fraud | ≥ 92% (Precision @ Top-5%) |
| False Positive Rate | ≤ 8% |
| Potensi Penghematan | Rp 50–100 Miliar / tahun (estimasi pilot) |
| SLA Investigasi | < 48 jam / kasus |
| Waktu Deteksi | < 5 menit sejak klaim masuk |

## 🔬 Teknologi & Stack
| Komponen | Teknologi |
|-----------|------------|
| Backend | Python (FastAPI, MLflow, Pydantic) |
| ML Engine | scikit-learn, LightGBM, PyTorch, NetworkX |
| Data Orchestration | Airflow, Prefect |
| Storage | PostgreSQL, MinIO, Redis |
| Dashboard | Next.js, TailwindCSS, ShadCN UI |
| Blockchain Layer | Hyperledger Fabric (Permissioned Ledger) |
| Infra & MLOps | Docker, Kubernetes, Grafana, Prometheus |
| Compliance | ISO 27001, UU PDP, DPMS Framework |

## 🧑‍💻 Alur Pengguna
1. Provider atau BPJS mengirim data klaim melalui API atau batch CSV.
2. AI Engine melakukan preprocessing → ekstraksi fitur → scoring risiko fraud.
3. Klaim dengan skor tinggi ditandai otomatis di Dashboard Investigasi.
4. Auditor meninjau kasus melalui Explainability Panel dan memberi umpan balik.
5. Feedback masuk ke modul Active Learning untuk peningkatan model berikutnya.

## 🧭 Panduan Akses
- Portal Utama: https://sentriartificial.com  
- Admin Panel (Internal): https://admin.sentriartificial.com

## 📚 Struktur Repositori
```
SentriKlaimAI/
├── data/                
├── notebooks/           
├── src/
│   ├── api/             
│   ├── ml/              
│   ├── graph/           
│   ├── blockchain/      
│   └── utils/           
├── dashboards/          
├── tests/               
├── docs/                
└── README.md            
```

## 🧩 Cara Menjalankan (Local Setup)
```bash
git clone https://github.com/sentriartificial/SentriKlaimAI.git
cd SentriKlaimAI
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.api.main:app --reload
```

## 🧠 Lisensi & Kepatuhan
Lisensi: Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)
Data uji bersifat sintetis dan tidak mengandung informasi pribadi.

Mematuhi:
- UU Nomor 27 Tahun 2022 (Perlindungan Data Pribadi)
- ISO/IEC 27001:2022 – Information Security Management
- ISO/IEC 27701:2019 – Privacy Information Management

## 🏗️ Roadmap 2025
| Bulan | Tahapan | Output |
|--------|----------|---------|
| Jan–Feb | Integrasi Data BPJS (Pilot) | Data pipeline & baseline model |
| Mar–Apr | Model Graph & Explainability | Graph engine & XAI module |
| Mei–Jun | Blockchain Logging | Hyperledger PoC |
| Jul–Sep | Pilot Production | Real-world evaluation |
| Okt–Des | Scale-up Nasional | Multi-region deployment |

## 👥 Tim & Kontak
Sentri Artificial Intelligence Lab  
📍 Jakarta, Indonesia  
📧 support@sentriartificial.com  
🌐 https://sentriartificial.com
