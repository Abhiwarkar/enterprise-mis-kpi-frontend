const KpiStatusBadge = ({ status }) => {
  const styles = {
    Achieved: "bg-green-100 text-green-700",
    Warning: "bg-yellow-100 text-yellow-700",
    Critical: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 text-sm rounded ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default KpiStatusBadge;
