import './App.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Home = lazy(() => import('./home'));
const UseMemoUseCallback = lazy(() => import('./useMemo_useCallback'));
const CleanupFunction = lazy(() => import('./cleanupFunction'));
const FunctionalUpdate = lazy(() => import('./functionalUpdate'));
const Test = lazy(() => import('./test'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />                                                     
            <Route path="/1" element={<UseMemoUseCallback />} />
            <Route path="/2" element={<CleanupFunction />} />
            <Route path="/3" element={<FunctionalUpdate />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Suspense>   
      </Router>      
    </div>
  );
}

export default App;

