import Topbar from '../../components/tobbar/Topbar'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useParams } from 'react-router-dom'

export default function Home(props) {
  const params= useParams()
  console.log(params);
  return (
    <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Feed />
      <Rightbar />      
    </div>
    {/* <Footer /> */}
    </>
  )
}
