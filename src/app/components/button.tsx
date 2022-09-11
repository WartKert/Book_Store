/** @jsxImportSource @emotion/react */
import React, { Fragment, PureComponent } from "react";
import { css, jsx, SerializedStyles } from "@emotion/react";

type ButtonPropsType = {
	css?: SerializedStyles;
	className?: string;
};

export default function Button(props: React.PropsWithChildren<ButtonPropsType>): JSX.Element {
	return (
		<Fragment>
			<button {...props}>{props.children}</button>
		</Fragment>
	);
}
