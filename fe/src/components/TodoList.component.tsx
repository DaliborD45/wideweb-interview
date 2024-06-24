"use client"
import { TodoT } from "@/types/todo.type"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Todo from "@/components/Todo.component"
import { FiPlusCircle } from "react-icons/fi"
import Button from "@/components/Button.component"
import { TodoListT } from "@/types/totoList.type"
interface TodoListI {
  id: TodoListT["id"]
  heading: string
  todos: TodoT[]
}

export default function TodoList({ id, todos, heading }: TodoListI) {
  const router = useRouter()
  //this is here because new todo list returns Not found instead of expected empty array
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [filter, setFilter] = useState("sort by created date")
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const handleCreateTodo = () => {
    router.push(`/todolist/${id}/todo/create`)
  }



  const handleChangeDateFilter = (type: "from-oldest" | "from-newest") => {
    if (type === filter) return setIsSortOpen(false)
    const sortedTodos = [...todos].sort((a, b) => {
      if (type === "from-oldest") {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        )
      } else {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      }
    })
    setFilteredTodos(sortedTodos)
    setFilter(type)
    setIsSortOpen(false)
  }

  const handleFindTodo = (value: string) => {
    if (value === "") {
      setFilteredTodos(todos)
    } else {
      setFilteredTodos(
        todos.filter((todo) =>
          todo.title.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
  }

  return (
    <div className="bg-slate-200 rounded-lg  pt-4 pb-2 w-full sm:min-w-[25rem] sm:mx-auto ">
      <div className="flex w-full justify-between px-4 items-center">
        <h2 className="text-md text-slate-800  font-semibold">{heading}</h2>
        <div className="relative">
          <Button
            variant="secondary"
            size="xs"
            type="button"
            onClick={() => setIsSortOpen((prevState) => !prevState)}
          >
            {filter}
          </Button>
          {isSortOpen && (
            <div className="absolute text-sm top-10 right-0 rounded-lg z-50  border-2 border-pink-500 w-[8rem] bg-white ">
              <div
                className="flex gap-2 border-b-2 border-pink-500 hover:bg-pink-100 rounded-t-lg  p-1"
                onClick={() => handleChangeDateFilter("from-newest")}
              >
                <p>Newest first</p>
              </div>
              <div
                className="flex gap-2 p-1 rounded-b-lg hover:bg-pink-100"
                onClick={() => handleChangeDateFilter("from-oldest")}
              >
                <p>Oldest first</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-4 my-2">
        <input
          className="rounded-md w-full py-1 px-3 text-sm focus:outline-pink-500"
          onChange={(e) => handleFindTodo(e.target.value)}
          placeholder="Search for a todo"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3 px-2 max-h-[22rem] overflow-scroll">
        {filteredTodos &&
          filteredTodos.map((todo, index) => <Todo data={todo} key={index} />)}
      </div>
      <div
        className="flex mx-2 mt-2 pt-2 pb-2 pl-2 mb-4  gap-3 hover:bg-slate-300 rounded-lg hover:cursor-pointer"
        onClick={handleCreateTodo}
      >
        <FiPlusCircle className="text-slate-800 text-2xl " />
        <p>Add a todo</p>
      </div>
    </div>
  )
}
