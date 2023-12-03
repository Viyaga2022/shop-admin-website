"use client"

import { MdEmail, MdLock } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import MoonLoading from "@/components/loadingEffects/moonLoading/MoonLoading";
import { loginAdmin } from '@/redux/slices/adminSlice'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const LoginForm = () => {
    const { isLoading, admin } = useSelector((state) => state.admin)
    const dispatch = useDispatch()
    const navigation = useRouter()

    const changeSubAdminLogin = () => {
        const container = document.querySelector(".container");
        container?.classList.add("sign-in-sub-admin");
    }

    const changeForgotPassword = () => {
        const container = document.querySelector(".container");
        container?.classList.add("forgot-password-page");
    }

    useEffect(() => {
        if (admin) {
            navigation.replace('/dashboard')
        }
    }, [admin])
    
    const loginAction = (formData) => {
        const { email, password } = Object.fromEntries(formData)

        if (!email || !password) {
            return toast.error("Please Enter The Required Field")
        }
        console.log({ email, password });
        const adminData = { email, password }
        dispatch(loginAdmin(adminData))
    }

    return (
        <form action={loginAction} className="sign-in-form">
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
            <button type="submit" className="btn solid">
                {isLoading ? <MoonLoading text={"Login..."} size={20} /> : "Login"}
            </button>
            <p className="text sub-admin">Are you a sub admin?<a onClick={changeSubAdminLogin}> Sign in</a></p>
        </form>
    )
}

export default LoginForm