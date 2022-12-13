import { Button, Card, Container, Nav, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";

const Render = () => {

    const posts = useSelector(getAllPosts); 
    
    return (
        <Container>
          <Row className="d-flex justify-content-between col-12">
            {posts.map(post => (
                <Card className="mb-4 col-4 px-3 py-3">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text><b>Author: </b>{post.author}</Card.Text>
                    <Card.Text><b>Published: </b>{post.publishedDate}</Card.Text>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Nav>
                        <Nav.Link as={NavLink} to={"/post/" + post.id}>
                            <Button variant="primary" className="col-12 mb-3">Read More</Button>
                        </Nav.Link>
                    </Nav>
                </Card>
            ))}
          </Row>
        </Container>
    );
}

export default Render;