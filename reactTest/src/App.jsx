import { Routes, Route } from 'react-router-dom';
import './App.css'
import FormComponent from './components/FormComponent';
import IntegerNumber from './components/IntegerNumber';
import ClockuseEffect from './components/ClockuseEffect';
import Reloj from './components/Reloj';
import Navbar from './components/Navbar';

function App() {
  return (
    <article className='body-container'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Reloj />} />
        <Route path="/3" element={<FormComponent />} />
        <Route path="/5" element={<IntegerNumber />} />
        <Route path="/6" element={<ClockuseEffect />} />
        <Route path="/*" element={<h1>404 Page not Found</h1>} />
      </Routes>
    </article>
  )
}

export default App

