import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
	width: 100%;
	max-width: 438px;
	min-width: 100px;
`;
export const StyledTitle = styled.h2`
	color: var(--black);
	font-family: 'Roboto', sans-serif;
	font-size: 40px;
	font-weight: 500;
	line-height: 1.2;
	letter-spacing: -0.8px;
	margin-bottom: 20px;
`;

export const StyledText = styled.p`
	color: var(--black-80);
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	line-height: 1.4;
	margin-bottom: 40px;
`;

export const StyledInputWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	padding-bottom: 40px;
`;

export const StyledAiOutlineEye = styled(AiOutlineEye)`
	position: absolute;
	right: 24px;
	top: 50%;
	transform: translateY(-50%);
`;
export const StyledAiOutlineEyeInvisible = styled(AiOutlineEyeInvisible)`
	position: absolute;
	right: 24px;
	top: 50%;
	transform: translateY(-50%);
`;

export const StyledInput = styled(Field)`
	display: flex;
	padding: 16px 18px;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
	outline: none;
	border: 1px solid var(--black-10);

	color: var(--black);
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	line-height: 24px;

	&:focus,
	&:hover {
		border: 1px solid var(--accent);
	}
	&.valid-border {
		border-color: var(--green);
		outline: none;
		background-color: transparent;
	}
	&.invalid-border {
		border-color: var(--red);
		outline: none;
		background-color: transparent;
	}
`;

export const StyledPasswordDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const StyledTeacherAvatar = styled.img`
	width: 44px;
	height: 44px;
	flex-shrink: 0;
	border-radius: 100px;
`;

export const StyledReasonText = styled.p`
	color: var(--black);
	font-family: 'Roboto', sans-serif;
	font-size: 24px;
	font-weight: 500;
	line-height: 1.33;

	margin-bottom: 21px;
`;

export const StyledRadioInputBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 18px;
	margin-bottom: 41px;
`;

export const StyledRadioInput = styled(Field)`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	position: relative;
`;

export const StyledLabel = styled.label`
	color: var(--black);
	text-align: center;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	line-height: 1.37;
	position: relative;
	cursor: pointer;

	padding-left: 30px;

	&::before {
		content: '';
		position: absolute;
		z-index: 200;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		border: 2px solid var(--accent);
		border-radius: 50%;
	}

	&.checked ${StyledRadioInput}::before {
		background-color: var(--accent);
		border-color: var(--accent);
		content: '';
		width: 10px;
		height: 10px;
		border-radius: 50%;
		position: absolute;
		z-index: 200;
		top: -9.9px;
		left: -24.67px;
	}
`;

export const StyledError = styled.div`
	color: var(--red);
	font-family: 'Roboto', sans-serif;
	font-size: 13px;
	line-height: 1.37;
`;
