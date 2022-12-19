
export const dateToStr = (publishedDate) => {
    console.log(publishedDate)

    const dd = String(publishedDate.getDate()).padStart(2, '0');
    const mm = String(publishedDate.getMonth() + 1).padStart(2, '0');
    const yyyy = publishedDate.getFullYear();
    
    return dd + '/' + mm + '/' + yyyy;
};