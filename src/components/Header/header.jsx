import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/context_auth';

export default function Header() {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const handleLogout = () => {
        setIsAuth(false);
        localStorage.removeItem('accessToken');
    };
    
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
                        {isAuth ?
                            (<NavLink to="/"
                                onClick={handleLogout}
                                style={{ margin: "15px" }}
                                className={({ isActive }) => (isActive ? "text-danger" : "")}
                            >Logout</NavLink>) :
                            (
                                <>
                                    <NavLink to={"/Login"} style={{ margin: "15px" }}
                                        className={({ isActive, isPending }) => (isActive ? "text-danger" : "")}
                                    >Login</NavLink>
                                    <NavLink to={"/Register"} style={{ margin: "15px" }}
                                        className={({ isActive, isPending }) => (isActive ? "text-danger" : "")}
                                    >Register</NavLink>
                                </>
                            )
                        }
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
