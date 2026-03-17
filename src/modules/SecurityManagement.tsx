import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

export function SecurityManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-slate-500/20 rounded-xl border border-slate-500/30">
          <Lock className="w-6 h-6 text-slate-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">User & Security Management</h1>
          <p className="text-gray-400 mt-1">Role assignment and access control.</p>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Users</h2>
        <p className="text-gray-400">User management goes here...</p>
      </div>
    </div>
  );
}
