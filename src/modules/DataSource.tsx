import { motion } from 'motion/react';
import { Database, Link2, Zap, Server, Activity, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

const CONNECTORS = [
  { name: 'Core Banking API', type: 'REST', status: 'ACTIVE', latency: '42ms', records: '1.2M/hr', color: 'text-[#00f0ff]', bg: 'bg-[#00f0ff]/10', border: 'border-[#00f0ff]/30' },
  { name: 'Mobile Money Gateway', type: 'gRPC', status: 'ACTIVE', latency: '18ms', records: '4.5M/hr', color: 'text-[#00ff00]', bg: 'bg-[#00ff00]/10', border: 'border-[#00ff00]/30' },
  { name: 'SWIFT Network Bridge', type: 'ISO 20022', status: 'SYNCING', latency: '120ms', records: '50k/hr', color: 'text-[#f59e0b]', bg: 'bg-[#f59e0b]/10', border: 'border-[#f59e0b]/30' },
  { name: 'Credit Ref Bureau', type: 'SOAP', status: 'ERROR', latency: 'ERR', records: '0/hr', color: 'text-[#ff003c]', bg: 'bg-[#ff003c]/10', border: 'border-[#ff003c]/30' },
];

export function DataSource() {
  return (
    <div className="space-y-6 text-[#e5e5e5]">
      {/* Header */}
      <div className="flex items-end justify-between border-b pb-4 border-[#262626]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#111111] rounded border border-[#262626]">
            <Database className="w-8 h-8 text-[#00f0ff]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-serif italic text-white leading-none">Data Hub</h1>
            <p className="text-xs uppercase font-mono tracking-widest text-[#a3a3a3] mt-2">Unified Ingestion & Connection Pooling</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-[#ffffff] text-[#000000] text-xs font-bold tracking-wider hover:bg-[#e5e5e5] transition-colors rounded flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            NEW CONNECTION
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Health Overview */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <div className="bg-[#111111] border border-[#262626] rounded-xl p-6">
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-6 border-b border-[#262626] pb-2">Pool Health</h2>
            
            <div className="mb-6 relative w-32 h-32 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="60" stroke="#262626" strokeWidth="8" fill="none" />
                <circle cx="64" cy="64" r="60" stroke="#00f0ff" strokeWidth="8" fill="none" strokeDasharray="377" strokeDashoffset="50" className="animate-[spin_4s_linear_infinite]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-light font-mono text-white">87%</span>
                <span className="text-[9px] text-[#737373] uppercase tracking-wider">Uptime</span>
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#a3a3a3]">Active Nodes</span>
                <span className="text-white">12/14</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#a3a3a3]">Packet Loss</span>
                <span className="text-[#00ff00]">0.02%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#a3a3a3]">Ingestion Rate</span>
                <span className="text-[#00f0ff]">3.2 GB/s</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#00f0ff]/10 to-[#111111] border border-[#00f0ff]/20 rounded-xl p-6">
             <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00f0ff]">TLS 1.3 Active</span>
             </div>
             <p className="text-[10px] text-[#a3a3a3] mt-2">All data channels are end-to-end encrypted under regulatory standard FIPS-140-3.</p>
          </div>
        </div>

        {/* Existing Connections grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONNECTORS.map((conn, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={conn.name} 
                className="bg-[#111111] border border-[#262626] rounded-xl p-5 hover:border-[#404040] transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-[#e5e5e5]">{conn.name}</h3>
                    <div className="text-[10px] font-mono text-[#737373] mt-1 flex items-center gap-2">
                      <Server className="w-3 h-3" /> {conn.type}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-[9px] font-mono rounded border ${conn.border} ${conn.bg} ${conn.color}`}>
                    {conn.status}
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex gap-4">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[#737373] mb-1">Latency</div>
                      <div className="text-sm text-white font-mono">{conn.latency}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[#737373] mb-1">Throughput</div>
                      <div className="text-sm text-white font-mono">{conn.records}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center group-hover:bg-[#e5e5e5] group-hover:text-black transition-colors">
                     <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Add Wizard Button */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0a] border-2 border-dashed border-[#262626] rounded-xl p-5 hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-colors group cursor-pointer flex flex-col justify-center items-center text-center h-full min-h-[140px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-[#a3a3a3] group-hover:text-[#00f0ff]" />
              </div>
              <h3 className="text-sm font-medium text-[#a3a3a3] group-hover:text-[#00f0ff]">Launch Auto-Discovery</h3>
              <p className="text-[10px] font-mono text-[#737373] mt-1">Scan cluster for unmapped APIs</p>
            </motion.div>
          </div>
          
          <div className="mt-6 bg-[#111111] border border-[#262626] rounded-xl p-0 overflow-hidden">
             <div className="p-4 border-b border-[#262626] bg-[#0a0a0a] flex justify-between items-center">
               <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3]">Ingestion Log Tracker</h3>
               <RefreshCw className="w-4 h-4 text-[#737373] animate-spin-slow" />
             </div>
             <div className="p-4 font-mono text-[10px] text-[#737373] space-y-2 h-[150px] overflow-y-auto">
               <div className="flex gap-4"><span className="text-[#00f0ff]">[10:04:12]</span><span>Core Banking API successfully fetched 12,042 Delta Records.</span></div>
               <div className="flex gap-4"><span className="text-[#00ff00]">[10:04:15]</span><span>Mobile Money Gateway streamed 850 live transactions.</span></div>
               <div className="flex gap-4"><span className="text-[#ff003c]">[10:04:22]</span><span>CRB Endpoint timed out after 3000ms. Retrying (1/3)...</span></div>
               <div className="flex gap-4"><span className="text-[#f59e0b]">[10:04:45]</span><span>SWIFT Bridge processing batch file ISO-20260421.xml...</span></div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
