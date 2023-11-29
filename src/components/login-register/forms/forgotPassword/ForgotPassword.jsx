"use client"


import { MdEmail, MdLock } from "react-icons/md";

const ForgotPassword = () => {

    const changeAdminLogin = () => {
        const container = document.querySelector(".container");
        container?.classList.remove("sign-in-sub-admin");
        container?.classList.remove("forgot-password-page");
    }

    return (
        <form action="" className="forgot-password-form">
            <h2 className="title">Forgot Password</h2>
            <div className="input-field">
                <span className='icon'><MdEmail size={22} /></span>
                <input type="text" placeholder="Email" name="email" />
            </div>
            <button type="submit" className="btn solid">Send Code</button>
            <p className="text sub-admin">Are you the admin? Back to<a onClick={changeAdminLogin}> Sign in</a></p>
        </form>
    )
}

export default ForgotPassword