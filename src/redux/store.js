import { configureStore } from "@reduxjs/toolkit";
import Data from "./slice/data";

export default configureStore({
	reducer: {
		Data,
	},
});
