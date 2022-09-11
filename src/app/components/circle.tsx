/** @jsxImportSource @emotion/react */
import React, { Fragment, PureComponent } from "react";
import { css, SerializedStyles } from "@emotion/react";

type CirclePropsType = {
	radius?: string;
	number: number;
	css?: SerializedStyles;
	className?: string;
};

const CircleStyle = css({});

export function Circle(props: CirclePropsType): JSX.Element {
	let arr: string[] = [];
	for (let i = 0; i < props.number; i++) {
		arr.push("");
	}

	return (
		<div css={[CircleStyle, props.css]} className={props.className}>
			{arr.map((_, indx) => {
				return <div key={`cirle${indx + 1}`} className={`circle${indx + 1}`} />;
			})}
		</div>
	);
}
