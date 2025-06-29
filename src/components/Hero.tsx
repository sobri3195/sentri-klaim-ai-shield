
import { Shield, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
                <Shield className="h-16 w-16 text-blue-300" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">
            SentriKlaimAI
          </h1>
          
          <p className="text-3xl font-semibold mb-8 text-blue-100">
            BPJS Fraud Detection System
          </p>
          
          <p className="text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Sistem AI canggih untuk mendeteksi dan mencegah fraud klaim BPJS secara real-time. 
            Tingkatkan akurasi deteksi hingga 95% dan hemat miliaran rupiah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Brain className="mr-2 h-5 w-5" />
              Mulai Deteksi AI
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
              <TrendingUp className="mr-2 h-5 w-5" />
              Lihat Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
              <div className="text-blue-200">Akurasi Deteksi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-300 mb-2">2.8M</div>
              <div className="text-blue-200">Penghematan/Bulan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-300 mb-2">24/7</div>
              <div className="text-blue-200">Monitoring Real-time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
