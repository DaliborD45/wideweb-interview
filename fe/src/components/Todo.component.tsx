"use client"
import { TodoT } from "@/types/todo.type"
import React from "react"
import { useRouter } from "next/navigation"
import { MdOutlineDone } from "react-icons/md"
import { IoCreateOutline } from "react-icons/io5"
import { RiProgress3Line } from "react-icons/ri"
interface TodoI {
  data: TodoT
}

export default function Todo({ data }: TodoI) {
  const router = useRouter()
  const handleRedirectToTodo = () => {
    router.push(`/todolist/${data.todolistId}/todo/${data.id}`)
  }
  return (
    <div
      className=" relative group w-full bg-slate-100 border-2 border-slate-300 shadow-sm rounded-lg p-2 hover:border-pink-500 hover:cursor-pointer ease-linear duration-100"
      onClick={handleRedirectToTodo}
    >
      <IoCreateOutline className="absolute top-1 right-2  group-hover:block hidden  text-pink-500 " />
      <div className="flex gap-2 items-center">
        {data.completed ? (
          <MdOutlineDone className="text-pink-500" />
        ) : (
          <RiProgress3Line className="text-pink-500" />
        )}

        <h3>{data.title}</h3>
        <p className="text-xs text-slate-500">{data.deadline_date}</p>
      </div>
    </div>
  )
}
