import React from "react";
import { Navbar, Container, Row, Col, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openProfileAction } from "../redux/slice/data";

function NavMain() {
	let navigate = useNavigate();
	const data = useSelector((state) => state.Data);
	const dispatch = useDispatch();

	const popover = (
		<Popover id="popover-basic" className="border-primary">
			<Popover.Body className="cursorPointer" onClick={() => dispatch(openProfileAction())}>
				<strong>Detail Profile</strong>
			</Popover.Body>
		</Popover>
	);

	return (
		<Navbar className="pt-5" style={{ zIndex: "1" }}>
			<Container>
				{/* <Navbar.Brand className="fw-bold h1">Cinta Coding</Navbar.Brand> */}
				<Row className="d-flex justify-content-align-content-around w-100 p-0 m-0">
					<Col xs md className="align-items-center d-flex">
						<h3 className="fw-bold text-nav">Cinta Coding</h3>
					</Col>
					<Col xs="auto" className="d-md-block d-none align-items-center d-flex">
						<div className="fw-bold h5 border-bottom border-primary border-3 px-3 py-2 opacity-50">Post</div>
					</Col>
					<Col xs md className="text-end">
						{data.user.status ? (
							<h3 className="fw-bold text-nav">
								Welcome,
								<OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
									<span className="text-primary"> {data.user.username}</span>
								</OverlayTrigger>
							</h3>
						) : (
							<Button onClick={() => navigate("./login")} className="px-4 rounded-pill ">
								Login
							</Button>
						)}
					</Col>
				</Row>

				{/* <Navbar.Text>
						Signed in as: <a href="#login">Mark Otto</a>
					</Navbar.Text> */}
			</Container>
		</Navbar>
	);
}

export default NavMain;
