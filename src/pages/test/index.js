import {React, useState, useCallback, useEffect} from  'react'
import produce from 'immer'

const  Test  = () => {

	const [numberA, setNumberA] = useState({count:1})
	const [numberB, setNumberB] = useState({count:1})
	const [numberC, setNumberC] = useState({count:1})

	// const updateA = setNumberA(
	// 		produce(draft => {
	// 			draft.count += 1
	// 	})
	// )

	const updateB = ()=>{
		setNumberB(
			produce(draft => {
				draft.count += 1
			})
		)
	}

	const updateC = useCallback( ()=>{
		setNumberC(
			produce(draft => {
				draft.count += 1
			})
		)
	}
	,[])

	// useEffect(()=>{
	// 	console.log('A')
	// },[updateA])

	useEffect(()=>{
		console.log('B')
	},[updateB])

	useEffect(()=>{
		console.log('C')
	},[updateC])
	return (
		<div>
			{/* {numberA.count}<br></br>		
			<button onClick={()=>updateA()}>A버튼</button><br></br>	 */}

			{numberB.count}<br></br>		
			<button onClick={()=>updateB()}>B버튼</button><br></br>		

			{numberC.count}<br></br>		
			<button onClick={()=>updateC()}>C버튼</button>				
		</div>
	)
}
export  default  Test