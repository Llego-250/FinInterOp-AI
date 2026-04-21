import { motion } from 'motion/react';
import { User, Shield, CreditCard, Activity, Link2, MapPin, Briefcase } from 'lucide-react';

export function CustomerData() {
  return (
    <div className="space-y-6 text-[#e5e5e5]">
      {/* Header */}
      <div className="flex items-end justify-between border-b pb-4 border-[#262626]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#111111] rounded border border-[#262626]">
            <User className="w-8 h-8 text-[#00ff00]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-serif italic text-white leading-none">Unified Customer 360°</h1>
            <p className="text-xs uppercase font-mono tracking-widest text-[#a3a3a3] mt-2">Identity Resolution & Aggregation</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search ID, Name, Phone..." 
              className="bg-[#0a0a0a] border border-[#262626] rounded px-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#00ff00] w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Identity Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-hidden p-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00ff00]/10 rounded-bl-full border-b border-l border-[#00ff00]/20 blur-xl" />
            <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center mb-4 overflow-hidden relative">
              <span className="text-2xl font-serif text-[#a3a3a3]">JD</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">John Doe</h2>
            <div className="text-xs font-mono text-[#00ff00] flex items-center gap-2 mb-6">
              <Shield className="w-3 h-3" /> Identity Verified: 99.8% Match
            </div>

            <div className="space-y-4 text-xs font-mono text-[#a3a3a3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#737373]" />
                <span>Kigali, Rwanda<br/>KN 5 Rd, Sector 4</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-[#737373]" />
                <span>Director, ACME Finance</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#737373]" />
                <span>KYC Level: Tier 3</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-[#262626] rounded-xl p-6">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-4 border-b border-[#262626] pb-2">Consent & Privacy</h3>
            <div className="space-y-3">
              {[
                { name: 'Data Sharing (3rd Party)', status: 'REVOKED', color: 'text-[#ff003c]' },
                { name: 'Marketing & Analytics', status: 'GRANTED', color: 'text-[#00ff00]' },
                { name: 'Cross-Border Transfer', status: 'GRANTED', color: 'text-[#00ff00]' }
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center text-[10px] font-mono">
                  <span>{c.name}</span>
                  <span className={c.color}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Columns: Insights and Linked Accounts */}
        <div className="lg:col-span-3 space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Total Exposure', value: '$1.4M', icon: Activity },
              { label: 'Risk Score', value: 'Low (12)', icon: Shield },
              { label: 'Active Channels', value: '4 Systems', icon: Link2 }
            ].map((metric, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-[#111111] border border-[#262626] rounded-xl p-6 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#737373]">{metric.label}</span>
                  <metric.icon className="w-4 h-4 text-[#404040]" />
                </div>
                <div className="text-3xl font-light font-mono text-white">{metric.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Linked Systems Array */}
          <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-hidden">
            <div className="p-4 border-b border-[#262626] bg-[#0a0a0a] flex justify-between items-center">
               <h3 className="text-[11px] font-serif italic text-[#a3a3a3] uppercase tracking-widest">Cross-System Account Aggregation</h3>
            </div>
            <div className="divide-y divide-[#262626]">
              {[
                { source: 'Core Banking', acct: 'ACC-***8992', type: 'Checking', bal: '$45,200.00', status: 'ACTIVE' },
                { source: 'Mortgage System', acct: 'MTG-***4110', type: 'Loan', bal: '$1.2M', status: 'IN GOOD STANDING' },
                { source: 'Mobile Money Gateway', acct: '+250 *** *** 344', type: 'Wallet', bal: '$345.50', status: 'ACTIVE' },
                { source: 'Wealth/Trade Desk', acct: 'WLT-***112', type: 'Investment', bal: '$204,500.00', status: 'ACTIVE' }
              ].map((sys, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded border border-[#333] flex items-center justify-center bg-[#0a0a0a] group-hover:border-[#00ff00]/50 transition-colors">
                      <CreditCard className="w-4 h-4 text-[#737373] group-hover:text-[#00ff00]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#d4d4d4]">{sys.source}</div>
                      <div className="text-[10px] font-mono text-[#737373]">{sys.type} • {sys.acct}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-white">{sys.bal}</div>
                    <div className="text-[10px] font-mono text-[#00ff00] mt-1">{sys.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
