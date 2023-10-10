import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../../redux/Tasks/TasksSlice';
import { selectModalState } from '../../redux/selectors';
import { openModal } from '../../redux/Modal/ModalSlice';

const TaskCard = ({ task, status, id }) => {
	const dispatch = useDispatch();
	const modal = useSelector(selectModalState);

	const handleDelete = (taskId) => {
		console.log(taskId);
		dispatch(removeTask(taskId));
	};

	return (
		<li>
			<h3>{task}</h3>
			<div style={{ display: 'flex' }}>
				<p>Status: {status}</p>
				{status === 'true' ? (
					<div
						className="rounded-circle bg-success"
						style={{ width: '8px', height: '8px' }}
					></div>
				) : (
					<div
						className="rounded-circle bg-danger"
						style={{ width: '8px', height: '8px' }}
					></div>
				)}
				<div style={{ marginLeft: 'auto' }}>
					<button
						type="button"
						style={{ border: 'none', background: 'none' }}
						onClick={() => {
							dispatch(openModal(id));
						}}
					>
						Update
					</button>
					<button
						type="button"
						onClick={() => {
							handleDelete(id);
						}}
						style={{ border: 'none', background: 'none' }}
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
};

export default TaskCard;
