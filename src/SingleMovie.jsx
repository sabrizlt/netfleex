import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleMovie = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.movie.Poster}
        alt={props.movie.Title}
      />
      <Card.Body>
        <Card.Title>{props.movie.Title}</Card.Title>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleMovie;
