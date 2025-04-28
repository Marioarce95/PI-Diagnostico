function Button({ children, onClick, type = "button" }) {
  return (
    <button 
      className="bg-blue-300 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-950"
      onClick={onClick}
      type={type}
    >
      {children || 'Hacer clic'}
    </button>
  );
}

export default Button;
