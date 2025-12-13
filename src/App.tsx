import { WafRulesTable } from './features/waf/components/WafRulesTable';
import { AppLayout } from './layouts/AppLayout';
import './App.css';

function App() {
  return (
    <AppLayout>
      <div className="col-span-12">
        <h1 className="page-title">WAF Rules Prototype</h1>
        <WafRulesTable />
      </div>
    </AppLayout>
  )
}

export default App
