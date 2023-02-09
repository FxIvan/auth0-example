import { Button, Col, Container, Row } from "react-bootstrap"

export const Principal = () =>{
    return(
        <Container fluid>
            <Container>
                <Row className="text-center mt-5">
                    <Col md={5} className="pt-5 m-auto">
                        <Button variant="success" href="/login">Login</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}