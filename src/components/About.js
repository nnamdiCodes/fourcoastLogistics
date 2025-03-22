import React from 'react'
import aboutMotorCycle from '../images/aboutImg3.JPG' 
import motorCycleImg from '../images/motorCycle.JPG'
import aboutGoods from '../images/goods2transport.JPG'
import { FaWhatsapp } from "react-icons/fa" 
import { BsTelephone } from 'react-icons/bs'
import { ImHappy } from 'react-icons/im'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { FaRegThumbsUp } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { TfiCup } from 'react-icons/tfi'
import { GoGoal } from 'react-icons/go'
import { FaMobileRetro } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BsBoxes } from 'react-icons/bs'
import { TfiDropbox } from 'react-icons/tfi'
import testifier1Img from '../images/anihVN.PNG'

const About = () => {
  return (
    <main className="About">
      <section className="About-hero">
        <figure>
          <img src={motorCycleImg} alt="motorCycleImg" />
        </figure>
        <div className="overlay"></div>
        <h2 className='About-h2'>
          ABOUT US
        </h2>
      </section>
      
      <section className='welcomeSection'>
        <article className="About-fourcoast">
          <h3>Welcome to Fourcoast</h3>
          <p>
            At Fourcoast logistics, we are commited to delivering seamless, reliable and efficient logistics solution tailored to your needs. Whether it's transporation, relocation, laundary or cleaning serives our team handle it with the highest level of professionalism and care. With a focus on excellense, innovation and customer satisfaction, we provide cost effective and secure logistics service to business and individual. Let Fourcoast logistics be your partner in successs because when it comes to logistics, we move with precision and purpose. Get in touch today and experience the difference.
          </p>
        </article>
        <figure>
          <img src={aboutMotorCycle} alt="aboutMotorCycle" />
        </figure>
      </section>

      <section className='recordSection'>
        <div className="a1OuterDiv">
          <figure>
            <FaRegThumbsUp />
          </figure>
          <p>250+</p>
          <p>Successful deliveries</p>
        </div>

        <div className="a1OuterDiv">
          <figure>
            <IoSpeedometerOutline />
          </figure>
          <p>75+</p>
          <p>Kilometers covered</p>
        </div>

        <div className="a1OuterDiv">
          <figure>
            <ImHappy />
          </figure>
          <p>250+</p>
          <p>Happy customers</p>
        </div>
      </section>

      <section className='VMGstatement'>
        <figure>
          <img src={aboutGoods} alt="aboutGoodsImg" />
        </figure>

        <article>
        <div className="a2OuterDiv">
          <figure>
            <FaRankingStar />
          </figure>
          <div className='a2OuterDiv2'>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and innovative logistics provider, delivering seamless, efficient and customer-centric solutions across borders while setting the standard for excellence in the industry.
            </p>
          </div>
        </div>

        <div className="a2OuterDiv">
          <figure>
            <TfiCup />
          </figure>
          <div className='a2OuterDiv2'>
            <h3>Our Mission</h3>
            <p>
              At Fourcoast Logistics, our mission is to provide reliable, cost-effective and timely logistics solutions including relocation, laundary and cleaning serives. We are commited to leveraging technology, innovation and a customer-first approach to ensure safe, secure and hassle-free movement of goods and services. We aim to build lasting relationship and drive success for our client. 
            </p>
          </div>
        </div>

        <div className="a2OuterDiv">
          <figure>
            <GoGoal />
          </figure>
          <div className='a2OuterDiv2'>
            <h3>Our Goal</h3>
            <ul>
              <li>
                To enhance delivery efficiency.
              </li>
              <li>
                To prioritize customer satisfaction.
              </li>
              <li>
                Expand service reach.
              </li>
            </ul>
          </div>
        </div>
        </article>
      </section>

      <section className='movementStrategy'>
        <h2>Moving made easy</h2>

        <article>
          <div className='a3OuterDiv'>
            <figure>
              <FaMobileRetro />
            </figure>
            <p>Book our service</p>
          </div>

          <figure>
            <FaArrowRightLong />
          </figure>

          <div className='a3OuterDiv'>
            <figure>
              <BsBoxes />
            </figure>
            <p>We pack your goods</p>
          </div>

          <figure>
            <FaArrowRightLong />
          </figure>

          <div className='a3OuterDiv'>
            <figure>
              <MdOutlineDeliveryDining />
            </figure>
            <p>We move you goods</p>
          </div>

          <figure>
            <FaArrowRightLong />
          </figure>

          <div className='a3OuterDiv'>
            <figure>
              <TfiDropbox />
            </figure>
            <p>We unpack your goods</p>
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

      <section className="customerService lastSection">
        <article className='customerService-article'>
          <h3>Our customer service is available 24/7</h3>
          <div className="customerServiceDiv">
            <FaWhatsapp className="FaWhatsappImg"/>
            <BsTelephone />
            <p>+234-8101060286</p>
          </div>
        </article>
      </section>
    </main>
  )

}

export default About