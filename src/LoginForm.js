import styled from "styled-components";

const StyledLoginForm = styled.form`
	border: 2px solid ${({ theme }) => theme.borderColor};
	border-radius: 0.5em;
	margin: 2em;
	padding: 2em;
	display: flex;
	flex-direction: column;
`;

const StyledLabel = styled.label`
	margin-inline-end: 1em;
	font-size: 1.25em;
`;

const StyledInput = styled.input`
	margin: 1em;
	padding: 0.5em 1em;
	font-size: 1em;
	font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
		Arial, sans-serif;
`;

const StyledLoginButton = styled.button`
	background-color: ${({ theme }) => theme.btnBgColor};
	color: ${({ theme }) => theme.btnColor};
	margin: 0.75em 1em;
	padding: 0.75em 1.25em;
	font-size: 1.25em;
	font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
		Arial, sans-serif;
	border: none;
	border-radius: 0.5em;
	cursor: pointer;
`;

const LoginForm = () => {
	return (
		<StyledLoginForm>
			<div>
				<StyledLabel htmlFor="username">Username:</StyledLabel>
				<StyledInput type="text" />
			</div>

			<div>
				<StyledLabel htmlFor="password">Password:</StyledLabel>
				<StyledInput type="text" />
			</div>

			<div>
				<StyledLoginButton onClick={(e) => e.preventDefault()}>
					Login
				</StyledLoginButton>
			</div>
			<div>
				<StyledLoginButton onClick={(e) => e.preventDefault()}>
					Forgot Password?
				</StyledLoginButton>
			</div>
		</StyledLoginForm>
	);
};

export default LoginForm;
