const ProjectCard = ({title, image, deployedLink, githubLink}) => {
    return (
        <>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>
            <a> href = {deployedLink}Deployed Application</a>
            <a> href = {githubLink}GitHub Repo</a>
        </p>
        </>
    )
};

export default ProjectCard;