import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export function FinancialInclusion() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-teal-500/20 rounded-xl border border-teal-500/30">
          <Globe className="w-6 h-6 text-teal-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Financial Inclusion</h1>
          <p className="text-gray-400 mt-1">Access and demographic analytics.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Demographics</h2>
        <p className="text-gray-400">Inclusion data goes here...</p>
      </div>
    </div>
  );
}
