import LoginForm from './loginForm/LoginForm'
import RegisterForm from './registerForm/RegisterForm'

const Forms = () => {
    return (
        <div className="forms-container">
            <div className="signin-signup">
                <LoginForm />
                <RegisterForm />
            </div>
        </div>
    )
}

export default Forms