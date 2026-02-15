const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow rounded-lg p-5 mb-6">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-slate-700">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
