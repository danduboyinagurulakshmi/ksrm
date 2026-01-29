import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <>
    <div className="login-page">
      <h1>Login page</h1>
      <form>
        Username: <input type="text" placeholder="Username"/><br/>
        <br/>
        Password: <input type="password" placeholder="password"/><br/>
        <button>Login</button>
      </form>
      <p>New user?<Link to="/register">Register</Link></p>
    </div>
     <div className="footer-clg1">
            <footer>
                <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
            </footer>

        </div>
    </>
  );
}

export default Login;


