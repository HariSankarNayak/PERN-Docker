import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import EmployeesAPI from "../apis/EmployeesAPI";
export const DetailEmployee = (route) => {
	const [data, setData] = useState('');
	const { employee } = useContext(GlobalContext);
	const currentEmployeeId = route.match.params.id;
	useEffect(() => {
		const employeeId = currentEmployeeId;
		const selectedEmployee =  EmployeesAPI.get("/"+employeeId);
		setData(selectedEmployee)
		// eslint-disable-next-line
	}, [])
	return (
		<Fragment>
			<div className="Employeedetail">
				<div className="container">
					<div>
						<div className="row">
							<div className="col-md-12">
								<Link to="/">
									<small>
										<svg
											width="19"
											height="19"
											viewBox="0 0 19 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.0416 9.5H3.95831"
												stroke="#2F7EF7"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M9.49998 15.0416L3.95831 9.49992L9.49998 3.95825"
												stroke="#2F7EF7"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										Go back
									</small>
								</Link>
							</div>
						</div>
						<div className="listing">
							<div className="row">
								<div className="col-md-12">
									<span>{data && data.address}</span>
									<h4>
										{data && data.name}
									</h4>
									<p>
										{data && data.email}
									</p>
									<br /> <br />
									<p>
										{data && data.dob}
									</p>
									<span>
										<b>{data && data.photo}</b>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
