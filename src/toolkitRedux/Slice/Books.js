import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  books: [],
  history: [],
  bookmark: [],
  loading: false,
}

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (thunkAPI) => {
    const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XA0bjlKuuS6OFbbXG5yypU2W4xwX3Nif')
    return response.data.results.books
  }
)

export const getHistory = createAsyncThunk(
  'books/getHistory',
  async (thunkAPI) => {
    const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=XA0bjlKuuS6OFbbXG5yypU2W4xwX3Nif')
    return response.data.results
  }
)

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookmark: (state, {
      payload
    }) => {
      const bookExist = state.bookmark.find((item) => item.book_uri === payload.book_uri)
      if (bookExist) {
        console.log('exits')
      } else {
        state.bookmark.push({
          ...payload
        })
      }
    },

    deleteBookmark: (state, {
      payload
    }) => {
      state.bookmark = state.bookmark.filter((item) => item.book_uri !== payload.book_uri)
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true
    },
    [getBooks.fulfilled]: (state, {
      payload
    }) => {
      state.loading = false
      state.books = [...new Set(payload)]
    },
    [getBooks.rejected]: (state) => {
      state.loading = false
    },

    [getHistory.pending]: (state) => {
      state.loading = true
    },
    [getHistory.fulfilled]: (state, {
      payload
    }) => {
      state.loading = false
      state.history = [...new Set(payload)]
    },
    [getHistory.rejected]: (state) => {
      state.loading = false
    },
  },
});

export const {
  addBookmark,
  deleteBookmark
} = booksSlice.actions

export default booksSlice.reducer