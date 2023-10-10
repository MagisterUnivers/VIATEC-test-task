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
			state.tasks = state.tasks.filter((el) => el.id !== payload);
		},
		updateStatusByCheckbox(state, { payload }) {
			console.log(payload);
			const search = state.tasks.findIndex((e) => e.id === payload);

			if (search !== -1) {
				state.tasks[search].status === 'true'
					? (state.tasks[search].status = 'false')
					: (state.tasks[search].status = 'true');
			}
		},
		updateTaskStatus(state, { payload }) {
			const search = state.tasks.findIndex((e) => e.id === payload.id);

			if (search !== -1) {
				state.tasks.splice(search, 1, payload);
			}
		}
	}
});

export const { addTask, removeTask, updateTaskStatus, updateStatusByCheckbox } =
	tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
