import { getTodo } from "@/api/todo.api"
import TodoLarge from "@/components/TodoLarge.component"
import React from "react"

export default async function TodoPage({
  params,
}: {
  params: { todolistid: string; id: string }
}) {
  let data;
  try {
    data = await getTodo(params.id)
  } catch (error) {
    data = []
  }
  return (
    <div className="p-5">
      <TodoLarge data={data} />
    </div>
  )
}
