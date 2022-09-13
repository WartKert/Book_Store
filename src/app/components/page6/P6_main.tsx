/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import * as constants from "../constant";
import Title from "../title";

const P5MainStyle = css({
	height: "100%",
	maxHeight: "1000px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	margin: "auto",
	backgroundColor: "#F4F8FF",
	"& .gridBlock": {
		display: "grid",
		gridTemplate: " 1fr 1fr / 1fr 1fr",

		height: "100%",
		maxHeight: "700px",
		width: "100%",
		maxWidth: "1300px",
		alignItems: "center",
		justifyItems: "center",
		gridGap: "10px  10px",
		margin: "60px auto",
	},

	"& [class ^= subBlock]": {
		display: "flex",
		flexDirection: "column",
		justifyItems: "left",
		color: "#1B3764",
		fontFamily: "Cardo",
		justifyContent: "center",
		backgroundColor: "white",
		maxHeight: "300px",
		maxWidth: "500px",
		margin: "10px",
	},
	"& [class ^= subBlock] > .title": {
		margin: "20px 10px",
	},
	"& [class ^= subBlock] > .text": {
		color: "#969AA0",
		fontFamily: "Inter",
		lineHeight: "32px",
		margin: "10px",
	},
	"& [class ^= subBlock] > .description": {
		display: "flex",
		justifyItems: "flex-start",
	},
	"& [class ^= subBlock] > .description > div": {
		display: "flex",
		flexWrap: "nowrap",
		alignItems: "center",
	},
	"& [class ^= subBlock] > .description > div > div": {
		borderRadius: "50%",
		backgroundColor: "#FFCA42",
		width: "16px",
		height: "16px",
		margin: "10px",
	},
	"& [class ^= subBlock] > .description > div > p": {
		color: "#969AA0",
		lineHeight: "27px",
		fontFamily: "Inter",
		marginRight: "50px",
	},
	"& [class ^= subBlock] > .description > div > p > span": {
		fontWeight: "bold",
		color: "#1B3764",
		fontFamily: "Cardo",
	},
});

const titleStyle = css({
	paddingTop: "20px",
	color: "#1B3764",
	fontSize: "larger",
	"& .text": {
		paddingTop: "50px",
		fontSize: "x-large",
		textAlign: "center",
	},
	"& .border": {
		width: "50px",
		borderTop: "3px solid #FFCA42",
		margin: "15px auto",
	},
});

const textArray: { title: string; text: string; pages: string; length: string }[] = [
	{
		title: `Chapter-1 Get Started Intro`,
		text: "You can double your knowledge by reading this ever needed book that can last a lifetime.",
		pages: "106 pages",
		length: "2 Hours",
	},
	{
		title: `Chapter-2 The Roman Culture`,
		text: "It will help to improve your life career with the perfect and needed knowledge about your life.",
		pages: "180 pages",
		length: "3 Hours",
	},
	{
		title: `Chapter-3 How They Servived`,
		text: "We wanted to create an easy, convenient way for you to get your books & support.",
		pages: "250 pages",
		length: "4 Hours",
	},
	{
		title: `Chapter-4 The End Of Romans`,
		text: "Promote your book via Pages shop to support your writing & reading career.",
		pages: "175 pages",
		length: "3 Hours",
	},
];

export default function Main(): JSX.Element {
	return (
		<div css={P5MainStyle}>
			<Title css={titleStyle} classtextblock={"text"} classborderblock={"border"}>
				Enhance Knowledge & Vision
			</Title>
			<div className={"gridBlock"}>
				{textArray.map((elem, indx) => {
					return (
						<div key={`${elem.length[0]}${indx}`} className={`subBlock${indx}`}>
							<h2 className={"title"}>{elem.title}</h2>
							<p className={"text"}>{elem.text}</p>
							<div className={"description"}>
								<div>
									<div />{" "}
									<p>
										<span>Pages:</span> {elem.pages}
									</p>
								</div>
								<div>
									<div />{" "}
									<p>
										<span>Length:</span> {elem.length}
									</p>{" "}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
