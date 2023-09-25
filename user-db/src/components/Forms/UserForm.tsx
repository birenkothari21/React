import React from "react";
import "./UserForm.css";
import useInput from "../../hooks/useInput";

type user = {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
};

type propsType = {
	onSubmitForm: (user: user) => void;
};

const UserForm: React.FC<propsType> = (props) => {
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredAge,
		isValid: enteredAgeIsValid,
		hasError: ageHasError,
		valueChangeHandler: ageChangeHandler,
		inputBlurHandler: ageBlurHandler,
		reset: resetAge,
	} = useInput((value) => {
		return parseInt(value) <= 100 && parseInt(value) > 0;
	});

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((value) =>
		new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(value)
	);

	let formIsValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredAgeIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		props.onSubmitForm({
			firstName: enteredFirstName,
			lastName: enteredLastName,
			age: parseInt(enteredAge),
			email: enteredEmail,
		});

		resetFirstName();
		resetLastName();
		resetAge();
		resetEmail();
	};

	return (
		<>
			<div className="form">
				<form
					action=""
					onSubmit={formSubmitHandler}
				>
					<div className="form-heading">
						<h1>User Form</h1>
					</div>
					<div className="form-control">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="John"
							value={enteredFirstName}
							onChange={firstNameChangeHandler}
							onBlur={firstNameBlurHandler}
						/>
						{firstNameHasError && (
							<p className="err-text">
								First Name Must Not Be Empty
							</p>
						)}
					</div>
					<div className="form-control">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Doe"
							value={enteredLastName}
							onChange={lastNameChangeHandler}
							onBlur={lastNameBlurHandler}
						/>
						{lastNameHasError && (
							<p className="err-text">
								Last Name Must Not Be Empty
							</p>
						)}
					</div>
					<div className="form-control">
						<label htmlFor="age">Age</label>
						<input
							type="text"
							name="age"
							id="age"
							placeholder="0"
							value={enteredAge}
							onChange={ageChangeHandler}
							onBlur={ageBlurHandler}
						/>
						{ageHasError && (
							<p className="err-text">
								Age must Be Between 1 & 100
							</p>
						)}
					</div>
					<div className="form-control">
						<label htmlFor="email">E-Mail</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="test@test.com"
							value={enteredEmail}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
						/>
						{emailHasError && (
							<p className="err-text">Enter valid email</p>
						)}
					</div>
					<div className="form-control">
						<button type="submit"> Add User</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default UserForm;
