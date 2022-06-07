import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
// import "./styles/reset.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

// Components
import NavMain from "./components/NavMain";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
	const data = useSelector((state) => state.Data);

	return (
		<Container className="vh-100 position-relative">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={null}></Route>
					<Route path="*" element={<NavMain />}></Route>
				</Routes>
				<Routes>
					<Route path="/" element={<Home />}></Route>

					{data.user.status ? (
						<>
							<Route path="login" element={<Navigate to="/dashboard" replace={true} />}></Route>
							<Route path="/dashboard" element={<Dashboard />}></Route>
						</>
					) : (
						<>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/dashboard" element={<Navigate to="/login" replace={true} />}></Route>
						</>
					)}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
