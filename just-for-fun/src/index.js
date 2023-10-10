import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { App } from '../src/components/App';
import { BASENAME } from './constants/basename';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<BrowserRouter basename={BASENAME}>
					<App />
				</BrowserRouter>
			</Provider>
		</PersistGate>
	</React.StrictMode>
);
