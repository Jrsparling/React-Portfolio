import { Card, Col } from 'react-bootstrap';

function ProjectCard({title, image, description, deployedLink, githubLink}) {
  return (
    <Col>
    <Card style={{width: "58rem", height: "50rem"}}>
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
    </Col>
  );
}

export default ProjectCard;
