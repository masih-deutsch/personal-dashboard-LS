import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Diary from './Pages/Diary.jsx';
import ToDo from './Pages/ToDo.jsx';



export default function App() {

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diary' element={<Diary />} />
      <Route path='/todo' element={<ToDo />} />
    </Routes>

  );
}
