"use client"
import React from "react"
import * as Yup from "yup"
import { Formik, Field, Form } from "formik"
import Input from "@/components/Input.component"
import Button from "@/components/Button.component"
import { useRouter } from "next/navigation"
import { addTodoList } from "@/api/todoList.api"
import { TodoListT } from "@/types/totoList.type"

const validationSchema = Yup.object({
  name: Yup.string().required("Title is required"),
})

export default function CreateTodoListForm() {
  const router = useRouter()

  const handleCreateTodoList = async (values: TodoListT) => {
    await addTodoList(values)
    router.push("/")
  }
  return (
    <>
      <div className="flex flex-col md:max-w-4xl mx-auto w-full bg-slate-100 rounded-lg p-5 ">
        <h1 className="font-semibold text-xl mb-5">Create Todo</h1>
        <Formik
          initialValues={{
            id: Math.floor(Math.random() * 1000).toString(),
            name: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleCreateTodoList(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col gap-5 mb-8">
                <Field
                  label="Name"
                  type="text"
                  name="name"
                  errors={errors.name}
                  touched={touched.name}
                  component={Input}
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="md">
                Create
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
