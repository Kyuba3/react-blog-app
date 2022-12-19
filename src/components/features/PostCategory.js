import { Card, Container, Row, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByCategory } from "../../redux/categoriesRedux";
import { dateToStr } from "../../utils/dateToStr";
import { Link } from "react-router-dom";


const PostCategory = () => {
    
    const {postCategory} = useParams();
    const posts = useSelector((state) => getPostByCategory(state, postCategory));
    console.log(posts);

    if (posts.length === 0)
      return (
        <div>
          <h1>Category: {postCategory}</h1>
          <p>No posts with this category</p>
        </div>
      );
    
    return (
        <Container>
            <h1 className="d-flex justify-content-center"> Category: {postCategory} </h1>
            <Row className="d-flex justify-content-center">
              {posts.map((post) => (
                <Card key={post.id} className="col-xs-12 col-sm-6 col-lg-4 mt-4">
                  <Card.Body>
                    <Card.Title className="pb-3">{post.title}</Card.Title>
                    <Card.Text>
                        <p><b>Author: </b>{post.author}</p>
                        <p><b>Published: </b>{dateToStr(post.publishedDate)}</p>
                        <p><b>Category: </b>{post.category}</p>
                    </Card.Text>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Button variant="primary" as={Link} to={'/post/' + post.id}>
                        Read more
                    </Button>
                  </Card.Body>  
                </Card>
              ))}
            </Row>
        </Container>
        
    )
}

export default PostCategory;