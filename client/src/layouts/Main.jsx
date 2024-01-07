import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar";
const Main = () => {
  return (
    <div>
<div className='h-[40px]'>

<Navbar></Navbar>

</div>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
