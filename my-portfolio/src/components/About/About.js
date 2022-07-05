import Typewriter from 'typewriter-effect';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { role, description} = about

  return (
    <section className='about_ center' id='about'>

      {role && <h2 className='about__role'>
      <Typewriter
                    options={{
                        loop: true,
                        autoStart: true,
                        strings: "ABOUT ME",
                    }}
                /></h2>}
      <p className='about__desc'>{description && description}</p>


    </section>
  )
}

export default About
