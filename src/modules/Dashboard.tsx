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
  BrainCircuit,
  LayoutDashboard,
  Server,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { TransactionFlowGraph } from '../components/visualization/TransactionFlowGraph';

export function Dashboard() {
  return (
    <div className="space-y-6 text-[#e5e5e5]">
      {/* Header */}
      <div className="flex items-end justify-between border-b pb-4 border-[#262626]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#111111] rounded border border-[#262626]">
            <LayoutDashboard className="w-8 h-8 text-[#00f0ff]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-serif italic text-white leading-none">Mission Control</h1>
            <p className="text-xs uppercase font-mono tracking-widest text-[#a3a3a3] mt-2">Active Clearing & Settlement Network</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded">
            <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-[#00ff00] uppercase tracking-widest">Global Status: Optimal</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Column - Real time ticker and alerts */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#111111] border border-[#262626] rounded-xl p-5">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-4 border-b border-[#262626] pb-2">Network Hubs</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-[#d4d4d4]">
                  <Building2 className="w-4 h-4 text-[#00f0ff]" /> Commercial Banks
                </div>
                <span className="font-mono text-sm text-white">3</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-[#d4d4d4]">
                  <Smartphone className="w-4 h-4 text-[#7000ff]" /> MNO Wallets
                </div>
                <span className="font-mono text-sm text-white">2</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-[#d4d4d4]">
                  <Network className="w-4 h-4 text-[#ff003c]" /> Clearing Switches
                </div>
                <span className="font-mono text-sm text-white">2</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#262626]">
                <span className="text-[10px] font-mono uppercase text-[#737373]">Central Bank Escrow</span>
                <span className="font-mono text-xs text-[#00ff00]">$45.2M</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-[#262626] rounded-xl p-5">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-4 border-b border-[#262626] pb-2">Throughput</h3>
            <div className="relative w-full h-24 flex items-end gap-1 mb-4">
              {[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.6, 0.8, 0.4, 0.7, 0.9, 0.5, 0.8, 0.6].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 100}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-[#00f0ff]/20 hover:bg-[#00f0ff]/50 border-t border-[#00f0ff] rounded-t-sm transition-colors cursor-pointer"
                />
              ))}
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-[10px] text-[#737373] uppercase font-mono">Current TPS</div>
                <div className="text-xl font-light font-mono text-white">4,821</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#737373] uppercase font-mono">1h Volume</div>
                <div className="text-xl font-light font-mono text-white">RWF 14.2B</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#141414] border border-[#262626] p-5 rounded-xl">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3]">Anomaly Engine</h3>
                <BrainCircuit className="w-4 h-4 text-[#f59e0b]" />
             </div>
             
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-full border-2 border-[#ff003c]/50 flex items-center justify-center relative">
                 <div className="absolute inset-0 border-2 border-[#ff003c] rounded-full animate-ping opacity-20" />
                 <span className="text-sm font-mono text-[#ff003c]">3</span>
               </div>
               <div>
                  <div className="text-xs font-medium text-[#e5e5e5]">High-Risk Alerts Active</div>
                  <div className="text-[10px] text-[#737373] font-mono mt-1">Confidence Interval: 99.4%</div>
               </div>
             </div>
          </div>
        </div>

        {/* Center / Right - 3D Graph + Quick Stats */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
               { label: 'Settlement Ratio', value: '98.4%', trend: 'up', color: 'text-[#00ff00]' },
               { label: 'Failed TXNs', value: '1.2%', trend: 'down', color: 'text-[#00ff00]' },
               { label: 'Active Identity Hashes', value: '420K', trend: 'up', color: 'text-[#00f0ff]' },
               { label: 'Liquidity Reserve', value: '$840M', trend: 'up', color: 'text-[#00f0ff]' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#111111] border border-[#262626] rounded-xl p-4 flex flex-col justify-between">
                <div className="text-[9px] font-mono uppercase tracking-widest text-[#737373] mb-2">{stat.label}</div>
                <div className="flex justify-between items-end">
                   <span className="text-xl font-light font-mono text-white">{stat.value}</span>
                   {stat.trend === 'up' ? (
                     <ArrowUpRight className={`w-4 h-4 ${stat.color}`} />
                   ) : (
                     <ArrowDownRight className={`w-4 h-4 ${stat.color}`} />
                   )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] w-full flex-1 flex flex-col overflow-hidden rounded-xl border border-[#262626] bg-[#0a0a0a]">
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
               <h3 className="text-sm font-serif italic text-white shadow-black drop-shadow-md">Topological Infrastructure Map</h3>
               <p className="text-[10px] font-mono text-[#a3a3a3] mt-1 shadow-black drop-shadow-md">Interactive 3D Interoperability Graph</p>
            </div>
            
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 pointer-events-none bg-black/60 p-3 rounded border border-white/5 backdrop-blur-md">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#ffd700]" />
                 <span className="text-[9px] uppercase font-mono text-[#e5e5e5]">Tier 1 - Central Logic</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                 <span className="text-[9px] uppercase font-mono text-[#e5e5e5]">Tier 2 - Commercial Auth</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#7000ff]" />
                 <span className="text-[9px] uppercase font-mono text-[#e5e5e5]">Tier 3 - MNO Escrow</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#ff003c]" />
                 <span className="text-[9px] uppercase font-mono text-[#e5e5e5]">Tier 4 - Switch / Gateway</span>
               </div>
            </div>

            <TransactionFlowGraph />
          </div>
        </div>

      </div>
    </div>
  );
}
