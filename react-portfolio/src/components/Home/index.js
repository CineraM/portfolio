import { Link } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    

    return (
        <>
            <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* <img src={LogoS} alt="developer" /> */}
                    <span > </span>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={"Matias Cinera".split("")}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={"Software Developer".split("")}
                        idx={28}
                    />
                    <br />
                </h1>
                

                <h2> front end / back end / ... </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>

            <Logo></Logo>
            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default Home