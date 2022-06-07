import React from "react";
import { Col } from "react-bootstrap";

function PostList(props) {
	let data = props.data;

	if (props.comment) {
		data = {
			username: props.data.email,
			title: props.data.name,
		};
	}

	return (
		<div className="d-flex justify-content-around me-2 mt-4">
			<Col xs={2}>
				<h5 className="fw-bold text-user w-auto text-truncate p-2">{data.username}</h5>
			</Col>
			<Col xs={10}>
				<div
					className={
						props.comment ? "opacity-50 w-100 text-user text-post text-muted" : "w-100 text-user text-post text-muted"
					}
				>
					{data.title}
				</div>
				<div className="d-flex align-items-center align-content-center text-primary mt-2">
					{!props.comment && (
						<>
							<Col xs="auto" className="">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="17"
									height="17"
									fill="currentColor"
									className="bi bi-chat text-primary"
									viewBox="0 0 16 16"
								>
									<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
								</svg>
							</Col>

							<Col xs="auto" className="text-user ms-3 ms-md-4 fw-bold">
								{data.comment.length}
							</Col>
							<Col
								xs="auto"
								onClick={() => {
									props.setViewContent("PostDetail");
									props.setPostId(data.id);
								}}
								className="text-user ms-4 ms-md-5 fw-bold cursorPointer"
							>
								Detail
							</Col>
						</>
					)}
				</div>
			</Col>
		</div>
	);
}

export default PostList;
