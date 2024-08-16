
import Todoapp from './component/Todoapp'
import Counter from './component/Counter'
import Form from './component/Form';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
// import bootstarp file
import 'bootstrap/dist/css/bootstrap.css';
import Try from './component/Try';
// import Arraymethod from './component/Arraymethod';
import Signupscreen from './auth/Signupscreen';
import Login from './auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from'react-toastify';
import Product from './pages/Product';
const App = () => {
  return (
    <div>
    {/* <Arraymethod/> */}

     <Navbar/>
     
      <Routes>

      <Route path="/" element={<Counter/>} />
      <Route path="/signup" element={<Signupscreen/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/try" element={<Try/>} />
      <Route path="/todoapp" element={<Todoapp/>} /> 
      <Route path='/login' element={<Login/>} />
      <Route path="/product" element={<Product/>} />

      </Routes> 
      <ToastContainer />
    </div>
  )
}
export default App

