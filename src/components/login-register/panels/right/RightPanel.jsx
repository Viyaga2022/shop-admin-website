import Image from 'next/image'
import SignInBtn from './signInBtn/SignInBtn'
import RegisterImg from '@/images/register.svg'

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
      <Image src={RegisterImg} className="image" alt="" />
    </div>
  )
}

export default RightPanel