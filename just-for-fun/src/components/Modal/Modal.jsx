import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/Tasks/TasksSlice';
import { nanoid } from '@reduxjs/toolkit';

export const MyModal = ({ isModalActive, setActive }) => {
	const [formData, setFormData] = useState({
		id: nanoid(),
		status: '',
		task: ''
	});
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		dispatch(addTask(formData));
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
							<option value={true}>Completed</option>
							<option value={false}>Not Completed</option>
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
