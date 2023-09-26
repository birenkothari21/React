import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface stateType {
	counter: number;
	showCounter: boolean;
}

const initialState: stateType = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.counter += action.payload;
		},
		decrement: (state, action: PayloadAction<number>) => {
			state.counter -= action.payload;
		},
		toggleCounter: (state, action: PayloadAction<boolean>) => {
			state.showCounter = action.payload;
		},
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default store;
export const { increment, decrement, toggleCounter } = counterSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
