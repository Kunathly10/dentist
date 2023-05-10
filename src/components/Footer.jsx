import {Link} from 'react-router-dom'
import Logo from '../images/fotos/IRRIHORTZ KLINIKA.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'



import { useEffect } from 'react';

// ...

const Footer = () => {
  useEffect(() => {
    const mapElement = document.getElementById('map');
    const map = new window.google.maps.Map(mapElement, {
      center: { lat: 43.1915128, lng: -2.0561216 },
      zoom: 15,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 43.1915128, lng: -2.0561216 },
      map: map,
    });
  }, []);

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>Visit us today at Irrihortz clinic.Get in Touch with our team of dental professionals today to schedule an appointment, ask a question, or simply learn more about our services. </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/irrihortz_klinika/" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
            <a href="mailto:irrihortz@gmail.com" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="https://wa.me/+34650017569" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
          
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/doctors">Crew</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/faqss">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 NATHANIEL OBAFEMI &copy; All Rights Reserved</small>
      </div>
      <div id="map" style={{ width: '100%', height: '300px' }}></div>
    </footer>
  );
};

export default Footer;
