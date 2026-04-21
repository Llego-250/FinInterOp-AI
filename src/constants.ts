import { 
  LayoutDashboard, 
  Network, 
  Database, 
  BrainCircuit, 
  BarChart3, 
  FileText, 
  Users, 
  ShieldCheck,
  Activity,
  TrendingUp,
  AlertTriangle,
  Zap,
  UserPlus,
  Link,
  GitMerge,
  UserCircle,
  ShieldAlert,
  Globe,
  Scale,
  DatabaseZap,
  Lock
} from 'lucide-react';

export const MODULES = [
  {
    id: 'dashboard',
    title: 'Mission Control',
    icon: LayoutDashboard,
    description: 'Role-based overview and metrics.',
    path: '/'
  },
  {
    id: 'data-source',
    title: 'Data Hub',
    icon: Database,
    description: 'Unified ingestion & connection pooling.',
    path: '/data-source'
  },
  {
    id: 'customer-data',
    title: 'Unified Customer 360°',
    icon: UserCircle,
    description: 'Identity resolution and aggregation.',
    path: '/customer-data'
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection',
    icon: ShieldAlert,
    description: 'Spatial threat mapping & ledger.',
    path: '/fraud-detection'
  },
  {
    id: 'security-management',
    title: 'User & Security',
    icon: Lock,
    description: 'API keys & access control.',
    path: '/security-management'
  }
];

export const MOCK_TRANSACTIONS = [
  { id: 'TXN-001', source: 'Bank A', target: 'Mobile Money', amount: 5000, status: 'Completed', timestamp: '2024-03-10T10:00:00Z' },
  { id: 'TXN-002', source: 'Payment Gateway', target: 'Bank B', amount: 12500, status: 'Processing', timestamp: '2024-03-10T10:05:00Z' },
  { id: 'TXN-003', source: 'Bank C', target: 'Bank A', amount: 3000, status: 'Failed', timestamp: '2024-03-10T10:10:00Z' },
  { id: 'TXN-004', source: 'Mobile Money', target: 'Utility', amount: 450, status: 'Completed', timestamp: '2024-03-10T10:15:00Z' },
  { id: 'TXN-005', source: 'Bank B', target: 'Payment Gateway', amount: 8900, status: 'Completed', timestamp: '2024-03-10T10:20:00Z' },
];

export const AI_INSIGHTS = [
  { id: 1, type: 'risk', message: 'Unusual transaction volume detected in Sector 4.', severity: 'high', icon: AlertTriangle },
  { id: 2, type: 'prediction', message: 'Projected liquidity shortfall in Bank B within 48h.', severity: 'medium', icon: TrendingUp },
  { id: 3, type: 'optimization', message: 'Interoperability latency reduced by 15% via new protocol.', severity: 'low', icon: Zap },
];

export const SYSTEM_HEALTH = [
  { name: 'API Gateway', status: 'Operational', latency: '45ms' },
  { name: 'Data Lake', status: 'Syncing', latency: '120ms' },
  { name: 'AI Engine', status: 'Idle', latency: 'N/A' },
  { name: 'Auth Service', status: 'Operational', latency: '20ms' },
];
