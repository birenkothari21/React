import React from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

const Form: React.FC = () => {
	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Form Submtted...");
	};

	const onChangeCSHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	const onChangeYSHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	const onChangeEIHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	const onChangeIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	return (
		<React.Fragment>
			<Input
				label="Input-Label"
				type="number"
				id="cs"
				onChange={onChangeCSHandler}
			></Input>
			<Input
				label="Input Label"
				type="number"
				id="ys"
				onChange={onChangeYSHandler}
			></Input>
			<Input
				label="Input Label"
				type="number"
				id="ei"
				onChange={onChangeEIHandler}
			></Input>
			<Input
				label="Input Label"
				type="number"
				id="idu"
				onChange={onChangeIDHandler}
			></Input>
			<Button
				type="submit"
				onSubmit={onSubmitHandler}
			></Button>
		</React.Fragment>
	);
};

export default Form;
