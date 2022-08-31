import React, { Fragment, useRef, useEffect, useState, Suspense, SyntheticEvent } from "react";
import { HashRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";
// import "./App.css";
import P1_main from "./app/components/page1/P1_main";

type RouteParamsType = {
	routeid: string;
};

type AppPropsType = {
	listElements: React.LazyExoticComponent<React.FC<{}>>[];
};

function App(props: AppPropsType): JSX.Element {
	var pause = false;
	console.log("New state");

	const [isFetching, setFetching] = useState(true);
	const [currentPage, setCurrentPage] = useState(0);
	// useEffect(() => {
	// 	debugger;
	// 	window.scrollTo(0, 0);
	// }, []);

	useEffect(() => {
		console.log("Add Event");
		const handlerWheel = (event: Event) => {
			if (pause && currentPage && !isFetching && currentPage < props.listElements.length) {
				const ev = (event.target as any as { scrollingElement: { scrollHeight: number; scrollTop: number; clientHeight: number } })
					.scrollingElement;
				let scrollPos = ev.scrollHeight - (ev.clientHeight + ev.scrollTop);
				if (scrollPos < 20) {
					setFetching(true);
					console.log("Fetching");
				}
			} else pause = true;
		};
		document.addEventListener("scroll", handlerWheel);
		console.log("Change Event", isFetching);
		if (isFetching) {
			console.log("Goto = ");
			setCurrentPage((currentPage) => ++currentPage);
			setFetching(false);
		}
		return () => {
			console.log("Remove Event");
			document.removeEventListener("scroll", handlerWheel);
		};
	}, [isFetching]);

	return (
		<Fragment>
			{currentPage
				? props.listElements
						.filter((_, idx) => {
							console.log("Map");
							return idx < currentPage;
						})
						.map((Elem, idx) => (
							<Fragment key={`${currentPage} ${idx}`}>
								<Elem />
							</Fragment>
						))
				: null}
			{/* <P1_main /> */}
		</Fragment>
	);
}

export default App;
type sdf = {
	elems: JSX.Element;
};
