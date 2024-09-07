import ProfilePicture from '../components/ProfilePicture'
import profilePic from '../assets/profile pic.jpg'
import AboutSection from '../components/AboutSection'

export default function About(){
    return(
        <>
        <h1>About Me</h1>
        <ProfilePicture></ProfilePicture>
        <img src={profilePic} alt="profile picture" />
        <AboutSection></AboutSection>
        </>
    )
}