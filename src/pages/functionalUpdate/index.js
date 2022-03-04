import {React, useState, useCallback, useEffect} from  'react'
import produce from 'immer'

const FunctionalUpdate = () => {

	//const [numberA, setNumberA] = useState({count:1})
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
      <p>A 는 state 상태를 변경하고자 직접 메서드 인자에 설정관련 함수를 넣었지만 리랜더링 되는거 마찬가지이므로 무한 랜더링인 걸려 오류가 생긴다.</p><br></br>
      
			
      <p>B 는 한 함수를 정의하고 콜백함수를 인자로 받아 그안에서 state 설정 메서드를 호출하여 함수형 업데이트의 형태를 갖춤</p>		
      {numberB.count}	
			<button onClick={()=>updateB()}>B 버튼</button><br></br><br></br>
			
      <p>C 는 B 의 내용을 useCallback 안에서 사용하여 리랜더링마다 함수가 재정의 되는 일을 막아 최적화함</p>				
      {numberC.count}		
			<button onClick={()=>updateC()}>C버튼</button>
		</div>
	)
}
export default FunctionalUpdate