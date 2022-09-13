/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import imageAuthor from "../../../image/author.png";
import imageCode from "../../../image/code.png";
import * as constants from "../constant";

const P3MainStyle = css({
	backgroundColor: "#F5F8FC",
	height: "100%",
	maxHeight: "700px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	padding: "140px 30px",
	margin: "auto",

	"& .gridBlock": {
		display: "grid",
		maxHeight: "600px",
		gridTemplate: "50px 10px repeat(3, 150px) / 50% 50%",
		gridTemplateAreas: '"A B""A C""A D""A E""A F"',
		alignItems: "center",
	},

	"& .gridCell": {
		width: "100%",
		height: "100%",
	},

	"& .gridBlock > .leftMain": {
		gridArea: "A",
		height: "83%",
		maxHeight: "550px",
		margin: "auto",
		border: "6px solid #FFCA42",
	},

	"& .gridBlock > .leftMain > img": {
		display: "block",
		width: "100%",
		height: "100%",
		objectFit: "contain",
		transform: "translate(-30px, -30px)",
	},

	"& .gridBlock > h2": {
		color: "#1B3764",
		fontSize: "x-large",
	},
	"& .gridBlock > div.border": {
		width: "10%",
		borderTop: "3px solid #FFCA42",
	},

	"& .gridBlock > p": {
		color: "#969AA0",
	},
	"& .gridBlock > .subBlocks": {
		width: "100%",
		display: "flex",
		justifyItems: "",
		alignItems: "center",
		flex: "1 0 auto",
	},
	"& .gridBlock > .subBlocks > div": {
		flex: "1 1 auto",
		padding: "0px 6px",
	},
	"& .gridBlock > .subBlocks > div:nth-of-type(even)": {
		borderLeft: "3px solid #FFCA42",
		borderRight: "3px solid #FFCA42",
	},

	"& .gridBlock > .subBlocks > div > p:nth-of-type(odd)": {
		fontSize: "xx-large",
		color: "#1B3764",
	},
	"& .gridBlock > .subBlocks > div > p:nth-of-type(even)": {
		fontFamily: "Inter",
		fontSize: "small",
		color: "#969AA0",
	},

	"& .gridBlock > .visitCard": {
		padding: "10px",
		maxHeight: "120px",
		backgroundColor: "#1B3764",
		width: "70%",
		maxWidth: "360px",
		display: "grid",
		gridTemplate: "repeat(3, 1fr) / 1fr 1.5fr",
		gridTemplateAreas: '"A B""A C""A D"',
		color: "#B4C7E7",
	},
	"& .gridBlock > .visitCard > img": {
		width: "100%",
		height: "100%",
		objectFit: "contain",
		gridArea: "A",
		padding: "5px",
	},

	"& .gridBlock > .visitCard : nth-of-type(2)": {
		width: "100%",
		gridArea: "B",
		color: "#FFCA42",
	},
	"& .gridBlock > .visitCard : nth-of-type(3)": {
		width: "100%",
		gridArea: "C",
	},
	"& .gridBlock > .visitCard : nth-of-type(4)": {
		width: "100%",
		gridArea: "D",
	},
});

export default function Main(): JSX.Element {
	return (
		<div css={P3MainStyle}>
			<div className={"gridBlock"}>
				<div className={"leftMain"}>
					<img src={imageAuthor} alt={"Image_author"} />
				</div>
				<h2>About The Author</h2>
				<div className={"border"} />
				<p>
					We believe that bookstores are essential to a healthy culture.
					<br />
					They're where authors can connect with readers, where we discover new writers, where children get hooked on the thrill
					of reading that can last a lifetime.
				</p>
				<div className={"subBlocks"}>
					<div>
						<p>02</p> <p>Books Published</p>
					</div>
					<div>
						<p>4.5</p> <p>User Reviews</p>
					</div>
					<div>
						<p>04</p> <p>Best Seller Awards</p>
					</div>
				</div>
				<div className={"visitCard"}>
					<img src={imageCode} alt={"Image_code"} />
					<p>{constants.FULL_NAME}</p>
					<p>{constants.MAIL}</p>
					<p>{constants.PHONE}</p>
				</div>
			</div>
		</div>
	);
}
