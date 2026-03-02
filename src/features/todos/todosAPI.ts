import { api } from '../../services/api'
import type { Todo, User } from './todosTypes'

export const fetchTodosAPI = async (): Promise<Todo[]> => {
  const { data } = await api.get('/todos')
  return data
}

export const fetchTodoByIdAPI = async (id: string): Promise<Todo> => {
  const { data } = await api.get(`/todos/${id}`)
  return data
}

export const fetchUsersAPI = async (): Promise<User[]> => {
  const { data } = await api.get('/users')
  return data
}