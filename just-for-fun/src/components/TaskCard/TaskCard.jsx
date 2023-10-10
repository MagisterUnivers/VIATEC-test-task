import React from 'react';

const TaskCard = ({ task, status }) => {
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
			</div>
		</li>
	);
};

export default TaskCard;
