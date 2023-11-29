import ForgotPassword from './forgotPassword/ForgotPassword'
import LoginForm from './loginForm/LoginForm'
import RegisterForm from './registerForm/RegisterForm'
import SubAdminLogin from './subAdminLogin/SubAdminLogin'

const Forms = () => {
    return (
        <div className="forms-container">
            <div className="signin-signup">
                <LoginForm />
                <RegisterForm />
                <SubAdminLogin />
                <ForgotPassword />
            </div>
        </div>
    )
}

export default Forms