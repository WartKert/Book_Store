/** @jsxImportSource @emotion/react */
import React, { Fragment, PureComponent } from "react";
import { css, SerializedStyles } from "@emotion/react";

type TitlePropsType = {
	css?: SerializedStyles;
	className?: string;
	classtextblock?: string;
	classborderblock?: string;
};

export default function Title(props: React.PropsWithChildren<TitlePropsType>): JSX.Element {
	return (
		<div {...props} css={props.css}>
			<p className={props.classtextblock}>{props.children}</p>
			<div className={props.classborderblock} />
		</div>
	);
}
// "& .firstBlock > .title": {
// 		paddingTop: "20px",
// 		gridArea: "A",
// 		color: "#1B3764",
// 		fontSize: "larger",
// 	},
//     "& .firstBlock > .title > p": {
// 		paddingTop: "40px",
// 		color: "#1B3764",
// 		fontSize: "x-large",
// 	},
// 	"& .firstBlock >  .title > .border": {
// 		width: "50px",
// 		borderTop: "3px solid #FFCA42",
// 		margin: "15px auto",
// 	},
