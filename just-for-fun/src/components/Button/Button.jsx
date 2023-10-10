import { StyledButton } from './Button.styled';

export const Button = ({
	text = 'I am a button',
	ariaLabel = 'button for click',
	marginbottom = '0px',
	margintop = '0px',
	onClick,
	type = 'button',
	width = '0px',
	height = '0px',
	variant,
	icon
}) => {
	return (
		<StyledButton
			type={type}
			aria-label={ariaLabel}
			$marginbottom={marginbottom}
			$margintop={margintop}
			onClick={onClick}
			width={width}
			height={height}
			$variant={variant}
			$icon={icon}
		>
			{icon}
			{text}
		</StyledButton>
	);
};
