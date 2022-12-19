import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(getAllCategories)
    
    return (
        <section>
          <h1 className="mb-5 justify-content-center d-flex">Categories: </h1>
          <Row className="d-flex flex-column col-12 align-items-center">
            {categories.map((category) => (
              <Col key={category} className="p-2 col-8 border">
                <Link  to={'/categories/'+ category} className="text-decoration-none">{category}</Link>
              </Col>
            ))}
          </Row>
        </section>
    );
};

export default Categories;