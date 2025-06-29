
import { Shield, Brain, Search, FileCheck, TrendingUp, Users, AlertTriangle, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Modules = () => {
  const coreModules = [
    { name: "Dashboard", icon: TrendingUp, description: "Monitor real-time fraud detection" },
    { name: "Early Warning System", icon: AlertTriangle, description: "Sistem peringatan dini fraud" },
    { name: "Real-Time Duplicate Detector", icon: Search, description: "Deteksi duplikasi klaim real-time" },
    { name: "Compliance & Coding Verifier", icon: FileCheck, description: "Verifikasi kepatuhan dan coding" },
    { name: "Predictive Cost Estimator", icon: Brain, description: "Estimasi biaya prediktif" },
    { name: "Bulk Claims Processor", icon: Settings, description: "Pemrosesan klaim massal" },
    { name: "Dispute Resolution", icon: Shield, description: "Resolusi sengketa klaim" },
    { name: "Document Integrity Scanner", icon: FileCheck, description: "Scanner integritas dokumen" },
    { name: "Validasi Klaim", icon: Shield, description: "Validasi otomatis klaim" },
    { name: "Analisis Cross-Provider", icon: Search, description: "Analisis lintas provider" },
    { name: "Audit Trail", icon: FileCheck, description: "Jejak audit lengkap" }
  ];

  const aiModules = [
    { name: "Behavioral Claim Profiling", icon: Brain, description: "Profiling perilaku klaim dengan AI" },
    { name: "AI Voice & Text Reporter", icon: Brain, description: "Reporter suara dan teks AI" },
    { name: "Geo-Fencing Fraud Alert", icon: AlertTriangle, description: "Alert fraud berdasarkan lokasi" },
    { name: "Provider Scorecard", icon: TrendingUp, description: "Scorecard penilaian provider" },
    { name: "Blockchain Claim Ledger", icon: Shield, description: "Ledger klaim blockchain" },
    { name: "Disease Cluster Map", icon: Search, description: "Peta cluster penyakit" },
    { name: "Biometric Authenticator", icon: Shield, description: "Autentikasi biometrik" }
  ];

  const managementModules = [
    { name: "User Management", icon: Users, description: "Manajemen pengguna sistem" },
    { name: "Blacklist & Watchlist", icon: AlertTriangle, description: "Daftar hitam dan pengawasan" },
    { name: "Anomaly Heatmap", icon: TrendingUp, description: "Peta panas anomali" },
    { name: "Settings", icon: Settings, description: "Pengaturan sistem" }
  ];

  const ModuleCard = ({ module }: { module: any }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg p-2">
            <module.icon className="h-5 w-5 text-white" />
          </div>
          <CardTitle className="text-sm font-semibold text-gray-900">{module.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-gray-600">{module.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modul SentriKlaimAI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistem komprehensif dengan modul core, AI advanced, dan manajemen terintegrasi
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {coreModules.map((module, index) => (
                <ModuleCard key={index} module={module} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advanced AI Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {aiModules.map((module, index) => (
                <ModuleCard key={index} module={module} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {managementModules.map((module, index) => (
                <ModuleCard key={index} module={module} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
