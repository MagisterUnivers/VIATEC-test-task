import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import {
	removeTask,
	updateStatusByCheckbox
} from '../../redux/Tasks/TasksSlice';
import { openModal } from '../../redux/Modal/ModalSlice';

const TaskCard = ({ task, name, status, id }) => {
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(status === 'true');

	const handleDelete = (taskId) => {
		dispatch(removeTask(taskId));
	};

	return (
		<li className="border p-3 task-card">
			<h3 style={{ wordWrap: 'break-word' }}>{name}</h3>
			<p style={{ wordWrap: 'break-word' }}>{task}</p>
			<div style={{ display: 'flex', alignItems: 'center' }}>
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

				<div className="form-check containerCheckbox">
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

				<div style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {
							dispatch(openModal(id));
						}}
					>
						Update
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						style={{ backgroundColor: 'red' }}
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
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
};

export default TaskCard;
