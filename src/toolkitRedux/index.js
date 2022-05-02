import {
    configureStore
} from "@reduxjs/toolkit";

import booksReducer from "./Slice/Books";

const store = configureStore({
    reducer: {
        books: booksReducer
    }
})

export default store