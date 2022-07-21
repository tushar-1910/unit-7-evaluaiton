import uniqid from 'uniqid'
import Typewriter from 'typewriter-effect';
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' style={{paddingTop:"138px"}}>
      <h2 className='section__title'>
      <Typewriter
                    options={{
                        loop: true,
                        autoStart: true,
                        strings: "PROJECTS",
                    }}
                />
      </h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
