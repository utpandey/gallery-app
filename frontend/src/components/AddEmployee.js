import React,{useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { employeeAdd } from '../utils/employeeApi';

function AddEmployee({ showModal, setModal }) {
    const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	async function submitForm(event) {
		event.preventDefault();
        employeeAdd({ email, password })
        setEmail('');
        setPassword('');
	}
	return (
		<AnimatePresence>
			{showModal ? (
				<React.Fragment>
					<motion.div
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.3
							}
						}}
						exit={{
							opacity: 0,
							transition: {
								delay: 0.3
							}
						}}
						onClick={() => setModal(false)}
						className="modalBox-backdrop"
					/>
					<motion.div
						initial={{
							scale: 0
						}}
						animate={{
							scale: 1,
							transition: {
								duration: 0.3
							}
						}}
						exit={{
							scale: 0,
							transition: {
								delay: 0.3
							}
						}}
						className="modalBox-content-wrapper"
					>
						<motion.div
							className="modalBox-content"
							initial={{
								x: 60,
								opacity: 0
							}}
							animate={{
								x: 0,
								opacity: 1,
								transition: {
									delay: 0.3,
									duration: 0.3
								}
							}}
							exit={{
								x: 60,
								opacity: 0,
								transition: {
									duration: 0.3
								}
							}}
						>
							<form onSubmit={submitForm} className="modalBox__cont">
								<h1 className="modalBox__cont__title">Enter details below to add a new employee</h1>
								<div className="modalBox__cont__inputCont">
									<input
										type="email"
										name="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="email"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="Email ID"
									/>
								</div>
								<div className="modalBox__cont__inputCont">
									<input
										type="text"
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="password"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="Password"
									/>
								</div>
								<input type="submit" value="Submit" className="modalBox__cont__submitBtn" />
							</form>
						</motion.div>
					</motion.div>
				</React.Fragment>
			) : null}
		</AnimatePresence>
	);
}

export default AddEmployee;
