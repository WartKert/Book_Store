/** @jsxImportSource @emotion/react */

import React, { Fragment, useEffect } from "react";
import styled from "@emotion/styled";
import { ClassNames, css } from "@emotion/react";
import { CreateElement } from "../create_element";
import imageVector from "../../../image/vector.png";
import imageFIcon from "../../../image/F.png";
import imageTIcon from "../../../image/T.png";
import imageIIcon from "../../../image/I.png";
import imageBookTitle1 from "../../../image/book_title_1.png";
import Header from "./P2_header";
import ContentMain from "./P2_content";
import { useAppDispatch } from "../../hooks";
import { fetchBooks } from "../../store";
import jsfile from "../../../../public/catalog.json";
import { json } from "stream/consumers";

const divMainStyle = css({
	backgroundColor: "white",
	height: "100%",
	display: "grid",
	gridTemplate: "100px auto / 1fr",
	// gridTemplateAreas: '"A A""B C"',
	minWidth: "840px",
	maxWidth: "1500px",
	margin: "auto",
	alignItems: "center",
	justifyItems: "center",
});

export default function Main(): JSX.Element {
	const dispatch = useAppDispatch();
	let temp: any;
	useEffect(() => {
		const sdf = fetch("../../../json/catalog.json").then(async (data) => await data.json());
		console.log(sdf.then((data) => data).catch(() => "error"));
		let we;
		const temp = dispatch(fetchBooks("../../../../public/catalog.json"));
		// .unwrap()
		// .then((data) => {
		// 	debugger;
		// 	we = data;
		// })
		// .catch(() => {
		// 	debugger;
		// });
		// debugger;
	}, []);

	return (
		<div css={divMainStyle}>
			<Header />
			<ContentMain></ContentMain>
			{/* <RightMain>{<img src={imageBookTitle1} />} </RightMain> */}
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
