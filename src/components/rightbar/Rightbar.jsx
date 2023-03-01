import { info, users } from '../../dummyData'
import Fallowers from '../fallowers/Fallowers'
import Info from '../information/Info'
import Online from '../online/Online'
import './rightbar.css'

export default function Rightbar({profile}) {
  const HomeRightbar = ()=> {
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="virthdayImage" />
          <span className="birthdayText">today is <b>Magic Mike</b> and <b>3 other players</b> birthday</span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="birdthaygiftImage" />


       
        <span className="rightbarTitleFriends">Online Players</span>

        
          <ul className="rightbaronlineFreind">
            {users.map(u=>(
              <Online 
              key={u.id}
              image = {u.imageUser}
              name={u.username}
              />
            ))}
          </ul>
    </>
    )
  }
  const ProfileRightbar = ()=> {
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="userInfo">
       {info.map((u,index)=>(
       <Info
       key={index}
       keys={Object.keys(u)}
       values={Object.values(u)} />  ))}
      </div>
      <div className="userFallowings">
       {users.map(u=>(
        <Fallowers
        key={u.id}
        image={u.imageUser}
        name={u.username}
        />
       ))}
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
    <div className="rightbarWrapper">
    {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div> 
    </div>
  )
}
