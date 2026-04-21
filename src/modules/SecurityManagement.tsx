import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Key, Plus, Trash2, Copy, Check, ShieldAlert, Cpu, Activity, Server, Users, Eye } from 'lucide-react';

export function SecurityManagement() {
  const [apiKeys, setApiKeys] = useState([
    { id: '1', name: 'Core Banking Integration', key: 'sk_live_••••••••••••8f92', createdAt: '2024-03-10', lastUsed: '2 mins ago', status: 'Active' },
    { id: '2', name: 'Mobile Money Webhook', key: 'sk_live_••••••••••••3a1b', createdAt: '2024-03-12', lastUsed: '1 hour ago', status: 'Active' },
  ]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerateKey = () => {
    const newId = Math.random().toString(36).substring(2, 9);
    const newKey = `sk_live_••••••••••••${Math.random().toString(36).substring(2, 6)}`;
    setApiKeys([{
      id: newId,
      name: `Integration Key ${apiKeys.length + 1}`,
      key: newKey,
      createdAt: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
      status: 'Active'
    }, ...apiKeys]);
  };

  const handleRevokeKey = (id: string) => {
    setApiKeys(apiKeys.filter(k => k.id !== id));
  };

  const handleCopy = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 text-[#e5e5e5]">
      {/* Header */}
      <div className="flex items-end justify-between border-b pb-4 border-[#262626]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#111111] rounded border border-[#262626]">
            <Lock className="w-8 h-8 text-[#f59e0b]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-serif italic text-white leading-none">Access Control</h1>
            <p className="text-xs uppercase font-mono tracking-widest text-[#a3a3a3] mt-2">Zero-Trust Security & API Management</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-3xl font-light font-mono text-[#00ff00]">Zero</div>
            <div className="text-[10px] text-[#a3a3a3] uppercase tracking-widest">Breach Events</div>
          </div>
          <div className="text-right border-l border-[#262626] pl-4">
            <div className="text-3xl font-light font-mono text-[#e5e5e5]">1,402</div>
            <div className="text-[10px] text-[#a3a3a3] uppercase tracking-widest">Active Sessions</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Metrics & Alerts */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#111111] border border-[#262626] rounded-xl p-6">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-6 border-b border-[#262626] pb-2">Threat Vector Monitor</h3>
            <div className="space-y-4">
              <div className="p-3 border-l-2 border-l-[#ff003c] bg-[#ff003c]/5">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-mono text-[#ff003c] uppercase">Brute Force Attempt</span>
                  <span className="text-[10px] text-[#a3a3a3] font-mono">10m ago</span>
                </div>
                <p className="text-xs text-[#d4d4d4]">Multiple failed logins from 192.168.1.45 blocked.</p>
              </div>
              <div className="p-3 border-l-2 border-l-[#f59e0b] bg-[#f59e0b]/5">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-mono text-[#f59e0b] uppercase">Privilege Escalation</span>
                  <span className="text-[10px] text-[#a3a3a3] font-mono">1h ago</span>
                </div>
                <p className="text-xs text-[#d4d4d4]">Analyst_01 attempted access to restricted namespace.</p>
              </div>
              <div className="p-3 border-l-2 border-l-[#00f0ff] bg-[#00f0ff]/5">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-mono text-[#00f0ff] uppercase">New IAM Role</span>
                  <span className="text-[10px] text-[#a3a3a3] font-mono">3h ago</span>
                </div>
                <p className="text-xs text-[#d4d4d4]">Role 'Cross-Border Auditor' provisioned successfully.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111111] border border-[#262626] rounded-lg p-4 flex flex-col justify-between h-24">
              <span className="text-[10px] font-mono uppercase text-[#737373]">F-140-3 Node</span>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-light font-mono text-white">4</span>
                <Server className="w-4 h-4 text-[#404040]" />
              </div>
            </div>
            <div className="bg-[#111111] border border-[#262626] rounded-lg p-4 flex flex-col justify-between h-24">
              <span className="text-[10px] font-mono uppercase text-[#737373]">Audit Logs</span>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-light font-mono text-white">4.2M</span>
                <Activity className="w-4 h-4 text-[#404040]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: API Keys + Users */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* API Key Table */}
          <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-hidden">
            <div className="p-4 border-b border-[#262626] bg-[#0a0a0a] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-[11px] font-serif italic text-[#a3a3a3] uppercase tracking-widest">Active Bearer Tokens</h3>
              </div>
              <button 
                onClick={handleGenerateKey}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 rounded hover:bg-[#f59e0b]/20 transition-colors text-[10px] font-mono uppercase tracking-wider"
              >
                <Plus className="w-3 h-3" />
                Provision Token
              </button>
            </div>
            
            <div className="grid grid-cols-[1.5fr_1fr_100px_100px_80px] gap-4 p-4 text-[10px] uppercase font-mono tracking-wider text-[#737373] border-b border-[#262626] bg-[#0a0a0a]">
              <div>Integration Endpoint</div>
              <div>Token Hash</div>
              <div>Issued</div>
              <div>Last Used</div>
              <div className="text-right">Action</div>
            </div>
            
            <div className="divide-y divide-[#262626]">
              <AnimatePresence>
                {apiKeys.map((apiKey) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    key={apiKey.id} 
                    className="grid grid-cols-[1.5fr_1fr_100px_100px_80px] gap-4 px-4 py-3 items-center hover:bg-[#1a1a1a] transition-colors"
                  >
                    <div className="text-sm font-medium text-[#d4d4d4] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-pulse" />
                       {apiKey.name}
                    </div>
                    <div className="font-mono text-xs text-[#a3a3a3] tracking-widest">{apiKey.key}</div>
                    <div className="font-mono text-xs text-[#737373]">{apiKey.createdAt}</div>
                    <div className="font-mono text-xs text-[#737373]">{apiKey.lastUsed}</div>
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleCopy(apiKey.id)}
                        className="p-1.5 text-[#737373] hover:text-white rounded transition-colors"
                        title="Copy Key"
                      >
                        {copiedId === apiKey.id ? <Check className="w-4 h-4 text-[#00ff00]" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={() => handleRevokeKey(apiKey.id)}
                        className="p-1.5 text-[#737373] hover:text-[#ff003c] rounded transition-colors"
                        title="Revoke Key"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {apiKeys.length === 0 && (
                <div className="p-8 text-center border-[#262626]">
                  <div className="text-[#a3a3a3] font-mono text-xs">No active access tokens mapped. System isolation enforced.</div>
                </div>
              )}
            </div>
          </div>

          {/* User Roles & Permissions Placeholder */}
           <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-hidden">
             <div className="p-4 border-b border-[#262626] bg-[#0a0a0a] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#737373]" />
                <h3 className="text-[11px] font-serif italic text-[#a3a3a3] uppercase tracking-widest">Policy Directory Map</h3>
              </div>
            </div>
             <div className="p-6 flex items-center justify-center min-h-[160px] bg-[url('/assets/grid-pattern.png')] bg-center border-[#262626]">
                <div className="text-center font-mono opacity-50">
                    <Eye className="w-8 h-8 text-[#737373] mx-auto mb-2" />
                    <span className="text-xs uppercase tracking-widest text-[#a3a3a3]">RBAC Visualization Interface Loaded</span>
                </div>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
}
