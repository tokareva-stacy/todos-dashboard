import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
  fetchTodosAPI,
  fetchTodoByIdAPI,
  fetchUsersAPI,
} from './todosAPI'
import { TodosState, StatusFilter } from './todosTypes'

/*  THUNKS  */

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    return await fetchTodosAPI()
  }
)

export const fetchTodoById = createAsyncThunk(
  'todos/fetchTodoById',
  async (id: string) => {
    return await fetchTodoByIdAPI(id)
  }
)

export const fetchUsers = createAsyncThunk(
  'todos/fetchUsers',
  async () => {
    return await fetchUsersAPI()
  }
)

/* INITIAL STATE  */

const initialState: TodosState = {
  todos: [],
  users: [],
  selectedTodo: null,
  filters: {
    search: '',
    status: 'all',
    page: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

/* SLICE */

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload
      state.filters.page = 1
    },
    setStatus(state, action: PayloadAction<StatusFilter>) {
      state.filters.status = action.payload
      state.filters.page = 1
    },
    setPage(state, action: PayloadAction<number>) {
      state.filters.page = action.payload
    },
    resetFilters(state) {
      state.filters = initialState.filters
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch todos'
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })

      .addCase(fetchTodoById.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedTodo = action.payload
      })
      .addCase(fetchTodoById.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch todo'
      })
  },
})

export const {
  setSearch,
  setStatus,
  setPage,
  resetFilters,
} = todosSlice.actions

export default todosSlice.reducer