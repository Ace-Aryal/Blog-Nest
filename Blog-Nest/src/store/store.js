import { configureStore } from "@reduxjs/toolkit"
import auth from "../features/authSlice"
const store = configureStore(
    {
        reducer: {
            auth: auth
        }
    }
)

export default store