/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import imageAmazen from "../../../image/amazen_corp.png";
import imageMeganBooks from "../../../image/magen_books.png";
import imageMeganK from "../../../image/megank.png";
import imageUrbanStore from "../../../image/urban_store.png";
import imageCoffe from "../../../image/back_fon.png";

import * as constants from "../constant";
import Button from "../button";

const P4MainStyle = css({
	height: "100%",
	maxHeight: "800px",
	display: "grid",
	gridTemplate: "55% 1fr / 1fr",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	// padding: "140px 30px",
	margin: "auto",

	"& .firstBlock": {
		backgroundColor: "white",
		display: "grid",
		gridTemplate: "1fr 3fr / repeat(4, 1fr)",
		gridTemplateAreas: '"A A A A""C D E F"',
		gridColumnGap: "20px",
		justifyItems: "center",
		alignItems: "center",
	},

	"& .firstBlock > .title": {
		paddingTop: "20px",
		gridArea: "A",
		color: "#1B3764",
		fontSize: "larger",
	},
	"& .firstBlock > .title > p": {
		paddingTop: "40px",
		color: "#1B3764",
		fontSize: "x-large",
	},
	"& .firstBlock >  .title > .border": {
		width: "50px",
		borderTop: "3px solid #FFCA42",
		margin: "15px auto",
	},

	"& .firstBlock > .subBlocks": {
		backgroundImage: `url(${imageAmazen})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top",
		paddingTop: "100px",
		textAlign: "center",
		alignSelf: "center",
	},
	"& .firstBlock > .subBlock1": {
		gridArea: "C",
		backgroundImage: `url(${imageAmazen})`,
	},
	"& .firstBlock > .subBlock2": {
		gridArea: "D",
		backgroundImage: `url(${imageMeganBooks})`,
	},
	"& .firstBlock > .subBlock3": {
		gridArea: "E",
		backgroundImage: `url(${imageMeganK})`,
	},
	"& .firstBlock > .subBlock4": {
		gridArea: "F",
		backgroundImage: `url(${imageUrbanStore})`,
	},

	"& .firstBlock > [class ^= subBlock] > h2": {
		color: "#1B3764",
	},
	"& .firstBlock > [class ^= subBlock] > p": {
		color: "#969AA0",
		fontFamily: "Inter",
	},

	"& .secondBlock": {
		backgroundColor: "#1B3764",
		backgroundImage: `url(${imageCoffe})`,
		backgroundPosition: "90%",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
	},
	"& .secondBlock > div": {
		width: "40%",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: "0px 20px",
	},
	"& .secondBlock > div > *": {
		marginTop: "20px",
	},
	"& .secondBlock > div > div > h1": {
		color: "white",
	},
	"& .secondBlock > div > div > div": {
		marginTop: "20px",
		width: "50px",
		borderTop: "3px solid #FFCA42",
	},
	"& .secondBlock > div > p": {
		color: "#B4C7E7",
		fontFamily: "Inter",
	},

	"&  .secondBlock > div > .button": {
		gridArea: "F",
		fontSize: "large",
		fontFamily: "Cardo",
		minWidth: "130px",
		width: "100%",
		maxWidth: "200px",
		height: "60px",
		border: "1px solid #FFCA42",
		backgroundColor: "#1B3764",
		color: "white",
	},
});

export default function Main(): JSX.Element {
	return (
		<div css={P4MainStyle}>
			<div className={"firstBlock"}>
				<div className={"title"}>
					<p>Trusted By The Best</p>
					<div className={"border"} />
				</div>
				<div className={"subBlocks subBlock1"}>
					<h2>Amazen Corp.</h2>
					<p>They has been helping readers, music lovers, and videophiles find quality material.</p>
				</div>
				<div className={"subBlocks subBlock2"}>
					<h2>Megan Books</h2>
					<p>We help physical bookstores manage their overstock to the book inventory.</p>
				</div>
				<div className={"subBlocks subBlock3"}>
					<h2>Megank</h2>
					<p>Bookstore serving up the full spectrum of Black literature and wibne black books.</p>
				</div>
				<div className={"subBlocks subBlock4"}>
					<h2>Urban Store</h2>
					<p>We also carry the latest records, issues of all of your favorite comic books.</p>
				</div>
			</div>
			<div className={"secondBlock"}>
				<div>
					<div>
						<h1>Get Book Copy Today!</h1>
						<div className={"border"} />
					</div>
					<p>We believe that bookstores are essential to a healthy culture. They're where authors can connect with readers.</p>
					<Button className={"button"}>Order Now</Button>
				</div>
			</div>
		</div>
	);
}
