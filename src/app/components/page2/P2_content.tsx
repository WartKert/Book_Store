/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type ContentMainPropsType = {
	children?: React.ReactNode;
};

const style = css({
	display: "flex",
	flexWrap: "nowrap",
	flex: "1 0 auto",
	width: "83%",
	maxWidth: "1250px",
	height: "100%",
	justifyContent: "space-arpund",
	alignContent: "center",
});

export default function ContentMain(props: React.PropsWithChildren<ContentMainPropsType>): JSX.Element {
	return <div css={style}>{props.children}</div>;
}
