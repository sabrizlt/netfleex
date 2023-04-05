import { useEffect, useState } from "react";
import { Alert, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { Link } from "react-router-dom";

function TvShows(props) {
  const [saga, setSaga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [anError, setAnError] = useState(false);

  const getAllMovies = async (SagaEndpoint) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=d6d7d317&s=${SagaEndpoint}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setSaga(data.Search);
        setIsLoading(false);
        setAnError(false);
      } else {
        console.log("errore nella chiamata :(");
        setIsLoading(false);
        setAnError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setAnError(true);
    }
  };

  useEffect(() => {
    getAllMovies(props.mySaga);
  }, [props.mySaga]);

  return (
    <Container fluid>
      {anError && (
        <Alert variant="danger">Errore nel caricamento della pagina :(</Alert>
      )}

      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          variant="warning"
          className="spinner__cont"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Carousel
          className="bg-black"
          nextIcon={
            <span aria-hidden="true" className="carousel-control-next-icon" />
          }
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon me-5"
            />
          }
          indicators={false}
        >
          {saga.map((data, index) => {
            if (index % 5 === 0) {
              return (
                <Carousel.Item key={data.imdbID}>
                  <h2 className="text-white">{props.name} Saga</h2>
                  <Row className="d-flex flex-nowrap overflow-hidden div__imgs">
                    {saga.slice(index, index + 5).map((data) => (
                      <Col
                        xs={12}
                        sm={6}
                        md={3}
                        lg={2}
                        key={data.imdbID}
                        className="p-0 d-flex justify-content-center"
                      >
                        <Link
                          className="text-decoration-none text-black"
                          to={"/movie-details/" + data.imdbID}
                        >
                          <SingleMovie movie={data} />
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              );
            } else {
              return null;
            }
          })}
        </Carousel>
      )}
    </Container>
  );
}

export default TvShows;