/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import * as constants from "../constant";
import image1 from "../../../image/resources/id1.png";
import image2 from "../../../image/resources/id2.png";
import image3 from "../../../image/resources/id3.png";

import Title from "../title";

const P7MainStyle = css({
	height: "100%",
	maxHeight: "1000px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	margin: "auto",
	backgroundColor: "#F4F8FF",
	display: "grid",
	gridTemplate: "0.3fr 1fr / repeat(3, 1fr)",
	gridTemplateAreas: '"A A A""B C D"',
	alignItems: "center",
	justifyItems: "center",

	"& .title": {
		gridArea: "A",
		maxHeight: "100px",
	},
});

const titleStyle = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
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
		margin: "15px 0px",
	},
});

const resources = [
	{
		id: 1,
		image: image1,
		title: "Significant reading has more info number",
		text: "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
		data: "october 6, 2021",
	},
	{
		id: 2,
		image: image2,
		title: "Many variations of pass majority have suffered",
		text: "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
		data: "october 6, 2021",
	},
	{
		id: 3,
		image: image3,
		title: "Words which don't look even slightly believable",
		text: "Podcasting operational change management inside of workglows to establish a framework.",
		data: "october 6, 2021",
	},
];

export default function Main(): JSX.Element {
	return (
		<div css={P7MainStyle}>
			<Title css={titleStyle} className={"title"} classtextblock={"text"} classborderblock={"border"}>
				Words From Our Readers
			</Title>
			{resources.map((elem, indx) => {
				return <Block data={elem} key={elem.id} />;
			})}
		</div>
	);
}

const BlockStyle = css({
	display: "flex",
	flexDirection: "column",
	fontFamily: "Cardo",
	width: "90%",
	height: "100%",
	justifyContent: "space-between",
	maxHeight: "600px",
	padding: "10px",
	color: "#1B3764",
	backgroundColor: "white",
	borderRadius: "10px",

	"& > img": {
		flexBasis: "50%",
		width: "100%",
		objectFit: "none",
		objectPosition: "top",
	},
	"& > h2": {
		lineHeight: "34px",
	},
	"& > p": {
		lineHeight: "30px",
		color: "#969AA0",
	},
	"& > div": {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "#1B3764",
	},
	"& div > p:nth-of-type(odd)": {
		lineHeight: "23px",
		textDecoration: "underline",
	},
	"& div > p:nth-of-type(even)": {
		lineHeight: "26px",
		fontFamily: "Inter",
	},
});

type BlockPropsType = {
	data: {
		image: string;
		title: string;
		text: string;
		data: string;
	};
};

function Block(props: BlockPropsType): JSX.Element {
	return (
		<div css={BlockStyle}>
			<img src={props.data.image} alt={"Image_back"} />
			<h2>{props.data.title}</h2>
			<p>{props.data.text}</p>
			<div>
				<p>Readmore</p>
				<p>{props.data.data}</p>
			</div>
		</div>
	);
}
