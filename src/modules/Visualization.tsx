import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { motion } from 'motion/react';
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import { TransactionFlowGraph } from '../components/visualization/TransactionFlowGraph';

const data = [
  { name: 'Mon', transactions: 4000, risk: 2400, amt: 2400 },
  { name: 'Tue', transactions: 3000, risk: 1398, amt: 2210 },
  { name: 'Wed', transactions: 2000, risk: 9800, amt: 2290 },
  { name: 'Thu', transactions: 2780, risk: 3908, amt: 2000 },
  { name: 'Fri', transactions: 1890, risk: 4800, amt: 2181 },
  { name: 'Sat', transactions: 2390, risk: 3800, amt: 2500 },
  { name: 'Sun', transactions: 3490, risk: 4300, amt: 2100 },
];

const riskData = [
  { name: 'Fraud', value: 400 },
  { name: 'Compliance', value: 300 },
  { name: 'Liquidity', value: 300 },
  { name: 'Operational', value: 200 },
];

export function Visualization() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Financial Intelligence Dashboard</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/30 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 3D Transaction Flow Graph */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-1 lg:col-span-2 p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm h-[600px] relative"
        >
          <TransactionFlowGraph />
        </motion.div>

        {/* Transaction Volume Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              Transaction Volume
            </h3>
            <select className="bg-black border border-white/10 rounded px-2 py-1 text-xs text-gray-400">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTx" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px' }}
                  itemStyle={{ color: '#e5e5e5' }}
                />
                <Area type="monotone" dataKey="transactions" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorTx)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Risk Analysis Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              Risk Distribution
            </h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData}>
                <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#262626' }}
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px' }}
                />
                <Bar dataKey="value" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Liquidity Ratio', value: '1.45', trend: '+0.05', status: 'Healthy' },
          { title: 'Fraud Detection Rate', value: '99.8%', trend: '+0.2%', status: 'Optimal' },
          { title: 'API Uptime', value: '99.99%', trend: '0%', status: 'Stable' },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="p-6 bg-white/5 border border-white/5 rounded-xl flex flex-col justify-between h-32"
          >
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">{kpi.title}</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{kpi.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-green-400">{kpi.trend}</span>
                <span className="text-xs text-gray-500">• {kpi.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
