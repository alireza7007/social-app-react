import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarleft">
            <span className="logo">Ac Milan Club</span>
        </div>
        <div className="topbarcenter">
            <div className="searchbar">
                <SearchIcon className='searchIcon' />
             <input className='searchInput' placeholder='search post friends or video' />
            </div>
         </div>
        <div className="topbarright">
        <div className="topbarlinks">
            <Link to='/home' className="topbarlink">Homepage</Link>
            <Link to='/profile' className="topbarlink">Profile</Link>
            <Link to='/' className="topbarlink">Logout</Link>
        </div>
        <div className="topbaricons">
            <div className="topbariconitem">
                <PersonIcon />
                <span className="topbariconbadge">1</span>
            </div>
            <div className="topbariconitem">
                <NotificationsNoneIcon />
                <span className="topbariconbadge">5</span>
            </div>
            <div className="topbariconitem">
                <ChatIcon />
                <span className="topbariconbadge">3</span>
            </div>
            <img src="/assets/profile/1.jpg" alt="" className="topbarimg"/>
        </div>
        </div>
    </div>
  )
}
