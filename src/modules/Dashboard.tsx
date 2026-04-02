import { motion } from 'motion/react';
import { 
  Building2, 
  Smartphone, 
  CreditCard, 
  Network, 
  Cpu, 
  BarChart3, 
  ShieldCheck,
  Zap,
  Activity,
  BrainCircuit
} from 'lucide-react';
import { TransactionFlowGraph } from '../components/visualization/TransactionFlowGraph';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Mission Control</h1>
          <p className="text-gray-400 mt-1">Real-time ecosystem monitoring and AI analysis.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-green-400">SYSTEM OPERATIONAL</span>
        </div>
      </div>

      {/* 3D Transaction Flow Graph */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[600px] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm"
      >
        <TransactionFlowGraph />
      </motion.div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Transactions', value: '2.4M', change: '+12%', icon: Zap, color: 'text-yellow-400' },
          { label: 'Active Nodes', value: '142', change: '+4', icon: Network, color: 'text-cyan-400' },
          { label: 'Risk Alerts', value: '3', change: '-2', icon: ShieldCheck, color: 'text-red-400' },
          { label: 'AI Accuracy', value: '99.1%', change: '+0.4%', icon: BrainCircuit, color: 'text-purple-400' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + (i * 0.1) }}
            className="p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
