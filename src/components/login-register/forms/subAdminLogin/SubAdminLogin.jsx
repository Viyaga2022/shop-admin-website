"use client"

import { MdEmail, MdLock } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginSubAdmin } from "@/redux/services/adminservices";
import toast from "react-hot-toast";

const SubAdminLogin = () => {
    const navigation = useRouter()
    const dispatch = useDispatch()
    const { subAdmin } = useSelector(state => state.admin)

    const changeAdminLogin = () => {
        const container = document.querySelector(".container");
        container?.classList.remove("sign-in-sub-admin");
    }

    useEffect(() => {
        if (subAdmin) {
            const category = subAdmin.shopCategory
            const shopId = subAdmin.shopId
            navigation.replace(`/${category}/${shopId}`)
        }

    }, [subAdmin])

    const loginAction = (formData) => {
        const { shopId, email, password } = Object.fromEntries(formData)

        if (!shopId || !email || !password) {
            return toast.error("Please Enter The Required Field")
        }
        
        const subAdminData = { shopId, email, password }
        dispatch(loginSubAdmin(subAdminData))
    }

    return (
        <form action={loginAction} className="sign-in-sub-admin-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className='icon'><MdEmail size={22} /></span>
                <input type="text" placeholder="Shop Id" name="shopId" />
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
                <p className="text forgot-password" style={{opacity:0}}>Forgot Password?</p>
            </div>
            <button type="submit" className="btn solid">Login</button>
            <p className="text sub-admin">Are you the admin?<a onClick={changeAdminLogin}> Sign in</a></p>
        </form>
    )
}

export default SubAdminLogin