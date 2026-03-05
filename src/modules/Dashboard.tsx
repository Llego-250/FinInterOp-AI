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

      {/* 3D Layered Architecture Visualization */}
      <div className="relative h-[600px] w-full perspective-container flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm">
        
        {/* Base Layer: Financial Systems */}
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -10, y: 100, opacity: 0 }}
          animate={{ rotateX: 60, rotateZ: -10, y: 150, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute w-[600px] h-[400px] bg-blue-900/10 border border-blue-500/20 rounded-xl preserve-3d shadow-[0_0_50px_rgba(0,0,255,0.1)]"
        >
          <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 transform translate-z-10">
            <div className="flex flex-col items-center justify-center p-4 bg-blue-950/50 border border-blue-500/30 rounded-lg">
              <Building2 className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-xs text-blue-200">Banks</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-purple-950/50 border border-purple-500/30 rounded-lg">
              <Smartphone className="w-8 h-8 text-purple-400 mb-2" />
              <span className="text-xs text-purple-200">Mobile Money</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-cyan-950/50 border border-cyan-500/30 rounded-lg">
              <CreditCard className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-xs text-cyan-200">Gateways</span>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-blue-500/50 text-sm font-mono tracking-widest uppercase">Base Layer: Infrastructure</div>
        </motion.div>

        {/* Middle Layer: Interoperability */}
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -10, y: 0, opacity: 0 }}
          animate={{ rotateX: 60, rotateZ: -10, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-[550px] h-[350px] bg-cyan-900/10 border border-cyan-500/30 rounded-xl preserve-3d shadow-[0_0_50px_rgba(0,255,255,0.1)] backdrop-blur-sm"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-cyan-500/50 animate-[spin_10s_linear_infinite] flex items-center justify-center">
              <Network className="w-12 h-12 text-cyan-400" />
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-cyan-500/50 text-sm font-mono tracking-widest uppercase rotate-90">Middle Layer: Interoperability</div>
        </motion.div>

        {/* Upper Layer: AI Analytics */}
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -10, y: -100, opacity: 0 }}
          animate={{ rotateX: 60, rotateZ: -10, y: -150, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute w-[500px] h-[300px] bg-purple-900/10 border border-purple-500/40 rounded-xl preserve-3d shadow-[0_0_60px_rgba(168,85,247,0.2)] backdrop-blur-md"
        >
          <div className="absolute inset-0 p-6 grid grid-cols-2 gap-4">
            <div className="bg-black/40 border border-purple-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] text-purple-200 uppercase">AI Engine</span>
              </div>
              <div className="h-1 w-full bg-purple-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[75%] animate-pulse" />
              </div>
            </div>
            <div className="bg-black/40 border border-purple-500/30 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] text-purple-200 uppercase">Risk Score</span>
              </div>
              <div className="text-xl font-mono text-purple-300">98.2%</div>
            </div>
            <div className="col-span-2 bg-black/40 border border-purple-500/30 rounded p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-400" />
                <span className="text-[10px] text-green-200 uppercase">Live Feed</span>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-green-500/50 rounded-full animate-[bounce_1s_infinite]" />
                <div className="w-1 h-4 bg-green-500/50 rounded-full animate-[bounce_1.2s_infinite]" />
                <div className="w-1 h-4 bg-green-500/50 rounded-full animate-[bounce_0.8s_infinite]" />
              </div>
            </div>
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-purple-500/50 text-sm font-mono tracking-widest uppercase">Upper Layer: AI Analytics</div>
        </motion.div>

        {/* User Interaction Layer */}
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -10, y: -200, opacity: 0 }}
          animate={{ rotateX: 60, rotateZ: -10, y: -250, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute w-[450px] h-[250px] pointer-events-none preserve-3d"
        >
          <div className="absolute inset-0 flex items-center justify-center gap-12 transform translate-z-20">
            {/* Admin Avatar */}
            <div className="flex flex-col items-center animate-[float_3s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white/20 shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="mt-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-yellow-400 border border-yellow-500/30">Admin</div>
            </div>

            {/* Analyst Avatar */}
            <div className="flex flex-col items-center animate-[float_4s_ease-in-out_infinite_0.5s]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="mt-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-purple-400 border border-purple-500/30">Analyst</div>
            </div>

            {/* Developer Avatar */}
            <div className="flex flex-col items-center animate-[float_3.5s_ease-in-out_infinite_1s]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="mt-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-cyan-400 border border-cyan-500/30">Dev</div>
            </div>
          </div>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-white/30 text-sm font-mono tracking-widest uppercase">User Layer</div>
        </motion.div>

        {/* Connecting Beams */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute left-1/2 top-1/2 w-1 h-[300px] bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500 -translate-x-1/2 -translate-y-1/2 blur-sm opacity-30" />
        </motion.div>

      </div>

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
