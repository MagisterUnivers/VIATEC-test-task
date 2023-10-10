import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	removeTask,
	updateStatusByCheckbox
} from '../../redux/Tasks/TasksSlice';
import { openModal } from '../../redux/Modal/ModalSlice';
import Notiflix from 'notiflix';

const TaskCard = ({ task, name, status, id }) => {
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(status === 'true');

	const handleDelete = (taskId) => {
		dispatch(removeTask(taskId));
	};

	return (
		<li>
			<h3>{name}</h3>
			<p>{task}</p>
			<div style={{ display: 'flex' }}>
				<p>Status: {status === 'true' ? 'Done' : 'Undone'}</p>
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

				<div className="form-check" style={{ marginLeft: '15px' }}>
					<input
						className="form-check-input"
						type="checkbox"
						id="Checkbox"
						checked={isChecked}
						onChange={() => {
							setIsChecked(!isChecked);
							dispatch(updateStatusByCheckbox(id));
						}}
					/>
					<label className="form-check-label" htmlFor="Checkbox">
						Task done | undone
					</label>
				</div>

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
							Notiflix.Confirm.show(
								'Action Confirmation',
								'Do you really want to delete that task?',
								'Yes',
								'No',
								() => {
									handleDelete(id);
								},
								() => {
									alert('If you say so...');
								},
								{}
							);
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
