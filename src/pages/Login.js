import {Form, Button, Container, Row, Col, InputGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {login} from "../reducers/AuthReducer";
import { useEffect, useState } from "react";
import {FaUserAlt} from "react-icons/fa";
import {RiLockPasswordLine} from "react-icons/ri";
import logo from "../assets/Yuvaa_Logo.png";


const Login = ()=>{

    let navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loginUsername = useSelector(state => state.user.email);
    const loginPassword = useSelector(state => state.user.password);

    const dispatch = useDispatch();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showError, setShowError] = useState(false);


    useEffect(()=>{
        console.log(isAuthenticated)
    })


    const submitHandler = ()=>{
        if(username === loginUsername && password === loginPassword){
            setShowError(false);
            dispatch(login());
            navigate("/dashboard", {replace:true});
        }else{
            setShowError(true);
        }
    }


    return(
        <Container className="text-center">

            <div className="p-5 top-stats-counter-box login">
                <div className="mb-5" >
                    <img src={logo} alt="Logo" style={{width:"100px", height:"100px"}}/>
                    <hr className="mt-4"/>
                    <p className="p-msg">Enter details to login</p>
                    {showError ? <p className="p-err">E-Mail or Password entered is wrong, Please check and enter again</p> : <p></p>}
                    
                </div>
                <InputGroup className="mb-3">
                <InputGroup.Text><FaUserAlt/></InputGroup.Text>
                <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(event)=>{setUsername(event.target.value)}}
                    />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text><RiLockPasswordLine/></InputGroup.Text>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                    />
            </InputGroup>


                
                <div>
                    <Button style={{width:"100px"}} variant="primary" onClick={submitHandler}>Log In</Button>
                </div>
            </div>
           
        </Container>
    )
}


export default Login;