import { motion, AnimatePresence } from 'motion/react';
import { MODULES } from '../../constants';
import { cn } from '../../lib/utils';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleSelect: (moduleId: string) => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export function Sidebar({ activeModule, onModuleSelect, isCollapsed, toggleCollapse }: SidebarProps) {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        width: isCollapsed ? 80 : 256
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-full bg-black/40 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col overflow-hidden"
    >
      <div className={cn("flex items-center gap-3 border-b border-white/5 transition-all duration-300", isCollapsed ? "p-4 justify-center" : "p-6")}>
        <div className="w-10 h-10 min-w-[40px] rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <ShieldCheck className="text-white w-6 h-6" />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <h1 className="font-bold text-lg tracking-wider text-white">FIN<span className="text-cyan-400">INTEROP</span></h1>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest">AI FRAMEWORK</p>
            </motion.div>
          )}
        </AnimatePresence>
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
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent",
                isCollapsed && "justify-center px-2"
              )}
              title={isCollapsed ? module.title : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 rounded-r-full"
                />
              )}
              <Icon className={cn("w-5 h-5 min-w-[20px] transition-colors", isActive ? "text-cyan-400" : "group-hover:text-white")} />
              
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="text-sm font-medium tracking-wide overflow-hidden whitespace-nowrap"
                  >
                    {module.title}
                  </motion.span>
                )}
              </AnimatePresence>
              
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 flex flex-col gap-2">
        <div className={cn("bg-white/5 rounded-lg border border-white/5 transition-all duration-300", isCollapsed ? "p-2 flex justify-center" : "p-3")}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 min-w-[32px] rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex-1 min-w-0 overflow-hidden"
                >
                  <p className="text-sm font-medium text-white truncate">Admin User</p>
                  <p className="text-xs text-gray-500 truncate">admin@fininterop.rw</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button 
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
    </motion.aside>
  );
}
