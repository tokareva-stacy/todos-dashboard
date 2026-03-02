import { RootState } from '../../app/store'
import { createSelector } from '@reduxjs/toolkit'

/* BASIC SELECTORS */

export const selectTodosState = (state: RootState) => state.todos

export const selectAllTodos = (state: RootState) => state.todos.todos
export const selectUsers = (state: RootState) => state.todos.users
export const selectFilters = (state: RootState) => state.todos.filters
export const selectLoading = (state: RootState) => state.todos.loading
export const selectError = (state: RootState) => state.todos.error
export const selectSelectedTodo = (state: RootState) =>
  state.todos.selectedTodo

/* FILTERED TODOS */

export const selectFilteredTodos = createSelector(
  [selectAllTodos, selectFilters],
  (todos, filters) => {
    return todos.filter((todo) => {
      const matchesSearch = todo.title
        .toLowerCase()
        .includes(filters.search.toLowerCase())

      const matchesStatus =
        filters.status === 'all'
          ? true
          : filters.status === 'completed'
          ? todo.completed
          : !todo.completed

      return matchesSearch && matchesStatus
    })
  }
)

/* PAGINATION */

export const selectPaginatedTodos = createSelector(
  [selectFilteredTodos, selectFilters],
  (filteredTodos, filters) => {
    const start = (filters.page - 1) * filters.limit
    const end = start + filters.limit
    return filteredTodos.slice(start, end)
  }
)

export const selectTotalPages = createSelector(
  [selectFilteredTodos, selectFilters],
  (filteredTodos, filters) => {
    return Math.ceil(filteredTodos.length / filters.limit)
  }
)

/* USER HELPER */

export const selectUserById = (userId: number) =>
  createSelector([selectUsers], (users) =>
    users.find((user) => user.id === userId)
  )