import ProjectCard from "../../components/ProjectCard";

const ProjectData = () => {
    const projects = [
        {
            title: 'NOSQL-Social-Network-API',
            image: 'test img1',
            deployedLink: 'https://github.com/Jrsparling/NoSQL-Social-Network-API',
            githubLink: 'https://github.com/Jrsparling/NoSQL-Social-Network-API',
        },
        {
            title: 'test title2',
            image: 'test img2',
            deployedLink: 'testDeployLink',
            githubLink: 'testGithubLink',
        },
        {
            title: 'test title3',
            image: 'test img3',
            deployedLink: 'testDeployLink',
            githubLink: 'testGithubLink',
        },
        {
            title: 'test title4',
            image: 'test img4',
            deployedLink: 'testDeployLink',
            githubLink: 'testGithubLink',
        },
    ];
    return (
        <>
        {projects.map(ProjectCard)}
        </>
    )
};

export default ProjectData;