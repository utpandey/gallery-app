import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../redux/reducers/authReducer';

import ui from '../assets/ui.svg';

const Header = (props) => {
	const history = useHistory();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(LOGOUT());
	};
	return (
		<React.Fragment>
			<nav className="navbar__cont">
				<ul className="navbar-nav">
					<li className="logo">
						<div className="nav-link">
							<span className="link-text logo-text ">
								<Link className="title" to={!isAuthenticated ? '/' : '/admin'}>
									Dashboard
								</Link>
							</span>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="angle-double-right"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
							>
								<g className="fa-group">
									<path
										fill="currentColor"
										d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
										className="fa-secondary"
									/>
									<path
										fill="currentColor"
										d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
										className="fa-primary"
									/>
								</g>
							</svg>
						</div>
					</li>

                    <li className="nav-item"
                        onClick={() => history.replace('/admin/employee')}
                    >
						<div className="nav-link logout">
							<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
								<path d="M8,96v26a6.00656,6.00656,0,0,0,6,6H114a6.00656,6.00656,0,0,0,6-6V96A44.06565,44.06565,0,0,0,84.21869,52.78131a32.11963,32.11963,0,0,1-4.99615,3.35986A40.04594,40.04594,0,0,1,116,96v26a2.00261,2.00261,0,0,1-2,2H14a2.00261,2.00261,0,0,1-2-2V96A40.04594,40.04594,0,0,1,48.77747,56.14117a32.11963,32.11963,0,0,1-4.99615-3.35986A44.06565,44.06565,0,0,0,8,96Z" />
								<path d="M92 28A28 28 0 1 0 64 56 28.03145 28.03145 0 0 0 92 28zM64 60a31.89907 31.89907 0 0 1-8.60651-1.18536h-.00018l-5.37866 43.79181a2.00173 2.00173 0 0 0 .958 1.96L62.918 111.71582a1.99855 1.99855 0 0 0 2.04785.00391l12.05469-7.14941a2 2 0 0 0 .96484-1.96387L72.60669 58.81464l-.00037.00012A31.90009 31.90009 0 0 1 64 60z" />
							</svg>
							<span className="link-text">{'\u00A0'}Employee</span>
						</div>
					</li>
                    <li className="nav-item"
                        onClick={() => history.replace('/admin/visitor')}
                    >
						<div className="nav-link logout">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<g data-name="Pointing Person">
									<circle cx="10" cy="2.5" r="2.5" fill="#303c42" />
									<path
										fill="#303c42"
										d="M18.5,6H10A8,8,0,0,0,5.66,7.29,1.47,1.47,0,0,0,5,8.54v7a.5.5,0,0,0,.5.5H7v7.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V10a1,1,0,0,1,1-1h4.5a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,18.5,6Z"
									/>
								</g>
							</svg>
                            <span className="link-text">{'\u00A0'}{'\u00A0'} Visitor</span>
						</div>
					</li>
                    

					<li className="nav-item">
						<div className="nav-link logout" onClick={logout}>
							<svg width="24px" height="24px" viewBox="0 0 24 24" animate={{ scale: '1.5' }}>
								<path
									className="register "
									fill="currentColor"
									d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
								/>
							</svg>
							<span className="link-text">{'\u00A0'}{'\u00A0'}Log-Out</span>
						</div>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default Header;
