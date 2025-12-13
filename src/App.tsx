import { WafRulesTable } from './features/waf/components/WafRulesTable';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="page-title">WAF Rules Prototype</h1>
      <WafRulesTable />
    </div>
  )
}

export default App
