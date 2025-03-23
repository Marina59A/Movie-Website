import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./movie.css";
import { useNavigate } from "react-router-dom";
import instance from "../../axiosInstance/instance";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../../Store/Slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../Store/Slices/movies";

export default function MoviePage() {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const movies = useSelector((state) => state.movies.movies);
    const [searchQuery, setSearchQuery] = useState("");

    // useEffect(() => {
    //     instance
    //         .get(/movie/popular?)
    //         .then((res) => {
    //             setMovies(res.data.results);
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [])

    useEffect(() => {
        dispatch(moviesAction());
    }, [dispatch]);

    const navigate = useNavigate();

    const handleFavoriteClick = (movie) => {
        if (favorites.some(fav => fav.id === movie.id)) {
            dispatch(removeFavorite(movie));
        } else {
            dispatch(addFavorite(movie));
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container fluid>
            <h1>Movie Page</h1>

            <Form.Control
                type="text"
                placeholder="Search for a movie..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="mb-3"
            />

            <Row className="gap-3">
                {filteredMovies.map((movie) => {
                    const isFavorite = favorites.some(fav => fav.id === movie.id);
                    return (
                        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={`${imageBaseUrl}${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text className="card-text">
                                        {movie.overview}
                                    </Card.Text>
                                    <Button variant="primary"
                                        onClick={() => navigate(`/movieDetails/${movie.id}`)}
                                    >Details</Button>
                                    <FaRegHeart
                                        onClick={() => handleFavoriteClick(movie)}
                                        style={{ color: isFavorite ? 'red' : 'grey', cursor: 'pointer', marginLeft: '10px' }}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
