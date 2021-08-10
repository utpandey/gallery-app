import React from 'react';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './redux/store';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Picture from './pages/Picture';
import Album from './pages/Album';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
// const isAuthenticated = true;
//   React.useEffect(() => {
//   },[])
	return (
		<Router>
		{/* <motion.div className="container" id="container"> */}
			{/* {isAuthenticated ? <Header /> : null} */}
			<AnimatePresence exitBeforeEnter={true}>
				<Switch>
					<Route exact={true} path="/">
						{isAuthenticated ? <HomePage /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/signin">
						{isAuthenticated ?   <Redirect to="/admin"/> : <Signin /> }
					</Route>
					<Route exact={true} path="/signup">
                {isAuthenticated ?  <Redirect to="/admin" /> : <Signup />  }
              </Route>
					<Route exact={true} path="/picture">
						{isAuthenticated ? <Picture /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/home">
						{isAuthenticated ? <HomePage /> : <Redirect to="/signin" />}
					</Route>
					<Route exact={true} path="/album">
						{isAuthenticated ? <Album /> : <Redirect to="/signin" />}
					</Route>
				</Switch>
			</AnimatePresence>
			{/* </motion.div> */}
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
