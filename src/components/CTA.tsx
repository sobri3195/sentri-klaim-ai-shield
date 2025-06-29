
import { Shield, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
                <Shield className="h-12 w-12 text-blue-300" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Siap Melindungi BPJS dari Fraud?
          </h2>
          
          <p className="text-xl mb-12 text-blue-200 max-w-2xl mx-auto">
            Bergabunglah dengan SentriKlaimAI dan tingkatkan keamananan sistem klaim BPJS Anda. 
            Deteksi fraud dengan akurasi tinggi dan hemat miliaran rupiah.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Mulai Uji Coba Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
              Konsultasi dengan Tim
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-blue-200 text-sm">+62 21 1234 5678</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-blue-200 text-sm">info@sentriklaimai.com</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/20">
        <div className="container mx-auto px-6">
          <div className="text-center text-blue-200">
            <p>&copy; 2024 SentriKlaimAI. All rights reserved. Sistem AI untuk deteksi fraud BPJS.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};
