import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Link to="1"><li>1. 비슷한 사용용도인 useMemo 와 useCallback 의 차이점</li></Link>
      <Link to="2"><li>1. useEffect 의 cleanup 함수를 알아보자</li></Link>
    </div>
  )
}
export default Home
