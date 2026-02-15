const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        bg-blue-600 text-white
        px-5 py-2.5
        rounded-lg
        font-medium
        shadow-sm
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition
      "
    >
      {children}
    </button>
  );
};

export default Button;
