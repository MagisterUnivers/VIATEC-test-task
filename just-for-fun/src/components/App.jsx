import { Route, Routes } from 'react-router';
import { HomePage } from '../pages/HomePage/HomePage';
import TasksPage from '../pages/TasksPage/TasksPage';
import { PublicRoute } from '../routes/PublicRoute';
import { Layout } from '../components/Layout/Layout';
import WelcomeButtons from './WelcomeButtons/WelcomeButtons';
import '../index.css';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<WelcomeButtons />} />
				<Route path="/main" element={<Layout />}>
					<Route
						path="tasks"
						element={
							<PublicRoute>
								<TasksPage />
							</PublicRoute>
						}
					/>
					<Route
						path="home"
						element={
							<PublicRoute>
								<HomePage />
							</PublicRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
