import React, { useEffect, useState } from 'react';
import { MyModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

export const HomePage = () => {
	const [isModalActive, setIsModalActive] = useState(false);

	// useEffect(() => {
	// 	if (isModalActive) {
	// 		document.body.classList.add('modal-open');
	// 	} else {
	// 		document.body.classList.remove('modal-open');
	// 	}
	// }, [isModalActive]);

	return (
		<>
			<Button text="Add task" onClick={() => setIsModalActive(true)} />
			{isModalActive && (
				<MyModal
					isModalActive={isModalActive}
					setActive={setIsModalActive}
				></MyModal>
			)}
		</>
	);
};
