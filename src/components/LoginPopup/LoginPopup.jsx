import { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {

	const { url, setToken } = useContext(StoreContext);

	const [currentstate, setCurrentState] = useState("Sign Up");
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const onChangeHandler = (event) => {
  const name = event.target.name;
		const value = event.target.value;

		setData((data) =>({...data, [name] : value}))
	};

	const onLogin = async (event) => {
  event.preventDefault();
  let newUrl = url;

		if (currentstate === "Login") {
			 newUrl +=  "/api/user/login";
		}
		else {
			 newUrl +=  "/api/user/register";
		}

		const response = await axios.post(newUrl, data)

		if(response.data.success) {
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
			setShowLogin(false);
		}
		else {
			alert(response.data.message)
		}
	}

	return (
		<div className="login-popup">
			<form onSubmit={onLogin} className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currentstate}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt=""
					/>
				</div>

				<div className="login-popup-inputs">
					{currentstate === "Login" ? (
						<></>
					) : (
						<input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder="Your Name" required />
					)}

					<input onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder="Your Email" required />
					<input onChange={onChangeHandler} name="password" value={data.password} type="password" placeholder="Password" required />
				</div>

				<button type="submit">
					{currentstate === "Sign Up" ? "Create Account" : "Login"}
				</button>

				<div className="login-popup-condition">
					<input type="checkbox" required />
					<p>By continuing, i agree to the terms of use & privacy policy.</p>
				</div>
				{currentstate === "Login" ? (
					<p>
						Create a New Account?{" "}
						<span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
					</p>
				) : (
					<p>
						Already have an accoun?{" "}
						<span onClick={() => setCurrentState("Login")}>Login Here</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default LoginPopup;
