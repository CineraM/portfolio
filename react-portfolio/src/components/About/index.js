import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 2000);
    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    

    return (

        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>Solutions-focused software engineering professional dedicated to delivering robust, scalable platforms that optimize
                    support for core data applications, services, and systems. Enthusiastic individual with graduate-level training in computer
                    science and experience in developing full stack applications & automation tasks.</p>
                    <p>Solutions-focused software engineering professional dedicated to delivering robust, scalable platforms that optimize
                    support for core data applications, services, and systems. Enthusiastic individual with graduate-level training in computer
                    science and experience in developing full stack applications & automation tasks.</p>
                    <p>Solutions-focused software engineering professional dedicated to delivering robust, scalable platforms that optimize
                    support for core data applications, services, and systems. Enthusiastic individual with graduate-level training in computer
                    science and experience in developing full stack applications & automation tasks.</p>
                    
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faPython} color="#28A4D9"/>
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faCss3} color="#5ED4F4"/>
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faNodeJs} color="#EFD81D"/>
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faNodeJs} color="#EC4D28"/>
                        </div>
                    </div> 
                </div>
            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default About