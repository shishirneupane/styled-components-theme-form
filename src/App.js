import { ThemeProvider } from "styled-components";
import Toggle from "./Toggle";
import LoginForm from "./LoginForm";
import useTheme from "./useTheme";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";

function App() {
	const [theme, toggleTheme, componentMounted] = useTheme();

	if (!componentMounted) {
		return <div />;
	}

	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<Toggle theme={theme} toggleTheme={toggleTheme} />
				<LoginForm />
			</>
		</ThemeProvider>
	);
}

export default App;
