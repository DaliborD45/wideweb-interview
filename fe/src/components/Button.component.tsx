import React, { ComponentProps } from "react"

interface ButtonI extends ComponentProps<"button"> {
  type: "button" | "submit"
  variant: "primary" | "secondary"
  size: "xs" | "sm" | "md" | "lg"
  children: React.ReactNode
}

export default function Button({
  type,
  variant,
  size,
  children,
  ...rest
}: ButtonI) {
  const variantsTheme = {
    primary:
      "text-white bg-gradient-to-r from-blue-400 to-pink-400 bg-[length:200%_auto] hover:bg-right  ",
    secondary: "bg-white  text-pink-500  border-pink-500 border-2",
  }

  const sizesTheme = {
    xs: "px-2 py-1 text-sm",
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-4 text-md",
  }
  return (
    <button
      {...rest}
      className={`z-20 transition-all duration-300 ease-in-out hover:scale-105 flex justify-center ${
        variantsTheme[variant]
      } ${
        sizesTheme[size as keyof typeof sizesTheme]
      } gap-2 items-center rounded-lg text-2xl `}
    >
      {children}
    </button>
  )
}
