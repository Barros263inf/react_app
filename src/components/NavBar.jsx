import { Login } from "../Login";
import { Register } from "../Register";
import { Link } from "react-router-dom";

export function NavBar(){
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to={Login}/>Login</li>
                <li><Link to={Register}/>Register</li>
            </ul>
        </nav>
    )
}