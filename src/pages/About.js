import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>리액트 라우터 기초를 십습해 보는 프로젝트 </p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About