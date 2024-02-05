import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_6g3sn5z', 'template_wwun0ba', form.current, 'x0gtem62BRdC3uaEW')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <ul>
                        <li>
                          <a href="mailto:matiascinera.inquires@gmail.com">matiascinera.inquires@gmail.com</a>
                        </li>
                        <li>
                          <a href="mailto:cinera@usf.edu">cinera@usf.edu</a>
                        </li>
                    </ul>
          <p>
            
            I am seeking entry-level, full-time software engineering positions. 
            However, if you have any other requests or
            questions, don't hesitate to contact me using below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>


        <div className="image-wrap">
            {/* <img></img> */}
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Contact