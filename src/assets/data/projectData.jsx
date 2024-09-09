import ProjectCard from "../../components/ProjectCard";
import { Row } from 'react-bootstrap';

const ProjectData = () => {
    const projects = [
        {
            title: 'NoSQL-Social-Network-API',
            image: 'src/assets/images/NoSQL-Social-Network-API.JPG',
            description: 'A back-end social network api that uses technologies such as MongoDB, Node.js, Express.js, and Mongoose. MongoDB manages the NoSQL database while Express.js and Mongoose are helper technologies. To test out the API calls a user can use Insomnia.',
            deployedLink: 'https://github.com/Jrsparling/NoSQL-Social-Network-API',
            githubLink: 'https://github.com/Jrsparling/NoSQL-Social-Network-API',
        },
        {
            title: 'Readme-generator',
            image: 'src/assets/images/Readme-generator.JPG',
            deployedLink: 'https://github.com/Jrsparling/Readme-generator',
            githubLink: 'https://github.com/Jrsparling/Readme-generator',
        },
        {
            title: 'test title3',
            image: 'test img3',
            deployedLink: 'testDeployLink',
            githubLink: 'testGithubLink',
        },
        {
            title: 'title4',
            image: 'img4',
            deployedLink: 'testDeployLink',
            githubLink: 'testGithubLink',
        },
    ];
    return (
        <Row>
        {projects.map(ProjectCard)}
        </Row>
    )
};

export default ProjectData;