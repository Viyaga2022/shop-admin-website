import Image from 'next/image'
import SignUpBtn from './signUpBtn/SignUpBtn'
import LoginImg from '@/images/login.svg'

const LeftPanel = () => {
    return (
        <div className="panel left-panel">
            <div className="content">
                <h3>New here ?</h3>
                <p>
                    Don&apos;t Have An Account ?
                </p>
                <SignUpBtn />
            </div>
            <Image src={LoginImg} className="image" alt="" />
        </div>
    )
}

export default LeftPanel