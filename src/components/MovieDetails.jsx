import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function MovieDetails(props) {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=d6d7d317&i=${params.id}`
        );
        if (response.ok) {
          let dataMovie = await response.json();
          console.log(dataMovie);
          setMovie(dataMovie);
        } else {
          console.log("errore nella chiamata");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [params.id]);

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${params.id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1MjQyMzYsImV4cCI6MTY4MTczMzgzNn0.YLH4QlKTTzuOdld44CoLeeAvEASUMnx6FxtzocdmucQ",
            },
          }
        );
        if (response.ok) {
          let dataComments = await response.json();
          console.log(dataComments);
          setComments(dataComments);
        } else {
          console.log("errore nella chiamata");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [params.id]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="text-light text-center">
          <h2>{movie && movie.Title}</h2>
          <img src={movie && movie.Poster} alt={movie && movie.Title} />
          <p>
            Source - {movie && movie.Ratings[1].Source} | Rate -{" "}
            {movie && movie.Ratings[1].Value} || Source -
            {movie && movie.Ratings[2].Source} | Rate -{" "}
            {movie && movie.Ratings[2].Value}
          </p>
          <p>Plot - {movie && movie.Plot}</p>
          <p>Genre - {movie && movie.Genre}</p>
          <p>Actors - {movie && movie.Actors}</p>
          <p>Director - {movie && movie.Director}</p>
          <p>Released - {movie && movie.Released}</p>
          <p>
            Duration -{movie && movie.Runtime} | Type - {movie && movie.Type}{" "}
          </p>
          <ListGroup>
            <h4>Comments</h4>

            {comments.map((c, i) => {
              return (
                <ListGroup.Item
                  className="d-flex justify-content-between"
                  key={c.elementId + i}
                >
                  {c.comment} | {c.rate}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;