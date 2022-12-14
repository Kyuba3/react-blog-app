import { Button, Card, Container, Nav, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";

const RenderPost = () => {

    const posts = useSelector(getAllPosts); 
    
    return (
        <Container>
          <Row className="d-flex justify-content-between col-12">
            {posts.map(post => (
                <Card key={posts.id} className="mb-4 px-3 py-3 col-4">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text><b>Author: </b>{post.author}</Card.Text>
                    <Card.Text><b>Published: </b>{post.publishedDate}</Card.Text>
                    <Card.Text><b>Description: </b>{post.shortDescription}</Card.Text>
                    <Card.Text><b>Main content: </b>{post.content}</Card.Text>
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

export default RenderPost;