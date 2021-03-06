import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	ul, ol{
		list-style: none
	}
	a{
		text-decoration: none;
	}
`;
