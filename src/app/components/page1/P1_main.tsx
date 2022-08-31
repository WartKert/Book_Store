/** @jsxImportSource @emotion/react */

import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { ClassNames, css } from "@emotion/react";
import { CreateElement } from "../create_element";
import imageVector from "../../../image/vector.png";
import imageFIcon from "../../../image/F.png";
import imageTIcon from "../../../image/T.png";
import imageIIcon from "../../../image/I.png";
import imageBookTitle1 from "../../../image/book_title_1.png";
import Header, { MemoizedHeader } from "./P1_header";
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
			<RightMain>{<img src={imageBookTitle1} />} </RightMain>
		</div>
	);
}

// const headerStyle = [
// 	css({
// 		gridArea: "A",
// 	}),
// 	gridStyle,
// ];

{
	/* <CreateElement
				Tag={"div"}
				cssStyle={() =>
					css({
						display: "grid",
						gridTemplate: "100% / 1fr 1.5fr",
					})
				}
			>
				<div>
					<img src={imageVector} />
					<p>Pagesa</p>
				</div>
				<div>Pages</div>
			</CreateElement> */
}
