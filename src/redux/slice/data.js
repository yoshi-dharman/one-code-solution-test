import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	user: {
		status: false,
		username: "",
		email: "",
		address: "",
		phone: "",
		open: false,
	},
	posts: [],
	error: false,
};

const data = createSlice({
	name: "data",
	initialState,
	reducers: {
		getUsers(state, action) {
			state.user = {
				status: true,
				username: action.payload.username,
				email: action.payload.email,
				address: `${action.payload.address.street}, ${action.payload.address.suite}, ${action.payload.address.city}, ${action.payload.address.zipcode} `,
				phone: action.payload.phone,
				open: false,
			};
			state.error = false;
		},
		getPosts(state, action) {
			state.posts = action.payload;
		},
		openProfile(state) {
			state.user.open = true;
		},
		closeProfile(state) {
			state.user.open = false;
		},

		noConnection(state) {
			state.error = true;
		},
	},
});

export const openProfileAction = () => (dispatch) => {
	dispatch(openProfile());
};

export const closeProfileAction = () => (dispatch) => {
	dispatch(closeProfile());
};

export const loginActionAsync = (dataLogin, setWarning, navigate) => (dispatch) => {
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((result) => {
			let dataUser = result.data.filter((e) => e.username === dataLogin.username);
			if (dataUser.length <= 0) {
				setWarning({ status: true, text: "Username or Password wrong!" });
			} else {
				dispatch(getUsers(...dataUser));
				setWarning({ status: false, text: "" });
				navigate("../dashboard");
			}
		})
		.catch((err) => {
			console.log("Error : ", err);
			dispatch(noConnection());
		});
};

const getPostComment = (id) => {
	return axios.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments").then((result) => {
		return result.data;
	});
};

const getUserDetail = (id) => {
	return axios.get("https://jsonplaceholder.typicode.com/users/" + id).then((result) => {
		return result.data;
	});
};

export const getPostDataAsync = () => (dispatch) => {
	axios
		.get("https://jsonplaceholder.typicode.com/posts")
		.then(async (result) => {
			const mainData = await Promise.all(
				result.data.map(async (e) => {
					const dataComment = await getPostComment(e.id);
					const dataUser = await getUserDetail(e.userId);
					return { ...e, comment: dataComment, username: dataUser.username };
				})
			);
			dispatch(getPosts(mainData));
		})
		.catch((err) => {
			console.log("Error : ", err);
			dispatch(noConnection());
		});
};

export const { getUsers, getPosts, noConnection, openProfile, closeProfile } = data.actions;

export default data.reducer;
