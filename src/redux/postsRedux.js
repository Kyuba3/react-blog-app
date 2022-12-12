//selectors

//actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
//actions creators
const postsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_POST:
        return [...statePart];
      default:
        return statePart;
    };
};

export default postsReducer;