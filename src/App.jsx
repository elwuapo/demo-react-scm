import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
	const helloEs = 'Hello, world'
	const helloEn = 'Hola mundo'

	const [isEn, setIsEn] = useState(true)
	const [employees, setEmployees] = useState([])

	const buttonChange = <button onClick={() => setIsEn(!isEn)}>cambiar idioma</button>

	const getEmployees = useCallback(async () => {
		axios.get('https://62c5f952134fa108c260aa1b.mockapi.io/employees')
			.then((response) => {
				console.log('entre!')
				setEmployees(response.data)
			}).catch((error) => {
				console.error(error.response)
			})
	}, [])

	useEffect(() => {
		getEmployees()
	}, [getEmployees])

	return (
		<div>
			<h1>
				{ isEn? helloEn: helloEs }
			</h1>

			{buttonChange}

			{ employees.map((employee, index) => 
				<div key={index}>
					position: { index + 1 } <br />
					firstname : {employee.firstname} <br />
					lastname : {employee.lastname} <br />
					email : {employee.email} <br /><br />
				</div>
			)}
		</div>
	)
}

export { App }