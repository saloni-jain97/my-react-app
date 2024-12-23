import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footers() {
  return (
    <div>
      <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; ANNTraders</Col>
            </Row>
        </Container>
        </footer>
    </div>
  )
}

export default Footers
