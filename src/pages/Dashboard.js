import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import PostDetail from "../components/PostDetail";
import Profile from "../components/Profile";

function Dashboard() {
	const data = useSelector((state) => state.Data);
	const [viewContent, setViewContent] = useState("Post");
	const [postId, setPostId] = useState(0);

	if (data.user.open === true && viewContent !== "Profile") {
		setViewContent("Profile");
	}

	return (
		<Row className="p-0 m-0 d-flex flex-column align-items-center mt-4">
			{viewContent === "Post" && <Post setViewContent={setViewContent} setPostId={setPostId} />}
			{viewContent === "PostDetail" && <PostDetail postId={postId} setViewContent={setViewContent} />}
			{viewContent === "Profile" && <Profile setViewContent={setViewContent} />}
		</Row>
	);
}

export default Dashboard;
