import { Button, Card, Container, Row,} from "react-bootstrap";
import Render from "../../features/Render/Render";


const Home = () => {
    return (
        <Container>
          <Row className="justify-content-between col-12">
            <Card.Text className="col-md-auto"><h2>All posts:</h2> </Card.Text>
            <Button variant="outline-info" className="mb-4 col-md-auto">Add Post</Button>
          </Row>
          <Render />
        </Container>
    );
};

export default Home;