import { Link } from 'react-router-dom';

const WelcomeButtons = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="text-center">
				<Link to="/main/home" className="btn btn-primary mx-2">
					Go to Home
				</Link>
				<Link to="/main/tasks" className="btn btn-secondary mx-2">
					Go to Tasks
				</Link>
			</div>
		</div>
	);
};

export default WelcomeButtons;
