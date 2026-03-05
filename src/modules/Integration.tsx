import { motion } from 'motion/react';
import { Database, CheckCircle, AlertCircle, RefreshCw, Server } from 'lucide-react';

const systems = [
  { id: 1, name: 'Bank of Kigali Core', type: 'Banking', status: 'Active', lastSync: '2 mins ago', records: '1.2M' },
  { id: 2, name: 'MTN Mobile Money', type: 'Mobile Wallet', status: 'Active', lastSync: '30 secs ago', records: '850K' },
  { id: 3, name: 'Airtel Money', type: 'Mobile Wallet', status: 'Warning', lastSync: '15 mins ago', records: '420K' },
  { id: 4, name: 'RSwitch Gateway', type: 'Payment Switch', status: 'Active', lastSync: '1 min ago', records: '2.1M' },
  { id: 5, name: 'I&M Bank API', type: 'Banking', status: 'Inactive', lastSync: '4 hours ago', records: '0' },
];

export function Integration() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Data Integration Hub</h2>
          <p className="text-gray-400">Manage connections to external financial systems.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
          <RefreshCw className="w-4 h-4" />
          Sync All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {systems.map((system, i) => (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${system.status === 'Active' ? 'bg-green-500/10 text-green-400' : system.status === 'Warning' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-red-500/10 text-red-400'}`}>
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{system.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    {system.type}
                  </span>
                  <span>•</span>
                  <span>{system.records} Records</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className={`text-sm font-medium ${system.status === 'Active' ? 'text-green-400' : system.status === 'Warning' ? 'text-yellow-400' : 'text-red-400'}`}>
                  {system.status}
                </div>
                <div className="text-xs text-gray-500">Last sync: {system.lastSync}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
