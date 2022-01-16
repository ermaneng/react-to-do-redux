import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoListItemData } from '../components/TodoListItem/TodoListItemData.interface';

const updatedSlice = createSlice({
  name: 'updated',
  initialState: {
    value: {} as any,
  },
  reducers: {
    update: (state, action: PayloadAction<TodoListItemData>) => {
      state.value.completed = !action.payload.completed;
      state.value = action.payload;

    },
  },
});

export const { actions, reducer } = updatedSlice;
