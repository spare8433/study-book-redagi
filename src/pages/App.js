import './App.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

const Ch8Hook = lazy(() => import('./ch8_hook'));
 

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>                            
            <Route path="/" element={<Ch8Hook />} />
          </Routes>
        </Suspense>   
      </Router>   
    </div>
  );
}

export default App;
