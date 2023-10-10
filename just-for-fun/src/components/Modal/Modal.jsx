import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskStatus } from '../../redux/Tasks/TasksSlice';
import { nanoid } from '@reduxjs/toolkit';
import { selectAllTasks, selectModalState } from '../../redux/selectors';
import { openModal } from '../../redux/Modal/ModalSlice';

export const MyModal = ({ isModalActive, setActive, taskId }) => {
	const [formData, setFormData] = useState({
		id: nanoid(),
		status: 'false',
		task: ''
	});
	const dispatch = useDispatch();
	const modal = useSelector(selectModalState);
	const { tasks } = useSelector(selectAllTasks);
	const { isModalOpen, id } = modal;
	const { task, status } =
		id !== undefined ? tasks.find((el) => el.id === id) : '';

	useEffect(() => {
		if (task !== undefined) setFormData({ status, task, id });
	}, [status, task, id]);

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
		id ? dispatch(updateTaskStatus(formData)) : dispatch(addTask(formData));
		dispatch(openModal());
	};

	return (
		<Modal show={isModalOpen} onHide={() => dispatch(openModal())}>
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
						{id ? (
							<Button variant="primary" type="submit">
								Edit task
							</Button>
						) : (
							<Button variant="primary" type="submit">
								Add task
							</Button>
						)}
					</Modal.Footer>
				</Form>
			</Modal.Body>
		</Modal>
	);
};
