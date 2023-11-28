import './loginForm.scss'
import { MdEmail, MdLock } from "react-icons/md";
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LoginForm = () => {
    return (
        <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className='icon'><MdEmail size={22} /></span>
                <input type="text" placeholder="Email" name="email" />
            </div>
            <div className="input-field">
                <span className='icon'><MdLock size={22} /></span>
                <input type="password" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="btn solid">Login</button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                    <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                    <FaTwitter />
                </a>
                <a href="#" className="social-icon">
                    <FaGoogle />
                </a>
                <a href="#" className="social-icon">
                    <FaLinkedinIn />
                </a>
            </div>
        </form>
    )
}

export default LoginForm