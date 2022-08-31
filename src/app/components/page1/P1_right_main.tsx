/** @jsxImportSource @emotion/react */
import React, { Fragment } from "react";
import { css, SerializedStyles } from "@emotion/react";

type RightMainPropsType = {
	imageSrc?: string;
	children?: React.ReactNode;
};

const style = css({
	"& >img": {
		display: "block",
		objectFit: "scale-down",
		objectPosition: "center",
		width: "100%",
		height: "100%",
	},
});

export default function RightMain(props: React.PropsWithChildren<RightMainPropsType>): JSX.Element {
	return <div css={style}>{props.children}</div>;
}
