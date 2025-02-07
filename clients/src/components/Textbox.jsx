import React from "react"
import clsx from "clsx"

const Textbox = React.forwardRef(({ type, placeholder, lable, className, register, name, error }, ref) => {
  return <div className="w-full flex flex-col items-center justify-center gap-1">
    {lable && (
      <label >{lable}</label>
    )}
  </div>

})

export default Textbox
