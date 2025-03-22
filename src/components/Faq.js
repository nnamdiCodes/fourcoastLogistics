import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Faq = ({faqs, openIndex, toggleFaq}) => {
  return (
    <article className="faq-container">
        {
            faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                        {faq.question}
                        <span className="icon">
                            {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown /> }
                        </span>
                    </button>
                    <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                        {faq.answer}
                    </div>
                </div>
            ))
        }
    </article>
  )
}

export default Faq