/** @jsxImportSource @emotion/react */
import React, { Fragment, PureComponent } from "react";
import { css, jsx, SerializedStyles } from "@emotion/react";

type ButtonType = {
	css?: SerializedStyles;
	nameOfClass?: string;
};

export default function Button(props: React.PropsWithChildren<ButtonType>): JSX.Element {
	return (
		<Fragment>
			<button {...props}>{props.children}</button>
		</Fragment>
	);
}
