import { createSlice } from '@reduxjs/toolkit';

export interface UserType {

}

const initialState:UserType = {

}

const userSlice = createSlice({
    initialState,
    name: "user",
    reducers:{

    }
})

export const { } = userSlice.actions 

export default userSlice.reducer