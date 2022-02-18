import React from 'react'

export const Practice = ({ getItems_useCallback, getItems_useMemo }) => {

  const result_useCallback= getItems_useCallback

  const result_useMemo= getItems_useMemo
  
  
  return (
    <div>useMemo_useCallback
      <h3>callback : {result_useCallback()}</h3>
      <h3>memo : {result_useMemo}</h3>
    </div>
    
  )
}

