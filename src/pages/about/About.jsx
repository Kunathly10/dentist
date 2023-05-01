import Header from '../../components/Header'
import HeaderImage from '../../images/main_headd.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
    <>
    <Header title="" image={HeaderImage}>
    Welcome to Irrihortz clinic. Our address is at Ernio Bidea 12A, Zizurkil 20159. Book an Appointment with us bhy calling 943-32-66-20. Our Email is irrihortz@gmail.com
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
          <p>
          Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Our vision at Irrihortz is to be the leading dental clinic in our region, known for our commitment to excellence, personalized care, and innovative treatment options. We strive to make every visit to our clinic a positive experience for our patients by offering a wide range of dental services, using the latest technology, and maintaining the highest standards of hygiene and safety.
          </p>
          <p>
          
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Our mission is to help our patients achieve and maintain optimal oral health and a beautiful smile. We believe in treating the whole person, not just the teeth, and we take a comprehensive approach to dental care that addresses each patient's unique needs and concerns. Our team of experienced and skilled dental professionals is dedicated to providing our patients with the best possible care, using the most advanced techniques and technologies available.
          </p>
          <p>
          
          </p>
          <p>
          
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About