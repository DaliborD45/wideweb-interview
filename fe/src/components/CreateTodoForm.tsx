"use client"
import React from "react"
import * as Yup from "yup"
import { Formik, Field, Form } from "formik"
import Input from "@/components/Input.component"
import { TodoT } from "@/types/todo.type"
import { addTodo } from "@/api/todo.api"
import Button from "@/components/Button.component"
import { useRouter } from "next/navigation"
import TextArea from "./Textarea.component"

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  deadline_date: Yup.date().required("Date is required"),
  todoListId: Yup.string(),
})

export default function CreateTodoForm({ todoListId }: { todoListId: string }) {
  const router = useRouter()
  const handleCreateTodo = async (values: TodoT) => {
    const res = await addTodo(values)
    console.log(res)
    router.push("/")
  }
  return (
    <div className="flex flex-col md:max-w-4xl mx-auto w-full bg-slate-100 rounded-lg p-5">
      <h1 className="font-semibold text-xl mb-5">Create Todo</h1>
      <Formik
        initialValues={{
          //this generating of id is not ideal, but since BE api is not generating it, we have to handle it here
          id: Math.floor(Math.random() * 1000).toString(),
          title: "",
          description: "",
          created_at: new Date().toISOString(),
          deadline_date: "",
          completed: false,
          todolistId: todoListId,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleCreateTodo(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col gap-5 mb-8">
              <Field
                label="Title"
                type="text"
                name="title"
                errors={errors.title}
                touched={touched.title}
                component={Input}
                required
              />
              <Field
                label="Description"
                type="text"
                name="description"
                errors={errors.description}
                touched={touched.description}
                component={TextArea}
              />
              <Field
                label="Deadline Date"
                type="date"
                name="deadline_date"
                errors={errors.deadline_date}
                touched={touched.deadline_date}
                component={Input}
              />
            </div>

            <Button type="button" variant="primary" size="md">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
