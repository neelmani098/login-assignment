import {Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux";

const MainRoutes = ()=>{

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    let redirectComponent = isAuthenticated ? <Dashboard/> : <Login/>


    return(
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route exact path="/" element={redirectComponent}/>
        </Routes>
    )
}

export default MainRoutes;