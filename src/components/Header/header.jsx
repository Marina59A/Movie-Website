import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to={"/"} className='text-warning' style={{ margin: "15px" }}>Movie Website</Link>
                    <Nav className="me-auto">
                        <NavLink to={"/"} style={{ margin: "15px" }}
                            className={({ isActive, isPending }) => (isActive ? "text-danger" : "")}
                        >Home</NavLink>
                        <NavLink to={"/movie"} style={{ margin: "15px" }}
                            className={({ isActive, isPending }) => (isActive ? "text-danger" : "")}
                        >Movies</NavLink>
                        <NavLink to={"/Login"} style={{ margin: "15px" }}
                            className={({ isActive, isPending }) => (isActive ? "text-danger" : "")}
                        >Login</NavLink>
                        <NavLink to={"/favorites"} style={{ margin: "15px" }}
                            className={({ isActive, isPending }) => (isActive ? "text-danger" : "")}>
                            Favorites
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
