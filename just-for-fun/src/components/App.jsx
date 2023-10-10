import { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { MyModal } from '../components/Modal/Modal';

export const App = () => {
	const [isModalActive, setIsModalActive] = useState(false);

	useEffect(() => {
		if (isModalActive) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
	}, [isModalActive]);

	return (
		<>
			<Button
				text="Add task"
				width="232px"
				height="60px"
				onClick={() => setIsModalActive(true)}
			/>
			{isModalActive && (
				<MyModal
					isModalActive={isModalActive}
					setActive={setIsModalActive}
				></MyModal>
			)}
		</>
	);
};
