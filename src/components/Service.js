import React from 'react'
/* import HeroBikeImg2 from '../images/bikeman2.JPG' */
import MotorCycle from '../images/aboutImg3.JPG'
import motorCycleImg from '../images/motorCycle.JPG'
/* import HeroCarImg from '../images/hercarImg.JPG' */
import serviceImg from '../images/serviceImg.JPG'
import { MdOutlineDeliveryDining } from 'react-icons/md'
/* import { MdEmojiTransportation } from 'react-icons/md' */
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { FaHome, FaMotorcycle } from 'react-icons/fa'
import { GiClothesline, GiBeachBucket } from 'react-icons/gi'

const Service = () => {
  return (
    <main className="Service">
      <section className="Service-hero">
        <figure>
          <img src={motorCycleImg} alt="motorCycleImg" />
        </figure>
        <div className="overlay"></div>
        <h2 className='Service-h2'>
          SERVICES
        </h2>
      </section>
      
      <section className='secondSection'>
        <article>
          <h3>Looking for the best?</h3>
          <p>
            Search no more. At Fourcoast Logistics we take pride in delivering excellent service every time. Our commitment to reliability, efficiency and customer satisfaction drives everything we do. With a focus on excellence, we go extra mile to meet and exceed expectations because your success is our priority.
          </p>
        </article>

        <figure>
          <img src={serviceImg} alt="" />
        </figure>
      </section>

      <section className="thirdSection">
        <h3>We offer diverse services</h3>
        <article className="serviceArticle2">
          <div className="seOuterDiv">
            <figure>
              <MdOutlineDeliveryDining />
            </figure>
            <h3>Transportation services</h3>
            <p>
              We provide reliable and efficient transportation solutions to move your goods seamlessly across local and internaltional destinations. We ensure timely and secure delivery to meet your buisness needs.
            </p>
          </div>

          <div className="seOuterDiv">
            <figure>
              <FaHome />
            </figure>
            <h3>Household Moving</h3>
            <p>
              Moving to a new home? We offer professional household moving services, handling packing, loading, transportation and unloading with utmost care. Our team ensures your belonging arrive safely and securely at your new home.
            </p>
          </div>

          <div className="seOuterDiv">
            <figure>
              <PiBuildingOfficeBold />
            </figure>
            <h3>Office Relocation</h3>
            <p>
              Minimize downtime with our effiecient office relocation service. We specialize in moving office equipment, furniture and IT infrastructure, ensuring a smooth transition to your new workspace with minimal disruption to your buisness operation.
            </p>
          </div>

          <div className="seOuterDiv">
            <figure>
              <GiClothesline />
            </figure>
            <h3>Laundry Service</h3>
            <p>
              We offer professional laundry services with convinient pickup and delivery options. Whether for individuals or buisnesses, our service ensure your clothes, linens and fabrics are cleaned, pressed and delivered fresh to your doorstep, saving you time and effort. 
            </p>
          </div>

          <div className="seOuterDiv">
            <figure>
              <GiBeachBucket />
            </figure>
            <h3>Cleaning Service</h3>
            <p>
              We provide professional cleaning services tailored for homes, offices, and commeercial spaces. Our team ensures a spotless and hygienic environment with deep cleaning, routine maintainance and specialized cleaning solutions. Whether you need one-time or recurring services, we deliver quality and reliability.
            </p>
          </div>

          <div className="seOuterDiv">
            <figure>
              <FaMotorcycle />
            </figure>
            <h3>Specialized Logistics Services</h3>
            <p>
              We offer industry-specific logistics solutions tailored to meet the unique requirements of different sectors, including healthcare, e-commerse, harzardous materials and heavy equipment transport. No matter the complexity, we have the expertise to handle it.
            </p>
          </div>
        </article>
      </section>

      <section className='fourthSection'>
        <figure>
          <img src={MotorCycle} alt="MotorCycleImg" />
        </figure>
        <div className="overlay"></div>
        <div className='fourthSection-writeUp'>
          <h3>Moving & Hiring Services</h3>
          <p>
            Our Moving and Hiring Services ensure a smooth and hasle-free experience, whether you're relocating your home, office or business. We provide reliable transportation, skilled handling and flexible hiring options to meet your needs--making every move efficient and stress free.
          </p>
        </div>
      </section>

      <section className='fifthSection'>
        <h3>Let us do all work</h3>
        <p>
          "Sit back and relax-let us do all the work! From logistics and deliveries to moving and cleaning services, we handle everything with efficiency and care, so you don't have to lift a finger"
        </p>
        <h3>Call us now +234-8101060286</h3>
      </section>
    </main>
  )
}

export default Service