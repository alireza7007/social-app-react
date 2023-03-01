import './sidebar.css'
import {RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,} from '@mui/icons-material';
import CloseFriends from '../closeFriends/CloseFriends';
import { users } from '../../dummyData';

export default function Sidebar() {




  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeed className='sidebarIcon' />
          <span className="sidebarlistItemText">Feed</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <Chat className='sidebarIcon' />
          <span className="sidebarlistItemText">Chat</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <PlayCircleFilledOutlined className='sidebarIcon' />
          <span className="sidebarlistItemText">Media</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <Group className='sidebarIcon' />
          <span className="sidebarlistItemText">Group</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <Bookmark className='sidebarIcon' />
          <span className="sidebarlistItemText">Bookmarks</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <HelpOutline className='sidebarIcon' />
          <span className="sidebarlistItemText">Questions</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <WorkOutline className='sidebarIcon' />
          <span className="sidebarlistItemText">Jobs</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <Event className='sidebarIcon' />
          <span className="sidebarlistItemText">Events</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <School className='sidebarIcon' />
          <span className="sidebarlistItemText">Courses</span>
          </li>
        </ul>
        
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarhr" />
        <div className="friends">
        {users.map(user=>(
    <CloseFriends 
    key={user.id} 
    image={user.imageUser}
    name={user.username} />
  ))}
          
         
        </div>
      </div>
    </div>
  )
}
