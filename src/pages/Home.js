import React from "react";
import Image from "react-bootstrap/Image";
import ImgLogin from "../assets/imgLogin.jpg";
import { Row, Col } from "react-bootstrap";

function Login() {
	return (
		<Row className="justify-content-center">
			<Col xs={10}>
				<Image fluid src={ImgLogin}></Image>
			</Col>
		</Row>
	);
}

export default Login;
