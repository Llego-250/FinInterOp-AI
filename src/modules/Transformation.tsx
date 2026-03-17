import { motion } from 'motion/react';
import { GitMerge } from 'lucide-react';

export function Transformation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
          <GitMerge className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Data Integration & Transform</h1>
          <p className="text-gray-400 mt-1">ETL/ELT pipelines and processing.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Pipelines</h2>
        <p className="text-gray-400">Pipeline configuration goes here...</p>
      </div>
    </div>
  );
}
