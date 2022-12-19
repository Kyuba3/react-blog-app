
export const getAllCategories = (({ categories }) => categories);
export const getPostByCategory = ({posts}, postCategory) => posts.filter(post => post.category === postCategory)

const categoriesRedux = (statePart = [], action) => {
    switch(action.type) {
      default: 
        return statePart;
    };
};

export default categoriesRedux;