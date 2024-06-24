import { getTodos } from "@/api/todo.api"
import { getTodoLists } from "@/api/todoList.api"
import TodoList from "@/components/TodoList.component"
import { TodoListT } from "@/types/totoList.type"

interface TodolistScreenI {
  todolistId: string
  heading: string
}

async function TodolistScreen({ todolistId, heading }: TodolistScreenI) {
  const data = await getTodos(todolistId)
  return <TodoList todos={data} id={todolistId} heading={heading} />
}

export default async function HomePage() {
  const todoLists: TodoListT[] = await getTodoLists()
  return (
    <div className="flex flex-col sm:flex-row gap-5 pr-5 sm:pr-0  pl-5 pb-5 pt-24">
      <div className="flex flex-col sm:flex-row sm: gap-5 w-full last:pr-5  overflow-scroll">
        {todoLists.map((todoList,index) => (
          <div key={index}>
            <TodolistScreen
              todolistId={todoList.id}
              heading={todoList.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
