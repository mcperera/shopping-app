import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
