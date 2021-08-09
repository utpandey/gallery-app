import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormControl, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';

import { epass } from '../utils/epassApi';

function VisitorDetails({ showModal, setModal }) {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ purpose, setPurpose ] = useState('');
	const [ vaccinated, setVaccinated ] = useState(false);
	const [ gender, setGender ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ inTime, setinTime ] = useState({
		hr: 0,
		min: 0
	});

	async function submitForm(event) {
		event.preventDefault();
		console.log(inTime.hr + inTime.min);
		epass({ firstName, lastName, email, purpose, vaccinated, gender, address, inTime, phone });
		setEmail('');
		setFirstName('');
		setLastName('');
		setPurpose('');
		setVaccinated('');
		setGender(false);
		setAddress('');
		setinTime('');
		setPhone('');
	}

	const onChangeGenderValue = (event) => {
		setGender(event.target.value);
	};
	const onChangeVaccineValue = (event) => {
		console.log(event.target.value);
		setVaccinated(event.target.value);
	};

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
								<h1 className="modalBox__cont__title">
									Enter details below to create a visitor's pass
								</h1>
								<div className="modalBox__cont__inputCont">
									<input
										type="text"
										name="firstname"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="firstname"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="FirstName"
									/>
								</div>
								<div className="modalBox__cont__inputCont">
									<input
										type="text"
										name="lastname"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="lastname"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="Last Name"
									/>
								</div>
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
										name="purpose"
										value={purpose}
										onChange={(e) => setPurpose(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="purpose"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="Purpose"
									/>
								</div>
								<div className="modalBox__cont__genderCont" onChange={onChangeVaccineValue}>
									<label className="modalBox__cont__genderCont__label">Vaccinated ?</label>
									<input
										className="modalBox__cont__genderCont__input"
										type="radio"
										value={true}
										name="vaccinated"
									/>
									<label className="modalBox__cont__genderCont__label">True</label>
									<input
										className="modalBox__cont__genderCont__input"
										type="radio"
										value={false}
										name="vaccinated"
									/>
									<label className="modalBox__cont__genderCont__label">False</label>
								</div>
								<div className="modalBox__cont__genderCont" onChange={onChangeGenderValue}>
									<input
										className="modalBox__cont__genderCont__input"
										type="radio"
										value="Male"
										name="gender"
									/>
									<label className="modalBox__cont__genderCont__label">Male</label>
									<input
										className="modalBox__cont__genderCont__input"
										type="radio"
										value="Female"
										name="gender"
									/>
									<label className="modalBox__cont__genderCont__label">Female</label>
									<input
										className="modalBox__cont__genderCont__input"
										type="radio"
										value="Other"
										name="gender"
									/>
									<label className="modalBox__cont__genderCont__label">Other</label>
								</div>
								<div className="modalBox__cont__inputCont">
									<input
										type="address"
										name="address"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="address"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="Address"
									/>
								</div>
								<label className="modalBox__cont__genderCont__label">Check-in time</label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text>hr: </InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl readOnly={true} value={inTime.hr} />
									<DropdownButton
										className={'custom-dropdown'}
										as={InputGroup.Append}
										variant="outline-primary"
										title="Select Hour"
									>
										{new Array(24).fill(0).map((e, i) => {
											return (
												<Dropdown.Item
													onSelect={() => {
														setinTime({ ...inTime, hr: i });
													}}
												>
													{i}
												</Dropdown.Item>
											);
										})}
									</DropdownButton>
								</InputGroup>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text>min: </InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl readOnly={true} value={inTime.min} />
									<DropdownButton
										className={'custom-dropdown'}
										as={InputGroup.Append}
										variant="outline-primary"
										title="Select Minute"
									>
										{new Array(60).fill(0).map((e, i) => {
											return (
												<Dropdown.Item
													onSelect={() => {
														setinTime({ ...inTime, min: i });
													}}
												>
													{i}
												</Dropdown.Item>
											);
										})}
									</DropdownButton>
								</InputGroup>
								<div className="modalBox__cont__inputCont">
									<input
										type="text"
										name="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="phone"
										className="modalBox__cont__inputCont__input"
										required={true}
										placeholder="Contact No."
									/>
								</div>
								<input type="submit" value="Submit" className="modalBox__cont__submitBtn" />
							</form>
							{/* <VisitorEntry /> */}
						</motion.div>
					</motion.div>
				</React.Fragment>
			) : null}
		</AnimatePresence>
	);
}

export default VisitorDetails;
