import React from 'react';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { MyModal } from '../../components/Modal/Modal';

const TasksPage = () => {
	const tasks = useSelector(selectAllTasks);
	console.log(tasks);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h2 className="categoryTitle text-success">Completed</h2>

					<ul className="categoryList">
						{tasks.tasks
							.filter((task) => task.status === 'true')
							.map((task) => (
								<TaskCard
									task={task.task}
									name={task.name}
									status={task.status}
									id={task.id}
									key={nanoid()}
								/>
							))}
					</ul>
				</div>
				<div
					className="col-md-1"
					style={{
						border: '3px solid rgb(13,110,253)',
						height: '100vh',
						borderTop: '0'
					}}
				></div>

				<div className="col-md-5">
					<h2 className="categoryTitle text-danger">Not Completed</h2>

					<ul className="categoryList">
						{tasks.tasks
							.filter((task) => task.status === 'false')
							.map((task) => (
								<TaskCard
									task={task.task}
									name={task.name}
									status={task.status}
									id={task.id}
									key={nanoid()}
								/>
							))}
					</ul>
				</div>
			</div>
			<MyModal />
		</div>
	);
};

export default TasksPage;
