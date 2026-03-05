import { motion } from 'motion/react';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

const reports = [
  { id: 1, title: 'Monthly Financial Stability Report', date: 'Mar 01, 2024', type: 'Regulatory', size: '2.4 MB' },
  { id: 2, title: 'Suspicious Activity Report (SAR)', date: 'Mar 08, 2024', type: 'Compliance', size: '1.1 MB' },
  { id: 3, title: 'Interoperability Performance Audit', date: 'Feb 28, 2024', type: 'Technical', size: '4.5 MB' },
  { id: 4, title: 'Sectoral Credit Risk Analysis', date: 'Mar 05, 2024', type: 'Risk', size: '3.2 MB' },
];

export function Reporting() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Intelligence Reports</h2>
          <p className="text-gray-400">Generate and export regulatory and risk reports.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors">
            <FileText className="w-4 h-4" />
            Generate New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((report, i) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{report.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {report.date}
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs border border-white/5">{report.type}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">{report.size}</span>
              <button className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
