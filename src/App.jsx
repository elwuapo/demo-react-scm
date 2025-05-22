import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
	const helloEs = "Hello, world";
	const helloEn = "Hola mundo";

	const [isEn, setIsEn] = useState(true);
	const [employees, setEmployees] = useState([]);

	const buttonChange = (
		<button onClick={() => setIsEn(!isEn)}>cambiar idioma</button>
	);

	const getEmployees = useCallback(async () => {
		axios
			.get("https://680d1242c47cb8074d8f7878.mockapi.io/users")
			.then((response) => {
				console.log("entre!");
				setEmployees(response.data);
			})
			.catch((error) => {
				console.error(error.response);
			});
	}, []);

	useEffect(() => {
		getEmployees();
	}, [getEmployees]);

	return (
		<div>
			<h1>{isEn ? helloEn : helloEs}</h1>

			{buttonChange}

			{employees.map((employee, index) => (
				<div key={index}>
					<img
						width={100}
						height={100}
						style={{ borderRadius: 100 }}
						src={employee.avatar}
						alt="avatar"
					/>{" "}
					<br />
					id: {employee.id} <br />
					position: {index + 1} <br />
					firstname : {employee.first_name} <br />
					lastname : {employee.last_name} <br />
					email : {employee.email} <br />
					<br />
				</div>
			))}
		</div>
	);
};

export { App };
