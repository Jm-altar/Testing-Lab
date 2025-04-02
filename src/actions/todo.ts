"use server"

import { supabase } from "../lib/supabase"
import { Todo } from "../types/todo.type"

export async function getTodos() {
  const { data, error } = await supabase
    .from("todos")
    .select("*")

  if (error) {
    console.error("Error fetching bills:", error)
    return []
  }
  return data as Todo[]
}

export async function createTodo(todo: Omit<Todo, "id">) {

  const { data, error } = await supabase
    .from("todos")
    .insert([todo])
    .select()

  if (error) {
    console.error("Error adding task:", error)
    return null
  }

  return data[0] as Todo
}

export async function updateTodo(todo: Todo) {

  const { data, error } = await supabase
    .from("todos")
    .update(todo)
    .eq("id", todo.id)
    .select()

  if (error) {
    console.error("Error updating task:", error)
    return null
  }

  return data[0] as Todo
}

export async function deleteTodo(id: string) {
  const { error } = await supabase.from("todos").delete().eq("id", id)

  if (error) {
    console.error("Error deleting task:", error)
    return false
  }

  return true
}