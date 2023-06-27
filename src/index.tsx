import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<RecoilRoot>
		<ThemeProvider theme={darkTheme}>
			<HelmetProvider>
				<GlobalStyle />
				<App />
			</HelmetProvider>
		</ThemeProvider>
	</RecoilRoot>
);
