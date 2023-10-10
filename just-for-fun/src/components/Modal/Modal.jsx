import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import {
	StyledBackdrop,
	StyledCloseBtn,
	StyledModalBox,
	StyledModalBoxScroll
} from './Modal.styled';

export const Modal = ({ isModalActive, setActive, children }) => {
	useEffect(() => {
		const handleCloseByEsc = (e) => {
			if (e.code !== 'Escape') {
				return;
			}
			setActive(false);
		};

		window.addEventListener('keydown', handleCloseByEsc);

		return () => {
			window.removeEventListener('keydown', handleCloseByEsc);
		};
	}, [setActive]);

	return (
		<StyledBackdrop
			className={isModalActive ? 'active' : ''}
			onClick={() => {
				setActive(false);
			}}
		>
			<StyledModalBoxScroll>
				<StyledModalBox
					className={isModalActive ? 'active' : ''}
					onClick={(e) => e.stopPropagation()}
				>
					<StyledCloseBtn
						type="button"
						onClick={() => {
							setActive(false);
						}}
					>
						{<CgClose size="32" />}
					</StyledCloseBtn>
					{children}
				</StyledModalBox>
			</StyledModalBoxScroll>
		</StyledBackdrop>
	);
};
