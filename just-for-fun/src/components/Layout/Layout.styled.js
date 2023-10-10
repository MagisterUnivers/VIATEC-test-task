import styled from 'styled-components';

export const StyledToTopBtn = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;

	transition: transform var(--time-dur-func);

	&:hover,
	&:focus {
		transform: scale(1) rotateY(180deg);
	}
`;
