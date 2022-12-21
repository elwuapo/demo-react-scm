import React, { useContext, useState } from 'react'
import { Context } from './context/Context'


const GrandChildren = () => {
	const { color } = useContext(Context)

	return (
		<div style={{color: color}}>hola</div>
	)
}

const Children = () => {
	const { setTitle } = useContext(Context)

	return (
		<div>
			<button onClick={() => setTitle('titulo actualizado')}>click update title</button>

			<GrandChildren />
		</div>
	)
}


const App = () => {
	const [title, setTitle] = useState('titulo')

	return (
		<div>
			<Context.Provider value={{color: 'green', setTitle}}>
				<h1>{title}</h1>

				<Children setTitle={setTitle}/>
			</Context.Provider>
		</div>
	)
}

export { 
	App
}