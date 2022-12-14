import { Button, Card, Container, Row,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RenderPost from "../../features/Render/RenderPost";

const Home = () => {
    return (
        <Container>
          <Row className="justify-content-between col-12">
            <Card.Title className="col-md-auto fs-2">
              All posts: 
            </Card.Title>
            <NavLink to="/post/add" className={"col-md-auto"}>
              <Button variant="outline-info" className="mb-4">Add Post</Button>
            </NavLink>
          </Row>
          <RenderPost />
        </Container>
    );
};

export default Home;