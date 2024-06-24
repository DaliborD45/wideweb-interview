"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Button from "./Button.component"
export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="z-50 sticky w-full top-0 h-7 flex items-center justify-between px-5 py-8 bg-blue-200">
      <h1 className="font-bold text-pink-500 hover:cursor-pointer  sm:text-2xl" onClick={()=>router.push("/")}>TODO LIST APP</h1>
      <div>
        <Button
          variant="primary"
          size="md"
          type="button"
          onClick={() => router.push("/todolist/create")}
        >
          Create Todo List
        </Button>
      </div>
    </nav>
  )
}
