import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { openModal } from '../../redux/Modal/ModalSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [isModalActive, setIsModalActive] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link to="/" className="navbar-brand">
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
					<ul className="navbar-nav ml-auto" style={{ alignItems: 'center' }}>
						<li className="nav-item">
							<Link to="/main/home" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/main/tasks" className="nav-link">
								Tasks
							</Link>
						</li>
						{location.pathname === '/main/tasks' && (
							<li>
								<Button text="Add task" onClick={() => dispatch(openModal())} />
							</li>
						)}
					</ul>
				</div>
			</div>
			{/* {isModalActive && (
				<MyModal isModalActive={isModalActive} setActive={setIsModalActive} />
			)} */}
		</nav>
	);
};

export default Header;
