import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginActionAsync } from "../redux/slice/data";

function Login() {
	let navigate = useNavigate();
	const data = useSelector((state) => state.Data);
	const dispatch = useDispatch();
	const [dataLogin, setDataLogin] = useState({ username: "", password: "" });
	const [warning, setWarning] = useState({ status: false, text: "" });

	let changeInput = (e) => {
		setDataLogin((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	let loginAction = (e) => {
		e.preventDefault();
		if (dataLogin.username === "" || dataLogin.password === "") {
			setWarning({ status: true, text: "Username or Password cant be empty!" });
		} else if (dataLogin.username !== dataLogin.password) {
			setWarning({ status: true, text: "Username or Password wrong!" });
		} else {
			dispatch(loginActionAsync(dataLogin, setWarning, navigate));
		}
	};

	return (
		<Row className="h-100 w-100 justify-content-center align-content-center p-0 m-0">
			<Col xs={8} md={4} className="text-center mb-5">
				<div className="fw-bold h5 pb-5">Login Page</div>
				<Form method="POST">
					<Form.Group className="mb-4" controlId="username">
						<Form.Control
							className="border-primary rounded-pill text-center"
							type="text"
							placeholder="Username"
							name="username"
							onChange={changeInput}
						/>
					</Form.Group>
					<Form.Group className="mb-4" controlId="password">
						<Form.Control
							className="border-primary rounded-pill text-center"
							type="password"
							placeholder="Password"
							name="password"
							onChange={changeInput}
						/>
						{warning.status ? <div className="text-danger ">{warning.text}</div> : null}
					</Form.Group>
					{data.error ? (
						<Button variant="danger" className="px-4 rounded-pill w-100">
							Connection Error
						</Button>
					) : (
						<Button type="submit" className=" px-4 rounded-pill w-100" onClick={loginAction}>
							Login
						</Button>
					)}
				</Form>
			</Col>
		</Row>
	);
}

export default Login;
