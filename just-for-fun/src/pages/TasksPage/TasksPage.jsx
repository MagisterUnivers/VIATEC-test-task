import React from 'react';

const TasksPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h2>Слева</h2>
					{/* Content here */}
				</div>
				<div className="col-md-1 divider">{/* Vertical Line */}</div>

				<div className="col-md-5">
					<h2>Справа</h2>
					{/* Content here */}
				</div>
			</div>
		</div>
	);
};

export default TasksPage;
