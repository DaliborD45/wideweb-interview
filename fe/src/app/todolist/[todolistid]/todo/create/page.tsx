import CreateTodoForm from "@/components/CreateTodoForm"
import React from "react"

export default function CreateTodoPage({ params }: { params: { todolistid: string } }) {
  return (
    <div className="p-5">
      <CreateTodoForm todoListId={params.todolistid} />
    </div>
  )
}
