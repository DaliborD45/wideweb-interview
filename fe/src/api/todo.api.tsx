"use server"
import { TodoT } from "@/types/todo.type"
import { TodoListT } from "@/types/totoList.type"
import { revalidatePath } from "next/cache"

const API_URL = "http://localhost:3000"

export const getTodos = async (
  todolistId: TodoListT["id"],
  filter?: string
) => {
  try {
    const response = await fetch(
      `${API_URL}/todos?todolistId=${todolistId}&${filter}`,
      {
        cache: "no-cache",
      }
    )
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const addTodo = async (todo: TodoT) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    revalidatePath("/")
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateTodo = async (todo: TodoT) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })

    revalidatePath("/")
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const deleteTodo = async (todoId: TodoT["id"]) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
      method: "DELETE",
    })
    revalidatePath("/")
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getTodo = async (todoId: TodoT["id"]) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
      cache: "no-cache",
    })

    return response.json()
  } catch (error) {
    console.log(error)
  }
}
