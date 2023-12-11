import SideBar from '@/components/ecom/shared/sidebar/Sidebar'
import Navbar from '@/components/ecom/shared/navbar/Navbar'
import Footer from '@/components/ecom/shared/footer/Footer'
import './ecom.scss'

const layout = ({ children }) => {
    return (
        <div className="main">
            <div className="container">
                <div className="menuContainer ">
                    <SideBar />
                </div>
                <div className="contentContainer">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default layout