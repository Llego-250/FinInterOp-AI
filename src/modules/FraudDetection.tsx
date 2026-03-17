import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export function FraudDetection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
          <ShieldAlert className="w-6 h-6 text-orange-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Fraud Detection</h1>
          <p className="text-gray-400 mt-1">Real-time transaction monitoring.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Alerts</h2>
        <p className="text-gray-400">Fraud alerts go here...</p>
      </div>
    </div>
  );
}
