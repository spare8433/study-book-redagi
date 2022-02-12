import { useState, useCallback, useMemo } from "react"
import { UseMemoUseCallback }  from "./useMemo_useCallback"


const Ch8_hook = () => {
  const [number, setNumber] = useState(1)
  
  const getItems_useCallback = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const getItems_useMemo = useMemo(() => {
    return [number, number + 1, number + 2]
  }, [number])

  // const handleClick = (e) => {
  //   setNumber(e.target.value);
  // }

  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div>
      <input value={number} onChange={handleChange}></input>
      {/* <button onClick={handleClick}></button> */}

      <UseMemoUseCallback getItems_useCallback={getItems_useCallback} getItems_useMemo={getItems_useMemo} />
    </div>
  )
}
export default Ch8_hook;