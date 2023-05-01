import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {doctors} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Doctor from '../../components/Doctor'
import './doctors.css'

const Doctors = () => {
  return (
    <>
    <Header title="Crew" image={HeaderImage}>
    Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
    </Header>
    <section className="doctors">
      <div className="container doctors__container">
        {
          doctors.map(({id, image, name, job, socials}) => {
            return <Doctor key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Doctors