"use client"

import { FaShop } from "react-icons/fa6";
import { MdEmail, MdOutlineSmartphone, MdLock, MdPerson } from "react-icons/md";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const onsubmit = async (prevState, formData) => {
    const { shopName, phone } = Object.fromEntries(formData)
    console.log({ shopName, phone });
}

const RegisterForm = () => {
    const [state, formAction] = useFormState(onsubmit, {})
    
    return (
        <form action={formAction} className="sign-up-form" id="sign-up-form">
            <h2 className="title">Register</h2>
            <div className="input-field">
                <span className='icon'><FaShop size={22} /></span>
                <input type="text" placeholder="Shop Name" name='shopName' />
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
                <input type="text" placeholder="Shop Manager ID" name='managerId' />
            </div>
            <button className="btn" >Register</button>
        </form>
    )
}

export default RegisterForm