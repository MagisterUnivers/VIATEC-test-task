import React from 'react';

const TasksPage = () => {
	return (
		<div className="container">
			<div className="row">
				{/* Левая колонка */}
				<div className="col-md-6">
					<h2>Слева</h2>
					{/* Добавьте содержимое левой колонки здесь */}
				</div>
				{/* Разделяющая линия */}
				<div className="col-md-1 divider">{/* Вертикальная линия */}</div>
				{/* Правая колонка */}
				<div className="col-md-5">
					<h2>Справа</h2>
					{/* Добавьте содержимое правой колонки здесь */}
				</div>
			</div>
		</div>
	);
};

export default TasksPage;
