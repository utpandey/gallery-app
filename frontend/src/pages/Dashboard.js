import React, { motion } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const visitors = useSelector((state) => state.auth.visitors);
	const employees = useSelector((state) => state.auth.employees);
	return (
		<div className="dashboard__cont">
			<div className="dashboard__cont__headerCont">
				<h1 className="dashboard__cont__headerCont__title">Dashboard</h1>
			</div>
			<div className="dashboard__cont__mainCont">
				<div className="dashboard__cont__mainCont__empCont">
						<div className="dashboard__cont__mainCont__empCont__imgCont__img">
							<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
								<path d="M8,96v26a6.00656,6.00656,0,0,0,6,6H114a6.00656,6.00656,0,0,0,6-6V96A44.06565,44.06565,0,0,0,84.21869,52.78131a32.11963,32.11963,0,0,1-4.99615,3.35986A40.04594,40.04594,0,0,1,116,96v26a2.00261,2.00261,0,0,1-2,2H14a2.00261,2.00261,0,0,1-2-2V96A40.04594,40.04594,0,0,1,48.77747,56.14117a32.11963,32.11963,0,0,1-4.99615-3.35986A44.06565,44.06565,0,0,0,8,96Z" />
								<path d="M92 28A28 28 0 1 0 64 56 28.03145 28.03145 0 0 0 92 28zM64 60a31.89907 31.89907 0 0 1-8.60651-1.18536h-.00018l-5.37866 43.79181a2.00173 2.00173 0 0 0 .958 1.96L62.918 111.71582a1.99855 1.99855 0 0 0 2.04785.00391l12.05469-7.14941a2 2 0 0 0 .96484-1.96387L72.60669 58.81464l-.00037.00012A31.90009 31.90009 0 0 1 64 60z" />
							</svg>
						</div>
					<div className="dashboard__cont__mainCont__empCont__infoCont">
						<h1 className="dashboard__cont__mainCont__empCont__infoCont__header">Employees</h1>
						<h1 className="dashboard__cont__mainCont__empCont__infoCont__body">{employees.length}</h1>
					</div>
                </div>
                <div className="dashboard__cont__mainCont__visitorCont">
						<div className="dashboard__cont__mainCont__visitorCont__imgCont__img">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<g data-name="Pointing Person">
									<circle cx="10" cy="2.5" r="2.5" fill="#303c42" />
									<path
										fill="#303c42"
										d="M18.5,6H10A8,8,0,0,0,5.66,7.29,1.47,1.47,0,0,0,5,8.54v7a.5.5,0,0,0,.5.5H7v7.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V10a1,1,0,0,1,1-1h4.5a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,18.5,6Z"
									/>
								</g>
							</svg>
					</div>
					<div className="dashboard__cont__mainCont__visitorCont__infoCont">
						<h1 className="dashboard__cont__mainCont__visitorCont__infoCont__header">Visitors</h1>
						<h1 className="dashboard__cont__mainCont__visitorCont__infoCont__body">{visitors.length}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
