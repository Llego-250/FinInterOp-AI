import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

export function RegulatoryCompliance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
          <Scale className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Regulatory Compliance</h1>
          <p className="text-gray-400 mt-1">Reporting and compliance monitoring.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Reports</h2>
        <p className="text-gray-400">Compliance reports go here...</p>
      </div>
    </div>
  );
}
