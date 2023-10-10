import React from 'react';
import { TestTasks } from '../../utils/mockData';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

const TasksPage = () => {
	const tasks = useSelector(selectAllTasks);
	console.log(tasks);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h2>Done</h2>

					<ul>
						{tasks.tasks
							.filter((task) => task.status === 'true')
							.map((task) => (
								<TaskCard
									task={task.task}
									status={task.status}
									key={nanoid()}
								/>
							))}
					</ul>
				</div>
				<div className="col-md-1 divider">{/* Vertical Line */}</div>

				<div className="col-md-5">
					<h2>Undone</h2>

					<ul>
						{tasks.tasks
							.filter((task) => task.status === 'false')
							.map((task) => (
								<TaskCard
									task={task.task}
									status={task.status}
									key={nanoid()}
								/>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TasksPage;
