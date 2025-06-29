
import { Shield, Search, FileCheck, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Validasi Klaim Otomatis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unggah file klaim untuk analisis fraud AI yang komprehensif dan akurat
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-2xl border-0 bg-gradient-to-r from-blue-50 to-emerald-50">
            <CardContent>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Upload className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Auto Validasi</h3>
                <p className="text-gray-600 mb-8">Klik untuk unggah file</p>
                
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Pilih File Klaim
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  CSV, Excel, atau JSON (max 10MB)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sistem Peringatan Dini
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-red-100 rounded-full p-3">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <span className="text-xs text-gray-500">2 menit yang lalu</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Duplikasi Klaim Terdeteksi</h4>
              <p className="text-gray-600 text-sm mb-3">RS Harapan Kita - 3 klaim identik dalam 24 jam</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Jakarta Barat</span>
                <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Investigasi
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <Search className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-xs text-gray-500">15 menit yang lalu</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Pola Geografis Tidak Wajar</h4>
              <p className="text-gray-600 text-sm mb-3">Peningkatan klaim 300% di Kabupaten Bogor</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Bogor</span>
                <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                  Investigasi
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-yellow-100 rounded-full p-3">
                  <FileCheck className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-xs text-gray-500">1 jam yang lalu</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Provider Mencurigakan</h4>
              <p className="text-gray-600 text-sm mb-3">Klinik Sehat Selalu - Kode prosedur usang digunakan</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Bandung</span>
                <Button size="sm" variant="outline" className="text-yellow-600 border-yellow-200 hover:bg-yellow-50">
                  Investigasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
