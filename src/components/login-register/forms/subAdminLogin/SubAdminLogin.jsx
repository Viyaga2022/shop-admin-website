"use client"


import { MdEmail, MdLock } from "react-icons/md";

const SubAdminLogin = () => {

    const changeAdminLogin = () => {
        const container = document.querySelector(".container");
        container?.classList.remove("sign-in-sub-admin");
    }

    const changeForgotPassword = () => {
        const container = document.querySelector(".container");
        container?.classList.add("forgot-password-page");
        container?.classList.remove("sign-in-sub-admin");
    }

    return (
        <form action="" className="sign-in-sub-admin-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className='icon'><MdEmail size={22} /></span>
                <input type="text" placeholder="Shop Id" name="shop-id" />
            </div>
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
                <p className="text forgot-password" style={{opacity:0}}><a>Forgot Password?</a></p>
            </div>
            <button type="submit" className="btn solid">Login</button>
            <p className="text sub-admin">Are you the admin?<a onClick={changeAdminLogin}> Sign in</a></p>
        </form>
    )
}

export default SubAdminLogin