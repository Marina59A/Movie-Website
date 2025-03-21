import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row, Modal, Button, Card } from "react-bootstrap";
import { removeFavorite } from '../../Store/Slices/favoritesSlice';
import { useDispatch } from 'react-redux';
export default function Favorites() {
    const favorites = useSelector(state => state.favorites);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const dispatch = useDispatch();

    const handleRemoveClick = (movie) => {
        dispatch(removeFavorite(movie));
    };

    return (
        <Container fluid>
            <h1>Favorites</h1>
            <Row className="gap-3">
                {favorites.map((movie) => (
                    <Col key={movie.id}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={`${imageBaseUrl}${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text className="card-text">
                                    {movie.overview}
                                </Card.Text>
                                <Button variant="primary" onClick={() => setSelectedMovie(movie)}>
                                    view Film
                                </Button>
                                <Button variant="danger" onClick={() => handleRemoveClick(movie)}>
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {selectedMovie && (
                <Modal show={true} onHide={() => setSelectedMovie(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedMovie.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={`${imageBaseUrl}${selectedMovie.poster_path}`}
                            alt={selectedMovie.title}
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <p>{selectedMovie.overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setSelectedMovie(null)}>
                            Remove
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
}
