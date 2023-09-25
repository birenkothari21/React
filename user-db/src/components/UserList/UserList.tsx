import React from "react";
import UserItem from "./UserItem";

import "./UserList.css";

type propsType = {
	users: {
		firstName: string;
		lastName: string;
		age: number;
		email: string;
	}[];
};

const UserList: React.FC<propsType> = (props) => {
	return (
		<>
			<ul>
				{props.users.map((user) => {
					return <UserItem user={user}></UserItem>;
				})}
			</ul>
		</>
	);
};

export default UserList;
