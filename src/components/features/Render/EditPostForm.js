import PostForm from '../../common/PostForm/PostForm';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPostById, editPost } from '../../../redux/postsRedux';


const EditPostForm = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const postById = useSelector(state => getPostById(state, id));

    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate('/');
    };

    if (!postById) {
        return (
          <Navigate to='/' />
        );
    };
    
    return (
        <>
            <PostForm 
                action={handleSubmit} 
                actionText="Edit Post"
                title={postById.title}
                author={postById.author} 
                shortDescription={postById.shortDescription}
                content={postById.content}
                publishedDate={postById.publishedDate}
                id={id}
            />
        </>
    );
};

export default EditPostForm