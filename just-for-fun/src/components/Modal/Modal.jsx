import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export const MyModal = ({ isModalActive, setActive }) => {
	// Создайте состояние для значений полей формы
	const [formData, setFormData] = useState({
		status: '',
		task: ''
	});

	// Обработчик изменения значения в полях формы
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// Обновите соответствующее значение в состоянии
		setFormData({
			...formData,
			[name]: value
		});
	};

	// Обработчик отправки формы
	const handleSubmit = (e) => {
		e.preventDefault();
		// Здесь вы можете отправить данные из formData, куда внесены значения формы
		console.log(formData);
		// Закройте модальное окно
		setActive(false);
	};

	return (
		<Modal show={isModalActive} onHide={() => setActive(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Task manager</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="status">
						<Form.Label>Status</Form.Label>
						<Form.Control
							as="select"
							name="status"
							value={formData.status}
							onChange={handleInputChange}
						>
							<option value="" disabled>
								Select status | Default status
							</option>
							<option value="completed">Completed</option>
							<option value="notCompleted">Not Completed</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="task">
						<Form.Label>Task description</Form.Label>
						<Form.Control
							type="text"
							name="task"
							placeholder="Task description"
							value={formData.task}
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Modal.Footer>
						<Button variant="secondary" onClick={() => setActive(false)}>
							Close
						</Button>
						<Button variant="primary" type="submit">
							Add task
						</Button>
					</Modal.Footer>
				</Form>
			</Modal.Body>
		</Modal>
	);
};
