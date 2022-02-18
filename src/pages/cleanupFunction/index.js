import {React ,useState, useEffect} from 'react'

 const CleanupFunction = () => {
  const [state,setState]=useState(0);
  const [value,setValue]=useState(0);

  useEffect(()=>{console.log('처음 마운트 될 때만 실행됩니다')},[])

  useEffect(()=>{console.log('랜더링 될 때마다 실행 됩니다')})

  // useEffect(() => {console.log('특정 값이 업데이트 될 때 실행됩니다.')} ,[value])

  useEffect(() => {
    alert('특정 값이 업데이트 될 때 실행됩니다.')
    return ()=> {      
      alert('컴포넌트가 언마운트 되기 전이나 업데이트 직전에 실행됨.')
    }
  } ,[value])

  const handelUpdate = ()=>{
    setState(state+1);
  }

  const handelAddValue = ()=>{
    setValue(value+1);
  }

  const handelSubValue = ()=>{
    setValue(value-1);
  }

  return (    
    <div>CleanupFunction
      <button onClick={handelUpdate}>업데이트하기</button>
      <div>{state} 만큼 업데이트 됨</div>
      
      <button onClick={handelAddValue}>+</button>
      <button onClick={handelSubValue}>-</button>
      <div>value 의 값 {value}</div>
    </div>
  )
}
export default CleanupFunction