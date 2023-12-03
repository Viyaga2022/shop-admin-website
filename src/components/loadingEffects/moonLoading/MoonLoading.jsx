import { MoonLoader } from 'react-spinners'
import './moonLoading.scss'

const MoonLoading = ({ text, size }) => {
    return (
        <div className="moonLoading">
            <MoonLoader
                color="#fff"
                loading
                size={size}
                speedMultiplier={0.7}
            />
            {text ??
                <p>{text}</p>
            }

        </div>
    )
}

export default MoonLoading