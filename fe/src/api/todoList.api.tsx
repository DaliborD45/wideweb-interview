"use server"

import { TodoListT } from "@/types/totoList.type"
import { revalidatePath } from "next/cache"

const API_URL = "http://localhost:3000"

export const getTodoLists = async () => {
  try {
    const response = await fetch(`${API_URL}/todolists`, { cache: "no-cache" })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const addTodoList = async (todoList: TodoListT) => {
  try {
    const response = await fetch(`${API_URL}/todolists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoList),
    })
    revalidatePath("/")
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
