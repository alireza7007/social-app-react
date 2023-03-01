import './post.css'
import {MoreVert} from '@mui/icons-material'
import {users} from '../../dummyData'
import { useState } from 'react'
export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [flager, setFlager] = useState(false)
 const handelLike = ()=>{
  setLike(flager ? like -1 : like +1)
  setFlager(!flager)
 }
  return (
    <div className='post'>
      <div className="postWrapper">
      <div className="topPost">
        <div className="topLeft">
        <img src={users.filter(u=> u.id === post?.userId)[0].imageUser} alt="" className="userImage" />
        <span className="userText">{users.filter(u=> u.id === post.userId)[0].username}</span>
        <span className="postDate">{post.date}</span>
        </div>
        <div className="topRight">
        <MoreVert />
        </div>
      </div>
      <div className="centerPost">
      <img src={post.imagePost} alt="" className="postImage" />
      <span className="postDesc">
      {post?.desc}
      </span>
      </div>
      <div className="bottomPost">
        <div className="bottomLeft">
        <img onClick={handelLike} src="/assets/like.png" alt="" className="likePost" />
        <img src="/assets/heart.png" alt="" className="heartPost" />
        <span className="conterPost">{like}</span>
        </div>
        <div className="bottomRight">
          <span className="postComments">{post.comment}</span>
        </div>
      </div>
      </div>
    </div>
  )
}
