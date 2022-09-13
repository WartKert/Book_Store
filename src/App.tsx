/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Fragment, useEffect, useState, Suspense, SyntheticEvent } from "react";

type AppPropsType = {
	listElements: React.LazyExoticComponent<React.FC<{}>>[];
};

const style = css({
	width: "100vw",
	height: "100vh",
	overflowY: "scroll",
});

function App(props: AppPropsType): JSX.Element {
	let isUpdate = false;
	const [currentPage, setCurrentPage] = useState(1);

	const handlerWheel = (event: React.UIEvent<HTMLDivElement>) => {
		if (currentPage < props.listElements.length && !isUpdate) {
			if ((event.type === "wheel" && (event as any as React.WheelEvent).deltaY > 0) || event.type === "scroll") {
				const ev = event.currentTarget;
				let scrollPos = ev.scrollHeight - (ev.clientHeight + ev.scrollTop);
				if (scrollPos < 20) {
					isUpdate = true;
					setCurrentPage((prev) => {
						return prev + 1;
					});
				}
			}
		}
	};

	useEffect(() => {
		isUpdate = false;
	}, [currentPage]);

	return (
		<div onScroll={handlerWheel} onWheel={handlerWheel} css={style}>
			{currentPage
				? props.listElements
						.filter((_, idx) => {
							return idx < currentPage;
						})
						.map((Element, idx) => (
							<Fragment key={`${currentPage} ${idx}`}>
								<Element />
							</Fragment>
						))
				: null}
		</div>
	);
}

export default App;
