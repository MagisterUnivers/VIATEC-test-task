import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { openModal } from '../../redux/Modal/ModalSlice';

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link to="/" className="navbar-brand logo">
					Task Manager
				</Link>

				{/* <button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button> */}

				<div
					className="collapse navbar-collapse"
					id="navbarNav"
					style={{ justifyContent: 'center' }}
				>
					<ul
						className="navbar-nav ml-auto"
						style={{ alignItems: 'center', fontSize: '20px' }}
					>
						<li className="nav-item">
							<Link to="/main/home" className="nav-link link-hover">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/main/tasks" className="nav-link link-hover">
								Tasks
							</Link>
						</li>
						{location.pathname === '/main/tasks' && (
							<li>
								<Button
									text="Add task"
									onClick={() => {
										dispatch(openModal());
									}}
								/>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
