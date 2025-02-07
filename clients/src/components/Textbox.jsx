import React from "react"

const Textbox = React.forwardRef(({ type, placeholder, label, className, register, name, error }, ref) => {
  return <div className="w-full flex flex-col items-center justify-center gap-1">
    {label && (
      <label htmlFor={name}
        className="text-slate-800"
      >{label}</label>
    )}
    <div>
      <input type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        {...register}
        aria-invalid={error ? "true" : "false"}
        className={`bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder:text-gray-500 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300 ${className}`}

      />
    </div>
    {error && (
      <span className="text-red-500 text-sm mt-0.5">{error}</span>
    )}
  </div>

})

export default Textbox
