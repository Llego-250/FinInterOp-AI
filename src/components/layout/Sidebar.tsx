import { motion } from 'motion/react';
import { MODULES } from '../../constants';
import { cn } from '../../lib/utils';
import { ShieldCheck } from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleSelect: (moduleId: string) => void;
}

export function Sidebar({ activeModule, onModuleSelect }: SidebarProps) {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col"
    >
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <ShieldCheck className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-wider text-white">FIN<span className="text-cyan-400">INTEROP</span></h1>
          <p className="text-[10px] text-gray-400 font-mono tracking-widest">AI FRAMEWORK</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {MODULES.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id;
          
          return (
            <button
              key={module.id}
              onClick={() => onModuleSelect(module.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "bg-white/5 text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 rounded-r-full"
                />
              )}
              <Icon className={cn("w-5 h-5 transition-colors", isActive ? "text-cyan-400" : "group-hover:text-white")} />
              <span className="text-sm font-medium tracking-wide">{module.title}</span>
              
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@fininterop.rw</p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
