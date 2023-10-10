import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isModalOpen: false,
	id: undefined
};

export const ModalSlice = createSlice({
	name: '@@modal',
	initialState,
	reducers: {
		openModal(state, { payload }) {
			console.log(payload);
			state.id = payload;
			state.isModalOpen = !state.isModalOpen;
		}
	}
});

export const { openModal } = ModalSlice.actions;
export const ModalReducer = ModalSlice.reducer;
