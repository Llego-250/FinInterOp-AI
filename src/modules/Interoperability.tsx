import { motion } from 'motion/react';
import { Network, ArrowRightLeft, Code, Lock } from 'lucide-react';

const protocols = [
  { id: 1, name: 'ISO 20022 Mapping', type: 'Standard', status: 'Enforced' },
  { id: 2, name: 'Open Banking API v2', type: 'API', status: 'Active' },
  { id: 3, name: 'Mobile Money Interop Protocol', type: 'Protocol', status: 'Active' },
  { id: 4, name: 'Legacy SWIFT Bridge', type: 'Bridge', status: 'Deprecated' },
];

export function Interoperability() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Interoperability Framework</h2>
          <p className="text-gray-400">Define standards and protocols for seamless data exchange.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white/5 border border-white/5 rounded-xl"
        >
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            Active Protocols
          </h3>
          <div className="space-y-3">
            {protocols.map((p) => (
              <div key={p.id} className="flex items-center justify-between p-3 bg-black/20 rounded border border-white/5">
                <div className="flex items-center gap-3">
                  <Code className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-200">{p.name}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${p.status === 'Active' || p.status === 'Enforced' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-white/5 border border-white/5 rounded-xl"
        >
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-400" />
            Security & Encryption
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">End-to-End Encryption</span>
              <span className="text-green-400 text-sm">AES-256-GCM</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
              <div className="bg-green-500 w-full h-full" />
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-400">Token Validation Rate</span>
              <span className="text-cyan-400 text-sm">99.9%</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
              <div className="bg-cyan-500 w-[99%] h-full" />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-400">API Rate Limiting</span>
              <span className="text-yellow-400 text-sm">Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
