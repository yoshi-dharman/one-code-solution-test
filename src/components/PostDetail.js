import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostList from "./PostList";

function PostDetail(props) {
	const data = useSelector((state) => state.Data);
	const [showComment, setShowComment] = useState(false);

	let postData = data.posts.filter((e) => e.id === props.postId);

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
					}}
				>
					<path
						fillRule="evenodd"
						d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
					/>
				</svg>
			</Col>
			<Col xs="11" md="7" lg="6">
				<Col xs={{ span: 9, offset: 3 }}>
					<div className="d-flex justify-content-around me-2 mt-4">
						<div className="w-100 text-user text-post text-muted">{postData[0].title}</div>
					</div>
				</Col>
				<div className="d-flex justify-content-around me-2 mt-4">
					<Col xs={3}>
						<h5 className="fw-bold text-user w-auto text-truncate p-2">{postData[0].username}</h5>
					</Col>
					<Col xs={9}>
						<div className="w-100 text-user text-post text-muted opacity-50">{postData[0].body}</div>
						<div className="mt-2">
							{showComment ? (
								<>
									<Col xs={12}>
										<div className="d-flex justify-content-around me-2 mt-4">
											<div className="w-100 text-user text-post text-muted fw-bold">All Comment</div>
										</div>
									</Col>
									<Col xs="auto">
										{postData[0].comment.map((item, index) => (
											<PostList key={index} comment={true} data={item} />
										))}
									</Col>
								</>
							) : (
								<span
									className="d-flex align-items-center align-content-center text-primary cursorPointer pe-2"
									style={{ width: "fit-content" }}
									onClick={() => {
										setShowComment(true);
									}}
								>
									<Col xs="auto" className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											fill="currentColor"
											className="bi bi-chat text-primary"
											viewBox="0 0 16 16"
										>
											<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
										</svg>
									</Col>
									<Col xs="auto" className="text-user ms-3 ms-md-4 fw-bold">
										{postData[0].comment.length}
									</Col>
								</span>
							)}
						</div>
					</Col>
				</div>
			</Col>
		</>
	);
}

export default PostDetail;
