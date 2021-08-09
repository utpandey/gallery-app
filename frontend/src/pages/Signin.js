import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import md5 from 'md5';

import { LOGIN } from '../redux/reducers/authReducer';
import { EMAILERROR, PASSERROR } from '../redux/reducers/errorReducer';
import { signIn } from '../utils/authApi';

// import Snackbar from '../components/Snackbar'
import signin1 from '../assets/signin1.png';
import signin2 from '../assets/signin2.png';

const Signin = (props) => {
	const dispatch = useDispatch();
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState({
		isError: false,
		errorMessage: ''
	});
	const [ { email, password }, setCredentials ] = useState({
		email: '',
		password: ''
	});

	const login = () => {
		let valid_data = true;
		dispatch(EMAILERROR({ isErrors: false, errorMessage: '' }));
		dispatch(PASSERROR({ isErrors: false, errorMessage: '' }));
		if (email === '') {
			dispatch(EMAILERROR({ isErrors: true, errorMessage: 'Required!' }));
			valid_data = false;
		}
		if (password === '') {
			dispatch(PASSERROR({ isErrors: true, errorMessage: 'Required!' }));

			//  setErrors({...{username_error},...{email_error},password_error: 'Required!' });
			valid_data = false;
		}
		// setUpdate(true);

		// if (valid_data) {
		// 	setProgress(true);
		// }

		if (valid_data) {
			const loginData = {
				email,
				password
			};
			signIn(loginData, props);
			// setProgress(false);
		}
	};

	return (
		<div className="signup__cont">
			{/* {error.isError && <Snackbar status="error" message={error.errorMessage} clearError={clearError} />} */}
			<div className="signup__cont__left">
				<h1 className="signup__cont__left__title">Sign In</h1>
				<div className="signup__cont__left__inputCont">
					<input
						type="email"
						name="email"
						onChange={(e) => setCredentials({ ...{ password }, email: e.target.value })}
						id="email"
						className="signup__cont__left__inputCont__input"
						required={true}
						placeholder="Email"
					/>
				</div>
				<div className="signup__cont__left__inputCont">
					<input
						type="password"
						name="password"
						onChange={(e) => setCredentials({ ...{ email }, password: e.target.value })}
						id="password"
						className="signup__cont__left__inputCont__input"
						required={true}
						placeholder="Password"
					/>
				</div>
				<button onClick={login} className="signup__cont__left__submitBtn">
					Continue <span>&#10148;</span>
				</button>
			</div>
			<div className="signup__cont__right">
				<img src={signin1} alt="" className="signup__cont__right__img signupImg--1" />
				<img src={signin2} alt="" className="signup__cont__right__img signupImg--2" />
				{/* <img src={ signup3} alt="" className="signup__cont__right__img signupImg--3"/> */}
			</div>
		</div>
	);
};

export default Signin;
