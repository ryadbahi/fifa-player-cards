import { Container, Row, Col } from "react-bootstrap";
import PlayersList from "./data/PlayersList";
import "./App.css";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <h1 className="text-center mb-4">FIFA Player Cards</h1>
            <PlayersList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
