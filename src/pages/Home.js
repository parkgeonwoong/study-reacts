import { Link } from "react-router-dom";

const Home = () => {

    return ( 
        <div>
            <h1>Home</h1>
            <p>홈, 가장 먼저 보여주는 페이지 </p>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to='/profiles/woongs'>Woongs Profile</Link>
                </li>
                <li>
                    <Link to='/profiles/node'>Node Profile</Link>
                </li>
                <li>
                    <Link to='/profiles/void'>Not Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;