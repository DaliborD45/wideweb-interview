import { Input as InputType } from "@/types/input.type"
import React from "react"

function Input({
  field,
  label,
  errors,
  touched,
  required,
  ...rest
}: InputType) {
  
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-black">
        {label} {required && "*"}
      </label>

      <input
        {...rest}
        {...field}
        className="rounded-lg py-1 px-3 focus:outline-pink-300  "
        
      />
      {errors && touched ? (
        <div className="text-sm font-semibold text-red-500">{errors}</div>
      ) : null}
    </div>
  )
}

export default Input
