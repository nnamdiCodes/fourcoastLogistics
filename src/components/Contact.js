import React from 'react'

import motorCycleImg from '../images/motorCycle.JPG'

const Contact = ({
  handleChange, name, email, phone, city, subject, message, handleSubmit, errors, nameRef, emailRef, phoneRef, messageRef, cityRef, subjectRef
}) => {
  return (
    <main className="Contact">
      <section className="Contact-hero">
        <figure>
          <img src={motorCycleImg} alt="motorCycleImg" />
        </figure>
        <div className="overlay"></div>
        <h2 className='Contact-h2'>
          CONTACT US
        </h2>
      </section>
      
      <section className='secondSection'>
        <div className="sOuterDiv">
          <h3>Office</h3>
          <p>
            Sule Iyaji, New Kutunkwu, Gwagwalada, Abuja.
          </p>
        </div>

        <div className="sOuterDiv">
          <h3>Call Us</h3>
          <p>
            +234-8101060286
          </p>
        </div>

        <div className="sOuterDiv">
          <h3>Mail Us</h3>
          <p>
            fourcoastlogistics@gmail.com
          </p>
        </div>

        <div className="sOuterDiv">
          <h3>Office Hours</h3>
          <p>
            Mon-Fri. 08:00-06:00 
            <span className='block'>Sat. 08:00-04:00</span>
          </p>
        </div>
      </section>

      <section className='thirdSection'>
        <h3>Write your message</h3>
        <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="contactForm">
          <input type="hidden" name="form-name" value="contact" className="hidden"/>

          <div>
              <label htmlFor="name" className='offscreen'>Name *</label>
              <input type="text" 
                  id='name' 
                  placeholder='Name*'
                  name='name' 
                  value={name} 
                  onChange={handleChange}
                  ref={nameRef} 
                  className= {errors.name ? 'input-error' : 'input-normal'}
              />
              {errors.name && <p className='errMsg'>{errors.name}</p>}
          </div>
  
          <div>
              <label htmlFor="email" className='offscreen'>Email *</label>
              <input type="email" 
                  id='email' 
                  placeholder='Email*'
                  name='email' 
                  value={email} 
                  onChange={handleChange}
                  ref={emailRef} 
                  className= {errors.email ? 'input-error' : 'input-normal'}
              />
              {errors.email && <p className='errMsg'>{errors.email}</p>}
          </div>

          <div>
              <label htmlFor="phone" className='offscreen'>Phone *</label>
              <input type="phone" 
                  id='phone' 
                  placeholder='phone*'
                  name='phone' 
                  value={phone} 
                  onChange={handleChange}
                  ref={phoneRef} 
                  className= {errors.phone ? 'input-error' : 'input-normal'}
              />
              {errors.phone && <p className='errMsg'>{errors.phone}</p>}
          </div>

          <div>
              <label htmlFor="city" className='offscreen'>City *</label>
              <input 
                  type="text" 
                  id='city' 
                  placeholder='city*'
                  name='city' 
                  value={city} 
                  onChange={handleChange}
                  ref={cityRef} 
                  className= {errors.city ? 'input-error' : 'input-normal'}
              />
              {errors.city && <p className='errMsg'>{errors.city}</p>}
          </div>

          <div className='subject'>
              <label htmlFor="subject" className='offscreen'>subject *</label>
              <input type="text" 
                  id='subject' 
                  placeholder='subject*'
                  name='subject' 
                  value={subject} 
                  onChange={handleChange}
                  ref={subjectRef} 
                  className= {errors.subject ? 'input-error' : 'input-normal'}
              />
              {errors.subject && <p className='errMsg'>{errors.subject}</p>}
          </div>
  
          <div className='message'>
              <label htmlFor="message" className='offscreen'>Message *</label>
              <textarea 
                  id="message" 
                  placeholder='Message*'
                  name="message" 
                  value={message}
                  onChange={handleChange}
                  ref={messageRef} 
                  className= {errors.message ? 'input-error' : 'input-normal'}
              />
              {errors.message && <p className='errMsg'>{errors.message}</p>}
          </div>
  
          <button type='submit' className='contactBtn'>SEND MESSAGE</button>
        </form>
      </section>
    </main>
  )
}

export default Contact