"use client"

import { MdEmail, MdLock } from "react-icons/md";

const LoginForm = () => {

    const changeSubAdminLogin = () => {
        const container = document.querySelector(".container");
        container?.classList.add("sign-in-sub-admin");
    }

    const changeForgotPassword = () => {
        const container = document.querySelector(".container");
        container?.classList.add("forgot-password-page");
    }

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
            <div className="remember-me-forgot-password">
                <div className="remember-me">
                    <input type="checkbox" value="Remember Me" />
                    <p className="text">Remember Me</p>
                </div>
                <p className="text forgot-password"><a onClick={changeForgotPassword}>Forgot Password?</a></p>
            </div>
            <button type="submit" className="btn solid">Login</button>
            <p className="text sub-admin">Are you a sub admin?<a onClick={changeSubAdminLogin}> Sign in</a></p>
        </form>
    )
}

export default LoginForm