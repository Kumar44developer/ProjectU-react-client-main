import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <Container>
      <hr />
      <Row className="mt-5 mb-5 justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>
          <h4>User</h4>
          <NavLink className="text-muted fw-bold" to="/create">
            Create A User
          </NavLink>
        </Col>
































