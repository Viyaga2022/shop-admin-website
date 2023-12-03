"use client"

import axios from "axios";
import { useState } from "react";
import { FaShop } from "react-icons/fa6";
import { MdEmail, MdOutlineSmartphone, MdLock, MdPerson } from "react-icons/md";
import MoonLoading from "@/components/loadingEffects/moonLoading/MoonLoading";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from "@/redux/slices/adminSlice";

let reRender = 1

const RegisterForm = () => {
    const { isLoading } = useSelector((state) => state.admin)
    const dispatch = useDispatch()

    const formAction = (formData) => {
        const { adminName, email, phone, password, cpassword, viyagaManager } = Object.fromEntries(formData)

        if (!adminName || !email || !phone || !password || !cpassword || !viyagaManager) {
            return toast.error("Please Enter The Required Field")
        }
        if (password !== cpassword) {
            return toast.error("Password and Confirm Password Not Matching")
        }

        const adminData = { adminName, email, phone, password, viyagaManager }
        dispatch(registerAdmin(adminData))
    }

    console.log(reRender++)
    return (
        <form action={formAction} className="sign-up-form" id="sign-up-form">
            <h2 className="title">Register</h2>
            <div className="input-field">
                <span className='icon'><FaShop size={22} /></span>
                <input type="text" placeholder="Admin Name" name='adminName' />
            </div>
            <div className="input-field">
                <span className='icon'><MdEmail size={22} /></span>
                <input type="email" placeholder="Email" name='email' />
            </div>
            <div className="input-field">
                <span className='icon'><MdOutlineSmartphone size={22} /></span>
                <input type="text" placeholder="Phone No" name='phone' />
            </div>
            <div className="input-field">
                <span className='icon'><MdLock size={22} /></span>
                <input type="password" placeholder="Password" name='password' />
            </div>
            <div className="input-field">
                <span className='icon'><MdLock size={22} /></span>
                <input type="password" placeholder="Confirm Password" name='cpassword' />
            </div>
            <div className="input-field">
                <span className='icon'><MdPerson size={24} /></span>
                <input type="text" placeholder="Viyaga Manager ID" name='viyagaManager' />
            </div>
            <button type="submit" className="btn" >{isLoading ? <MoonLoading text={"Registering..."} size={20} /> : "Register"}</button>
        </form>
    )
}

export default RegisterForm