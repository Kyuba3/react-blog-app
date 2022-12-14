import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, publishedDate, shortDescription, content}));
        navigate("/");
    }

    return (
        <Form className="col-12 mx-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col-3">
                <Form.Label className="d-flex justify-content-start">
                    Title 
                </Form.Label>
                <Form.Control 
                    type="textarea" 
                    placeholder="Enter a title" 
                    value={title} 
                    required
                    onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3 col-3">
                <Form.Label className="d-flex justify-content-start">
                    Author 
                </Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter author" 
                    value={author}
                    required 
                    onChange={e => setAuthor(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3 col-3">
                <Form.Label className="d-flex justify-content-start">
                    Published 
                </Form.Label>
                <Form.Control 
                    type="date" 
                    placeholder="Enter a date of publish"
                    value={publishedDate}
                    onChange={e => setPublishedDate(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3 col-6">
                <Form.Label className="d-flex justify-content-start">
                    Short description 
                </Form.Label>
                <Form.Control 
                    type="text" 
                    as="textarea"
                    rows={5}
                    placeholder="Enter a short description"
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3 col-6 pb-2">
                <Form.Label className="d-flex justify-content-start">
                    Main content 
                </Form.Label>
                <Form.Control 
                    type="text"
                    as="textarea"
                    rows={8}
                    placeholder="" 
                    value={content}
                    onChange={e => setContent(e.target.value)} 
                    required
                />
            </Form.Group>
            <Button type="submit">
                Add Post
            </Button>
        </Form>
    )
}

export default AddPostForm;