import {
	SliceCaseReducers,
	configureStore,
	createSlice,
} from "@reduxjs/toolkit";

interface stateType {
	counter: number;
	showCounter: boolean;
}

// interface actionType {
// 	type: "INCREMENT" | "DECREMENT";
// 	counter?: number;
// 	showCounter?: boolean;
// }

const initState: stateType = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice<
	stateType,
	SliceCaseReducers<stateType>,
	string
>({
	initialState: initState,
	reducers: {
		increment(state: stateType) {
			state.counter += 1;
		},
		decrement(state: stateType) {
			state.counter -= 1;
		},
	},
	name: "counter",
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

// const counterReducer = (
// 	state: stateType = { counter: 0, showCounter: true },
// 	action: actionType
// ) => {
// 	if (action.type === "INCREMENT") {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: action.showCounter,
// 		};
// 	}

// 	if (action.type === "DECREMENT") {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: action.showCounter,
// 		};
// 	}

// 	return state;
// };
