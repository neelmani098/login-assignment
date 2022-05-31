import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AiOutlineDashboard} from "react-icons/ai";
import Logo from "../assets/Yuvaa_Logo.png";
import { Link } from "react-router-dom";
import {logout} from "../reducers/AuthReducer";

const Layout = ({children})=>{

    let navigate = useNavigate();

    const userName = useSelector(state => state.user.name);
    const dispatch = useDispatch();


    const logoutClickHandler = ()=>{
        dispatch(logout());
        navigate("/login",{ replace: true });
    }

    return(
        <Container fluid style={{backgroundColor:"#FBFBFB"}} >
            <Row>
                <Col className="p-1 d-flex navbar-top">
                    <div className="p2">
                        <img src={Logo} alt="Logo" className="navbar-top-logo"/>
                    </div>
                    <div className="mt-2 navbar-top-username">
                        {userName}
                    </div>
                    <div className="p-2" style={{position:"absolute",right:"0%"}}>
                        <Button variant="danger" onClick={logoutClickHandler}>Logout</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={2} style={{height:"100vh", backgroundColor:"black", color:"white", position:"fixed"}}>
                    <div className="pt-3 mt-5" style={{marginLeft:"42px"}}>
                        <AiOutlineDashboard/><span> <Link to="/dashboard" style={{textDecoration:"none", color:"white"}}>Dashboard</Link></span>
                    </div>
                </Col>
                <Col>{children}</Col>
            </Row>
        </Container>
    )
}

export default Layout;