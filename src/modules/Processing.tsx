import { motion } from 'motion/react';
import { Activity, Database, FileCode, Server } from 'lucide-react';

const pipelines = [
  { id: 1, name: 'Transaction Normalization', status: 'Running', throughput: '12k/sec', latency: '12ms' },
  { id: 2, name: 'Fraud Feature Extraction', status: 'Running', throughput: '8k/sec', latency: '45ms' },
  { id: 3, name: 'Historical Aggregation', status: 'Idle', throughput: '0/sec', latency: '-' },
  { id: 4, name: 'Cross-Border Settlement', status: 'Error', throughput: '0/sec', latency: 'Timeout' },
];

export function Processing() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Data Processing Engine</h2>
          <p className="text-gray-400">Real-time ETL and feature engineering pipelines.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {pipelines.map((pipeline, i) => (
          <motion.div
            key={pipeline.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${pipeline.status === 'Running' ? 'bg-green-500/10 text-green-400 animate-pulse' : pipeline.status === 'Error' ? 'bg-red-500/10 text-red-400' : 'bg-gray-500/10 text-gray-400'}`}>
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{pipeline.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    Pipeline ID: #{pipeline.id}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase">Throughput</div>
                <div className="text-sm font-mono text-white">{pipeline.throughput}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase">Latency</div>
                <div className={`text-sm font-mono ${pipeline.latency === 'Timeout' ? 'text-red-400' : 'text-white'}`}>{pipeline.latency}</div>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${pipeline.status === 'Running' ? 'bg-green-500/20 text-green-400' : pipeline.status === 'Error' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {pipeline.status}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
