import React, { Fragment, Suspense, useEffect } from "react";
import { HashRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { Global, css } from "@emotion/react";
import "./index.css";
import Composition from "./app/components/composition";
import * as constants from "./app/components/constant";

const container = document.getElementById("root")!;
const root = createRoot(container);

const globalStyle = css`

	@font-face {
		font-family: "Inter";
		font-weight: normal;
		font-style: normal;
		src: url("./fonts/Inter/Inter-Regular.ttf") format("truetype");
	}

	* {
		margin: 0px;
		box-sizing: border-box;
	
	body {
		font-family: 'arial',"sans-serif";
	}
`;

const listElements: React.LazyExoticComponent<React.FC<{}>>[] = [];
for (let i = 1; i <= constants.NUM_OF_PAGES; i++) {
	listElements.push(React.lazy(() => import(`./app/components/page${i}/P${i}_main`)));
}
console.log("List ");

function Nav() {
	const na = useNavigate();
	useEffect(() => {
		console.log("Nav");
		na("/1");
	}, []);
	return <></>;
}

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<HashRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/"} element={<App listElements={listElements} />} />
					{/* <Route path={"/:routeid"} element={<App listElements={listElements} />} /> */}
					{/* <Global styles={globalStyle} /> */}
					<Route path='*' element={<p> Error </p>} />
				</Routes>
			</Suspense>
		</HashRouter>
	</Provider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
