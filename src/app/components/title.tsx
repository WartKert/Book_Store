/** @jsxImportSource @emotion/react */
import React from "react";
import { SerializedStyles } from "@emotion/react";

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
