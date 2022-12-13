import { getPostById } from "../../../redux/postsRedux";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row,} from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { deletePost } from "../../../redux/postsRedux";
import { useState } from "react";
import DeletePost from "../../features/Render/DeletePost";

const Post = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(deletePost(postData.id));
    setModal(false);
  }

  if (modal) {
    return <DeletePost show={modal} closeModal={closeModal} deletePost={deleteCard}></DeletePost>
  }


  if (!postData) {
    return (
      <Navigate to="/" />
    );
  };
  
    
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-between col-md-8">
          <h2>{postData.title}</h2>
          <div>
            <NavLink key={postData.id} to={"/post/edit/" + postData.id}>
              <Button variant="outline-info" className="m-2">Edit</Button>
            </NavLink>
            <Button variant="outline-danger" onClick={openModal}>Delete</Button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col className="col-md-8">
          <p><b>Author: </b>{postData.author}</p>
          <p><b>Published: </b>{postData.publishedDate}</p>
          <p>{postData.content}</p>
        </Col>  
      </Row>
    </Container>
  );
};

export default Post;