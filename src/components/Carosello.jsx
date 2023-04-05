import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./netflix.css";




class MyCarousel extends Component {
  state = {
    saga: [],
    isLoading: true,
  };

  getAllMovies = async (SagaEndpoint) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=d6d7d317&s=${SagaEndpoint}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          saga: data.Search,
          isLoading: false,
          anError: false,
        });
      } else {
        console.log("errore nella chiamata :(");
        this.setState({
          isLoading: false,
          anError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        anError: true,
      });
    }
  };

  componentDidMount() {
    this.getAllMovies(this.props.mySaga);
  }

  render() {
    return (
      <Container fluid>
        {this.state.anError && (
          <Alert variant="danger">Errore nel caricamento della pagina :(</Alert>
        )}

        {this.state.isLoading ? (
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
            {this.state.saga.map((data, index) => {
              if (index % 5 === 0) {
                return (
                  <Carousel.Item key={data.imdbID}>
                    <h2 className="text-white">{this.props.name} Saga</h2>
                    <Row className="d-flex flex-nowrap overflow-hidden div__imgs">
                      {this.state.saga.slice(index, index + 5).map((data) => (
                        <Col
                          xs={12}
                          sm={6}
                          md={3}
                          lg={2}
                          key={data.imdbID}
                          className="p-0 d-flex justify-content-center"
                        >
                          <img
                            className="d-block w-100 m-2 ms-5 carousel-img"
                            src={data.Poster}
                            alt={data.Title}
                          />
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
}

export default MyCarousel; 