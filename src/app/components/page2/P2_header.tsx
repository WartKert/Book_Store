/** @jsxImportSource @emotion/react */
import React, { Fragment, memo } from "react";
import { css } from "@emotion/react";
import imageLogo from "../../../image/logo.png";
import imageFIcon from "../../../image/F.png";
import imageTIcon from "../../../image/T.png";
import imageIIcon from "../../../image/I.png";
import imageShoppingCart from "../../../image/shopping_cart.png";
import Button from "../button";

const headerStyle = css({
	// gridArea: "A",
	fontFamily: "Cardo",
	justifyItems: "center",
	backgroundColor: "white",

	"& > p": {
		fontSize: "1.5rem",
		color: "#1B3764",
		lineHeight: "50px",
	},

	"& > div": {
		border: "3px solid yellow",
		width: "50px",
		margin: "auto",
	},
});

export default function Header(): JSX.Element {
	return (
		<div className='headerLogo' css={headerStyle}>
			<p>The Author's Book</p>
			<div></div>
		</div>
	);
}
