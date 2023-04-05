import Card from "react-bootstrap/Card";

const SingleMovie = (props) => {
  console.log(props);
  return (
    <Card className="h-100  mx-3 rounded-0">
      <Card.Img
      className="w-100"
        variant="top"
        src={props.movie.Poster}
        alt={props.movie.Title}
      />
      <Card.Body className="bg-black text-light border-dark">
        <Card.Title>{props.movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleMovie;