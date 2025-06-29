
export const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">-0.5%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Fraud Rate</div>
            <div className="text-green-600 font-semibold">2.3% ↓</div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">+15%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Klaim Diproses</div>
            <div className="text-blue-600 font-semibold">12,847</div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">-1.2</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Waktu Proses</div>
            <div className="text-emerald-600 font-semibold">4.2 menit</div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">+28%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Penghematan</div>
            <div className="text-purple-600 font-semibold">Rp 2.8M</div>
          </div>
        </div>
      </div>
    </section>
  );
};
