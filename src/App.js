import logo from './logo.svg';
import './App.css';
import FormLogin from './components/FormLogin/FormLogin';
import FormRegister from './components/FormRegister/FormRegister';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<FormLogin />} />
				<Route path='/register' element={<FormRegister />} />
				<Route path='/home' element={<Home />} />
				<Route path='*' element={<FormLogin />} />
			</Routes>
		</BrowserRouter>
		
	)
}

export default App;
