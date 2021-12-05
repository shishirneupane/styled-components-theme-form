import { func, string } from "prop-types";

const Toggle = ({ theme, toggleTheme }) => {
	return (
		<button onClick={toggleTheme}>
			<h1>It's a {theme === "light" ? "light" : "dark"} theme!</h1>
		</button>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};

export default Toggle;
