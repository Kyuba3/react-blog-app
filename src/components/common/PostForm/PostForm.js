import { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker'
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || "");
    const [author, setAuthor] = useState(props.author || "");
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
    const [shortDescription, setShortDescription] = useState(props.shortDescription || "");
    const [content, setContent] = useState(props.content || "");
    const { register, handleSubmit: validate, formState: { errors }} = useForm();
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [category, setCategory] = useState(props.category || "");

    const handleSubmit = e => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content || publishedDate) {
          action({title, author, publishedDate, shortDescription, content, category});
        }
    };

    return (
        <Form className="col-12 mx-5" onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3 col-3" controlId="title">
                <Form.Label className="d-flex justify-content-start">
                    Title 
                </Form.Label>
                <Form.Control
                  {...register("title", {required: true, minLength: 3})}
                  type="text" 
                  placeholder="Enter a title" 
                  value={title} 
                  onChange={e => setTitle(e.target.value)}
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required (at least 3 characters)</small>}
            </Form.Group>
            
            <Form.Group className="mb-3 col-3" controlId="author">
                <Form.Label className="d-flex justify-content-start">
                    Author 
                </Form.Label>
                <Form.Control
                  {...register("author", {required: true, minLength: 3})}
                  type="text" 
                  placeholder="Enter author" 
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required (at least 3 characters)</small>}
            </Form.Group>

            <Form.Group className="mb-3 col-3" controlId="published">
                <Form.Label className="d-flex justify-content-start">
                    Published 
                </Form.Label>
                <DatePicker
                  selected={publishedDate ? new Date(publishedDate) : new Date()}
                  onChange={(date) => setPublishedDate(date)}
                />
                {dateError && <small className="d-block form-text text-danger mt-2">Choose date.</small>}
            </Form.Group>

            <Form.Group className="mb-3 col-3" controlId="category">
                <Form.Label className="d-flex justify-content-start">
                    Category
                </Form.Label>
                <Form.Select
                    {...register("category", {required: true})}
                    as="select"
                    placeholder="Please select category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                {errors.category && <small className="d-block form-text text-danger mt-2">This field is required </small>}
            </Form.Group>
            
            <Form.Group className="mb-3 col-6" controlId="description">
                <Form.Label className="d-flex justify-content-start">
                    Short description 
                </Form.Label>
                <Form.Control 
                  {...register("shortDescription", {required: true, minLength: 20})}
                  as="textarea"
                  rows={5}
                  placeholder="Enter a short description"
                  value={shortDescription}
                  onChange={e => setShortDescription(e.target.value)} 
                />
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (at least 20 characters)</small>}
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
                  {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <Button type="submit">
                { actionText }
            </Button>
        </Form>
    );
};

export default PostForm