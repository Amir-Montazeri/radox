import { GlobalStyles } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './globalStyles';
import { Navbar, Home, Register } from 'pages';

const App = () => {
	return (
		<main>
			<Router>
				<GlobalStyles styles={styles} />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth/'>
						<Route path='login' element={<div>Login</div>} />
						<Route path='register' element={<Register />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
};

export default App;
