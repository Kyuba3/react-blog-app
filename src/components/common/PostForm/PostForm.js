import { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker'
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || "");
    const [author, setAuthor] = useState(props.author || "");
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
    const [shortDescription, setShortDescription] = useState(props.shortDescription || "");
    const [content, setContent] = useState(props.content || "");

    const handleSubmit = e => {
        e.preventDefault();
        action({title, author, publishedDate, shortDescription, content})
    };

    return (
        <Form className="col-12 mx-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col-3" controlId="title">
                <Form.Label className="d-flex justify-content-start">
                    Title 
                </Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter a title" 
                    value={title} 
                    required
                    onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
            
            <Form.Group className="mb-3 col-3" controlId="author">
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

            <Form.Group className="mb-3 col-3" controlId="published">
                <Form.Label className="d-flex justify-content-start">
                    Published 
                </Form.Label>
                <DatePicker
                  selected={publishedDate ? new Date(publishedDate) : new Date()}
                  onChange={(date) => setPublishedDate(date)}
                />
            </Form.Group>
            
            <Form.Group className="mb-3 col-6" controlId="description">
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
            
            <Form.Group className="mb-3 col-6 pb-2" controlId="content">
                <Form.Label className="d-flex justify-content-start">
                    Main content 
                </Form.Label>
                  <ReactQuill
                    theme="snow" 
                    value={content}
                    onChange={setContent} 
                    placeholder="Add your main content text"
                  />
            </Form.Group>
            <Button type="submit">
                { actionText }
            </Button>
        </Form>
    );

};

export default PostForm