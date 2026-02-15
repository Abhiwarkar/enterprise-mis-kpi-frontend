import { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../components/Card";
import Button from "../components/Button";

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);
  const [deptCode, setDeptCode] = useState("");
  const [deptName, setDeptName] = useState("");

useEffect(() => {
  api.get("/departments").then(res => {
    const data = Array.isArray(res.data)
      ? res.data
      : res.data.content || [];
    setDepartments(data);
  });
}, []);


  const addDepartment = async () => {
    if (!deptCode || !deptName) return alert("Fill all fields");
    await api.post("/departments", { deptCode, deptName });
    const res = await api.get("/departments");
    setDepartments(res.data);
    setDeptCode("");
    setDeptName("");
  };

  return (
    <>
      <Card title="Add Department">
        <div className="grid grid-cols-2 gap-4">
          <input className="border rounded-lg p-2" placeholder="Department Code"
            value={deptCode} onChange={e => setDeptCode(e.target.value)} />
          <input className="border rounded-lg p-2" placeholder="Department Name"
            value={deptName} onChange={e => setDeptName(e.target.value)} />
        </div>
        <div className="mt-4">
          <Button onClick={addDepartment}>Add Department</Button>
        </div>
      </Card>

      <Card title="Department List">
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-2 text-left">Code</th>
              <th className="p-2 text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {departments.map(d => (
              <tr key={d.id} className="border-t">
                <td className="p-2">{d.deptCode}</td>
                <td className="p-2">{d.deptName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default DepartmentPage;
