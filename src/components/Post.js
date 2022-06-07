import React, { useState, useEffect } from "react";
import { Col, FormControl, Spinner, Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPostDataAsync } from "../redux/slice/data";
import PostList from "../components/PostList";

function Posts(props) {
	const data = useSelector((state) => state.Data);
	const dispatch = useDispatch();
	const [dataPost, setDataPost] = useState([]);
	const [page, setPage] = useState(1);

	let limit = 10;

	if (data.posts.length > 0 && dataPost.length <= 0) {
		let tempData = [];

		for (let i = 0; i < limit; i++) {
			tempData.push(data.posts[i]);
		}

		setDataPost(tempData);
	}

	const changeData = (index) => {
		let tempData = [];
		for (let i = (index - 1) * 10; i < limit * index; i++) {
			tempData.push(data.posts[i]);
		}

		setPage(index);
		setDataPost(tempData);
	};

	useEffect(() => {
		dispatch(getPostDataAsync());
	}, [dispatch]);

	return (
		<>
			<Col xs="11" md="7" lg="6">
				<div className="input-group position-relative">
					<FormControl
						type="search"
						placeholder="Search"
						className="text-center border-0 rounded-pill"
						style={{ backgroundColor: "#eff3f4" }}
						aria-label="Search"
					/>
					<button
						className="border-0 rounded-pill rounded-start cursorPointer position-absolute end-0 pt-1 pe-3"
						style={{ backgroundColor: "#eff3f4", zIndex: "100" }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</button>
				</div>
			</Col>
			<Col xs="11" md="7" lg="6">
				{dataPost.length === 0 ? (
					<div className="w-100 text-center mt-5">
						<Spinner variant="primary" animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>
				) : (
					dataPost.map((item, index) => (
						<PostList key={index} data={item} setViewContent={props.setViewContent} setPostId={props.setPostId} />
					))
				)}
			</Col>
			<Col xs="11" md="7" lg="6">
				<div className="d-flex justify-content-end me-5 mt-3">
					<Pagination>
						<Pagination.Prev
							onClick={() => {
								setPage(page - 1);
								changeData(page - 1);
							}}
							className="customPagination"
							disabled={page === 1}
						/>
						{dataPost.length === 0 ? (
							<></>
						) : (
							dataPost.map((item, index) => {
								return (
									<Pagination.Item
										key={index}
										onClick={() => {
											setPage(index + 1);
											changeData(index + 1);
										}}
										className={page === index + 1 ? `customPagination actv` : `customPagination`}
									>
										{index + 1}
									</Pagination.Item>
								);
							})
						)}
						<Pagination.Next
							onClick={() => {
								setPage(page + 1);
								changeData(page + 1);
							}}
							className="customPagination"
							disabled={page === data.posts.length / 10}
						/>
					</Pagination>
				</div>
			</Col>
		</>
	);
}

export default Posts;
