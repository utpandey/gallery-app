import React from 'react';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './redux/store';
import {getAllImages} from './utils/imageApi';
import { getAlbums } from './utils/albumApi';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Picture from './pages/Picture';
import Album from './pages/Album';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state?.auth?.user?.id);
  React.useEffect(() => {
	getAllImages(userId);
	getAlbums(userId);
},[])
	return (
		<Router>
		{/* <motion.div className="container" id="container"> */}
			{isAuthenticated ? <Header /> : null}
			<AnimatePresence exitBeforeEnter={true}>
				<Switch>
					<Route exact={true} path="/">
						{isAuthenticated ? <HomePage /> : <Redirect to="/signup" />}
					</Route>
					<Route exact={true} path="/signin">
						{isAuthenticated ?   <Redirect to="/"/> : <Signin /> }
					</Route>
					<Route exact={true} path="/signup">
                {isAuthenticated ?  <Redirect to="/" /> : <Signup />  }
              </Route>
					<Route exact={true} path="/pictures">
						{isAuthenticated ? <Picture /> : <Redirect to="/signup" />}
					</Route>
					<Route exact={true} path="/home">
						{isAuthenticated ? <HomePage /> : <Redirect to="/signup" />}
					</Route>
					<Route exact={true} path="/albums">
						{isAuthenticated ? <Album /> : <Redirect to="/signup" />}
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
