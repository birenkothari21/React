import { createStore } from "redux";

interface stateType {
	counter: number;
	showCounter: boolean;
}

interface actionType {
	type: string;
	counter: number;
	showCounter: boolean;
}

const counterReducer = (
	state: stateType = { counter: 0, showCounter: true },
	action: actionType
) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === "toggleCounter") {
		return {
			counter: state.counter,
			showCounter: action.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
