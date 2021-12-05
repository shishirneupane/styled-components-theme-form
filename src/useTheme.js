import { useEffect, useState } from "react";

export default function useTheme() {
	const [theme, setTheme] = useState("light");
	const [componentMounted, setComponentMounted] = useState(false);

	const toggleTheme = () => {
		if (theme === "light") {
			window.localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			setTheme("light");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		} else {
			if (
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
			) {
				setTheme("dark");
			} else {
				setTheme("light");
				window.localStorage.setItem("theme", "light");
			}
		}
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
}
