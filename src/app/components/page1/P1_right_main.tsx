/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

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
