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
    id: 'auth',
    title: 'User Registration & Auth',
    icon: UserPlus,
    description: 'Secure registration and authentication.',
    path: '/auth'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    description: 'Role-based overview and metrics.',
    path: '/'
  },
  {
    id: 'data-source',
    title: 'Data Source Integration',
    icon: Link,
    description: 'Connect to financial systems.',
    path: '/data-source'
  },
  {
    id: 'interoperability',
    title: 'Interoperability Standards',
    icon: Network,
    description: 'Manage data standards and mapping.',
    path: '/interoperability'
  },
  {
    id: 'transformation',
    title: 'Data Integration & Transform',
    icon: GitMerge,
    description: 'ETL/ELT pipelines and processing.',
    path: '/transformation'
  },
  {
    id: 'customer-data',
    title: 'Unified Customer Data',
    icon: UserCircle,
    description: 'Customer 360° view and identity resolution.',
    path: '/customer-data'
  },
  {
    id: 'ai-decision',
    title: 'AI Decision Support',
    icon: BrainCircuit,
    description: 'AI model management and inference.',
    path: '/ai-decision'
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Analytics',
    icon: TrendingUp,
    description: 'Borrower and portfolio risk scoring.',
    path: '/credit-risk'
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection',
    icon: ShieldAlert,
    description: 'Real-time transaction monitoring.',
    path: '/fraud-detection'
  },
  {
    id: 'financial-inclusion',
    title: 'Financial Inclusion',
    icon: Globe,
    description: 'Access and demographic analytics.',
    path: '/financial-inclusion'
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory Compliance',
    icon: Scale,
    description: 'Reporting and compliance monitoring.',
    path: '/regulatory-compliance'
  },
  {
    id: 'data-governance',
    title: 'Data Governance & Quality',
    icon: DatabaseZap,
    description: 'Data lineage and quality metrics.',
    path: '/data-governance'
  },
  {
    id: 'reporting',
    title: 'Reporting & Analytics',
    icon: FileText,
    description: 'Custom reports and executive summaries.',
    path: '/reporting'
  },
  {
    id: 'security-management',
    title: 'User & Security Management',
    icon: Lock,
    description: 'Role assignment and access control.',
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
