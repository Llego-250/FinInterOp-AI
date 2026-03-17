import { motion } from 'motion/react';
import { UserPlus } from 'lucide-react';

export function Auth() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
          <UserPlus className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">User Registration & Auth</h1>
          <p className="text-gray-400 mt-1">Secure registration and authentication.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Login</h2>
          <p className="text-gray-400">Login form goes here...</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Register</h2>
          <p className="text-gray-400">Registration form goes here...</p>
        </div>
      </div>
    </div>
  );
}
