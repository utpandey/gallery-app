import React from 'react';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './redux/store';
import { getVisitors } from './utils/epassApi';
import { getAllEmployee } from './utils/employeeApi';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Visitor from './pages/Visitor';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Employee from './pages/Employee';
import HomePage from './pages/HomePage';

function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
const isAuthenticated = true;
  React.useEffect(() => {
	  getVisitors();
	  getAllEmployee();
  },[])
	return (
		<Router>
			{/* {isAuthenticated ? <Header /> : null} */}
			<AnimatePresence exitBeforeEnter={true}>
				<Switch>
					<Route exact={true} path="/">
						{isAuthenticated ? <Dashboard /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/signin">
						{isAuthenticated ? <Redirect to="/admin" /> : <Signin />}
					</Route>
					<Route exact={true} path="/signup">
                {isAuthenticated ? <Redirect to="/admin" /> : <Signup />}
              </Route>
					<Route exact={true} path="/admin">
						{isAuthenticated ? <Dashboard /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/home">
						{isAuthenticated ? <HomePage /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/admin/visitor">
						{isAuthenticated ? <Visitor /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/admin/employee">
						{isAuthenticated ? <Employee /> : <Redirect to="/signin" />}
					</Route>
				</Switch>
			</AnimatePresence>
		</Router>
	);
}
const AppWrapper = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
};

export default AppWrapper;
