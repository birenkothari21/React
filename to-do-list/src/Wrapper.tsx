import React, { ReactNode } from "react";

type wrapChilds = {
	children: ReactNode;
};

const Wrapper: React.FC<wrapChilds> = (props) => {
	return <>{props.children}</>;
};

export default Wrapper;
