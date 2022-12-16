import React from 'react'

const Navbar = (props) => {
	return (
		<div>
			{props.children}
			{props.title}
		</div>
	)
}


const App = () => {
	return (
		<div>
			<Navbar title={'titulo'}>
				<h1>Hola mundo</h1>
				<p> soy un hijo</p>
			</Navbar>
		</div>
	)
}

export { 
	App,
	Navbar
}