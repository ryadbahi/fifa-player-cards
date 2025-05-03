import { Row, Col } from "react-bootstrap";
import Player from "./Player";
import players from "./Players";

function PlayersList() {
  return (
    <Row className="justify-content-center">
      {players.map((player, index) => (
        <Col
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="mb-4 d-flex justify-content-center"
        >
          <Player {...player} />
        </Col>
      ))}
    </Row>
  );
}

export default PlayersList;
