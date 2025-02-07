
const Button = ({ icon, className, label, type, onClick = () => { } }) => {
  return <button
    type={type || "button"}
    className={`px-3 py-2 rounded outline-none ${className}`}
  >
    <span>{label}</span>
    {icon && icon}
  </button>
}

export default Button
