import { motion } from 'motion/react';
import { Link } from 'lucide-react';

export function DataSource() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
          <Link className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Data Source Integration</h1>
          <p className="text-gray-400 mt-1">Connect to financial systems.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Connected Systems</h2>
        <p className="text-gray-400">List of connected systems goes here...</p>
      </div>
    </div>
  );
}
