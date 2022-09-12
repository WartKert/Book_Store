/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import * as constants from "../constant";
import image1 from "../../../image/resources/id1.png";
import image2 from "../../../image/resources/id2.png";
import image3 from "../../../image/resources/id3.png";

import Title from "../title";

const P7MainStyle = css({
	height: "100%",
	maxHeight: "550px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	margin: "auto",
	backgroundColor: "white",
	display: "grid",
	gridTemplate: "1fr / 1fr",
	alignItems: "center",
	justifyItems: "center",

	"& > div": {
		backgroundColor: "#FFCA42",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		justifyItems: "center",
		alignContent: "center",
		alignItems: "center",
		width: "80%",
		height: "80%",
	},

	"& > div > .title": {
		maxHeight: "100px",
	},
	"& > div > p": {
		lineHeight: "28px",
		fontFamily: "Inter",
		textAlign: "center",
	},
	"& > div > div": {
		display: "flex",
		width: "100%",
		justifyContent: "center",
		padding: "15px 10px",
		height: "20%",
		maxHeight: "90px",
	},
	"& > div > div > input:nth-of-type(odd)": {
		backgroundColor: "white",
		flexBasis: "50%",
		maxWidth: "650px",
		marginRight: "20px",
	},
	"& > div > div > input:nth-of-type(even)": {
		backgroundColor: "#1B3764",
		flexBasis: "20%",
		maxWidth: "330px",
		color: "white",
	},
});

const titleStyle = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	color: "#1B3764",
	fontSize: "larger",

	"& .text": {
		fontSize: "xx-large",
		textAlign: "center",
	},
	"& .border": {
		width: "50px",
		borderTop: "3px solid #1B3764",
		margin: "15px 0px",
	},
});

export default function Main(): JSX.Element {
	return (
		<div css={P7MainStyle}>
			<div>
				<Title css={titleStyle} className={"title"} classtextblock={"text"} classborderblock={"border"}>
					Get The Best Updates
				</Title>
				<p>
					Subscribe with your mail id to know the current update in book
					<br />
					edition at your fingertip with in a minute.
				</p>
				<div>
					<input type={"text"} placeholder={"Your Email ID..."} />
					<input type={"button"} value={"Subscribe"} />
				</div>
			</div>
		</div>
	);
}
