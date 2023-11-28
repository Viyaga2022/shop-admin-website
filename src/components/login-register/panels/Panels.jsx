import LeftPanel from './left/LeftPanel'
import './panels.scss'
import RightPanel from './right/RightPanel'

const Panels = () => {
  return (
    <div className="panels-container">
        <LeftPanel />
        <RightPanel />
    </div>
  )
}

export default Panels