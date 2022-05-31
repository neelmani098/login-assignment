import Layout from "./Layout";
import {Form, Row, Col,  Button} from "react-bootstrap";
import { useState } from "react";

const Dashboard = ()=>{

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[aadhar, setAadhar] = useState("");
    const[panCard, setPanCard] = useState("");
    const[city, setCity] = useState("");

    return(
        <Layout>

        <div className="top-stats-counter-box mt-5 dashboard">
            <Row className="mt-5">
                <Col md={2}></Col>
                <Col md={2}>
                    <div>
                        <p className="form-title d-flex align-items-center h--100 mt-3">Name</p>
                    </div>
                </Col>
                <Col>
                    <Form.Group className="has-counter pr">
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            style={{height:"50px"}}
                        />
                    </Form.Group>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="mt-5">
                <Col md={2}></Col>
                <Col md={2}>
                    <div>
                        <p className="form-title d-flex align-items-center h--100 mt-3">E-Mail</p>
                    </div>
                </Col>
                <Col>
                    <Form.Group className="has-counter pr">
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Your E-Mail"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            style={{height:"50px"}}
                        />
                    </Form.Group>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="mt-5">
                <Col md={2}></Col>
                <Col md={2}>
                    <div>
                        <p className="form-title d-flex align-items-center h--100 mt-3">Aadhar Card</p>
                    </div>
                </Col>
                <Col>
                    <Form.Group className="has-counter pr">
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Your Aadhar"
                            value={aadhar}
                            onChange={(e)=>setAadhar(e.target.value)}
                            style={{height:"50px"}}
                        />
                    </Form.Group>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="mt-5">
                <Col md={2}></Col>
                <Col md={2}>
                    <div>
                        <p className="form-title d-flex align-items-center h--100 mt-3">Pan Card</p>
                    </div>
                </Col>
                <Col>
                    <Form.Group className="has-counter pr">
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Your Pan"
                            value={panCard}
                            onChange={(e)=>setPanCard(e.target.value)}
                            style={{height:"50px"}}
                        />
                    </Form.Group>
                </Col>
                <Col md={2}></Col>
            </Row>


            <Row className="mt-5">
                <Col md={2}></Col>
                <Col md={2}>
                    <div>
                        <p className="form-title d-flex align-items-center h--100 mt-3">City</p>
                    </div>
                </Col>
                <Col>
                    <Form.Group className="has-counter pr">
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Your City"
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                            style={{height:"50px"}}
                        />
                    </Form.Group>
                </Col>
                <Col md={2}></Col>
            </Row>

            <div className="mt-5 text-center">
                <Button variant="primary">Submit</Button>
            </div>
            

            </div>
            

            
        </Layout>
    )

}

export default Dashboard;