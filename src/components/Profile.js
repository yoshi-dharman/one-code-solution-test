import React from "react";
import { Col, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeProfileAction } from "../redux/slice/data";

function Profile(props) {
	const data = useSelector((state) => state.Data);
	const dispatch = useDispatch();

	return (
		<>
			<Col xs="11" md="7" lg="6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-arrow-left cursorPointer"
					viewBox="0 0 16 16"
					onClick={() => {
						props.setViewContent("Post");
						dispatch(closeProfileAction());
					}}
				>
					<path
						fillRule="evenodd"
						d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
					/>
				</svg>
			</Col>
			<Col xs="11" md="7" lg="6">
				<Table borderless className="mt-4 w-auto justify-content-center d-flex">
					<tbody>
						<tr>
							<td className="fw-bold">Username</td>
							<td className="pe-5">:</td>
							<td className="fw-bold">{data.user.username}</td>
						</tr>
						<tr>
							<td className="fw-bold">Email</td>
							<td>:</td>
							<td className="fw-bold">{data.user.email}</td>
						</tr>
						<tr>
							<td className="fw-bold">Address</td>
							<td>:</td>
							<td className="fw-bold">{data.user.address}</td>
						</tr>
						<tr>
							<td className="fw-bold">Phone</td>
							<td>:</td>
							<td className="fw-bold">{data.user.phone}</td>
						</tr>
					</tbody>
				</Table>
			</Col>
		</>
	);
}

export default Profile;
