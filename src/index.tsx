import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import * as constants from "./app/components/constant";

const container = document.getElementById("root")!;
const root = createRoot(container);

const listElements: React.LazyExoticComponent<React.FC<{}>>[] = [];
for (let i = 1; i <= constants.NUM_OF_PAGES; i++) {
	listElements.push(React.lazy(() => import(`./app/components/page${i}/P${i}_main`)));
}

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path={"/"} element={<App listElements={listElements} />} />
						<Route path='*' element={<p> Error </p>} />
					</Routes>
				</Suspense>
			</HashRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
