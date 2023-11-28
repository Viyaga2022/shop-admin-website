"use client"
 
const SignInBtn = () => {
    const changeSignInPage =() => {
        const container = document.querySelector(".container");
        container?.classList.remove("sign-up-mode");
      }
      
  return (
    <button className="btn transparent" onClick={changeSignInPage}>
    Sign in
  </button>
  )
}

export default SignInBtn