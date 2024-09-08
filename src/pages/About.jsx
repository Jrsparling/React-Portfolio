import { Container, Row, Col, Image } from 'react-bootstrap';

import profilePic from '../assets/images/profile pic.jpg';
const About = () =>{
    return(
        <>
        <section>
        <Container>
            <div className='title'>
                <h1>About Me</h1>
            </div>
            <Row>
                <Col sm={6}>
                    <Image src={profilePic} alt="profile picture" fluid rounded></Image>
                </Col>
                <Col sm={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel, architecto soluta itaque odio ducimus dolor quaerat voluptate in quibusdam recusandae, ratione commodi eos blanditiis non iste odit suscipit labore.</p>
                </Col>
            </Row>
        </Container>
        </section>
        </>
    )
}

export default About;