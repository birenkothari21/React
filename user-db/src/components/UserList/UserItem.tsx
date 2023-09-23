import React from "react";
import "./UserItem.css";

type propsType = {
	user: {
		firstName: string;
		lastName: string;
		age: number;
		email: string;
	};
};

const UserItem: React.FC<propsType> = (props) => {
	return (
		<li key={props.user.email}>
			<div>
				<h4>{props.user.firstName + " " + props.user.lastName}</h4>
				<div>{`Age    : ${props.user.age}`}</div>
				<div>{`E-Mail : ${props.user.email}`}</div>
			</div>
		</li>
	);
};

export default UserItem;
