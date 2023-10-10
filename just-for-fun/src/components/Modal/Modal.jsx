import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskStatus } from '../../redux/Tasks/TasksSlice';
import { selectAllTasks, selectModalState } from '../../redux/selectors';
import { openModal } from '../../redux/Modal/ModalSlice';
import { nanoid } from 'nanoid';

export const MyModal = ({ setActive }) => {
	const [formData, setFormData] = useState({
		id: nanoid(),
		name: '',
		status: 'false',
		task: ''
	});
	const dispatch = useDispatch();
	const modal = useSelector(selectModalState);
	const { tasks } = useSelector(selectAllTasks);

	const { isModalOpen, id } = modal;
	const { task, status, name } =
		id !== undefined ? tasks.find((el) => el.id === id) : '';

	useEffect(() => {
		if (task !== undefined) setFormData({ status, task, name, id: nanoid() });
	}, [status, task, name]);

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
		setFormData({ id: nanoid(), name: '', status: 'false', task: '' });
	};

	return (
		<Modal show={isModalOpen} onHide={() => dispatch(openModal())}>
			<Modal.Header closeButton>
				<Modal.Title>Task manager</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="status" style={{ marginBottom: '5px' }}>
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

					<Form.Group controlId="task" style={{ marginBottom: '5px' }}>
						<Form.Label>Task name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							required={true}
							placeholder="Task name here"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId="task" style={{ marginBottom: '5px' }}>
						<Form.Label>Task description</Form.Label>
						<Form.Control
							type="text"
							name="task"
							required={true}
							placeholder="Task description here"
							value={formData.task}
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Modal.Footer style={{ borderTop: 'none' }}>
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
