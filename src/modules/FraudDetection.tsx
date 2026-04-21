import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, Fingerprint, Crosshair, Cpu, Eye, ArrowRightCircle } from 'lucide-react';
import { SplineAnomalyVisualizer } from '../components/visualization/SplineAnomalyVisualizer';

const ALERTS = [
  { id: 'FR-9982-A', type: 'Velocity Anomaly', source: 'Mobile Money Gateway', risk: 98, status: 'BLOCKED', time: '10:02:14.05' },
  { id: 'FR-9982-B', type: 'Geographic Impossibility', source: 'Core Banking', risk: 85, status: 'FLAGGED', time: '10:01:45.33' },
  { id: 'FR-9981-C', type: 'Pattern Match: Mule', source: 'Peer-to-Peer Transfer', risk: 92, status: 'FROZEN', time: '09:55:12.70' },
  { id: 'FR-9980-A', type: 'Unusual Volume', source: 'Payment Gateway', risk: 74, status: 'FLAGGED', time: '09:42:01.12' },
  { id: 'FR-9979-D', type: 'Synthetic Identity', source: 'KYC Onboarding', risk: 99, status: 'BLOCKED', time: '09:15:22.00' },
];

export function FraudDetection() {
  return (
    <div className="space-y-6 text-[#e5e5e5]">
      {/* Header */}
      <div className="flex items-end justify-between border-b pb-4 border-[#262626]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#111111] rounded border border-[#262626]">
            <ShieldAlert className="w-8 h-8 text-[#ff003c]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-serif italic text-white leading-none">Security Core</h1>
            <p className="text-xs uppercase font-mono tracking-widest text-[#a3a3a3] mt-2">ML-Driven Anomaly Detection Engine</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-3xl font-light font-mono text-[#00f0ff]">99.9%</div>
            <div className="text-[10px] text-[#a3a3a3] uppercase tracking-widest">Model Precision</div>
          </div>
          <div className="text-right border-l border-[#262626] pl-4">
            <div className="text-3xl font-light font-mono text-[#ff003c]">124</div>
            <div className="text-[10px] text-[#a3a3a3] uppercase tracking-widest">Active Threats</div>
          </div>
        </div>
      </div>

      {/* Primary Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Spline Visualization container styled like a hardware scope */}
          <div className="bg-[#111111] border border-[#262626] rounded-xl p-4 shadow-2xl relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#a3a3a3]">Spatial Threat Mapping</h2>
              <div className="flex gap-2">
                <button className="px-2 py-1 text-[10px] font-mono border border-[#ff003c] text-[#ff003c] rounded bg-[#ff003c]/10">Force Retrain</button>
                <button className="px-2 py-1 text-[10px] font-mono border border-[#262626] rounded hover:bg-[#262626]">Recalibrate Vectors</button>
              </div>
            </div>
            
            <SplineAnomalyVisualizer />
            
            <div className="flex gap-4 mt-4 border-t border-[#262626] pt-4">
              <div className="flex-1 bg-[#0a0a0a] p-3 rounded border border-[#1a1a1a]">
                <div className="flex items-center gap-2 mb-1">
                  <Fingerprint className="w-4 h-4 text-[#00f0ff]" />
                  <span className="text-[10px] uppercase font-mono">Device Fingerprinting</span>
                </div>
                <div className="text-xs text-[#737373] mt-2">Cross-system heuristic matching active. Intercepting spoofed MAC layers.</div>
              </div>
              <div className="flex-1 bg-[#0a0a0a] p-3 rounded border border-[#1a1a1a]">
                <div className="flex items-center gap-2 mb-1">
                  <Crosshair className="w-4 h-4 text-[#ff003c]" />
                  <span className="text-[10px] uppercase font-mono">Pattern Snare</span>
                </div>
                <div className="text-xs text-[#737373] mt-2">AI detecting multi-hop mule behavior across 4 connected banks.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel / Hardware Widget Style */}
        <div className="bg-[#141414] border border-[#262626] p-6 rounded-xl flex flex-col justify-between">
          <div>
            <h3 className="text-[11px] font-serif italic text-[#a3a3a3] uppercase tracking-widest mb-6 border-b border-[#262626] pb-2">Investigation Queue</h3>
            
            <div className="space-y-4">
              {['High-Risk Wire', 'KYC Anomaly', 'Repeated Logic Bombs'].map((task, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#1f1f1f] border border-[#333] flex items-center justify-center font-mono text-[10px] text-[#737373] group-hover:text-white group-hover:bg-[#ff003c] transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#d4d4d4]">{task}</div>
                      <div className="text-[10px] text-[#737373] font-mono">Assigned to: Agent_{104+i}</div>
                    </div>
                  </div>
                  <ArrowRightCircle className="w-4 h-4 text-[#404040] group-hover:text-[#00f0ff] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider">Deep Inspection</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <button className="w-full py-3 bg-[#ffffff] text-[#000000] text-xs font-bold tracking-wider hover:bg-[#e5e5e5] transition-colors">
              ENTER WAR ROOM
            </button>
          </div>
        </div>
      </div>

      {/* Data Grid: Alerts */}
      <div className="bg-[#111111] border border-[#262626] overflow-hidden">
        <div className="p-4 border-b border-[#262626] bg-[#0a0a0a] flex justify-between items-center">
          <h3 className="text-[11px] font-serif italic text-[#a3a3a3] uppercase tracking-widest">Real-Time Quarantine Ledger</h3>
          <Cpu className="w-4 h-4 text-[#737373]" />
        </div>
        
        <div className="grid grid-cols-[100px_1fr_1.5fr_100px_100px_100px] gap-4 p-4 text-[10px] uppercase font-mono tracking-wider text-[#737373] border-b border-[#262626] bg-[#0a0a0a]">
          <div>TIME (UTC)</div>
          <div>INCIDENT_ID</div>
          <div>DETECTION_VECTOR</div>
          <div>SOURCE</div>
          <div>RISK_PCT</div>
          <div>STATE</div>
        </div>
        
        <div className="divide-y divide-[#262626]">
          {ALERTS.map((alert, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              key={alert.id} 
              className={`grid grid-cols-[100px_1fr_1.5fr_100px_100px_100px] gap-4 px-4 py-3 items-center hover:bg-[#1a1a1a] transition-colors cursor-crosshair
                ${alert.status === 'BLOCKED' ? 'border-l-2 border-l-[#ff003c]' : 'border-l-2 border-l-transparent'}`}
            >
              <div className="font-mono text-[#a3a3a3]">{alert.time}</div>
              <div className="font-mono text-[#e5e5e5]">{alert.id}</div>
              <div className="font-medium text-[#d4d4d4] flex items-center gap-2">
                {alert.risk > 90 ? <AlertTriangle className="w-3 h-3 text-[#ff003c]" /> : <Eye className="w-3 h-3 text-[#f59e0b]" />}
                {alert.type}
              </div>
              <div className="text-[11px] text-[#a3a3a3] truncate">{alert.source}</div>
              <div className="font-mono flex items-center gap-2">
                <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#ff003c]" style={{ width: `${alert.risk}%` }} />
                </div>
                <span className={alert.risk > 90 ? "text-[#ff003c]" : "text-[#f59e0b]"}>{alert.risk}</span>
              </div>
              <div className={`text-[10px] px-2 py-1 flex justify-center font-mono border rounded ${
                alert.status === 'BLOCKED' ? 'border-[#ff003c] text-[#ff003c] bg-[#ff003c]/10' : 
                alert.status === 'FLAGGED' ? 'border-[#f59e0b] text-[#f59e0b] bg-[#f59e0b]/10' :
                'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10'
              }`}>
                {alert.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
