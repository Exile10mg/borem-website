import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page 8',
  description: 'Strona reklamowa Borem.pl - Landing Page 8',
  robots: {"index":false,"follow":false},
};

export default function Reklama8Page() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Logo Only - Centered */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Logo icon */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-2xl rounded-2xl"></div>
          <div className="relative w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
            <span className="text-white font-black text-[85px] relative z-10 drop-shadow-2xl">B</span>
            <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Brand name */}
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-[60px] font-black text-white tracking-tight leading-none">Borem</span>
            <span className="text-[60px] font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">.pl</span>
          </div>
          <div className="flex items-center gap-2 -mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <p className="text-[9px] text-gray-400 font-semibold tracking-[0.25em] uppercase">
              Agencja Marketingowa
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
