/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import imageBookTitle1 from "../../../image/book_title_1.png";
import MemoizedHeader from "./P1_header";
import LeftMain from "./P1_left_main";
import RightMain from "./P1_right_main";

const divMainStyle = css({
	backgroundColor: "#1B3764",
	height: "100%",
	display: "grid",
	gridTemplate: "100px auto / repeat(2, 1fr)",
	gridTemplateAreas: '"A A""B C"',
	minWidth: "840px",
	maxWidth: "1500px",
	margin: "auto",
});

export default function Main(): JSX.Element {
	return (
		<div css={divMainStyle}>
			<MemoizedHeader />
			<LeftMain />
			<RightMain>{<img src={imageBookTitle1} alt={"Image_title"} />} </RightMain>
		</div>
	);
}
