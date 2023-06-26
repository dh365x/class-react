import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={darkTheme}>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
