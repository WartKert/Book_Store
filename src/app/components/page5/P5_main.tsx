/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import imageSomeFoto from "../../../image/some_foto.png";

import * as constants from "../constant";

import Title from "../title";
import Image from "../image";

const P5MainStyle = css({
	height: "100%",
	maxHeight: "1000px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	margin: "auto",

	"& .gridBlock": {
		display: "grid",
		gridTemplate: " 1fr 1fr / 1fr 1fr 1.5fr",

		height: "100%",
		maxHeight: "700px",
		width: "100%",
		maxWidth: "1300px",
		gridTemplateAreas: '"A B C ""D E C "',
		alignItems: "center",
		justifyItems: "center",
		gridGap: "50px  50px",
		margin: "60px auto",
	},

	"& [class ^= subBlock]": {
		display: "flex",
		flexDirection: "column",
		justifyItems: "left",
		color: "#1B3764",
		fontFamily: "Cardo",
		justifyContent: "center",
		backgroundColor: "#F4F8FF",
		maxHeight: "300px",
		maxWidth: "300px",
	},
	"& [class ^= subBlock] > p:nth-of-type(odd)": {
		width: "27px",
		fontSize: "larger",
		textAlign: "center",
		backgroundColor: "#FFCA42",
		borderRadius: "50%",
		margin: "10px 0px 20px 2px",
	},
	"& [class ^= subBlock] > p:nth-of-type(even)": {
		fontSize: "large",
		textAlign: "left",
		lineHeight: "34px",
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
	"& .image": {
		gridArea: "C",
		width: "100%",
		height: "100%",
		objectFit: "contain",
	},
});
const imageStyle = css({
	gridArea: "C",
	alignSelf: "center",
	"& div": {
		border: "6px solid #FFCA42",
	},
	"& img": {
		display: "block",
		width: "100%",
		height: "100%",
		objectFit: "contain",
		transform: "translate(-30px, -30px)",
	},
});

const textArray: string[] = [
	`Use HDFS & Map Reduce for storing & analyzing data at scale.`,
	`Consume streamivg data using Spark Streaming, Flink, and Storm.`,
	`Choose an appropriate data storage technology for your applocation`,
	`Analyze non-relational data using HBase, Cassandra, and MongoDB.`,
];

export default function Main(): JSX.Element {
	return (
		<div css={P5MainStyle}>
			<Title css={titleStyle} classtextblock={"text"} classborderblock={"border"}>
				What Will You Learn?
			</Title>
			<div className={"gridBlock"}>
				<Image image={imageSomeFoto} css={imageStyle} />

				{textArray.map((elem, indx) => {
					return (
						<div key={`${elem[0]}${indx}`} className={`subBlock${indx}`}>
							<p>{`0${indx + 1}`}</p>
							<p>{elem}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
