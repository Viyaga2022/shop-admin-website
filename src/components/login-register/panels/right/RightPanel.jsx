import SignInBtn from './signInBtn/SignInBtn'

const RightPanel = () => {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          Already have an account ?
        </p>
        <SignInBtn />
      </div>
      <img src="/register.svg" className="image" alt="" />
    </div>
  )
}

export default RightPanel