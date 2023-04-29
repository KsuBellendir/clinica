import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './component/Navbar/Navbar';
import Home from './component/Pages/Home';

function App() {
  return (
    <>
    <Router> 
      <NavBar/>
     <Routes>
      <Route path='/'  element={ <Home/> }/>
{/*       <Route path='/science'  element={ <Science/> }/>
      <Route path='/cat'  element={ <Cat/> }/>
      <Route path='/sign-up'  element={ <SignUp/> }/>
      <Route path='/video'  element={ <Video/> }/>
      <Route path='/photo'  element={ <Photo/> }/>
      <Route path='/player'  element={ <Player/> }/>
      <Route path='/music'  element={ <Audio/> }/> */}
    </Routes> 
    </Router>
    </>
  );
}

export default App;
