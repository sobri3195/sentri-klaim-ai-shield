
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Dashboard = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dashboard Overview
          </h2>
          <p className="text-xl text-gray-600">
            Monitor sistem deteksi fraud klaim BPJS secara real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Tren Fraud 6 Bulan Terakhir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Jan</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">0.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Feb</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">1.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mar</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">2.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Apr</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">2.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mei</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">1.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Jun</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">1.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Distribusi Risiko
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" 
                              strokeDasharray="196" strokeDashoffset="43" className="transition-all duration-1000" />
                      <circle cx="50" cy="50" r="40" stroke="#f59e0b" strokeWidth="8" fill="none" 
                              strokeDasharray="35" strokeDashoffset="0" className="transition-all duration-1000" />
                      <circle cx="50" cy="50" r="40" stroke="#ef4444" strokeWidth="8" fill="none" 
                              strokeDasharray="10" strokeDashoffset="0" className="transition-all duration-1000" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Rendah</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Sedang</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Tinggi</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">4%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Analisis Geografis Fraud - Kasus fraud per provinsi bulan ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 w-32">DKI Jakarta</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-900 w-8">60</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 w-32">Jawa Tengah</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-4 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-900 w-8">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 w-32">Sumatra Utara</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full" style={{width: '25%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-900 w-8">15</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
