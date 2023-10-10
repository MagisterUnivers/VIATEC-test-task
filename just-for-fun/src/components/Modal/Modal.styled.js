import styled from 'styled-components';

export const StyledBackdrop = styled.div`
	position: fixed;
	z-index: 100;

	width: 100%;
	height: 100%;
	background-color: var(--black-20);
	top: 0;
	left: 0;

	padding: 16px;
	overflow-y: auto;

	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	pointer-events: none;
	transition: 0.5s;

	&.active {
		opacity: 1;
		pointer-events: all;
		transition: 0.5s;
	}
`;

export const StyledModalBox = styled.div`
	position: relative;

	overflow-y: auto;
	max-height: 100%;

	padding: 64px;
	border-radius: 30px;
	background-color: var(--white);
	transform: scale(0.5);
	transition: transform var(--time-dur-func);

	&::-webkit-scrollbar {
		width: 14px;
	}
	&::-webkit-scrollbar-track {
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		border: 6px solid var(--common);
		background-color: var(--accent);
		border-radius: 20px;
		height: 40px;
	}

	&.active {
		transform: scale(1);
	}
`;

export const StyledModalBoxScroll = styled.div`
	max-height: 100%;
`;

export const StyledCloseBtn = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;

	border: none;
	background-color: inherit;
`;
