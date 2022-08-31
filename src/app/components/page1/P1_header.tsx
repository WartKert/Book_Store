/** @jsxImportSource @emotion/react */
import React, { Fragment, memo } from "react";
import { css } from "@emotion/react";
import imageLogo from "../../../image/logo.png";
import imageFIcon from "../../../image/F.png";
import imageTIcon from "../../../image/T.png";
import imageIIcon from "../../../image/I.png";
import imageShoppingCart from "../../../image/shopping_cart.png";
import Button from "../button";

const gridStyle = css({
	display: "grid",
	gridTemplate: "100% / 1fr 1.5fr",
	padding: "10px",
	justifyItems: "center",
	alignItems: "center",
});

const headerStyle = css({
	display: "grid",
	gridTemplate: "100% / auto 1fr",
	minWidth: "700px",
	padding: "10px",
	gridArea: "A",
	fontFamily: "Cardo",

	"& div": gridStyle,
	"& .leftHeader": { gridTemplate: "100% / auto 1fr" },
	"& .logo": { gridTemplate: "100% / auto 1fr" },
	"& .imgLogo": { padding: "10px" },
	"& .textLogo": { justifySelf: "left", color: "white", fontSize: "x-large", paddingRight: "10px" },
	"& .refIcon": { gridTemplate: "100% / repeat(3, 1fr)", marginLeft: "20px" },
	"& .refIcon > a": { cursor: "pointer" },
	"& .refIcon > a:hover": { boxShadow: "0px 0px 6px 2px yellow inset" },
	"& .refIcon > a > img": { display: "block", padding: "10px" },
	"& .rightHeader": { gridTemplate: "100% / repeat(6, auto)", gridColumnGap: "3%", justifyContent: "right", fontFamily: "Inter" },
	"& .rightHeader > a": { color: "white", fontSize: "large", cursor: "pointer" },
	"& .rightHeader > a.button": { width: "100%", height: "100%" },
	"& .rightHeader a > button": {
		fontSize: "large",
		fontFamily: "Cardo",
		// fontWeight: "400",
		width: "100%",
		height: "100%",
		backgroundColor: "#FFCA42",
		padding: "0px 30px",
		cursor: "pointer",
		letterSpacing: "0.58px",
		border: "none",
	},
});

export default function Header(): JSX.Element {
	return (
		<div className='headerLogo' css={headerStyle}>
			<LeftHeader />
			<RightHeader />
		</div>
	);
}

export const MemoizedHeader = React.memo(Header);

function LeftHeader(): JSX.Element {
	return (
		<div className={"leftHeader"}>
			<div className='logo'>
				<img className='imgLogo' src={imageLogo} />
				<p className='textLogo'>Pages</p>
			</div>
			<div className={"refIcon"}>
				<a href={"https://vk.com"}>
					<img src={imageFIcon} />
				</a>
				<a href={"https://telegram.org"}>
					<img src={imageTIcon} />
				</a>
				<a>
					<img src={imageIIcon} />
				</a>
			</div>
		</div>
	);
}

function RightHeader(): JSX.Element {
	return (
		<div className={"rightHeader"}>
			<a>Home</a>
			<a>About</a>
			<a>Pages</a>
			<a>Contact us</a>
			<a>
				<img src={imageShoppingCart} />
			</a>
			<a className={"button"}>
				<Button>Order Today</Button>
			</a>
		</div>
	);
}
