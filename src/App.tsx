import { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './modules/Dashboard';
import { Integration } from './modules/Integration';
import { Interoperability } from './modules/Interoperability';
import { Processing } from './modules/Processing';
import { AIDecision } from './modules/AIDecision';
import { Visualization } from './modules/Visualization';
import { Reporting } from './modules/Reporting';
import { Admin } from './modules/Admin';
import { Auth } from './modules/Auth';
import { DataSource } from './modules/DataSource';
import { Transformation } from './modules/Transformation';
import { CustomerData } from './modules/CustomerData';
import { CreditRisk } from './modules/CreditRisk';
import { FraudDetection } from './modules/FraudDetection';
import { FinancialInclusion } from './modules/FinancialInclusion';
import { RegulatoryCompliance } from './modules/RegulatoryCompliance';
import { DataGovernance } from './modules/DataGovernance';
import { SecurityManagement } from './modules/SecurityManagement';

export default function App() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'auth': return <Auth />;
      case 'dashboard': return <Dashboard />;
      case 'data-source': return <DataSource />;
      case 'interoperability': return <Interoperability />;
      case 'transformation': return <Transformation />;
      case 'customer-data': return <CustomerData />;
      case 'ai-decision': return <AIDecision />;
      case 'credit-risk': return <CreditRisk />;
      case 'fraud-detection': return <FraudDetection />;
      case 'financial-inclusion': return <FinancialInclusion />;
      case 'regulatory-compliance': return <RegulatoryCompliance />;
      case 'data-governance': return <DataGovernance />;
      case 'reporting': return <Reporting />;
      case 'security-management': return <SecurityManagement />;
      // Legacy modules (keeping them for now if they are referenced elsewhere, but they shouldn't be accessible via sidebar)
      case 'integration': return <Integration />;
      case 'processing': return <Processing />;
      case 'visualization': return <Visualization />;
      case 'admin': return <Admin />;
      default: return <Dashboard />;
    }
  };

  return (
    <AppLayout activeModule={activeModule} onModuleSelect={setActiveModule}>
      {renderModule()}
    </AppLayout>
  );
}
