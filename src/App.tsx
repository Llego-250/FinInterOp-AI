import { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './modules/Dashboard';
import { DataSource } from './modules/DataSource';
import { CustomerData } from './modules/CustomerData';
import { FraudDetection } from './modules/FraudDetection';
import { SecurityManagement } from './modules/SecurityManagement';

export default function App() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard': return <Dashboard />;
      case 'data-source': return <DataSource />;
      case 'customer-data': return <CustomerData />;
      case 'fraud-detection': return <FraudDetection />;
      case 'security-management': return <SecurityManagement />;
      default: return <Dashboard />;
    }
  };

  return (
    <AppLayout activeModule={activeModule} onModuleSelect={setActiveModule}>
      {renderModule()}
    </AppLayout>
  );
}
