/** @jsxImportSource @emotion/react */

import React, { Fragment, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ClassNames, css } from "@emotion/react";
import { CreateElement } from "../create_element";
import imageVector from "../../../image/vector.png";
import imageFIcon from "../../../image/F.png";
import imageTIcon from "../../../image/T.png";
import imageIIcon from "../../../image/I.png";
import arrow_back_96px from "../../../image/arrow_back_96px.png";
import arrow_forward_96px from "../../../image/arrow_forward_96px.png";
import imageBookTitle1 from "../../../image/book_title_1.png";
import Header from "./P2_header";
import ContentMain from "./P2_content";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchBooks, ListBooksItemsType } from "../../store";
import jsonFile from "../../../catalog.json";
import Button from "../button";

import { Arrow } from "../arrow";

const divMainStyle = css({
	backgroundColor: "white",
	height: "100%",
	maxHeight: "700px",
	display: "grid",
	gridTemplate: "100px auto / 1fr",
	// gridTemplateAreas: '"A A""B C"',
	minWidth: "840px",
	maxWidth: "1500px",
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

export default function Main(): JSX.Element {
	const dispatch = useAppDispatch();
	const select = useAppSelector((state) => state.listBookReducer.listBooks);
	const [curBlockElements, setCurBlockElements] = useState({ left: 0, right: 1 });

	useEffect(() => {
		dispatch(fetchBooks("https://wartkert.github.io/json/book_store/catalog.json"));
	}, []);

	return (
		<div css={divMainStyle}>
			<Header />
			<div className={"arrowBlock"}>
				<Arrow className={"arrow"}>
					<img src={arrow_back_96px} />
				</Arrow>
				<Arrow>
					<img src={arrow_forward_96px} />
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
	// maxHeight: "600px",
	display: "grid",
	gridTemplate: "repeat(5, auto)/ 1fr 40%",
	gridTemplateAreas: '"A B""A C""A D""A E""A F"',
	// minWidth: "840px",
	// maxWidth: "1500px",
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
			<img src={`https://wartkert.github.io/json/${props.list.image}`} />
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
