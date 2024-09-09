import ResumeData from "../assets/data/ResumeData";
import { Container } from "react-bootstrap";
function Resume(){
    return(
        <>
        <h1>Resume</h1>
        <Container>
        <ResumeData></ResumeData>
        </Container>
        </>
    );
}

export default Resume;