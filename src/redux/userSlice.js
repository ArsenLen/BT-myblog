import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null
    },
    reducers: {
        // key : value
        // Название action : функция Reducer
        loginSuccess: (state, action) => {
            // {email: "admin", username:"Arsen"}
            state.currentUser = action.payload // меняем состояние на то, что пришло в экшне
        },
        logout: (state) => {
            state.currentUser = null
        }
    }
})

export default userSlice.reducer
export const { loginSuccess, logout } = userSlice.actions

/*
    const user = {
        name: "Arsen"
    }
    const {name} = user
    console.log(name) // Arsen

    userSlice.actions = {
        loginSuccess: () = {},
        logout: () => {}
    }

    action = {
        type: "loginSuccess",
        payload: {username: "Arsen", age: "25"}
    }
    dispatch(loginSuccess({username: "Arsen", age: "25"}))
*/