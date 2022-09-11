import { useCallback } from 'react';
import { setUser } from '../slices/authSlice';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';
import { Users } from '../types/User';

export const user = (state: RootState) => state.user;

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  // Set user State
  return {
    setUser: useCallback((user: Users) => dispatch(setUser(user)), [dispatch]),
  };
};

// get auth State
export const useAuth = () => {
  return useAppSelector(user);
};
