import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Key, Plus, Trash2, Copy, Check, ShieldAlert } from 'lucide-react';

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
      name: `New Integration Key ${apiKeys.length + 1}`,
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
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-slate-500/20 rounded-xl border border-slate-500/30">
          <Lock className="w-6 h-6 text-slate-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">User & Security Management</h1>
          <p className="text-gray-400 mt-1">Role assignment, access control, and system integration.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Users</h2>
            <p className="text-gray-400">User management goes here...</p>
          </div>

          {/* API Key Management Section */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Key className="w-5 h-5 text-cyan-400" />
                  API Key Management
                </h2>
                <p className="text-sm text-gray-400 mt-1">Manage API keys for system-to-system integration.</p>
              </div>
              <button 
                onClick={handleGenerateKey}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Generate New Key
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="text-xs text-gray-500 uppercase bg-black/20 border-b border-white/5">
                  <tr>
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Key</th>
                    <th className="px-4 py-3 font-medium">Created</th>
                    <th className="px-4 py-3 font-medium">Last Used</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {apiKeys.map((apiKey) => (
                      <motion.tr 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={apiKey.id} 
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="px-4 py-3 font-medium text-white">{apiKey.name}</td>
                        <td className="px-4 py-3 font-mono text-xs">{apiKey.key}</td>
                        <td className="px-4 py-3">{apiKey.createdAt}</td>
                        <td className="px-4 py-3">{apiKey.lastUsed}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => handleCopy(apiKey.id)}
                              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                              title="Copy Key"
                            >
                              {copiedId === apiKey.id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <button 
                              onClick={() => handleRevokeKey(apiKey.id)}
                              className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded transition-colors"
                              title="Revoke Key"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                  {apiKeys.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                        No API keys found. Generate one to get started.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-yellow-400" />
              Security Alerts
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-200">2 failed login attempts from IP 192.168.1.45</p>
                <p className="text-xs text-yellow-500/70 mt-1">10 mins ago</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-sm text-gray-300">New device logged in for User: Analyst_01</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
