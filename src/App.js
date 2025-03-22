import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import { MdEmojiTransportation } from 'react-icons/md'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { FaHome, FaMotorcycle } from 'react-icons/fa'
import { GiClothesline, GiBeachBucket } from 'react-icons/gi'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')) || window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [isActive, setIsActive] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const [itemsToShow, setItemsToShow] = useState(1)
  const [serviceIndex, setServiceIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)
  const cityRef = useRef(null)
  const subjectRef = useRef(null)

  useEffect(() => {
    document.body.className = isDarkMode ? 'darkMode' : 'lightMode';
    
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode)); 
  }, [isDarkMode]);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 992) {
        setItemsToShow(4)
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3)
      } else if (window.innerWidth >= 576) {
        setItemsToShow(2)
      } else {
        setItemsToShow(1)
      }
    }

    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)

    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest("nav") && !e.target.closest(".header__menuBtn")) {
        setIsActive(false); 
      }
    };

    if (isActive) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isActive]);

  const [service, setService] = useState([
      {
        image: <MdEmojiTransportation />,
        heading: "Transportation services",
        detail: "We provide reliable and efficient transportation solutions to move your goods seamlessly across local and internaltional destinations. We ensure timely and secure delivery to meet your business needs."
      },
      {
        image: <FaHome />,
        heading: "Household Moving",
        detail: "Moving to a new home? We offer professional household moving services, handling packing, loading, transportation and unloading with utmost care. Our team ensures your belonging arrive safely and securely at your new home."
      },
      {
        image: <PiBuildingOfficeBold />,
        heading: "Office Relocation",
        detail: "Minimize downtime with our effiecient office relocation service. We specialize in moving office equipment, furniture and IT infrastructure, ensuring a smooth transition to your new workspace with minimal disruption to your business operation."
      },
      {
        image: <GiClothesline />,
        heading: "Laundry Service",
        detail: "We offer professional laundry services with convinient pickup and delivery options. Whether for individuals or businesses, our service ensure your clothes, linens and fabrics are cleaned, pressed and delivered fresh to your doorstep, saving you time and effort."
      },
      {
        image: <GiBeachBucket />,
        heading: "Cleaning Service",
        detail: "We provide professional cleaning services tailored for homes, offices, and commeercial spaces. Our team ensures a spotless and hygienic environment with deep cleaning, routine maintainance and specialized cleaning solutions. Whether you need one-time or recurring services, we deliver quality and reliability."
      },
      {
        image: <FaMotorcycle />,
        heading: "Specialized Logistics",
        detail: "We offer industry-specific logistics solutions tailored to meet the unique requirements of different sectors, including healthcare, e-commerse, harzardous materials and heavy equipment transport. No matter the complexity, we have the expertise to handle it."
      }
    ])

  const [faqs, setFaqs] = useState([
    {
      question: "Where are you located?",
      answer: "Our head office is located at sule iyaji street, new kutunkwu, gwagwalada, Abuja."
    }, 
    {
      question: "How late in the day can i call for a same day delivery?",
      answer: "Our cutoff time for same-day delivery requests depends on your location and the type of package. Generally, orders must be placed before 12:00 PM to ensure same-day delivery. For urgent deliveries beyond this time, please contact our team, and we'll do our best to accomodate your request."
    },
    {
      question: "What are your working hours?",
      answer: "Our standard working hours are Monday to Saturday, 8:00 AM - 6:00 PM. However, we also offer emegency and after-hours services for urgent deliveries. Please reach out to us for special arrangements."
    },
    {
      question: "How do i schedule a pickup for delivery?",
      answer: "You can schedule a pickup through our website, by calling our customer service. Simply provide the pickup address, package details, and preffered delivery time."
    },
    {
      question: "How much does shipping cost?",
      answer: "Shipping costs depend on factors such as package size, weight, delivery distance and urgency. You can get an instant quote through our website or by contacting our support team."
    },
    {
      question: "Can you handle bulk shipments for businesses?",
      answer: "Absolutely! We provide bulk and large-scale logistics solutions for businesses, including freight forwarding, supply chain management, and distribution services."
    }, 
    {
      question: "What happens if my package is delayed?",
      answer: "While we strive for on-time delivery, delays may occasionaly occur due to unforeseen circumstances like weather or hold-up. In such cases, we will keep you informed and work to resolve the issue as quickly as possible."
    },
    {
      question: "What areas do you provide delivery service to?",
      answer: "We offer local, national, and internaltional deliveryservice. Whether you need shipments within the city or across bothers, we have the right logistics solutions to meet your needs."
    },
    {
      question: "What types of goods do you transport?",
      answer: "We transport a wide range of goods including general cargo, perishable items, fragile goods, heavy equipment and hazardous materials. If you have specific requirements, contact us for customized solutions."
    },
    {
      question: "Other Questions / Queries",
      answer: "Please if you do have any other question regarding our services or our mode of operation, Do well to contact us. Thank you"
    }
  ])

  const nextService = () => {
    setServiceIndex((prev) => prev + 1 >= service.length ? 0 : prev + 1)
  }

  const prevService = () => {
    setServiceIndex((prev) => prev - 1 < 0 ? service.length - 1 : prev - 1)
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {}
  
    if (!formData.name) {
      newErrors.name = 'This field is required'
       nameRef.current.focus()
        isValid = false
    }
  
    if (!formData.email) {
      newErrors.email = 'This field is required'
      if (isValid) emailRef.current.focus()
        isValid = false
    }
  
    if (!formData.phone) {
      newErrors.phone = 'This field is required'
      if (isValid) phoneRef.current.focus()
        isValid = false
    }

    if (!formData.city) {
      newErrors.city = 'This field is required'
      if (isValid) cityRef.current.focus()
        isValid = false
    }

    if (!formData.subject) {
      newErrors.subject = 'This field is required'
      if (isValid) subjectRef.current.focus()
        isValid = false
    }
  
    if (!formData.message) {
      newErrors.message = 'This field is required'
      if (isValid) messageRef.current.focus()
        isValid = false
    }
  
    setErrors(newErrors)
    return isValid
  }
  
  const showToast = (messageToast) => {
    alert(messageToast)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      showToast('Message submitted successfully')
    }
  };
  
  const handleChange = (event) => {
  const {name, type, checked, value} = event.target
  setFormData(prevContact => {
    return (
      {...prevContact, [name]: type === "checkbox" ? checked : value}
    )
  })
  }

  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleMenu = () => {
    setIsActive(prevMenu => !prevMenu)
  }

  return (
    <Routes>
      <Route path='/' element={ <Layout 
                                  isActive={isActive}
                                  toggleMenu={toggleMenu}
                                  handleClick={handleClick}
                                  isDarkMode={isDarkMode}
                                /> }>
        <Route index element={ <Home  
                                faqs={faqs}
                                setFaqs={setFaqs}
                                toggleFaq={toggleFaq}
                                openIndex={openIndex}
                                service={service}
                                setService={setService}
                                nextService={nextService}
                                prevService={prevService}
                                itemsToShow={itemsToShow}
                                serviceIndex={serviceIndex}
                              />} />
        <Route path='about' element={ <About /> }/>
        <Route path='service' element={ <Service /> } />
        <Route path='contact' element={ <Contact 
                                          handleChange={handleChange}
                                          name={formData.name}
                                          email={formData.email}
                                          phone={formData.phone}
                                          city={formData.city}
                                          subject={formData.subject}
                                          message={formData.message}
                                          handleSubmit={handleSubmit}
                                          errors={errors}
                                          nameRef={nameRef}
                                          emailRef={emailRef}
                                          phoneRef={phoneRef}
                                          cityRef={cityRef}
                                          subjectRef={subjectRef}
                                          messageRef={messageRef}
                                        /> }/>
      </Route>
    </Routes>
  );
}

export default App;