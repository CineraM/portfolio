import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'

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
                            strArray={"About me".split("")}
                            idx={15}
                        />
                    </h1>

                    <p>Solutions-oriented software engineer with a focus on building robust, scalable platforms. 
                        Experienced in full-stack development and automation, with a strong foundation in computer science.
                    </p>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Technical Skills".split("")}
                            idx={15}
                        />
                    </h1>
                    <ul>
                        <li>
                            <strong>Programming Languages</strong>
                            <p>C++, Python, C#, JavaScript, C, Java, SQL, HTML, CSS</p>
                        </li>
                        <li>
                            <strong>Frameworks</strong>
                            <p>Docker, REACT, Mongoose, Matplotlib, PyMongo, Keras, NumPy, OpenCV, Bootstrap, Flask, FastAPI, MySQL, MongoDB
                            </p>
                        </li>
                        <li>
                            <strong>Technologies/Environment</strong>
                            <p>GitHub, Wrike, Jira, VS-Code, MS Visual Studio, PyCharm, IntelliJ, Java-processing, Webots, Jupyter
                            </p>
                        </li>
                    </ul>



                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Education".split("")}
                            idx={15}
                        />
                    </h1>

                    <ul>
                        <li>
                            <p> <strong className='p-sub'> Master of Science in Computer Science </strong> - University of South Florida - Cumulative GPA: 3.81 / 4.0 (Aug 2022 – Dec 2023)</p>
                        </li>
                        <li>
                            <p> <strong className='p-sub'> Bachelor of Science in Computer Science </strong>  - University of South Florida - Cumulative GPA: 3.79 / 4.0 (Aug 2018 – Aug 2022)</p>
                        </li>
                    </ul>

                    <h1>
                    <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Work Experience".split("")}
                            idx={15}
                        />
                    </h1>
                    <ul>
                        <li>
                            <strong>EDA Software Engineer Intern, Qorvo, Inc., FL - (May 2024 – Present)</strong>

                            <p> Proficient in FastAPI and Docker, Built scalable APIs using FastAPI and containerized them with Docker for efficient deployment.
                                Experienced in implementing python application with multiple libraries and third parties APIs.</p>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <strong>EDA Software Engineer Intern, Qorvo, Inc., FL - (May 2023 – Dec 2023)</strong>
                            <p>Developed an Analytics system for monitoring metadata of internal applications. This endeavor involved the
                            implementation of a RESTful architecture in conjunction with a non-relational database. Revamped a substantial C++ 
                            application by conducting a thorough refactoring of its codebase. This resulted in improved 
                            structural organization and heightened operational efficiency.</p>
                        </li>
                    </ul>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faDatabase} color="#F06529"/>
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faPython} color="#ffd343"/>
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faGithub} color="#6e5494"/>
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faNodeJs} color="#EFD81D"/>
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faCode} color="#EC4D28"/>
                        </div>
                    </div> 
                </div>
            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default About