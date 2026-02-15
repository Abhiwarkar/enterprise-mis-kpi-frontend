import { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../components/Card";
import KpiStatusBadge from "../components/KpiStatusBadge";

const ReportPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
  api.get("/reports")
    .then((res) => {
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.content || [];
      setReports(data);
    })
    .catch((err) => console.error(err));
}, []);


  return (
    <Card title="KPI Performance Report">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th>Dept</th>
            <th>Month</th>
            <th>Target</th>
            <th>Actual</th>
            <th>%</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i} className="border-b">
              <td>{r.deptCode}</td>
              <td>{r.month}</td>
              <td>{r.targetValue}</td>
              <td>{r.actualValue}</td>
              <td>{r.achievementPct.toFixed(2)}%</td>
              <td>
                <KpiStatusBadge status={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ReportPage;
