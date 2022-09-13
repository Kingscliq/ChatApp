import { useCallback } from 'react';
import { setUser } from '../slices/authSlice';
import { setMessage } from '../slices/messageSlice';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';
import { Message } from '../types/User';

export const message = (state: RootState) => state.message;

export const useMessageActions = () => {
    const dispatch = useAppDispatch();
    // Dispatch message to store
    return {
        setMessage: useCallback((message: Message) => dispatch(setMessage(message)), [dispatch]),
    };
};

// get Messages from store
export const useMessages = () => {
    return useAppSelector(message);
};
