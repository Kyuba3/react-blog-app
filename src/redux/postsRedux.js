//selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id)
//actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const DELETE_POST = createActionName('DELETE_POST');
//actions creators
export const deletePost = payload => ({type: DELETE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});

const postsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_POST:
        return [...statePart, {...action.payload}];
        
      case DELETE_POST:
        return statePart.filter((post) => post.id !== action.payload);  

      default:
        return statePart;
    };
};

export default postsReducer;