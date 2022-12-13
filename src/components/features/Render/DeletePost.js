import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const DeletePost = (props) => {

    return(
        <Modal 
          show={props.show}
          onHide={props.closeModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completly remove this post from the app.
            Are you sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.closeModal}>
                Cancel
            </Button>
            <Button variant="danger" onClick={props.deletePost}>Remove</Button>
          </Modal.Footer>
        </Modal>
    );
};

export default DeletePost;