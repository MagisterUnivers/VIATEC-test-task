import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: []
};

export const tasksSlice = createSlice({
	name: '@@tasks',
	initialState,
	reducers: {
		addTask(state, { payload }) {
			state.favorite.push(payload);
		},
		removeTask(state, { payload }) {
			state.favorite = state.favorite.filter((el) => el.id !== payload);
		},
		editTask(state, { payload }) {
			state.favorite.push(payload);
		},
		updateTaskStatus(state, { payload }) {
			state.favorite.push(payload);
		}
	}
});

export const { addFavorite, removeFavorite } = tasksSlice.actions;
export const favoriteReducer = tasksSlice.reducer;
