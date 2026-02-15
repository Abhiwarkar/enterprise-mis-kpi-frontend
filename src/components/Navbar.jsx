import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-slate-300 hover:text-white";

  return (
    <nav className="bg-slate-900 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          MIS & KPI Dashboard
        </h1>

        <div className="space-x-6">
          <NavLink to="/" className={linkClass}>Departments</NavLink>
          <NavLink to="/kpi-entry" className={linkClass}>KPI Entry</NavLink>
          <NavLink to="/reports" className={linkClass}>Reports</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
