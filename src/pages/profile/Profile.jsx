import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/tobbar/Topbar'
import './profile.css'

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
        <Sidebar />
        <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img 
                src="/assets/profile/2.png"
                alt=""
                className="profileImgCover" />
                <img
                src="/assets/profile/1.jpg"
                alt=""
                className="profileImgUser" />
            </div>
            <div className="profileInfo">
            <span className="profileUsername">Alireza Abdi</span>
            <span className="profileDescription">whats up ?!...</span>
            </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
        <Rightbar profile />  
        </div>
        </div>
    </div>
    </>
  )
}
