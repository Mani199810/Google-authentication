import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
	const [user, setUser] = useState({ });
	var data=user.name 

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
			console.log('user',user)
			console.log('data',data)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={<Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
					
				/>
				<Route
					exact
					path="/home"
					element={<Home user={user} /> }
				/>
				
			</Routes>
		</div>
	);
}

export default App;
