import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DepartmentPage from "./pages/DepartmentPage";
import TargetActualPage from "./pages/TargetActualPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <MainLayout>
        <Routes>
          <Route path="/" element={<DepartmentPage />} />
          <Route path="/kpi-entry" element={<TargetActualPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Routes>
      </MainLayout>
     
    </div>
  );
}

export default App;
