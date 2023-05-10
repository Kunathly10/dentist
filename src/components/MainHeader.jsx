import {Link} from 'react-router-dom'
import Image from '../images/main_header_img.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>    Visit us at Irrihortz Klinika</h4>
          <h1>Your smile is our priority </h1>
          <p>
          Trust us to provide gentle, compassionate, and comprehensive dental care.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader