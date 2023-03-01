import './share.css'
import {PermMedia, Label,Room, EmojiEmotions} from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/profile/1.jpg" alt="" className="shareImg" />
            <input placeholder='whats in your mind my love?!' className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareButtom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className="shareIcon" htmlColor='tomato' />
                    <span className="shareText">photo & video</span>
                </div>
                <div className="shareOption">
                    <Label className="shareIcon" htmlColor='blue' />
                    <span className="shareText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room className="shareIcon" htmlColor='green'/>
                    <span className="shareText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions className="shareIcon" htmlColor='goldenrod' />
                    <span className="shareText">Felling</span>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
        </div>
    </div>
  )
}
