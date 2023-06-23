import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./Router";
import { useState } from "react";

function App() {
	const [isDark, setIsDark] = useState(false);
	const toggleDark = () => setIsDark((current) => !current);

	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<button onClick={toggleDark}>Toggle Mode</button>
				<Router />
				<ReactQueryDevtools initialIsOpen={true} />
			</ThemeProvider>
		</>
	);
}

export default App;
