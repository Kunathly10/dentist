import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Get in Touch with our team of dental professionals today to schedule an appointment, ask a question, or simply learn more about our services. Our friendly and knowledgeable staff are always here to help and provide the highest quality care to our patients. Contact us via phone, email, social media, and we will get back to you as soon as possible.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:irrihortz@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://wa.me/+34650017569" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          <a href="https://www.instagram.com/irrihortz_klinika/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact