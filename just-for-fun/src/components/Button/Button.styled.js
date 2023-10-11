import styled from 'styled-components';

export const StyledButton = styled.button`
	border: none;
	background: none;
	transition: color 0.8s;

	padding-right: var(--bs-navbar-nav-link-padding-x);
	padding-left: var(--bs-navbar-nav-link-padding-x);

	&:hover {
		color: rgb(168, 242, 7);
	}
`;
