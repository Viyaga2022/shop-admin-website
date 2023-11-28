import './login-register.scss'
import Panels from '@/components/login-register/panels/Panels';
import Forms from '@/components/login-register/forms/Forms';

const LoginRegister = () => {

    return (
        <>
            <div className="container">
                <Forms />
                <Panels />
            </div>
        </>
    )
}

export default LoginRegister