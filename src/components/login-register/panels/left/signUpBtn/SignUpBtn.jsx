"use client"
 
const SignUpBtn = () => {
    const changeSignUpPage =() => {
        const container = document.querySelector(".container");
        container?.classList.add("sign-up-mode");
      }
      
  return (
    <button className="btn transparent" onClick={changeSignUpPage}>
    Sign up
  </button>
  )
}

export default SignUpBtn