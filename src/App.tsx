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

export default function App() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard': return <Dashboard />;
      case 'integration': return <Integration />;
      case 'interoperability': return <Interoperability />;
      case 'processing': return <Processing />;
      case 'ai-decision': return <AIDecision />;
      case 'visualization': return <Visualization />;
      case 'reporting': return <Reporting />;
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
