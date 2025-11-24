import {Link} from "react-router-dom"

const Home = () => {

    return (
        <>
            <h1>HOME PAGE</h1>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about?name=jinx&age=100">ABOUT_1</Link></li>
                <li><Link to="/about?name=shaco&age=50">ABOUT_2</Link></li>
                <li><Link to="/contact/jang/27">CONTACT</Link></li>
            </ul>
        </>
    )
}

export default Home;