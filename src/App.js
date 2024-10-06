import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Login';
import RegistrationPage from './Pages/Registration';
import Task1 from './Pages/Task1';
import Movie from './Pages/Task2';
import HomePage from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<RegistrationPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/task1" element={<Task1/>} />
        <Route path="/task2" element={<Movie/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
