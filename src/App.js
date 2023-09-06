
import './App.css';
import { BrowserRouter as Router , Routes,Route  } from 'react-router-dom';

import SignUpFile from './components/login-signup/SignUpFile';
import LoginFile from './components/login-signup/LoginFile';
import Home from './components/Data/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<SignUpFile />} ></Route>
        <Route path='/login' element={<LoginFile />}></Route>
        <Route path='/home' element={<Home />}></Route>
   
      </Routes>
     </Router>
    </div>
  );
}

export default App;
