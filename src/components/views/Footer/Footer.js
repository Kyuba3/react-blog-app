import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <Container>
            <footer className="text-muted text-center mt-3">
                Copyright <i className="fa fa-copyright p-1"></i> BlogApp 2022
            </footer>
        </Container>
    );
};

export default Footer;