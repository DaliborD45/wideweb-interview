import { FormikTouched } from "formik"

export interface Input
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  type: "text" | "password" | "email" | "number" | "tel" | "date" | "time"
  placeholder?: string
  required?: boolean
  field?: any
  errors?: any
  value?: any
  touched?: FormikTouched<any> | any
}
