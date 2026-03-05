import { motion } from 'motion/react';
import { BrainCircuit, AlertTriangle, TrendingUp, ShieldAlert } from 'lucide-react';

const alerts = [
  { id: 1, type: 'Fraud', message: 'High-value transaction pattern detected in dormant account.', score: 92, time: '10m ago' },
  { id: 2, type: 'Credit', message: 'Liquidity threshold breach predicted for Bank B.', score: 85, time: '1h ago' },
  { id: 3, type: 'Compliance', message: 'KYC mismatch in cross-border transfer.', score: 78, time: '2h ago' },
];

export function AIDecision() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Decision Support</h2>
          <p className="text-gray-400">Predictive analytics and automated risk assessment.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-2 p-6 bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Live Risk Analysis</h3>
          </div>

          <div className="space-y-4">
            {alerts.map((alert, i) => (
              <motion.div 
                key={alert.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-black/40 border border-white/5 rounded-lg hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <div className={`mt-1 p-1 rounded-full ${alert.score > 90 ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium text-white">{alert.type} Alert</h4>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{alert.message}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-500 uppercase">Risk Score</span>
                  <span className={`text-lg font-mono font-bold ${alert.score > 90 ? 'text-red-400' : 'text-yellow-400'}`}>{alert.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white/5 border border-white/5 rounded-xl"
          >
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Market Predictions
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Transaction Vol. (24h)</span>
                <span className="text-green-400 font-mono">+12.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Fraud Attempts</span>
                <span className="text-red-400 font-mono">-3.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">System Latency</span>
                <span className="text-yellow-400 font-mono">~45ms</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white/5 border border-white/5 rounded-xl"
          >
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
              Policy Recommendations
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI suggests tightening <span className="text-white">Level 2 KYC</span> for international transfers above $5k due to recent anomaly patterns in Sector 4.
            </p>
            <button className="mt-4 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-sm text-white transition-colors">
              View Report
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
