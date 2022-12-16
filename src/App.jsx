import React, { useState } from 'react'

const Children = (props) => {
	return (
		<div>
			<button onClick={() => props.setTitle('titulo actualizado')}>click update title</button>
		</div>
	)
}


const App = () => {
	const [title, setTitle] = useState('titulo')

	return (
		<div>
			<h1>{title}</h1>

			<Children setTitle={setTitle}/>
		</div>
	)
}

export { 
	App
}