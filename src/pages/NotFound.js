import React from "react";
import { Row, Col } from "react-bootstrap";

function NotFound() {
	return (
		<Row className="position-absolute h-100 w-100 top-0 align-content-center">
			<Col className="text-center">
				<h1>Nothing Here...</h1>
			</Col>
		</Row>
	);
}

export default NotFound;
