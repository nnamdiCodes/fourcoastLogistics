import { Link } from "react-router-dom"
import Faq from '../components/Faq'
import motorCycleImg from '../images/motorCycle.JPG'
import deliveryImg from '../images/homeImg.JPG'
import { FaWhatsapp } from "react-icons/fa" 
import { BsTelephone } from 'react-icons/bs'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { AiFillThunderbolt, AiOutlineSafety } from "react-icons/ai"
import { GiTakeMyMoney } from "react-icons/gi"
import testifier1Img from '../images/anihVN.PNG'

const Home = ({ 
  faqs, toggleFaq, openIndex, service, prevService, nextService, itemsToShow, serviceIndex 
}) => {
  return (
    <main className="Home">
      <section className="hero">
        <figure className='Home-heroImg'>
          <img src={motorCycleImg} alt='HeroImg'/>
        </figure>
        <div className="homeOverlay"></div>
        <div className='hero-writeup'>
          <h1>Need an urgent dispatch or a well-planned <span className='green'>delivery?</span></h1>
          <p>
            We've got you covered! At Fourcoast Logistics, we specialize in seamless relocation and logistics services, ensuring a stress-free transition for individuals and businesses. From expert packing and secure transportation to reliable storage and efficient setup, we handle every detail with precision and care.
          </p>
          <div>
            <Link to={"contact"} >
              <button className='nowrap'>
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="service">
        <h2>Our Services</h2>
        <article className="serviceDivs">
          <div className="sOuterDiv">
            {
              service.slice(serviceIndex, serviceIndex + itemsToShow).map((item, index) => (
                <div key={index} className="sInnerDiv">
                  <figure>{item.image}</figure>
                  <h3>{item.heading}</h3>
                  <p>{item.detail}</p>
                </div>
                ))
              }
            </div>
            <div className="navigation">
              <button 
                onClick={prevService}
                className="arrowBackward"
                disabled={serviceIndex === 0}
              >
                <FaRegArrowAltCircleLeft className="arrowCircle"/>
              </button>
              <span className="counter">
                {String(serviceIndex + itemsToShow).padStart(2, '0')} of {service.length}
              </span>
              <button 
                onClick={nextService}
                className="arrowForward"
                disabled={serviceIndex + itemsToShow >= service.length}
              >
                <FaRegArrowAltCircleRight className="arrowCircle"/>
              </button>
            </div>
        </article>
      </section>

      <section className="chooseUsSection">
        <h2>Why choose us</h2>
        <div className="chooseUsSectionDiv">
          <figure>
            <img src={deliveryImg} alt="deliveryImg" />
          </figure>

          <article className="chooseUsSectionDiv-article">
            <div className="wOuterDiv">
              <figure>
                <AiFillThunderbolt />
              </figure>
              <div className="wInnerDiv">
                <h3>Right on time</h3>
                <p>
                  Our efficient processes, real-time tracking and well planned transportation networks ensure that your goods, parcels and services arrive exactly when needed, minimizing delays and keeping your operations running smoothly.
                </p>
              </div>
            </div>

            <div className="wOuterDiv">
              <figure>
                <GiTakeMyMoney />
              </figure>
              <div className="wInnerDiv">
                <h3>Cost saving</h3>
                <p>
                  We optimize logistics solutions to reduce costs without compromizing quality. Through strategic planning, bulk shipping, route optimization and technology-driven efficiency, we help buisnesses and individuals save money while ensuring seamless logistics operation.
                </p>
              </div>
            </div>

            <div className="wOuterDiv">
              <figure>
                <AiOutlineSafety />
              </figure>
              <div className="wInnerDiv">
                <h3>Safe & Secure</h3>
                <p>
                  Your shipments are handled with the highest level of care and security. From professional packing and secure storage to real-time tracking and reliable transportation, we ensure that your goods remain protected throughout the entire journey.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="customerService">
        <article className='customerService-article'>
          <h3>Our customer service is available 24/7</h3>
          <div className="customerServiceDiv">
            <FaWhatsapp className="FaWhatsappImg"/>
            <BsTelephone />
            <p>+234-8101060286</p>
          </div>
        </article>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <article>
          <div className='testimonyDiv'>
            <p>
              "I have been using Fourcoast Logistics for most of my deliveries and they have never disappointed. Their clear attentions to details saves me alot of stress and i highly recommend them to anyone looking for logistics service" <span className='testifierName'>--Anih Victor</span>
            </p>
            <figure>
              <img src={testifier1Img} alt="testifier1Img" />
            </figure>
          </div>

          <div className='testimonyDiv'>
            <p>
              "Their customer service is outstanding! I had a few concerns about my shipment and their support team responded quickly with real-time updates. It's rare to find such a dedicated and professional logistic company!" <span className='testifierName'>--Anih Victor</span>
            </p>
            <figure>
              <img src={testifier1Img} alt="testifier1Img" />
            </figure>
          </div>

          <div className='testimonyDiv'>
            <p>
              "Their laundry service is a lifesaver! My clothes always come back fresh, neatly folded and smelling great. The pickup and delivery service makes it so convinient" <span className='testifierName'>--Anih Victor</span>
            </p>
            <figure>
              <img src={testifier1Img} alt="testifier1Img" />
            </figure>
          </div>
        </article>
      </section>

      <section className="faqs">
      <h2>FAQ'S</h2>
        <Faq 
          faqs={faqs}
          openIndex={openIndex}
          toggleFaq={toggleFaq}
        />
      </section>
    </main>
  )
}

export default Home