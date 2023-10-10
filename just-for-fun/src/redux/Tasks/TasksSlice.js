import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: []
};

export const tasksSlice = createSlice({
	name: '@@tasks',
	initialState,
	reducers: {
		addTask(state, { payload }) {
			state.tasks.push(payload);
		},
		removeTask(state, { payload }) {
			state.tasks = state.tasks.filter((el) => el.task === payload.task);
		},
		editTask(state, { payload }) {
			state.tasks.push(payload);
		},
		updateTaskStatus(state, { payload }) {
			state.tasks.push(payload);
		}
	}
});

export const { addTask, removeTask, editTask, updateTaskStatus } =
	tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
