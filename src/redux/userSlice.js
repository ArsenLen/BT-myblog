import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null
    },
    reducers: {
        // Название action : функция Reducer
        loginSuccess: (state, action) => {
            state.currentUser = action.payload // меняем состояние на то, что пришло в экшне
        },
        logout: (state) => {
            state.currentUser = null
        }
    }
})

export default userSlice.reducer