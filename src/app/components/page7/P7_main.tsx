/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from "@emotion/react";

import * as constants from "../constant";

import Title from "../title";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchComments } from "../../store";
import { useEffect } from "react";
import { Circle } from "../circle";

const P7MainStyle = css({
	height: "100%",
	maxHeight: "1000px",
	minWidth: `${constants.MIN_WIDTH}px`,
	maxWidth: `${constants.MAX_WIDTH}px`,
	fontFamily: "Cardo",
	margin: "auto",
	backgroundColor: "white",
	display: "grid",
	gridTemplate: "1fr / 0.8fr 1fr",
	alignItems: "center",

	"& > div:nth-of-type(odd)": {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		minWidth: "250px",
	},
	"& > div:nth-of-type(odd) > *": {
		margin: "5px 8%",
	},
	"& > div > div:nth-of-type(even)": {
		color: "#1B3764",

		display: "flex",
		alignItems: "center",
	},
	"& > div > div:nth-of-type(even) > p": {
		lineHeight: "26px",
		fontSize: "large",
	},
	"& > div > p:nth-of-type(even)": {
		lineHeight: "28px",
		fontFamily: "Inter",
	},

	"& .circleBlock": {
		display: "flex",
	},
	"& .circleBlock > [class ^= circle]": {
		width: "20px",
		height: "20px",
		borderRadius: "50%",
		backgroundColor: "#FFCA42",
		margin: "5px 5px",
		border: "1px solid #FFCA42",
	},
	"& .circleBlock > [class ^= circle]:nth-of-type(5)": {
		background: "linear-gradient(270deg, rgb(255, 255, 255) 50%, rgb(255, 202, 66) 4%)",
	},

	"& > div > p:nth-of-type(1)": {
		color: "#969AA0",
		fontFamily: "Inter",
		lineHeight: "34px",
	},

	"& > div:nth-of-type(even)": {
		maxHeight: "700px",
		maxWidth: "640px",
		display: "grid",
		gridTemplate: " 1fr 1fr / 1fr 1fr",
		gridTemplateAreas: '"A B""C B"',
		gridGap: "30px 30px",
		alignItems: "center",
	},

	"& > div:nth-of-type(even) > div": {
		backgroundColor: "#1B3764",
		maxWidth: "300px",
		maxHeight: "400px",
	},

	"& > div:nth-of-type(even) > div:nth-of-type(1)": {
		gridArea: "A",
	},
	"& > div:nth-of-type(even) > div:nth-of-type(2)": {
		gridArea: "C",
	},
	"& > div:nth-of-type(even) > div:nth-of-type(3)": {
		gridArea: "B",
	},
});

const titleStyle = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
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

export default function Main(): JSX.Element {
	const dispatch = useAppDispatch();
	const select = useAppSelector((state) => state.listCommentsReducer.listComments);
	// const [curBlockElements, setCurBlockElements] = useState({ left: 0, right: 1 });

	useEffect(() => {
		dispatch(fetchComments("https://wartkert.github.io/json/book_store/comment.json"));
	}, []);

	return (
		<div css={P7MainStyle}>
			<div>
				<Title css={titleStyle} classtextblock={"text"} classborderblock={"border"}>
					Words From Our Readers
				</Title>
				<p>
					We believe that boolstores are essential to a healthy culture. They're where authors can connect with readers, where we
					discover new writers, where children ger hooked on the thrill of reading that can last a lifetime.
				</p>
				<div>
					<Circle number={5} className={"circleBlock"} />
					<p>(4.8/5)</p>
				</div>
				<p>Overall Customer Ratings</p>
			</div>

			<div>
				{select ? (
					typeof select === "string" ? (
						<p>Error loading</p>
					) : (
						select.map((elem, indx) => {
							return (
								<BlockComment
									key={elem.id}
									data={{
										image: `https://wartkert.github.io/json/${elem.image}`,
										name: elem.name,
										evaluation: elem.evaluation,
										text: elem.text,
										comment: elem.comment,
									}}
								/>
							);
						})
					)
				) : (
					<p>No loading!!!</p>
				)}
			</div>
		</div>
	);
}

type BlockCommentPropsType = {
	data: {
		image: string;
		name: string;
		evaluation: number;
		text: string;
		comment: string;
	};
};

const BlockCommentStyle = css({
	display: "flex",
	flexDirection: "column",
	padding: "10px",
	fontFamily: "Cardo",
	width: "100%",
	alignItems: "flex-start",

	"& div": {
		display: "flex",
		width: "100%",
	},
	"& div > div": {
		display: "flex",
		flexDirection: "column",
		margin: "5px 10px",
	},
	"& div > div > p": {
		display: "flex",
		flexDirection: "column",
		lineHeight: "29px",
		fontFamily: "Cardo",
		color: "white",
	},
	"& div > div > .eval": {
		display: "flex",
		flexDirection: "row",
		margin: "0px",
	},
	"& h3": {
		lineHeight: "33px",
		color: "white",
		fontFamily: "Cardo",
	},
	"& p": {
		lineHeight: "29px",
		fontFamily: "Inter",
		color: "#B4C7E7",
	},
});

const BlockCircleStyle = css({
	display: "flex",
	flexDirection: "row",

	"& [class ^= circle]": {
		width: "20px",
		height: "20px",
		borderRadius: "50%",
		backgroundColor: "#FFCA42",
		margin: "5px 5px",
		border: "1px solid #FFCA42",
	},
});

function BlockComment(props: BlockCommentPropsType): JSX.Element {
	return (
		<div css={BlockCommentStyle}>
			<div>
				<img src={props.data.image} />
				<div>
					<p>{props.data.name}</p>
					<Circle number={props.data.evaluation} className={"eval"} css={BlockCircleStyle} />
				</div>
			</div>
			<h3>{props.data.text}</h3>
			<p>{props.data.comment}</p>
		</div>
	);
}
