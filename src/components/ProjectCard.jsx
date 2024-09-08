import { Container, Card, Col } from 'react-bootstrap';

function ProjectCard({title, image, description, deployedLink, githubLink}) {
  return (
    <Container>
    <Card style={{}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image} alt={title}></Card.Img>
        <Card.Text>{description}</Card.Text>
        <Col>
            <Card.Link href="#">{deployedLink}Deployed</Card.Link>
            <Card.Link href="#">{githubLink}Github</Card.Link>
        </Col>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default ProjectCard;
