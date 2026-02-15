import { useState } from "react";
import api from "../api/api";
import Card from "../components/Card";
import Button from "../components/Button";

const TargetActualPage = () => {
  const [departmentId, setDepartmentId] = useState("");
  const [month, setMonth] = useState("");
  const [target, setTarget] = useState("");
  const [actual, setActual] = useState("");

  const submitData = async () => {
    if (!departmentId) {
      alert("Please select a department");
      return;
    }

    await api.post("/targets", {
      departmentId: Number(departmentId),
      month,
      targetValue: Number(target),
    });

    await api.post("/actuals", {
      departmentId: Number(departmentId),
      month,
      actualValue: Number(actual),
    });

    alert("Target & Actual saved successfully");

    setDepartmentId("");
    setMonth("");
    setTarget("");
    setActual("");
  };

  return (
    <Card title="Target vs Actual Entry">
      <div className="grid grid-cols-2 gap-4">
        <select
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="1">SALES</option>
          <option value="4">CS1011</option>
          <option value="5">HR</option>
        </select>

        <input
          placeholder="Month (YYYY-MM)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <input
          placeholder="Target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        <input
          placeholder="Actual"
          value={actual}
          onChange={(e) => setActual(e.target.value)}
        />
      </div>

      <Button onClick={submitData}>Save KPI Data</Button>
    </Card>
  );
};

export default TargetActualPage;
