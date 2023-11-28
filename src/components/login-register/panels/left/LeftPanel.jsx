import SignUpBtn from './signUpBtn/SignUpBtn'

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
            <img src="/login.svg" className="image" alt="" />
        </div>
    )
}

export default LeftPanel