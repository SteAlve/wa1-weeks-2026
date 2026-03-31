import { Navbar, Container } from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <h1 className="text-white m-0 fs-4">HeapOverrun - Question #1</h1>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;