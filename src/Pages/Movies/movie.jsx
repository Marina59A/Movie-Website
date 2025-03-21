import axios from "axios"
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./movie.css";
import { useNavigate } from "react-router-dom";
import instance from "../../axiosInstance/instance";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../../Store/Slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MoviePage() {
    const [movies, setMovies] = useState([]);
    const apiKey = '53f10f41ad005c343b05067681a6b4d4';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    
    useEffect(() => {
        instance
            .get(`/movie/popular?api_key=${apiKey}`)
            .then((res) => {
                setMovies(res.data.results);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const navigate = useNavigate();

    const handleFavoriteClick = (movie) => {
        if (favorites.some(fav => fav.id === movie.id)) {
            dispatch(removeFavorite(movie));
        } else {
            dispatch(addFavorite(movie));
        }
    };
                
    return (
        <>
            <Container fluid>
            <h1>Movie Page</h1>
            <Row className="gap-3">
                {movies.map((movie) => {
                      const isFavorite = favorites.some(fav => fav.id === movie.id);
                    return (
                        <Col key={movie.id} >
                            <Card style={{ width: '18rem' }}>
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
                                     style={{ color: isFavorite ? 'red' : 'grey', cursor: 'pointer', marginLeft: '150px' }}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                })}
            </Row>
            </Container>

        </>
    )
}
