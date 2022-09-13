/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import arrow_back_96px from "../../../image/arrow_back_96px.png";
import arrow_forward_96px from "../../../image/arrow_forward_96px.png";
import ContentMain from "./P2_content";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchBooks, ListBooksItemsType } from "../../store";
import Button from "../button";
import { Arrow } from "../arrow";
import Title from "../title";
import * as constants from "../constant";

const divMainStyle = css({
	height: "100%",
	maxHeight: "700px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	backgroundColor: "white",
	display: "grid",
	gridTemplate: "150px auto / 1fr",
	margin: "auto",
	justifyItems: "center",
	position: "relative",

	"& .arrowBlock": {
		position: "absolute",
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		top: "50%",
		zIndex: "1",
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

export default function Main(): JSX.Element {
	const dispatch = useAppDispatch();
	const select = useAppSelector((state) => state.listBookReducer.listBooks);
	const [curBlockElements] = useState({ left: 0, right: 1 });

	useEffect(() => {
		dispatch(fetchBooks("https://wartkert.github.io/json/book_store/catalog.json"));
	}, [dispatch]);

	return (
		<div css={divMainStyle}>
			<Title css={titleStyle} classtextblock={"text"} classborderblock={"border"}>
				The Author's Book
			</Title>
			<div className={"arrowBlock"}>
				<Arrow className={"arrow"}>
					<img src={arrow_back_96px} alt={"Arrow_back"} />
				</Arrow>
				<Arrow>
					<img src={arrow_forward_96px} alt={"Arrow_forward"} />
				</Arrow>
			</div>
			<ContentMain>
				{select ? (
					typeof select === "string" ? (
						<p>Error loading</p>
					) : (
						select.map((elem, indx) => {
							if (indx === curBlockElements.left || indx === curBlockElements.right) {
								return <BlockItem list={elem} key={elem.id} />;
							}
							return null;
						})
					)
				) : (
					<p>No loading</p>
				)}
			</ContentMain>
		</div>
	);
}

const BlockItemStyle = css({
	backgroundColor: "white",
	height: "100%",
	display: "grid",
	gridTemplate: "repeat(5, auto)/ 1fr 40%",
	gridTemplateAreas: '"A B""A C""A D""A E""A F"',
	margin: "auto",
	alignItems: "center",
	justifyItems: "center",
	position: "relative",
	alignContent: "center",
	fontFamily: "Cardo",

	"& .all": {
		justifySelf: "left",
	},

	"&>img": {
		gridArea: "A",

		width: "100%",
	},
	"& .textBlock": {
		gridArea: "A",
	},

	"&> .title": {
		gridArea: "B",
		letterSpacing: "0.4px",
		lineHeight: "38px",
	},
	"&> .price": { gridArea: "C", color: "#FFCA42", fontFamily: "Inter", lineHeight: "32px", fontSize: "large" },
	"&> .price::before": { content: "'$ '" },
	"&> .statement": { gridArea: "D", fontFamily: "Inter", color: "#969AA0", lineHeight: "28px" },
	"&> div": { gridArea: "E", display: "flex", justifyItems: "flex-start" },
	"&> div > .circle": { width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#FFCA42", margin: "5px" },
	"&> div> .printText": { fontSize: "large" },
	"&> .button": {
		gridArea: "F",
		fontSize: "large",
		fontFamily: "Cardo",
		minWidth: "130px",
		width: "100%",
		maxWidth: "200px",
		height: "60px",
		border: "1px solid #FFCA42",
		backgroundColor: "white",
	},
});

type BlockItemProps = {
	list: ListBooksItemsType;
};

const BlockItem: React.FC<React.PropsWithChildren<BlockItemProps>> = (props) => {
	return (
		<div css={BlockItemStyle}>
			<img src={`https://wartkert.github.io/json/${props.list.image}`} alt={"Image_book"} />
			<h1 className={"title all"}>{props.list.title}</h1>
			<p className={"price all"}>{`${props.list.regular_price.value} ${props.list.regular_price.currency}`}</p>
			<p className={"statement  all"}>{props.list.statement}</p>
			<div className={"all"}>
				<div className={"circle"} />
				<p className={"printText"}>Printed Book</p>
			</div>
			<Button className={"button all"}>Order Now</Button>
		</div>
	);
};
