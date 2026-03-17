import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export function CreditRisk() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30">
          <TrendingUp className="w-6 h-6 text-red-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Credit Risk Analytics</h1>
          <p className="text-gray-400 mt-1">Borrower and portfolio risk scoring.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Risk Models</h2>
        <p className="text-gray-400">Risk analytics goes here...</p>
      </div>
    </div>
  );
}
