export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface User {
  id: number
  name: string
}

export type StatusFilter = 'all' | 'completed' | 'active'

export interface FiltersState {
  search: string
  status: StatusFilter
  page: number
  limit: number
}

export interface TodosState {
  todos: Todo[]
  users: User[]
  selectedTodo: Todo | null
  filters: FiltersState
  loading: boolean
  error: string | null
}