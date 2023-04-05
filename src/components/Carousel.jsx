import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./sabri.css";

class UncontrolledExample extends Component {
  state = {
    saga: [],
    activeIndex: 0,
    searchTerm: "",
    showForm: false,
  };

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  getAllReservation = async (searchTerm) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=d6d7d317&s=${searchTerm}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          saga: data.Search.filter((movie) =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        });
      } else {
        console.log("errore nella chiamata :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      activeIndex: selectedIndex,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getAllReservation(this.state.searchTerm);
  };

  handleToggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  componentDidMount() {
    this.getAllReservation(this.props.myEndpoint);
  }

  render() {
    const { activeIndex, saga, searchTerm, showForm } = this.state;

    return (
      <Container>
        <Button
          className="mb-3"
          variant="outline-light"
          onClick={this.handleToggleForm}
        >
          {showForm ? "Cerca" : "Cerca"}
        </Button>
        {showForm && (
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={this.handleSearch}
            />
            <Button type="submit" variant="outline-light" className="mt-3">
              Search
            </Button>
          </Form>
        )}
        <Carousel
          nextIcon={
            <span aria-hidden="true" className="carousel-control-next-icon" />
          }
          prevIcon={
            <span aria-hidden="true" className="carousel-control-prev-icon" />
          }
          indicators={false}
          className="carouselSearch"
          activeIndex={activeIndex}
          onSelect={this.handleSelect}
        >
          {saga.map((search, index) => {
            if (index % 6 === 0) {
              return (
                <Carousel.Item key={index}>
                  <Row className="d-flex flex-nowrap overflow-hidden">
                    {saga.slice(index, index + 6).map((data, subIndex) => (
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        key={data.imdbID}
                        className="p-0 d-flex justify-content-center"
                      >
                        <div
                          className={`img-wrapper ${
                            activeIndex === index / 6 + subIndex && "active"
                          }`}
                        >
                          <img
                            className="d-block w-100 m-2"
                            src={data.Poster}
                            alt={data.Title}
                          />
                          <div className="title-wrapper">
                            <p className="title">{data.Title}</p>
                          </div>
                        </div>
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
      </Container>
    );
  }
}

export default UncontrolledExample;
