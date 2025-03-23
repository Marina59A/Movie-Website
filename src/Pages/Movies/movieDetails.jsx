import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import instance from "../../axiosInstance/instance";
import { Col, Container, Row } from "react-bootstrap";

export default function MovieDetails() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState({});
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        async function getMovieDetails() {
            try {
                const res = await instance.get(`/movie/${movieID}?api_key=53f10f41ad005c343b05067681a6b4d4`);
                console.log(res.data);
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieDetails();
    }, []);

    return (
        <Container fluid>
            <h1>Movie Details</h1>
            {/* <p>id is {movieID}</p> */}
            <Row>
                <Col md={3}>
                    <Card.Img style={{ width: '100%', borderRadius: '10px' }}
                        src={`${imageBaseUrl}${movie.poster_path}`} />
                </Col>
                <Col md={9}>
                    <Card.Body >
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
}