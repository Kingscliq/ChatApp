import { Message } from './../types/User';
import { Users } from '../types/User';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


interface MessageState {
    messages: Message[];
}

const initialState: MessageState = {
    messages: []
}

export const MessageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state: MessageState, action: PayloadAction<Message>) => {
            state.messages = [...state.messages, action.payload]
        },
    },
});

export const { setMessage } = MessageSlice.actions;
export default MessageSlice;
