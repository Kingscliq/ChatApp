import { Users } from '../types/User';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
interface AuthState {
    users: Users[];
}

const initialState: AuthState = {
    users: []
}

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: AuthState, action: PayloadAction<Users>) => {
            state.users = [...state.users, action.payload]
        },
    },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice;
