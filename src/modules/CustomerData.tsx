import { motion } from 'motion/react';
import { UserCircle } from 'lucide-react';

export function CustomerData() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
          <UserCircle className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Unified Customer Data</h1>
          <p className="text-gray-400 mt-1">Customer 360° view and identity resolution.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Customer Profiles</h2>
        <p className="text-gray-400">Customer data goes here...</p>
      </div>
    </div>
  );
}
