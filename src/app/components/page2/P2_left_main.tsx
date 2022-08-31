/** @jsxImportSource @emotion/react */
import React, { Fragment } from "react";
import { css } from "@emotion/react";
import imageTire from "../../../image/tire.png";
import Button from "../button";

const style = css({
	display: "flex",
	flexDirection: "column",
	marginTop: "30vh",
	marginBottom: "auto",
	minWidth: "470px",
	fontFamily: "Cardo",

	"& > div": {
		paddingLeft: "10%",
		margin: "10px 0px",
	},
	"& > div > p": { color: "white", fontFamily: "Cardo" },
	"& > div.p1 > p": { fontSize: "1.4rem", letterSpacing: "1.4px", lineHeight: "36px", display: "inline-block" },
	"& > div.p2 > p": { fontSize: "3rem", letterSpacing: "1.8px", lineHeight: "78px" },
	"& > div.p3 > p": { fontSize: "1.1rem", letterSpacing: "1.6px", color: "#B4C7E7", fontFamily: "Inter", lineHeight: "28px" },
	"& > div.p1 > img": { display: "inline-block", verticalAlign: "super", paddingRight: "10px" },
	"& > div.subButton": { display: "flex", justifyContent: "left", minWidth: "430px" },
	"& > div > button": {
		fontSize: "large",
		fontFamily: "Cardo",
		width: "155px",
		height: "60px",
		border: "none",

		letterSpacing: "0.58px",

		cursor: "pointer",
	},
	"& > div.subButton :nth-of-type(even)": {
		marginLeft: "100px",
		backgroundColor: "#1B3764",
		color: "white",
		textDecoration: "underline",
		textUnderlineOffset: "10px",
	},
	"& > div.subButton :nth-of-type(odd)": {
		backgroundColor: "#FFCA42",
	},
	"& div.subTitle": {
		display: "flex",
		justifyContent: "left",
	},
	"& div.subTitle > div": {
		color: "white",
		flex: "1 0 auto",
		display: "flex",
		alignItems: "baseline",
	},
	"& div.subTitle > div > div.circle": {
		width: "15px",
		height: "15px",
		borderRadius: "50%",
		backgroundColor: "#FFCA42",
		margin: "5px",
	},
	"& div.subTitle > div > p": {
		fontSize: "1.4rem",
		letterSpacing: "1.6px",
	},
	"& div.subTitle > div > p > span": {
		fontSize: "0.8rem",
		letterSpacing: "1px",
		fontFamily: "Inter",
		color: "#B4C7E7",
	},
});

export default function LeftMain(): JSX.Element {
	return (
		<div css={style}>
			<div className={"text p1"}>
				<img src={imageTire} />
				<p>Welcom To Pages!!!</p>
			</div>
			<div className={"text p2"}>
				<p>
					Your Books From
					<br />
					The Best Writer.
				</p>
			</div>
			<div className={"text p3"}>
				<p>
					We believe that reading books are essential to a healthy culture.
					<br /> They're where authors can connect with readers.
				</p>
			</div>
			<div className={"subButton"}>
				<Button>Order Today</Button>
				<Button>Read Free Demo</Button>
			</div>
			<div className={"text subTitle"}>
				<div>
					<div className={"circle"} />
					<p>
						Pages:
						<br />
						<span>250 pages</span>
					</p>
				</div>
				<div>
					<div className={"circle"} />
					<p>
						Lenght: <br />
						<span>10 Hours</span>
					</p>
				</div>
				<div>
					<div className={"circle"} />
					<p>
						Ratings: <br />
						<span>4.5/5 (305 ratings)</span>
					</p>
				</div>
			</div>
		</div>
	);
}
